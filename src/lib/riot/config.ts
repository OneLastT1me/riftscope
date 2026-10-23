export const RIOT_PLATFORM_URLS = {
  EUW1: "https://euw1.api.riotgames.com",
  EUN1: "https://eun1.api.riotgames.com",
  NA1: "https://na1.api.riotgames.com",
  KR: "https://kr.api.riotgames.com",
} as const;

export const RIOT_REGIONAL_URLS = {
  EUROPE: "https://europe.api.riotgames.com",
  AMERICAS: "https://americas.api.riotgames.com",
  ASIA: "https://asia.api.riotgames.com",
  SEA: "https://sea.api.riotgames.com",
} as const;

export type Platform = keyof typeof RIOT_PLATFORM_URLS;
export type RegionalRoute = keyof typeof RIOT_REGIONAL_URLS;