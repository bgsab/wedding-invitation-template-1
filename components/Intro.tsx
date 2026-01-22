import Image from "next/image"
import IntroImg from "../public/images/intro.jpg"

interface IProps {
    names: string[],
    date: string,
    language: string
}

const welcome: { [key: string]: string } = {
    ru: "Пожалуйста, присоединяйтесь к нашему празднику",
    en: "Please join us to celebrate",
    uz: "Iltimos, nishonlash uchun bizga qo'shiling"
}

const Intro = async ({ names, date, language }: IProps) => {
    return (
        <>
            <div className="pt-11">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-4">
                        <p className="text-[#2b1105] text-2xl text-center tracking-wider">{welcome[language]}</p>
                        <div className="flex flex-row justify-center gap-4 sm:gap-8 items-center">
                            <p className="text-[#2b1105] text-7xl sm:text-8xl text-center">{names[0]}</p>
                            <p className="text-[#2b1105] text-6xl sm:text-7xl text-center">&</p>
                            <p className="text-[#2b1105] text-7xl sm:text-8xl text-center">{names[1]}</p>
                        </div>
                        <p className="text-[#2b1105] text-2xl text-center tracking-wider">{date}</p>
                    </div>
                    <Image src={IntroImg} alt="" className="     w-full object-cover" />
                </div>
            </div>
        </>
    )
}

export default Intro