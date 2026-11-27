"use client";

import { capitalizeFirst } from "@/lib/helper";
import { GameState } from "@/types"
import Image from "next/image"
import { useState } from "react"

type Props = {
    wins: number,
    KDA_Avarage: number,
    csMin: number,
    visionMin: number,
    games: GameState[]
}

export default function HistoryPage ({wins, KDA_Avarage, csMin, visionMin, games}:Props) {
    const [selectedMode, setSelectedMode] = useState('Solo/Duo');
    const [countGames, setCountGames] = useState(5)
    const countWinMatchs = games.slice(0, countGames).filter(match => match.win).length
    const winRate = (( countWinMatchs / countGames ) * 100).toFixed(0)

    function getTimeAgo(gameStartTimestamp: number, gameDuration: number) {
        const gameEndTimestamp = gameStartTimestamp + gameDuration * 1000;
        const diff = Date.now() - gameEndTimestamp;

        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);

        const formatter = new Intl.RelativeTimeFormat("ru", {
            numeric: "auto",
        });

        if (days >= 1) return formatter.format(-days, "day");
        if (hours >= 1) return formatter.format(-hours, "hour");

        return formatter.format(-minutes, "minute");
    }

    const PlayerState = [
        {
            count: wins + '%',
            type: 'win rate',
            url: './trophy.svg'
        },
        {
             count: KDA_Avarage,
            type: 'KDA',
            url: './crosshair.svg'
        },
        {
            count: csMin,
            type: 'CS / min',
            url: './coins.svg'
        },
        {
            count: visionMin,
            type: 'vision / Min',
            url: './eye.svg'
        },
    ]

    return(
        <div className="bg-[#081018] p-[80px] min-h-[1163px]">
            <div className="flex flex-col gap-[12px]">
                <span className="font-roboto text-[10px] font-bold leading-none text-blue leading-none uppercase">— ПЕРСОНАЛЬНА АНАiТИКА</span>
                <span className="font-inter text-[32px] font-normal text-white">Ваші цифри. Без шуму.</span>
                <span className="font-inter text-[14px] font-bold  text-grey">Порівнюйте форму, знаходьте просідання та відстежуйте прогрес по кожній ключовій метриці.</span>
            </div>
            <div className="flex gap-[16px] mt-[12px]">
                {PlayerState.map((state, index) => (
                    <div key={index} className="w-[308px] h-[197px] rounded-[12px] border-[1px] p-[20px] border-[#1B3440] bg-[#0D1721]">
                        <div className="flex h-[16px] justify-between">
                            <span className="font-inter text-[12px] font-normal text-[#9CB0B3]">{state.type}</span>
                            <Image
                                src={state.url}
                                alt={state.type}
                                width={18}
                                height={18}
                                style={{ width: "18px", height: "18px" }}
                            />
                        </div>
                        <div className="mt-[16px]">
                            <span className="font-inter text-[28px] font-bold text-white leading-none tracking-[0.05em]">{state.count}</span>
                        </div>
                         <div className="mt-[16px] h-[44px] f-[260px]">
                                {/* blcok % winrate for 10 day */}
                        </div>
                        <div  className="mt-[16px]">
                            <span className="font-inter font-normal text-[10px] leading-none tracking-normal text-[#64787D]">проти попередніх 20 матчів</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="rounded-[18px] border-[1px] border-dark-teal mt-[32px] p-[24px] bg-[#0D1721]">
                <div className="flex justify-between">
                    <div>
                        <span className="font-inter font-normal text-[20px] text-white">Історія матчів</span>
                        <div className="flex items-center gap-[8px] mt-[5px]">
                            <span className="h-[6px] w-[6px] rounded-full bg-green" />
                            <span className="font-inter font-normal text-[12px] leading-none tracking-normal text-[#9CB0B3]">{countWinMatchs} перемоги · {countGames - countWinMatchs} поразки · {winRate}% WR · за попередні {countGames} матчі</span>
                        </div>
                    </div>
                    <div>
                       <div className="flex gap-[6px]">
                            {['All', 'Solo/Duo', 'Flex'].map((mode) => (
                                <button
                                    key={mode}
                                    type="button"
                                    onClick={() => setSelectedMode(mode)}
                                    className={`h-[28px] rounded-[8px] border px-[12px] py-[8px] font-inter text-[10px] font-bold leading-none cursor-pointer transition-colors
                                        ${selectedMode === mode
                                            ? 'border-green bg-[#14312F] text-green'
                                            : 'border-dark-teal bg-[#0A131C] text-[#9CB0B3] hover:border-green'
                                        }`}
                                >
                                    {mode}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-[16px]">
                    {games.slice(0,countGames).map((game, index) => (
                        <div key={index} className="flex h-[92px] items-center gap-[16px] rounded-[8px] border-b-[1] border-l-[3] border-[#1B3440] p-[14px_18px] bg-[#0A131C]">
                            <div className="flex flex-col w-[82px] gap-[6px]">
                                {game.win ? 
                                    <span className="font-robot text-[9px] font-bold text-green">ПЕРЕМОГА</span> : 
                                    <span className="font-robot text-[9px] font-bold text-red">ПОРАЗКА</span>
                                }
                                <span className="font-inter text-[10px] text-normal leading-none text-[#64787D]">{game.gameDuration}</span>
                            </div>
                            <div className="w-[54px] h-[54px] shrink-0 border rounded-[12px] border-blue bg-cover bg-center" style={{ backgroundImage: `url(/Champion-Portrait.svg)` }}></div>
                            <div className="flex flex-col w-[112px] gap-[6px]">
                                <span className="font-inter text-[14px] text-normal leading-none text-white">{capitalizeFirst(game.championName)}</span>
                                <span className="font-inter text-[10px] text-normal leading-none text-[#64787D]">{game.teamPosition !== 'BOTTOM' ? game.lane : game.role } · Ranked Solo</span>
                            </div>
                            <div className="flex flex-col w-[106px] gap-[6px]">
                                <span className="font-robot text-[14px] text-normal leading-none text-white">{game.kills} / {game.assists} / {game.deaths}</span>
                                <span className="font-robot text-[10px] text-normal leading-none text-green">{((game.kills + game.assists) / game.deaths).toFixed(2)} KDA</span>
                            </div>
                            <div className="flex gap-[5px] w-[186px] hidden lg:flex">
                                <Image
                                    src='./mh-sword.svg'
                                    alt='mh-sword'
                                    width={25}
                                    height={25}
                                    style={{ width: "25px", height: "25px" }}
                                />
                                <Image
                                    src='./mh-shield.svg'
                                    alt='mh-shield'
                                    width={25}
                                    height={25}
                                    style={{ width: "25px", height: "25px" }}
                                />
                                <Image
                                    src='./mh-diamand.svg'
                                    alt='mh-diamand'
                                    width={25}
                                    height={25}
                                    style={{ width: "25px", height: "25px" }}
                                />
                                <Image
                                    src='./mh-lightning.svg'
                                    alt='mh-lightning'
                                    width={25}
                                    height={25}
                                    style={{ width: "25px", height: "25px" }}
                                />
                                <Image
                                    src='./mh-fire.svg'
                                    alt='mh-fire'
                                    width={25}
                                    height={25}
                                    style={{ width: "25px", height: "25px" }}
                                />
                                <Image
                                    src='./mh-mark.svg'
                                    alt='mh-mark'
                                    width={25}
                                    height={25}
                                    style={{ width: "25px", height: "25px" }}
                                />
                            </div>
                            <div className="flex flex-col w-[90px] gap-[6px]">
                                <span className="font-robot text-[12px] text-normal leading-none text-white">{game.totalMinionsKilled + game.neutralMinionsKilled} CS</span>
                                <span className="font-inter text-[10px] text-normal leading-none text-[#64787D]">Vision {game.visionScore}</span>
                            </div>
                            <div className="flex justify-between flex-1 min-w-[90px] w-[470px]">
                                <span className="font-inter text-[10px] font-normal text-[#64787D]">{getTimeAgo(Number(game.gameStartTimestamp), game.gameDuration)}</span>
                                <span className="font-inter text-[10px] font-normal text-[#64787D] cursor-pointer">
                                    <Image
                                        src='./Vector.svg'
                                        alt='Vector'
                                        width={10}
                                        height={10}
                                        style={{ width: "10px", height: "10px" }}
                                    />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mx-auto mt-[24px] w-[170px] cursor-pointer" onClick={()=> setCountGames(countGames + 5)}>
                    <span className="flex gap-[8px] items-center font-inter text-[12px] font-bold text-blue">
                        Показати ще 15 матчів 
                        <Image
                            src='./Chevron-down.svg'
                            alt='Vector'
                            width={14}
                            height={14}
                            style={{ width: "14px", height: "14px" }}
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}