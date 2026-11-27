import Image from "next/image";
import Link from "next/link";

type Props = {
    actualPatch: string;
}

export default function ActualMeta({ actualPatch }: Props) {
    
    const Meta = [{
        character: 'Viego',
        position: 'Junkge',
        winRater: {
            state: '+',
            countWinrate: 2.8
            },
        statePatch: 'BUFF',
        src: './mock/mock-sword.svg',
        color: 'var(--color-green)'
    },
    {
        character: 'Ahri',
        position: 'Mid',
        winRater: {
            state: '+',
            countWinrate: 1.4
            },
        statePatch: 'TREND',
        src: './mock/mock-sparkles.svg',
        color: 'var(--color-blue)'  
    },
    {
        character: 'K`Sante',
        position: 'Top',
        winRater: {
            state: '-',
            countWinrate: 2.1
            },
        statePatch: 'NERF',
        src: './mock/mock-shield.svg',
        color: 'var(--color-red)'
    }
    ]

    return (
        <div className="bg-[#0A131C] h-[210px] border-b  border-t border-[#1B3440]">
            <div className="flex p-[40px_80px] gap-[32px]">
                <div className="flex flex-col gap-[12px] pr-[32px] max-w-[342px]  border-r border-[#1B3440]">
                    <div className="flex gap-[9px]">
                        <span className="h-[6px] w-[6px] rounded-full bg-yellow" />
                        <span className="font-roboto text-[10px] font-bold leading-none text-yellow">
                            АКТУАЛЬНИЙ ПАТЧ
                        </span>
                    </div>
                    <span className="font-roboto text-[36px] font-bold leading-none text-white">
                        {actualPatch}
                    </span>
                    <span className="font-inter gap-[7px] text-[12px] flex items-center text-grey !leading-[145%]">
                        Мета стабілізується навколо early-game jungle та utility support.
                    </span>
                </div>
                <div className="flex gap-[16px] py-[4px]">
                    {Meta.map((item, i) =>(
                        <Link href="/" key={i} 
                            className={`bg-[#0D1721] flex items-center rounded-[12px] border-solid border-[1px] border-[#1B3440] h-[112px] w-[237px] p-[34px_16px] hover:border-green
                                ${i === 1 ? "max-lg:!hidden" : ""}
                                ${i === 2 ? "max-xl:!hidden" : ""}
                            `}>
                            <div className="w-[44px] h-[44px] bg-[#111E29] rounded-[8px] border-[1px] p-[12px]">
                                <Image
                                    src={item.src}
                                    alt={item.src}
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <div className="flex justify-between w-full">
                                <div className="pl-[12px] flex flex-col">
                                    <span className="font-inter text-[14px] font-normal leading-none text-white">{item.character}</span>
                                    <span className="font-inter text-[10px] font-normal leading-none text-[#64787D] pt-[4px]">{item.position}</span>
                                </div>
                                <div className="pl-[12px] flex flex-col items-end">
                                    <span className="font-roboto text-[12px] font-bold leading-none text-white" style={{ color: item.color }}>{item.winRater.state}{item.winRater.countWinrate}% WR</span>
                                    <span className="font-roboto text-[8px] font-bold leading-none text-[#64787D] pt-[4px]">{item.statePatch}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="max-w-[160px] content-center">
                    <span className="font-inter text-[10px] font-normal leading-none text-[#64787D]">{new Date().toLocaleDateString('ru-RU')}</span>
                        <Link href=""><span className="w-full inline-flex items-center gap-1 font-roboto text-[12px] font-bold leading-none text-blue"> Нотатки патчу 
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
    )
}