import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return(
        <header className="h-[76px] w-full border-b border-[#1B3440]">
            <div className="flex justify-between border-b border-[#1B3440] px-[clamp(24px,5.56vw,80px)] py-[19px]">
                <Link href="/" className="flex items-center gap-[12px]">
                    <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[8px] border-2 border-blue gap-[12px]">                            <Image
                        src="/logo.svg"
                        alt="RiftScope"
                        width={21}
                        height={21}
                        />
                    </div>
                    <div className="flex">
                        <span className="text-body text-[20px] text-white">
                            Rift
                        </span>
                        <span className="text-body text-[20px] text-blue">
                            Scope
                        </span>
                        <span className="font-robot ml-[12px] rounded-[4px] border-solid border-[1px] border-yellow px-[6px] py-[4px] text-[8px] font-bold leading-none text-yellow">
                            BETA
                        </span>
                    </div>
                </Link>
                <nav className="flex items-center w-[353px]">
                    <ul className="flex items-center gap-[28px]">
                        <li className="text-min-body text-[12px]"><Link href="/">Огляд</Link></li>
                        <li className="text-min-body text-[12px]"><Link href="/">Чемпіони</Link></li>
                        <li className="text-min-body text-[12px]"><Link href="/">Білди</Link></li>
                        <li className="text-min-body text-[12px]"><Link href="/">Тірлист</Link></li>
                        <li className="text-min-body text-[12px]"><Link href="/">Лідерборд</Link></li>
                    </ul>
                </nav>
                <div className="flex items-center gap-2">
                <div className="flex h-[35px] w-fit items-center gap-[7px] bg-[#0A131C] px-[8px] py-[11px] rounded-[8px] border">
                    <span className="h-[6px] w-[6px] rounded-full bg-green" />
                    <span className="font-roboto text-[10px] font-bold leading-none text-[#9CB0B3]">
                        LIVE DATA
                    </span>
                </div>
                <button type="button" className="ml-[6px] h-[35px] w-[69px] rounded-[8px] border border-[#245363] px-[15px] py-[10px] font-sans text-[12px] font-bold leading-none text-[#EDF7F6]">
                    Увійти
                </button>
                </div>
            </div>
        </header>
    )
}