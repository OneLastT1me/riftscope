import  "server-only"

import {
  RIOT_REGIONAL_URLS,
  type RegionalRoute,
} from "./config";

export default async function getPlayerAccount(region: RegionalRoute = "EUROPE", puuid: string) {
    const apiKey = process.env.RIOT_API_KEY

    if(!apiKey){
        throw new Error("RIOT_API_KEY is not configured")
    }
    
    const response = await fetch(
        `${RIOT_REGIONAL_URLS[region]}/riot/account/v1/accounts/by-puuid/${puuid}`
        ,
        {headers: {
             "X-Riot-Token": apiKey,
        },
        next: {
            revalidate: 300
        }
    })
    
    if(!response.ok){
        throw new Error(
            `Riot API error: ${response.status} ${response.statusText}`
        )
    }

    return response.json()
}