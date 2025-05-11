import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import ArtistSite from "./components/ArtistSite";
import WoWTeamz from "./components/WoWTeamz";
import ArtbyMaryam from "./components/ArtbyMaryam";
// Inside <Routes>

import Projects from "./components/Projects";

import "./index.css"; // Tailwind CSS styles

import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import ArtByMaryam from "./components/ArtbyMaryam";


const App = () => {
    // eslint-disable-next-line
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    // eslint-disable-next-line
    const [projectsHeight, setProjectsHeight] = useState(0);
    useEffect(() => {
        AOS.init({
            once: true, // animation triggers only once
            duration: 600, // default duration
            easing: 'ease-out',
        });
    }, []);
    return (
        <Router>
            <>

                <Intro />
                <Routes>
                    <Route path="/" element={<Projects setProjectsHeight={setProjectsHeight} />} />
                    <Route path="/about" element={<AboutMe />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/artist-site" element={<ArtistSite />} />
                    <Route path="/WoWTeamz" element={<WoWTeamz />} />
                    <Route path="/ArtByMaryam" element={<ArtbyMaryam />} />
                </Routes>
            </>
        </Router>
    );
};

export default App;