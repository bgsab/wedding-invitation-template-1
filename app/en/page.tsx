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
    const language = "en"
    const names = ["Caleb", "Amaya"]
    const date = "July 15, 2026"
    const eventDate = "2026-07-15T15:35:00"
    const month = "July"
    const dayOfWeek = "Monday"
    const LocationLink = "https://yandex.uz/maps/-/CLhHVB3G"
    const textLetter = [
        "We are happy to invite you to a day that will mark the beginning of our family story.",
        "On July 15, 2026, we will say “I do” to each other, and we would be delighted if you shared this exciting and joyful moment with us."
    ]

    return (
        <>
            <Header names={names} />
            <Intro names={names} date={date} language={language} />
            <main className="pt-13 pb-13">
                <Letter names={names} text={textLetter}  language={language}/>
                <Timer eventDate={eventDate} month={month} dayOfWeek={dayOfWeek}  language={language} />
                <Location link={LocationLink}  language={language} />
            </main>
            <Footer  language={language} />
        </>
    );
}

export default Home