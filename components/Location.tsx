import Image from "next/image";
import Place from "../public/images/weddingplace.jpg"

interface IProps {
    link: string,
    language: string
}

const locationLabel: { [key: string]: string } = {
    ru: "Место проведения",
    en: "Location",
    uz: "Joylashuv"
};

const locationDescription: { [key: string]: string } = {
    ru: "Место, где состоится наше мероприятие",
    en: "The establishment where our event will be held",
    uz: "Tadbirimiz bo‘lib o‘tadigan joy"
};

const openMapLabel: { [key: string]: string } = {
    ru: "Открыть карту",
    en: "Open map",
    uz: "Xaritani ochish"
};

const Location = async ({ link, language }: IProps) => {
    return (
        <div className="pt-5 px-[15px]">
            <h2 className="mx-auto w-max font-mono text-[#c6754d] text-3xl pb-3">{locationLabel[language]}</h2>
            <div className="text-[#2b1105] font-mono max-w-[250px] mx-auto text-center pb-3">{locationDescription[language]}</div>
            <Image src={Place} alt="" className="pb-3"/>
            <a className="bg-[#c6754d] mx-auto w-max text-white font-mono py-2 px-3 block" href={link}>{openMapLabel[language]}</a>
        </div>
    )
}

export default Location