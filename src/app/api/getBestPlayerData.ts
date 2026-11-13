import { getChallengerPlayers } from "@/lib/riot/getChallengerPlayers";
import getPlayerAccount from "@/lib/riot/getPlayerAccount";
import { getPlayerStats } from "@/lib/riot/getPlayerStats";
import { PlayerState,  GameState} from "@/types";

export default async function getBestPlayerData () {
        const challengerPlayers = await getChallengerPlayers('EUW1')
        const puuidTopPlayer = challengerPlayers.entries[0].puuid
        const account = await getPlayerAccount("EUROPE" , puuidTopPlayer)
        const games = await getPlayerStats('EUROPE', puuidTopPlayer)
        
        const wins = games.filter(player => player.win).length
        const kills = games.reduce((sum, games) => sum + games.kills,0);
        const deaths = games.reduce((sum, games) => sum + games.deaths,0);
        const assists = games.reduce((sum, games) => sum + games.assists,0);
        const KDA_Avarage = Number(((kills + assists) / deaths).toFixed(2))
        const countCsMin = games.reduce((sum, games) =>
            sum + games.totalMinionsKilled + games.neutralMinionsKilled,0) /
                (games.reduce((sum, games) => sum + games.gameDuration,0) / 60);
        const csMin = Number(countCsMin.toFixed(1))

        console.log(games)

        return {
            wins,
            kills,
            deaths,
            assists,
            KDA_Avarage,
            csMin,
            account, 
            puuidTopPlayer,
            rankPosition: {
                tier: challengerPlayers.tier,
                queue: challengerPlayers.queue
            },
            games
        } as  PlayerState
        
}