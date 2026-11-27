import "server-only";

import { RIOT_PLATFORM_URLS } from "./config";
import type { Platform } from "./config";

export async function getActiveGame(platform: Platform = "EUW1", puuid:  string[]) {
    const apiKey = process.env.RIOT_API_KEY
    const ids = Array.isArray(puuid) ? puuid : [puuid]

    if (!apiKey) {
        throw new Error("RIOT_API_KEY is not configured");
    }

    const responses = await Promise.all(
        ids.map(async (puuid) => {const response = await fetch(`${RIOT_PLATFORM_URLS[platform]}/lol/spectator/v5/active-games/by-summoner/${puuid}`,
            {
            headers: {
                "X-Riot-Token": apiKey,
            },
            next: {
                revalidate: 30,
            }}
        );

        if (response.status === 404) {
            return null;
        }

        if (response.status === 429) {
            const retryAfter = response.headers.get("Retry-After");

            throw new Error(
                `Riot rate limit exceeded. Retry after ${retryAfter} seconds`
            );
        }   

        if (!response.ok) {
            throw new Error(
            `Riot API error for ${puuid}: ${response.status}`
            );
        }

        return response.json();
    }));

    return responses.filter((game) => game !== null);
}