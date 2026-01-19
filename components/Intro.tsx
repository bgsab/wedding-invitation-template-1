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
            <div className="pt-11">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <p className="text-[#2b1105] text-2xl text-center">Please join us to celebrate</p>
                        <div className="flex flex-row justify-center gap-4 sm:gap-8 items-center">
                            <p className="text-[#2b1105] text-7xl sm:text-8xl text-center">{names[0]}</p>
                            <p className="text-[#2b1105] text-6xl sm:text-7xl text-center">&</p>
                            <p className="text-[#2b1105] text-7xl sm:text-8xl text-center">{names[1]}</p>
                        </div>
                        <p className="text-[#2b1105] text-2xl text-center">{date}</p>
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