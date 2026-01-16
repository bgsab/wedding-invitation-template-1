import Image from "next/image"
import IntroImg from "../public/images/intro.jpg"
import PaperTop from "../public/images/papertop.png"
import PaperBottom from "../public/images/paperbottom.png"

interface IProps {
    names: string[],
    date: string,
}

const Intro = async ({ names, date }: IProps) => {
    return (
        <>
            <header className="pt-10">
                <nav className="flex flex-col gap-6">
                    <div className="relative w-max mx-auto">
                        <div className="w-26 h-26 border border-[#2b1105] rounded-full"></div>
                        <div className="text-[#2b1105] text-4xl absolute top-[55%] left-[50%] translate-y-[-50%] translate-x-[-50%]">{`${names[0][0]}&${names[1][0]}`}</div>
                    </div>
                    <ul className="px-20 flex flex-row justify-between items-center">
                        <li className="text-[#2b1105] text-2xl">EN</li>
                        <span className="block w-[1px] h-[50px] bg-[#2b1105]"></span>
                        <li className="text-[#2b1105] text-2xl">RU</li>
                    </ul>
                </nav>
            </header>
            <div className="pt-11">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <p className="text-[#c6754d] font-Times text-2xl text-center">Please join us to celebrate</p>
                        <div className="flex flex-row justify-center gap-4 sm:gap-8 items-center">
                            <p className="text-[#2b1105] text-7xl sm:text-8xl text-center">{names[0]}</p>
                            <p className="text-[#2b1105] text-6xl sm:text-7xl text-center">&</p>
                            <p className="text-[#2b1105] text-7xl sm:text-8xl text-center">{names[1]}</p>
                        </div>
                        <p className="text-[#c6754d] text-2xl text-center">{date}</p>
                    </div>
                    <div className="relative flex flex-col overflow-hidden">
                        <Image src={PaperTop} alt="" className="block absolute -top-10 scale-[1.2]" />
                        <Image src={IntroImg} alt="" className="block h-full w-full object-cover" />
                        <Image src={PaperBottom} alt="" className="block absolute -bottom-10 scale-[1.2]" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro