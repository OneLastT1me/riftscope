
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

export interface Champion {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;

  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };

  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };

  tags: string[];
  partype: string;

  stats: {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
  };
}

export interface ChampionsResponse {
  type: string;
  format: string;
  version: string;
  data: Record<string, Champion>;
}