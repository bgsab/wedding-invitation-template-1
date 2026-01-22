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
    const language = "ru"
    const names = ["Caleb", "Amaya"]
    const date = "Июль 15, 2026"
    const eventDate = "2026-07-15T15:35:00"
    const month = "Июль"
    const dayOfWeek = "Понедельник"
    const LocationLink = "https://yandex.uz/maps/-/CLhHVB3G"
    const textLetter = [
        "Мы с радостью приглашаем вас на день, который станет началом истории нашей семьи.",
        "Июля 15, 2026 мы скажем друг другу заветное «да» и будем очень рады, если вы разделите с нами этот волнующий и радостный момент."
    ]

    return (
        <>
            <Header names={names} />
            <Intro names={names} date={date} language={language} />
            <main className="pt-13 pb-13">
                <Letter names={names} language={language} text={textLetter} />
                <Timer eventDate={eventDate} month={month} dayOfWeek={dayOfWeek} language={language} />
                <Location link={LocationLink} language={language} />
            </main>
            <Footer language={language} />
        </>
    );
}

export default Home