import React, { useState, useEffect } from "react";
import Nav from "./Nav";

const Intro = () => {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const roles = [
        "Software Engineer",
        "Backend Developer",
        "Frontend Developer",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % roles.length);
                setFade(true);
            }, 500);
        }, 4000);
        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <div className="flex flex-col items-center justify-start min-h-[60vh] sm:min-h-[65vh] bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white pt-20 sm:pt-24 md:pt-32 relative transition-colors duration-300">
            <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
                Owen Donohue
            </h1>

            <div
                className={`text-xl sm:text-2xl text-gray-400 dark:text-neutral-400 mb-12 transition-opacity duration-500 ${
                    fade ? "opacity-100" : "opacity-0"
                }`}
            >
                {roles[index]}
            </div>

            <div className="absolute bottom-4 sm:bottom-6">
                <Nav />
            </div>
        </div>
    );
};

export default Intro;
