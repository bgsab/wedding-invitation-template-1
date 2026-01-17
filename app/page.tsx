import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Letter from "@/components/Letter";
import Timer from "@/components/Timer";


const Home = async () => {
    const names = ["Caleb", "Amaya"]
    const date = "July 15, 2026"
    const eventDate = "2026-07-15T15:35:00"
    const month = "July"
    const dayOfWeek = "Monday"
    return (
        <>
            <Header names={names} />
            <Intro names={names} date={date} />
            <main className="pt-13 pb-20">
                <Letter names={names} date={date} />
                <Timer eventDate={eventDate} month={month} dayOfWeek={dayOfWeek} />
            </main>
        </>
    );
}

export default Home