import  "server-only"

import {
  RIOT_REGIONAL_URLS,
  type RegionalRoute,
} from "./config";

export default async function getPlayerAccount(region: RegionalRoute = "EUROPE", puuid: string | string[]) {
    const puuids = Array.isArray(puuid) ? puuid : [puuid];
    const apiKey = process.env.RIOT_API_KEY

    if(!apiKey){
        throw new Error("RIOT_API_KEY is not configured")
    }
    
    const response = await Promise.all(
        puuids.map(puuid =>
            fetch(
                `${RIOT_REGIONAL_URLS[region]}/riot/account/v1/accounts/by-puuid/${puuid}`
        ,
        {headers: {
             "X-Riot-Token": apiKey,
        },
        next: {
            revalidate: 300
        }
    })))
    
    const failedResponse = response.find(res => !res.ok)
    if (failedResponse) {
        throw new Error(
            `Riot API error: ${failedResponse.status} ${failedResponse.statusText}`
        )
    }

    return Promise.all(response.map(res => res.json()))
}