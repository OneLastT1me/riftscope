import "server-only";

import {
  RIOT_REGIONAL_URLS,
  type RegionalRoute,
} from "./config";
import { GameState } from "@/types";

type Match = {
    info: {
        gameDuration: number;
        participants: GameState[]
        gameStartTimestamp: string
    };
};

export async function getPlayerStats(region: RegionalRoute = "EUROPE", puuid: string) {
    const apiKey  = process.env.RIOT_API_KEY

    const params = new URLSearchParams({
        startTime: String(Math.floor(
                            new Date("2026-07-29T00:00:00Z").getTime() / 1000
                        ),),
        endTime: String(Math.floor(Date.now() / 1000)),
        queue: "420",
        start: "0",
        count: "100",
    });

    if(!apiKey){
        throw new Error("RIOT_API_KEY is not configured")
    }

    //get all matches for last split in season
    const matchesResponse = await fetch(`${RIOT_REGIONAL_URLS[region]}/lol/match/v5/matches/by-puuid/${puuid}/ids?${params}`,
        {
            headers: {
                "X-Riot-Token": apiKey,
            },
            next: {
                revalidate: 300
            }
        })
    
    if(!matchesResponse.ok){
        throw new Error(
            `Riot API error: ${matchesResponse.status} ${matchesResponse.statusText}`
        )
    }

    const matchIds: string[] = await matchesResponse.json();
 

    //get state in all matches only player who we have puuid
    const matches: Match[] = await Promise.all(
        matchIds.map(async (matchId) => {
            const response = await fetch(`${RIOT_REGIONAL_URLS[region]}/lol/match/v5/matches/${matchId}`, 
                {
                    headers: {
                        "X-Riot-Token": apiKey,
                    },
                    next: {
                        revalidate: 300
                    }
                })
                if (!response.ok) {
                    throw new Error(`Failed to fetch match ${matchId}: ${response.status}`);
                }
  
            return response.json();
        })  
    )
    
   
    const playerState = matches.map((match) => {
        
        const participant = match.info.participants.find(
            (player) => player.puuid === puuid,
        )
        
        if (!participant) return undefined;
            
        return {
            ...participant,
            gameDuration: match.info.gameDuration,
            gameStartTimestamp: match.info.gameStartTimestamp,
        }
            }).filter(participants => participants !== undefined)
    
    return playerState 
}