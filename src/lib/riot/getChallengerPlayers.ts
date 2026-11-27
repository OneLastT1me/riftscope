
import "server-only";

import {
  RIOT_PLATFORM_URLS,
  RIOT_TYPEGAME,
  TypeGame,
  type Platform,
} from "./config";
import { Challenger } from "@/types";

export async function getChallengerPlayers(typeGame: TypeGame = "SOLO_DUO", platform: Platform = "EUW1"): Promise<Challenger> {
  const apiKey = process.env.RIOT_API_KEY;

  if (!apiKey) {
    throw new Error("RIOT_API_KEY is not configured");
  }

  const response = await fetch(
    `${RIOT_PLATFORM_URLS[platform]}/lol/league/v4/challengerleagues/by-queue/${RIOT_TYPEGAME[typeGame]}`,
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

  const data: Challenger = await response.json();

  return data
}