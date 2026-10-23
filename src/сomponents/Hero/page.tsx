import Navigation from "./Navigation/page";
import Content from "./Content/page";
import { getChallengerPlayers } from "@/lib/riot/getChallengerPlayers";
import getPlayerAccount from "@/lib/riot/getPlayerAccount";
import { getPlayerStats } from "@/lib/riot/getPlayerStats";

export default async function FirstSection() {

     const league = await getChallengerPlayers();

    const topPlayer = league.entries[0];
    console.log(topPlayer)
    const account = await getPlayerAccount("EUROPE" ,topPlayer.puuid);
    console.log(account)
    const playerStats = await getPlayerStats("EUROPE", topPlayer.puuid)
    console.log(playerStats, 'playerStats')
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
                <Content />
            </div>
        </section>
    );
}