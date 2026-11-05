
import Navigation from "./Navigation/page";
import Content from "./Content/page";

import { getChallengerPlayers } from "@/lib/riot/getChallengerPlayers";
import getPlayerAccount from "@/lib/riot/getPlayerAccount";
import { getPlayerStats } from "@/lib/riot/getPlayerStats";

export default async function FirstSection() {
    const challengerPlayers = await getChallengerPlayers('EUW1')
    const puuidTopPlayer = challengerPlayers.entries[0].puuid
    const account = await getPlayerAccount("EUROPE" , puuidTopPlayer);
    const playerState =  await getPlayerStats('EUROPE', puuidTopPlayer)
    
    const wins = playerState.filter(player => player.win).length
    const kills = playerState.reduce((sum, participant) => sum + participant.kills,0);
    const deaths = playerState.reduce((sum, participant) => sum + participant.deaths,0);
    const assists = playerState.reduce((sum, participant) => sum + participant.assists,0);
    const KDA_Avarage = (kills + assists) / deaths 
    const csMin = playerState.reduce((sum, participant) =>
        sum + participant.totalMinionsKilled + participant.neutralMinionsKilled,0) /
            (playerState.reduce((sum, participant) => sum + participant.gameDuration,0) / 60);
    

    return (
        <section className="relative h-[760px] w-full overflow-hidden">
            <div
                className="
                    absolute inset-0
                    bg-[url('/RiftAtmosphere.svg')]
                    bg-cover
                    bg-center
                    bg-no-repeat
                "
            />
            <div
                className="
                    absolute inset-0
                    bg-[linear-gradient(56.31deg,rgba(6,16,24,0.968627)_24%,rgba(7,16,25,0.780392)_54.16%,rgba(7,16,25,0.509804)_76%)]
                "
            />
            <div className="relative z-10">
                <Navigation />
                <Content
                    gameName={account.gameName}
                    tier={challengerPlayers.tier}
                    winRate={wins} 
                    KDA={Math.round(KDA_Avarage)} 
                    csMin={Number(csMin.toFixed(2))} 
                />
            </div>
            
        </section>
    );
}