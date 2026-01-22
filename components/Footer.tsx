import Image from "next/image"
import footerImage from "../public/images/footer2.png"
const Footer = () => {
    return (
        <footer className="relative">
            <p className="text-center text-4xl tracking-widest text-[#686868] max-w-[400px] mx-auto relative z-2 px-5 pt-20">We look forward to seeing you with us on this important day for us.</p>
            <Image src={footerImage} alt="" className="absolute z-1 top-0 bottom-0 left-0 right-0" />
        </footer>
    )
}

export default Footer