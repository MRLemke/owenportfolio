import React from "react";
import { Link } from "react-router-dom";

const WoWTeamz = () => {
    return (
        <div className="px-6 py-16 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white min-h-screen transition-colors duration-300">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                <h1 className="section-header mb-6">WoWTeamz</h1>

                {/* Static Preview Image */}
                <img
                    src="/wowteamsscreenshot.png"
                    alt="WoWTeamz Preview"
                    className="rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] border border-neutral-200 dark:border-neutral-700 w-full max-w-2xl mb-8"
                />

                {/* GitHub Link */}
                <a
                    href="https://github.com/conboyr/WowTeamz"
                    className="inline-block px-5 py-2 rounded-xl mb-4 text-sm font-medium border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on GitHub
                </a>

                <p className="body-text max-w-lg">
                    WoWTeamz is a web application that helps World of Warcraft guilds manage raid teams. It features character tracking, role balancing, and real-time syncing with Blizzard's API. Built using React, Node.js, MySQL, and JWT authentication.
                </p>

                <Link
                    to="/"
                    className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-300 mt-8"
                >
                    ← Back to Projects
                </Link>
            </div>
        </div>
    );
};

export default WoWTeamz;