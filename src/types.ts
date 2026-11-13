
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
    }
    rankPosition: {
        tier: string
        queue: string
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
}