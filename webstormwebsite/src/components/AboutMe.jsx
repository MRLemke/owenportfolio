import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Optional helper component for consistency
const Section = ({ title, children }) => (
    <div className="mb-10">
        <h2 className="section-subtitle">{title}</h2>
        <p className="body-text">{children}</p>
    </div>
);

const AboutMe = () => {
    return (
        <div className="px-6 py-16 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white max-w-3xl mx-auto transition-colors duration-300">
            <h1 className="section-header">About Me</h1>

            {/* Profile Image */}
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden mx-auto mb-8">
                <img
                    src="/headshot.jpg"
                    alt="Owen Donohue"
                    className="w-full h-full object-cover"
                />
            </div>

            <Section title="Professional Background">
                Hi! I'm Owen Donohue, a highly motivated recent graduate with a Bachelor's
                degree in Computer Science from Sonoma State University. I’m eager to apply
                my analytical skills and passion for software development — particularly
                web design — to a collaborative, growth-focused environment.
            </Section>

            <Section title="Motivation">
                I've been playing video games since I was 5 years old, and that curiosity
                drove me to learn how computers work. Studying Computer Science deepened my
                love for problem-solving and building meaningful technology.
            </Section>

            <Section title="Personal">
                Outside of work, I love cooking new recipes, gaming, hiking, and playing
                trumpet in my local community band.
            </Section>

            {/* Education */}
            <div className="mb-10">
                <h2 className="section-subtitle">Education</h2>
                <p className="body-text">
                    Sonoma State University<br />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
            B.S. in Computer Science, 2020–2024
          </span>
                </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 text-2xl mt-12">
                <a
                    href="https://github.com/MRLemke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/owen-donohue-7a2474254/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="mailto:owenpdonohue@gmail.com"
                    className="text-neutral-700 dark:text-neutral-300 hover:text-green-600 dark:hover:text-green-400 transition"
                >
                    <MdEmail />
                </a>
            </div>
        </div>
    );
};

export default AboutMe;