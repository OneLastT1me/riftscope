import { getChallengerPlayers } from "@/lib/riot/getChallengerPlayers"
import getPlayerAccount from "@/lib/riot/getPlayerAccount"
import Link from "next/link"
import Image from "next/image"

export async function LiveGame () {
    const allTopPLayers = await getChallengerPlayers('SOLO_DUO','EUW1')
    const challengerPlayers = allTopPLayers.entries.slice(0, 5)
    const account = await getPlayerAccount("EUROPE" , challengerPlayers.map((player) => player.puuid))
    const playerData = account.map(account => ({
            ...account,
            ...challengerPlayers.find(stat => stat.puuid === account.puuid)
        }));

    return(
        <div className="bg-[#0A131C] p-[80px] min-h-[843px]">
            <div className="flex flex-col gap-[12px]">
                <span className="font-roboto text-[10px] font-bold leading-none text-blue leading-none uppercase">— Спостерігай за найкращими</span>
                <span className="font-inter text-[32px] font-normal text-white">Rift зараз</span>
                <span className="font-inter text-[14px] font-bold  text-grey">Живі high-elo матчі, ключові об’єктиви та гонка за перше місце — в одному tactical feed.</span>
            </div>
            <div className="flex mt-[32px] gap-[24px]">
                <div className="h-[557px] w-[846px] rounded-[18px] border-1 border-[#245353] p-[24px]">

                </div>
                <div className="h-[459px] min-w-[280px] w-[410px] rounded-[18px] border-1 border-[#1B3440] p-[24px]">
                    <div>
                        <div className="flex flex-col font-inter font-normal">
                            <span className="text-[18px] text-white">Лідери сезону</span>
                            <span className="text-[10px] text-grey">Solo/Duo · оновлено 2 хв тому</span>
                        </div>
                        
                    </div>
                    <div className="flex flex-col gap-[6px] mt-[16px]">
                    {
                        playerData.map((player, i) =>(
                            <div key={i} className="h-[58px] p-[12px_9px] flex items-center gap-[12px] rounded-[8px] border-1 border-[#1B3440] cursor-pointer">
                                <span className="font-mono font-normal text-[12px] text-white">{i}</span>
                                <div className="bg-[#111E29] rounded-[99px] h-[30px] w-[30px] flex items-center justify-center">
                                    <span className="font-mono font-bold text-[12px] text-white">{player.gameName[0]}</span>
                                </div>
                                <div className="flex flex-col flex-1 min-w-0">
                                    <span className="font-inter font-bold text-[12px] text-white">{player.gameName}</span>
                                    <span className="font-robot font-normal text-[8px] text-[#64787D]">EUW  ·  {((player.wins / (player.wins + player.losses)) * 100).toFixed(1) }% WR</span>
                                </div>
                                <span className="font-inter font-bold text-[12px] text-white">{player.leaguePoints} LP</span>
                            </div>
                        ))
                    }
                    </div>
                    <div className="flex items-center justify-center mt-[16px]">
                        <Link href=""><span className="w-full inline-flex items-center gap-1 font-roboto text-[12px] font-bold leading-none text-blue">Повний лідерборд
                            <Image
                                src="/arrow.svg"
                                alt="ArrowButton"
                                width={15}
                                height={15}
                            />
                        </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}