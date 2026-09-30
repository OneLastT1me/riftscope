import Image from "next/image";

export default function Navigation() {
    return(
        <div className="flex justify-between mx-[80px] my-[162px]">
            <div className="w-[720px] h-[368px]">
                <div className="flex items-center gap-[9px] px-[11px] py-[7px] w-fit border-[1px] border-solid rounded-[999px] border-[#245363] bg-[#0b181e]">
                    <span className="h-[6px] w-[6px] rounded-full bg-[#DAB867]" />
                    <span className="font-roboto text-[10px] font-bold leading-none text-[#DAB867]">
                        ДАНІ ОНОВЛЕНО 4 ХВ ТОМУ · PATCH 26.18
                    </span>
                </div>
                <div className="mt-[24px]">
                    <span className="font-normal leading-[102%] text-[#f1f5f9] text-[58px] font-inter">Бач гру глибше.<br /></span>
                    <span className="font-normal leading-[102%] text-[#18d9cf] text-[58px] font-inter">Перемагай точніше.<br /></span>
                    <span className="text-min-body font-inter text-[16px]">RiftScope перетворює кожен матч на зрозумілий план дій: актуальна мета,<br /> персональні KPI, білди та рішення, що реально впливають на результат.</span>
                </div>
                <form className="flex justify-between h-[60px] w-full max-w-[650px] items-center gap-[12px] rounded-[12px] border  border border-[#245363] pr-[8px] pl-[18px]">
                    <Image
                        src="/Search.svg"
                        alt="IconSearch"
                        width={19}
                        height={19}
                    />
                    <div>

                    </div>
                    <button type="submit" className=" flex h-[44px] shrink-0 items-center justify-center gap-[10px] rounded-[13px] bg-[#35E0CF] px-[17px] text-[13px] font-bold text-[#060B10]">
                        <span>Знайти гравця</span>
                        <Image
                        src="/Arrow-Right.svg"
                        alt="ArrowButton"
                        width={15}
                        height={15}
                    />
                    </button>
                </form>
            </div>
            <div className="w-[400px] h-[353px]"></div>
        </div>    
    )
}