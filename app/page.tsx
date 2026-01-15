import Intro from "@/components/Intro";
import Main from "@/components/Main";


const Home = async () => {
    const names = ['Caleb', 'Amaya']
    const date = 'July 15, 2022'
    return (
        <>
            <Intro names={names} date={date} />
            <Main  names={names} date={date}/>
        </>
    );
}

export default Home