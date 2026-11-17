import {rank, rateChampions} from '../../../rateChampions'
import Image from "next/image"

type Metric = {
  label: string;
  value: number;
  color: string;
};

// mock information
const metrics: Metric[] = [
  { label: "Jungle impact", value: 84, color: "#25D9C5" },
  { label: "ADC scaling", value: 71, color: "#E4B951" },
  { label: "Top agency", value: 58, color: "#60A5FA" },
  { label: "Support roam", value: 77, color: "#B18AFF" },
];

export function ActualChempions () {

    return(
        <div className="bg-[#081018] p-[80px] min-h-[761px]">
            <div className="flex flex-col gap-[12px]">
                <span className="font-roboto text-[10px] font-bold leading-none text-blue leading-none uppercase">— Глобальна статистика</span>
                <span className="font-inter text-[32px] font-normal text-white">Хто керує метою зараз.</span>
                <span className="font-inter text-[14px] font-bold  text-grey">Рейтинг побудований на матчах Emerald+ за останні 7 днів. Дані нормалізовано за роллю та регіоном.</span>
            </div>
            <div className='flex gap-[24px]'>
                <div className="max-w-[956px] mt-[32px]  rounded-[18px] border-[1px] border-dark-teal overflow-hidden">
                    <div className="w-full overflow-x-auto">
                        <table className='table-fixed w-full'>
                            <thead>
                                <tr className='bg-[#111E29] h-[42px]'>
                                    {['#', 'ЧЕМПІОН', 'TIER', 'WIN RATE', 'PICK RATE', 'BAN RATE', 'MATCHES', 'change'].map((keyName, i) => (
                                        <th key={i} className='w-[90px] px-[8px] font-robot text-[8px] font-normal text-[#64787D] text-right 
                                            [&:nth-child(1)]:w-[28px] [&:nth-child(1)]:text-left [&:nth-child(1)]:pl-[16px]
                                            [&:nth-child(2)]:w-[182px] [&:nth-child(2)]:text-left 
                                            [&:nth-child(3)]:text-left 
                                            [&:last-child]:text-left [&:last-child]:w-[192px] '>
                                            {keyName}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {rateChampions.map((champion, i) =>(
                                    <tr key={i} className='h-[72px] items-center border-b-[1px] border-[#1B3440]'> 
                                            <td className='font-robot pl-[16px] text-[12px] font-bold text-[#64787D]'>
                                                {champion.id}
                                            </td>
                                            <td className='px-[8px]'>
                                                <div className='flex items-center gap-[16px]'>
                                                    <Image
                                                        src='./Champion-Portrait.svg'
                                                        alt='Champion-Portrait'
                                                        width={42}
                                                        height={42}
                                                        style={{ width: "42px", height: "42px" }}
                                                    />
                                                    <div className='flex flex-col'>
                                                        <span className='font-robot font-normal text-[14px] text-white'>{champion.name}</span>
                                                        <span className='font-inter font-normal text-[10px] text-[#64787D]'>{champion.role}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='px-[8px] text-center'>
                                                <div
                                                    className='w-[32px] h-[32px]'
                                                    style={{ color: rank.find((item) => 
                                                    item.tier === champion.tier)?.color
                                                }}>{champion.tier}</div>
                                            </td>
                                            <td className='px-[8px] text-right'>
                                                <div className='w-[39px] ml-auto flex flex-col'>
                                                    <span className='font-robot font-normal text-[12px] text-green'>{champion.winRate}</span>
                                                    <span className='font-robot font-normal text-[8px] text-[#64787D]'>WIN RATE</span>
                                                </div>
                                            </td>
                                            <td className='px-[8px] text-right'>
                                                <div className='w-[39px] ml-auto flex flex-col'>
                                                    <span className='font-robot font-normal text-[12px] text-blue'>{champion.pickRate}</span>
                                                    <span className='font-robot font-normal text-[8px] text-[#64787D]'>PICK RATE</span>
                                                </div>
                                            </td>
                                            <td className='px-[8px] text-right'>
                                                <div className='w-[39px] ml-auto flex flex-col'>
                                                    <span className='font-robot font-normal text-[12px] text-red'>{champion.banRate}</span>
                                                    <span className='font-robot font-normal text-[8px] text-[#64787D]'>BAN RATE</span>
                                                </div>
                                            </td>
                                            <td className='px-[8px] text-right'>
                                                <div className='w-[39px] ml-auto flex flex-col'>
                                                    <span className='font-robot font-normal text-[12px] text-white'>{champion.matches}</span>
                                                    <span className='font-robot font-normal text-[8px] text-[#64787D]'>MATCHES</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='flex justify-between items-center pl-[8px] pr-[16px]'>                                         
                                                    <span className='font-robot font-normal text-[12px] text-green'>{champion.change}</span>
                                                    <Image
                                                        src='./Vector.svg'
                                                        alt='Vector'
                                                        width={10}
                                                        height={10}
                                                        style={{ width: "10px", height: "10px" }}
                                                        />
                                                </div>
                                            </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="w-[300px] mt-[32px] rounded-[18px] border-[1px] border-dark-teal p-[24px]">
                    <div className='flex justify-between items-center'>
                        <span className='font-inter font-normal text-[14px] text-white'>Meta Pulse</span>
                        <div className=' rounded-[4px] border-[1px] border-blue bg-[#14312F] py-[5px] px-[8px] font-robot font-bold text-[10px] text-blue'>
                            7 DAYS
                        </div>
                    </div>
                    <div className="space-y-4 mt-[24px]">
                        {metrics.map((metric) => (
                        <div key={metric.label} className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-400">
                                {metric.label}
                            </span>

                            <span
                                className="font-semibold"
                                style={{ color: metric.color }}
                            >
                                {metric.value}
                            </span>
                            </div>
                            <div className="h-[6px] w-full overflow-hidden rounded-full bg-[#172630]">
                            <div
                                className="h-full rounded-full transition-all duration-500"
                                style={{
                                width: `${Math.min(100, Math.max(0, metric.value))}%`,
                                backgroundColor: metric.color,
                                }}
                            />
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className='min-w-[200px] p-[16px] rounded-[8px] border-1 border-[#DAB867] bg-[#352D1D] mt-[24px]'>
                        <div className='flex gap-[7px]'>
                            <Image
                                src='./lightbulb.svg'
                                alt='lightbulb'
                                width={14}
                                height={14}
                                style={{ width: "14px", height: "14px" }}
                            />
                            <span className='font-inter font-bold text-[9px] text-[#DAB867]'>СКАУТ-НОТАТКА</span>
                        </div>
                        <span className='font-inter font-normal text-[12px] text-[#9CB0B3]'>Early drake control корелює з перемогою у 68% матчів цього патчу.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}