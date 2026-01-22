"use client"
import { useEffect, useState } from "react";
import Flower from "../public/images/flower4.png"
import Flower2 from "../public/images/flower2.png"
import Flower3 from "../public/images/flowerInbottle.png"
import Image from "next/image";

interface IProps {
    eventDate: string,
    month: string,
    dayOfWeek: string
}

interface ITimeLeft {
    days: number,
    hours: number,
    minutes: number,
    seconds: number,

}

const Timer = ({ eventDate, month, dayOfWeek }: IProps) => {
    const [timeLeft, setTimeLeft] = useState<ITimeLeft | false>(false);

    useEffect(() => {
        const targetDate: Date = new Date(eventDate);

        const timer = setInterval(() => {
            const now: Date = new Date();
            const difference = targetDate.getTime() - now.getTime();
            if (difference <= 0) {
                clearInterval(timer);
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
                return;
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const eventDay = eventDate.split("-")[2].split("T")[0]
    return (
        <>
            <div className="py-30 relative overflow-hidden">
                <h2 className="text-[#c6754d] font-mono text-3xl text-center pb-15">Time left until the event</h2>
                <div className="flex flex-row gap-15 justify-center">
                    <div className="flex flex-col items-center text-3xl gap-2">
                        <p className="text-4xl font-mono text-[#2b1105]">{timeLeft == false ? "00" : timeLeft.days >= 10 ? timeLeft.days : `0${timeLeft.days}`}</p>
                        <div className="w-full h-[1px] border-b border-b-[#2b1105] border-dotted"></div>
                        <span className="text-[1.2rem] capitalize font-mono">days</span>
                    </div>
                    <div className="flex flex-col items-center text-3xl gap-2">
                        <p className="text-4xl font-mono text-[#2b1105]">{timeLeft == false ? "00" : timeLeft.hours >= 10 ? timeLeft.hours : `0${timeLeft.hours}`}</p>
                        <div className="w-full h-[1px] border-b border-b-[#2b1105] border-dotted"></div>
                        <span className="text-[1.2rem] capitalize font-mono">hours</span>
                    </div>
                    <div className="flex flex-col items-center text-3xl gap-2">
                        <p className="text-4xl font-mono text-[#2b1105]">{timeLeft == false ? "00" : timeLeft.minutes >= 10 ? timeLeft.minutes : `0${timeLeft.minutes}`}</p>
                        <div className="w-full h-[1px] border-b border-b-[#2b1105] border-dotted"></div>
                        <span className="text-[1.2rem] capitalize font-mono">min</span>
                    </div>
                    <div className="flex flex-col items-center text-3xl gap-2">
                        <p className="text-4xl font-mono text-[#2b1105]">{timeLeft == false ? "00" : timeLeft.seconds >= 10 ? timeLeft.seconds : `0${timeLeft.seconds}`}</p>
                        <div className="w-full h-[1px] border-b border-b-[#2b1105] border-dotted"></div>
                        <span className="text-[1.2rem] capitalize font-mono">sec</span>
                    </div>
                </div>
                <Image src={Flower} alt="" className="w-[50px] rotate-12 absolute bottom-0 -left-[10px] drop-shadow-[4px_4px_8px_rgba(0,0,0,0.5)]" />
                <Image src={Flower2} alt="" className="w-[50px] -rotate-30 absolute bottom-1/2 -right-[10px] drop-shadow-[4px_4px_8px_rgba(0,0,0,0.5)]" />
                <div className="pt-25 flex flex-col gap-10 items-stretch px-[20px]">
                    <div className="self-start">
                        {dayOfWeek.split("").map((letter, i) => (
                            <div key={i} className="self-center flex flex-row font-mono text-[#2b1105] text-[2.15rem] tracking-widest capitalize before:content-[''] before:w-[1px] before:mx-[20px] text-center before:min-h-full before:block before:bg-[#c6754d] after:content-[''] after:w-[1px] after:mx-[20px] after:min-h-full after:block after:bg-[#c6754d]">{letter}</div>

                        ))}
                    </div>
                    <div className="self-center flex flex-row">
                        <Image src={Flower3} alt="" className="w-[100px] drop-shadow-[4px_4px_8px_rgba(0,0,0,0.5)]" />
                        <div className="text-[3rem] self-end uppercase font-mono leading-[39px] text-[#2b1105]">{eventDay}</div>
                    </div>
                    <div className="self-end">
                        {month.split("").map((letter, i) => (
                            <div key={i} className="flex flex-row font-mono text-[#2b1105] text-[2.15rem] tracking-widest capitalize before:content-[''] before:w-[1px] before:mx-[20px] text-center before:min-h-full before:block before:bg-[#c6754d] after:content-[''] after:w-[1px] after:mx-[20px] after:min-h-full after:block after:bg-[#c6754d]">{letter}</div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timer