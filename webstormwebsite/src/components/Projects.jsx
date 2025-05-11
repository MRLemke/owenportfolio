import React from "react";
import { Link } from "react-router-dom";

const projects = [
    {
        name: "lpdart",
        slug: "artist-site",
        image: "/artp1.png",
        route: "/artist-site",
        description: "A store website for Linda Donohue, an abstract artist who needed a virtual space to sell her work",
    },
    {
        name: "Art by Maryam",
        slug: "ArtbyMaryam",
        image: "/maryam1.png",
        route: "/ArtbyMaryam",
        description: "A store website for Maryam, an artist who needed categorization and UX help.",
    },
    {
        name: "WoWTeamz",
        slug: "wowteamz",
        image: "/wowteamsscreenshot.png",
        route: "/WoWTeamz",
        description: "A web app to manage World of Warcraft raid teams using Blizzard’s API.",
    },


];

const Projects = () => {
    return (
        <section className="px-6 py-16 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white transition-colors duration-300">
            <h1 className="section-header">Projects</h1>

            <div className="flex flex-col gap-16 max-w-4xl mx-auto">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <img
                            src={project.image}
                            alt={project.name}
                            className="rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] border border-neutral-200 dark:border-neutral-700 mb-6 w-full max-w-xl transition-transform duration-300 hover:scale-[1.02]"
                        />

                        <Link
                            to={project.route}
                            className="inline-block px-5 py-2 rounded-xl mb-4 text-sm font-medium border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
                        >
                            View {project.name}
                        </Link>

                        <p className="body-text max-w-lg">{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;


