import Navigation from "./Navigation/page";
import Content from "./Content/page";
import { PlayerState } from "@/types";

type Props = {
    player: PlayerState
}

export default function FirstSection({player}: Props) {

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
                    gameName={player.account[0].gameName}
                    tier={player.rankPosition.tier}
                    winRate={player.wins} 
                    KDA={Math.round(player.KDA_Avarage)} 
                    csMin={player.csMin}
                    tagLine={player.account[0].tagLine}
                />
            </div>
            
        </section>
    );
}