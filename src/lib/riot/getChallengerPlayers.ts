
import "server-only";

import {
  RIOT_PLATFORM_URLS,
  type Platform,
} from "./config";

export async function getChallengerPlayers( platform: Platform = "EUW1") {
  const apiKey = process.env.RIOT_API_KEY;

  if (!apiKey) {
    throw new Error("RIOT_API_KEY is not configured");
  }

  const response = await fetch(
    `${RIOT_PLATFORM_URLS[platform]}/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5`,
    {
      headers: {
        "X-Riot-Token": apiKey,
      },
      next: {
        revalidate: 300,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch Challenger players: ${response.status}`
    );
  }

  return response.json();
}