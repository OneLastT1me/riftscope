
export interface ChallengerPlayer {
  summonerId: string;
  puuid: string;
  losses: number;
  wins: number;
  leaguePoints: number;
  rank: string;
}
export interface Challenger {
  tier: string;
  leagueId: string;
  queue: string;
  name: string;
  entries: ChallengerPlayer[];
}

export interface PlayerState{
    wins: number
    kills: number
    deaths: number
    assists: number
    KDA_Avarage: number
    csMin: number
    puuidTopPlayer: string
    account: {
        gameName: string
        puuid: string
        tagLine: string
    }[]
    rankPosition: {
        tier: string
        queue: string
        leaguePoints: number
    }
    games: GameState[]
}

export interface GameState{
    championName: string
    championId: number
    deaths: number
    kills: number
    assists: number
    lane: string
    role: string
    teamPosition: string
    visionScore: number
    win: boolean
    gameDuration: number
    totalMinionsKilled: number
    neutralMinionsKilled: number
    goldEarned: number
    puuid: string
    gameStartTimestamp: string
}

export interface ChampionStats {
  championId: string;
  role: string;
  tier: string;
  winRate: number;
  pickRate: number;
  banRate: number;
  matches: number;
  rankPosition: number;
  change: number | null;
}