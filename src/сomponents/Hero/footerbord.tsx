import Image from "next/image"
import Link from "next/link"

const infoBord =[
    {
        img: './line-badge.svg',
        label: 'Рішення, а не просто цифри',
        text: 'Контекстні інсайти пояснюють, що змінилося і яку дію зробити наступною.'
    },
    {
        img: './return-badge.svg',
        label: 'Мета без затримки',
        text: 'Статистика перераховується щогодини для кожного регіону, рангу та ролі.'
    },
    {
        img: './shield-badge.svg',
        label: 'Чисті, чесні дані',
        text: 'Ми фільтруємо ремейки, аномалії та малі вибірки, щоб висновки були надійними.'
    }
]

const footUrl =[
    {
        label: 'ПРОДУКТ',
        text: 'Чемпіони · Білди · Тірлист',
        url: './'
    },
    {
        label: 'РЕСУРСИ',
        text: 'Патчі · API · Статус',
        url: './'
    },
    {
        label: 'КОМПАНІЯ',
        text: 'Про нас · Контакти · Privacy',
        url: './'
    }
]



export function FooterBord () {
    return(
        <div className="bg-[#081018] px-[80px] pt-[80px]">
            <div className="flex flex-col gap-[12px]">
                <span className="font-roboto text-[10px] font-bold leading-none text-blue leading-none uppercase">— Перевага RiftScope</span>
                <span className="font-inter text-[32px] font-normal text-white">Менше здогадок. Більше контролю.</span>
                <span className="font-inter text-[14px] font-bold  text-grey">Інструменти для гравців, які хочуть розуміти причини результату, а не просто дивитися на KDA..</span>
            </div>
            <div className="flex gap-[16px] my-[32px_64px]">
                {infoBord.map((item, i) => (
                    <div key={i} className="flex flex-col h-[176px] max-w-[416px] p-[24px] gap-[16px] rounded-[12px] border-1 border-[#1B3440] bg-[#0D1721]">
                        <Image
                            src={item.img}
                            alt={item.img}
                            width={36}
                            height={36}
                            style={{ width: "36px", height: "36px" }}
                        />
                        <span className="font-inter font-normal text-[16px] text-white">{item.label}</span>
                        <span className="font-intet font-normal text-[12px] text-grey">{item.text}</span>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center justify-between py-[63px] gap-[24px] rounded-[12px] border-1 border-[#245363]">
                <div className="flex items-center gap-[8px]"> 
                    <span className="inline-block h-[6px] w-[6px] rounded-full bg-blue" />
                    <span className="font-roboto text-[10px] font-bold text-blue">
                        ТВОЯ НАСТУПНА ПЕРЕМОГА ПОЧИНАЄТЬСЯ ТУТ
                    </span>
                </div>
                <span className="font-inter font-normal text-[40px] text-white">Перетвори матчі на перевагу</span>
                <span className="font-inter font-normal text-[14px] text-grey">Введи Riot ID — і отримай персональний tactical brief за кілька секунд. Без реєстрації.</span>
            
                <form className="mt-[24px] flex justify-between h-[60px] w-full max-w-[650px] items-center gap-[12px] rounded-[12px] border  border border-dark-teal pr-[8px] pl-[18px]">
                    <Image
                        src="/Search.svg"
                        alt="IconSearch"
                        width={19}
                        height={19}
                    />
                    <div className="flex min-w-0 flex-1 flex-col">
                        <input
                            type="text"
                            placeholder="Riot ID + тег"
                            className="w-full min-w-0 bg-transparent font-roboto text-[12px] text-white outline-none placeholder:text-[#687983]"
                        />
                    </div>
                    <select
                        defaultValue="EUW"
                        className="cursor-pointer appearance-none bg-transparent font-roboto text-[12px] font-bold text-[#e6b94d] outline-none"
                    >
                        <option value="EUW">EUW</option>
                        <option value="EUNE">EUNE</option>
                        <option value="NA">NA</option>
                        <option value="KR">KR</option>
                    </select>
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
            </div>
            <div className="flex justify-between items-center py-[46px]">
                <div className="flex flex-col gap-[12px] max-w-[360px]">                            
                    <Link href="/" className="flex items-center gap-[12px]">
                        <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[8px] border-2 border-blue gap-[12px]">                            
                            <Image
                                src="/logo.svg"
                                alt="RiftScope"
                                width={21}
                                height={21}
                                style={{ width: "21px", height: "21px" }}
                            />
                        </div>
                        <div className="flex">
                            <span className="text-body text-[20px] text-white">
                                Rift
                            </span>
                            <span className="text-body text-[20px] text-blue">
                                Scope
                            </span>
                        </div>
                    </Link>
                    <span className="font-inter font-normal text-[10px] text-grey">Незалежна аналітична платформа для League of Legends. Не пов’язана з Riot Games.</span>
                </div>
                <div className="flex justify-between gap-[42px]">
                    {
                        footUrl.map((item, i) => (
                            <Link key={i} href={item.url} className="flex flex-col">
                                <span className="font-robot font-normal text-[8px] text-blue">{item.label}</span>
                                <span className="font-inter font-normal text-[10px] text-[#9CB0B3]">{item.text}</span>
                            </Link>
                        ))
                    }
                </div>
                <div className="flex items-center gap-[8px]"> 
                    <span className="inline-block h-[6px] w-[6px] rounded-full bg-green" />
                    <span className="font-roboto text-[8px] font-bold text-grey">
                        ALL SYSTEMS OPERATIONAL
                    </span>
                </div>
            </div>
        </div>
    )
}