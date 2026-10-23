import "server-only";

import {
  RIOT_REGIONAL_URLS,
  type RegionalRoute,
} from "./config";

type MatchParticipant = {
  puuid: string;
  win: boolean;
  kills: number;
  deaths: number;
  assists: number;
  totalMinionsKilled: number;
  neutralMinionsKilled: number;
  gameDuration?: number;
};

type Match = {
  info: {
    gameDuration: number;
    participants: MatchParticipant[];
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
    
    if(matchIds.length === 0){
        return{
            matchesPlayed: 0,
            winRate: 0,
            kda: 0,
            averageCs: 0,
            csPerMinute: 0,
        }
    }

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

    const playerState = matches.map((match) => match.info.participants.find((participants) => participants.puuid === puuid)).filter(participants=> participants !== undefined)

    return playerState
}