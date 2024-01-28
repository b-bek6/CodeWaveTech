'use client'
import React, { useEffect, useState } from 'react'

export default function Dates() {
    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const countDownDate = new Date("Feb 30, 2024 15:37:25").getTime();

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateTime();
        }, 1000);

        // Cleanup the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    const updateTime = () => {
        const now = new Date().getTime();

        const distance = countDownDate - now;
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    };
    return (
        <>
            <div className="container max-w-[100vw] mx-[10px] md:text-5xl text-2xl flex gap-2 md:grid grid-cols-7 justify-center items-center  md:gap-1  mt-10">
                <div className="flex flex-col md:gap-4 justify-center">
                    <div className="text-primary bg-white flex justify-center items-center md:w-[90px] md:h-[90px] w-[70px] h-[70px] rounded-full font-bold"> {days} </div>
                </div> :
                <div className="flex flex-col gap-4 justify-center">
                    <div className="text-primary bg-white flex justify-center items-center md:w-[90px] md:h-[90px] w-[70px] h-[70px] rounded-full font-bold"> {hours} </div>
                </div> :
                <div className="flex flex-col gap-4 justify-center">
                    <div className="text-primary bg-white flex justify-center items-center md:w-[90px] md:h-[90px] w-[70px] h-[70px] rounded-full font-bold"> {minutes} </div>
                </div> :
                <div className="flex flex-col gap-4 justify-center">
                    <div className="text-primary bg-white flex justify-center items-center md:w-[90px] md:h-[90px] w-[70px] h-[70px] rounded-full font-bold"> {seconds} </div>
                </div>
            </div>
            <div className="text-5xl flex gap-8 md:grid grid-cols-7 justify-center items-center md:gap-1 mt-4 ">
                <div className="flex flex-col gap-1 justify-center">
                    <p className="font-none text-sm font-extralight">days</p>
                </div>
                <div></div>
                <div className="flex flex-col gap-4 justify-center">
                    <p className="font-none text-sm font-extralight">Hours</p>
                </div>
                <div></div>
                <div className="flex flex-col gap-4 justify-center">
                    <p className="font-none text-sm font-extralight">Minutes</p>
                </div>
                <div></div>
                <div className="flex flex-col gap-4 justify-center">
                    <p className="font-none text-sm font-extralight">Seconds</p>
                </div>
            </div>
        </>
    )
}
