"use client"

import { capitalizeFirst } from "@/lib/helper";
import { championStats, rank } from "@/rateChampions";
import { ChampionStats } from "@/types";
import Image from "next/image";
import { useState } from "react";

const build_mock = [
    [
        './mock/diamond-build.svg',
        './mock/magicstick-build.svg',
        './mock/fire-build.svg',
        './mock/shield-build.svg',
        './mock/clock-build.svg',
        './mock/boots-build.svg',
    ],[
        './mock/sword-build.svg',
        './mock/bow-build.svg',
        './mock/shiled-1-build.svg',
        './mock/axe-build.svg',
        './mock/wind-build.svg',
        './mock/boots-build.svg',
    ],
    [
        './mock/bow-1-build.svg',
        './mock/lightning-build.svg',
        './mock/target-build.svg',
        './mock/sword-1-build.svg',
        './mock/wind-build.svg',
        './mock/boots-build.svg'
    ]
];

export function Builds () {
    const [selectedMode, setSelectedMode] = useState('Усі ролі');
    
    return(
        <div className="bg-[#081018] p-[80px] min-h-[910px]">
            <div className="flex flex-col gap-[12px]">
                <span className="font-roboto text-[10px] font-bold leading-none text-blue leading-none uppercase">— Підготовка до гри</span>
                <span className="font-inter text-[32px] font-normal text-white">Білди, що конвертують перевагу.</span>
                <span className="font-inter text-[14px] font-bold  text-grey">Оптимальні предмети, руни та spells за реальними результатами поточного патчу.</span>
            </div>
            <div className="flex mt-[32px] gap-[16px]">
                {championStats.sort((a,b) => b.winRate - a.winRate).slice(0,3).map((champion, i) =>(
                    <div key={i} className="h-[227px] w-[416px] rounded-[12px] border-1 border-[#1B3440] bg-[#0D1721;] p-[20px]">
                        <div className="flex items-center gap-[12px]">
                            <Image
                                src='./Champion-Portrait.svg'
                                    alt='Champion-Portrait'
                                    width={54}
                                    height={54}
                                    style={{ width: "45px", height: "54px" }}
                            />
                            <div className="flex justify-between items-start flex-1 min-w-0">
                                <div className="flex flex-col font-inter font-normal">
                                    <span className="text-[16px] text-white">{capitalizeFirst(champion.championId)  }</span>
                                    <span className="text-[10px] text-[#64787D]">{champion.role} Ranked</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-robot font-bold text-[12px] text-green">{champion.winRate}% WR</span>
                                    <span className="font-inter font-normal text-[10px] text-[#64787D]">{champion.matches} матчів</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[8px]">
                            <span className="font-robot font-normal text-[8px] text-[#64787D] leading-none">CORE BUILD</span>
                            <div className="flex gap-[7px] mt-[8px]">
                                {build_mock[i].map((img, index) =>(
                                    <Image
                                        key={index}
                                        src={img}
                                        alt={img[index]}
                                        width={40}
                                        height={40}
                                        style={{ width: "40px", height: "40px" }}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="mt-[16px] pt-[10px] border-t-1 border-t-[#1B3440] flex justify-between items-center pb-auto">
                            <div className="flex  gap-[8px]">
                                <div  className="bg-[#352D1D] rounded-[50px] w-[30px] h-[30px]"/>
                                <div className="flex flex-col">
                                    <span className="font-inter font-normal text-[9px] text-[#64787D]">Основна руна</span>
                                    <span className="font-inter font-bold text-[10px] text-white">Precision</span>
                                </div>
                            </div>
                            <div>
                                <Image
                                    src='./mock/fire-build.svg'
                                    alt='./mock/fire-build.svg'
                                    width={28}
                                    height={28}
                                    style={{ width: "28px", height: "28px" }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-[43px]">
                <div className="flex justify-between">
                    <div className="flex flex-row gap-[12px]">   
                        <span className="font-inter font-normal text-[20px] text-white">Meta Tierlist</span>
                        <div className="w-[93px] h-[23px] bg-[#14312F] rounded-[4px] border-1 border-green p-[5px_8px] font-robot font-bold text-[10px] text-green">
                            Master + EUW
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-[6px]">
                            {['Усі ролі', 'Top', 'Jungle', 'Mid', 'ADC', 'Support'].map((mode) => (
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
                <div className="h-[304px] w-full mt-[24px] rounded-[18px] border-1 border-[#245363] bg-[#0D1721]"> 
                    {
                        ['S+','S','A+','A'].map((tier, indexLine) => (
                            <div className="flex h-[74px]" key={indexLine}>
                                <div className="w-[84px] flex shrink-0 justify-center items-center mr-[16px]" style={{color: rank[indexLine].color , borderRightColor: rank[indexLine].color, borderRightWidth: '1px' }}>
                                    {tier}
                                </div>
                                <div className="flex flex-1 items-center gap-[8px]">
                                    {championStats.filter(champion => champion.tier === tier &&
                                        (selectedMode === 'Усі ролі' || champion.role === selectedMode)).slice(0,7).map((champion, indexItem) =>(
                                        <div className="h-26px rounded-[8px] border-1 border-1 border-[#1B3440] bg-[#111E29] p-[5px_8px]" key={indexItem}>
                                            <span className="inline-block h-[6px] w-[6px] rounded-full mr-[7px]" style={{backgroundColor: rank[indexLine].color}}/>
                                            <span className="font-inter fonr-normal text-[10px]" style={{color: rank[indexLine].color}}>{capitalizeFirst(champion.championId)}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}