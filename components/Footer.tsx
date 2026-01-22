import Image from "next/image"
import footerImage from "../public/images/footer2.png"
interface IProps {
    language: string
}

const invitationClosing: { [key: string]: string } = {
    ru: "Мы с нетерпением ждем встречи с вами в этот важный для нас день.",
    en: "We look forward to seeing you with us on this important day for us.",
    uz: "Biz sizni bu biz uchun muhim kunda kutib olishni intiqlik bilan kutamiz."
};

const Footer = async ({ language }: IProps) => {
    return (
        <footer className="relative">
            <p className="text-center text-4xl tracking-widest text-[#686868] max-w-[450px] mx-auto relative z-2 px-5 pt-20">{invitationClosing[language]}</p>
            <Image src={footerImage} alt="" className="absolute z-1 top-0 bottom-0 left-0 right-0" />
        </footer>
    )
}

export default Footer