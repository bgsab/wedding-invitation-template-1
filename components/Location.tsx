"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Pagination } from 'swiper/modules';
import Image from "next/image";
import Place from "../public/images/weddingplace.jpg"
import Place2 from "../public/images/weddingplace2.jpg"
import Place3 from "../public/images/weddingplace3.jpg"
import 'swiper/css';
import 'swiper/css/pagination';


interface IProps {
    link: string,
    language: string
}

const placeImages = [{ src: Place }, { src: Place2 }, { src: Place3 }]

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

const Location = ({ link, language }: IProps) => {
    return (
        <div className="pt-5">
            <h2 className="mx-auto w-max font-mono text-[#c6754d] text-3xl pb-3">{locationLabel[language]}</h2>
            <div className="text-[#2b1105] font-mono max-w-[250px] mx-auto text-center pb-3">{locationDescription[language]}</div>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                modules={[Pagination]}
                loop={true}
                pagination={{
                    dynamicBullets: true
                }}

            >
                {placeImages.map((image, i) => (
                    <SwiperSlide key={i} className="px-[10px]">
                        <Image src={image.src} alt="" className="align-middle block h-[300px] object-cover object-center" />
                    </SwiperSlide>
                ))}
            </Swiper>

            <a className="bg-[#c6754d] mt-3 mx-auto w-max text-white font-mono py-2 px-3 block" href={link}>{openMapLabel[language]}</a>
        </div >
    )
}

export default Location