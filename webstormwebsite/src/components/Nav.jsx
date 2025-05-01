import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [darkMode, setDarkMode] = useState(false);
    //const [animating, setAnimating] = useState(false);
    // Sync theme with <html class="dark">
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);


    return (
        <>
            {/* Dark Mode Toggle */}
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="fixed top-4 right-4 z-50 flex items-center space-x-2 bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition-all"
                title="Toggle Dark Mode"
            >
                <span className="text-lg">{darkMode ? "☀️" : "🌙"}</span>
                <span className="text-sm hidden sm:inline">
          {darkMode ? "Light" : "Dark"}
        </span>
            </button>

            {/* Nav Bar */}
            <nav className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm py-3 px-6 rounded-2xl shadow-md flex space-x-6 mx-auto w-fit border border-neutral-200 dark:border-neutral-700 transition-colors duration-300">
                <Link
                    to="/about"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                    About
                </Link>
                <Link
                    to="/#projects"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                    Projects
                </Link>
                <Link
                    to="/contact"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                    Contact
                </Link>
            </nav>
        </>
    );
};

export default Nav;
