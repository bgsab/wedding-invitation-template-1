import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Letter from "@/components/Letter";
import Location from "@/components/Location";
import Timer from "@/components/Timer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Caleb And Amaya",
    description: "Caleb And Amaya Wedding invitation",
};

const Home = async () => {
    const language = "uz";
    const names = ["Caleb", "Amaya"];
    const date = "15 Iyul, 2026";
    const eventDate = "2026-07-15T15:35:00";
    const month = "Iyul";
    const dayOfWeek = "Dushanba";
    const LocationLink = "https://yandex.uz/maps/-/CLhHVB3G";
    const textLetter = [
        "Biz sizni oilamiz tarixining boshlanishiga aylanuvchi kunga mamnuniyat bilan taklif qilamiz.",
        "15 Iyul, 2026 kuni biz bir-birimizga “ha” deymiz va ushbu hayajonli hamda quvonchli onni biz bilan birga baham ko‘rsangiz, juda xursand bo‘lamiz."
    ];
    return (
        <>
            <Header names={names} />
            <Intro names={names} date={date} language={language} />
            <main className="pt-13 pb-13">
                <Letter names={names} text={textLetter} language={language} />
                <Timer eventDate={eventDate} month={month} dayOfWeek={dayOfWeek} language={language} />
                <Location link={LocationLink} language={language} />
            </main>
            <Footer language={language} />
        </>
    );
}

export default Home