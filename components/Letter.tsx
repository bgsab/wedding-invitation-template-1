import Image from "next/image"
import Flower2 from "../public/images/flower2.png"
import Flower3 from "../public/images/flower3.png"
import LetteImg from "../public/images/letter.png"

interface IProps {
    names: string[],
    text: string[],
    language: string
}

const letterHeading: { [key: string]: string } = {
    ru: "Дорогие гости",
    en: "Dear Guests",
    uz: "Hurmatli mehmonlar"
}

const Letter = async ({ names, text, language }: IProps) => {
    return (
        <div className="px-[15px]">
            <div className="relative max-w-[480px] mx-auto">
                <Image src={LetteImg} alt="" className="w-full h-full scale-[1.03] absolute top-0 bottom-0 left-0 right-0 virez" />
                <div className="relative transform-[translateY(40px)] bg-[#ebeadd] text-[#2b1105] rounded-[4px] overflow-hidden mx-auto text-[15px] py-10 px-5 sm:px-15 text-justify w-full">
                    <Image src={Flower2} alt="" className="h-[100px] object-contain absolute top-0 right-[-40px] w-[100px] rotate-[-30deg] drop-shadow-[4px_4px_8px_rgba(0,0,0,0.5)]" />
                    <h3 className="pb-7 text-center text-3xl tracking-widest">{letterHeading[language]}</h3>
                    <p className="pb-2 tracking-wider text-2xl">
                        {text[0]}
                        <br/>
                        <br/>
                        {text[1]}</p>
                    <p className="mx-auto text-center pt-7 text-3xl">{`${names[0][0]}  &  ${names[1][0]}`}</p>
                    <Image src={Flower3} alt="" className="drop-shadow-[4px_4px_8px_rgba(0,0,0,0.5)] h-[70px] sm:h-[100px] object-contain z-0 absolute bottom-[-20px] sm:bottom-[-50px] left-[-30px] sm:left-[-10px] w-[100px] rotate-[30deg]" />
                </div>
            </div>
        </div>
    )
}

export default Letter