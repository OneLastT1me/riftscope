"use client";

import Image from "next/image";
import { useState } from "react";

const stats = [
  {
    value: "58%",
    label: "WIN RATE",
    color: "var(--color-green)",
  },
  {
    value: "3.42",
    label: "KDA",
    color: "var(--color-blue)",
  },
  {
    value: "7.8",
    label: "CS/MIN",
    color: "var(--color-yellow)",
  },
];

export default function Navigation() {
    const [imgProfile, setImgProfile] = useState("/Champion-Portrait.svg")

    return(
        <div className="flex justify-between mx-[80px] my-[162px]">
            <div className="w-[720px] h-[368px]">
                <div className="flex items-center gap-[9px] px-[11px] py-[7px] w-fit border-[1px] border-solid rounded-[999px] border-[#245363] bg-[#0b181e]">
                    <span className="h-[6px] w-[6px] rounded-full bg-yellow" />
                    <span className="font-roboto text-[10px] font-bold leading-none text-yellow">
                        ДАНІ ОНОВЛЕНО 4 ХВ ТОМУ · PATCH 26.18
                    </span>
                </div>
                <div className="mt-[24px]">
                    <span className="font-normal leading-[102%] text-[58px] text-white">Бач гру глибше.<br /></span>
                    <span className="font-normal leading-[102%] text-[58px] text-blue">Перемагай точніше.<br /></span>
                    <span className="mt-[26px] inline-block text-min-body text-[16px] !leading-[165%]">RiftScope перетворює кожен матч на зрозумілий план дій: актуальна мета,<br /> персональні KPI, білди та рішення, що реально впливають на результат.</span>
                </div>
                <form className="mt-[24px] flex justify-between h-[60px] w-full max-w-[650px] items-center gap-[12px] rounded-[12px] border  border border-[#245363] pr-[8px] pl-[18px]">
                    <Image
                        src="/Search.svg"
                        alt="IconSearch"
                        width={19}
                        height={19}
                    />
                    <div>

                    </div>
                    <button type="submit" className=" flex justify-center h-[44px] shrink-0 items-center gap-[10px] rounded-[13px] bg-blue px-[17px] text-[13px] font-bold text-[#060B10]">
                        <span>Знайти гравця</span>
                        <Image
                            src="/Arrow-Right.svg"
                            alt="ArrowButton"
                            width={15}
                            height={15}
                        />
                    </button>
                </form>
                <div className="mt-[24px] flex gap-[22px]">
                    <span className="text-min-body gap-[7px] text-[12px] flex items-center">
                        <Image
                            src="/Check-Circle.svg"
                            alt="Check-Circle"
                            width={13}
                            height={13}
                        />
                        42 млн матчів
                    </span>
                    <span className="text-min-body gap-[7px] text-[12px] flex items-center">
                        <Image
                            src="/Check-Circle.svg"
                            alt="Check-Circle"
                            width={13}
                            height={13}
                        />
                        12 регіонів
                    </span>
                    <span className="text-min-body gap-[7px] text-[12px] flex items-center">
                        <Image
                            src="/Check-Circle.svg"
                            alt="Check-Circle"
                            width={13}
                            height={13}
                        />
                        Оновлення щогодини
                    </span>
                </div>
            </div>
            <div className="w-[400px] h-[353px] p-[34px] border-[1px] border-[#245363] rounded-[18px] opacity-88 bg-[#0A141D]">
                <div className="flex justify-between items-center gap-[9px]">
                    <div className="flex items-center gap-[7px]">
                        <span className="h-[6px] w-[6px] rounded-full bg-blue" />
                        <span className="font-roboto text-[10px] font-bold text-blue">
                            MATCH INTELLIGENCE
                        </span>
                    </div>
                    <span className="font-robot ml-[12px] rounded-[4px] border-solid border-[1px] border-yellow px-[6px] py-[4px] text-[8px] font-bold leading-none text-yellow bg-[#352D1D]">
                        PATCH 26.18
                    </span>
                </div>
                <div className="flex  mt-[24px] gap-[10px]">
                    <div className="w-[76px] h-[76px] shrink-0 border rounded-[12px] border-blue bg-cover bg-center" style={{ backgroundImage: `url(${imgProfile})` }}></div>
                    <div>
                        <span className="font-normal text-[20px] text-white">KyivCarry <br /></span>
                        <span className="font-bold text-[12px] text-yellow">DIAMOND II · 64 LP<br /></span>
                        <span className="text-min-body text-[12px]">Solo/Duo · останні 20 матчів <br /></span>
                    </div>
                </div>
                <div className="flex h-[68px] w-full mt-[24px]">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={`flex flex-1 flex-col items-center justify-center ${
                                index > 0 ? "border-l border-[#17303d]" : ""}`}
                        >
                        <span
                            className="text-[23px] font-semibold leading-none"
                            style={{ color: stat.color }}
                        >
                            {stat.value}
                        </span>
                        <span className="mt-[9px] text-[9px] uppercase text-[#53656f]">
                            {stat.label}
                        </span>
                        </div>
                    ))}
                </div>
                <div className="w-full h-[66px] mt-[24px] rounded-[8px] border-[#123C3B] bg-[#14312F] ">
                     <span className="text-min-body gap-[12px] text-[12px] flex  p-[16px] !font-normal !leading-[145%]">
                        <Image
                            src="/Activity.svg"
                            alt="Activity"
                            width={15}
                            height={15}
                        />
                        <p><span className="text-white">Сильна форма.</span> Ваш vision score виріс на 14% за тиждень.</p>
                    </span>
                </div>
            </div>
        </div>    
    )
}