import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Letter from "@/components/Letter";
import Location from "@/components/Location";
import Timer from "@/components/Timer";


const Home = async () => {
    const names = ["Caleb", "Amaya"]
    const date = "July 15, 2026"
    const eventDate = "2026-07-15T15:35:00"
    const month = "July"
    const dayOfWeek = "Monday"
    const LocationLink = "https://yandex.uz/maps/-/CLhHVB3G"
    return (
        <>
            <Header names={names} />
            <Intro names={names} date={date} />
            <main className="pt-13 pb-13">
                <Letter names={names} date={date} />
                <Timer eventDate={eventDate} month={month} dayOfWeek={dayOfWeek} />
                <Location link={LocationLink} />
            </main>
            <Footer />
        </>
    );
}

export default Home