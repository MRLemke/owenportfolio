import React, { useState } from "react";
import { Link } from "react-router-dom";

const images = [
    "/maryam1.png",
    "/maryam2.png",
    "/maryam3.png",
    "/maryam4.png",
];

const ArtByMaryam = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="px-6 py-16 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white min-h-screen transition-colors duration-300">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                <h1 className="section-header mb-6">Art By Maryam</h1>

                {/* Slideshow */}
                <div className="relative w-full max-w-2xl mb-8">
                    <img
                        src={images[current]}
                        alt={`Slide ${current + 1}`}
                        className="rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] border border-neutral-200 dark:border-neutral-700 w-full transition-all duration-500"
                    />
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-white px-3 py-1 rounded-l-md shadow hover:bg-neutral-300 dark:hover:bg-neutral-600 transition"
                    >
                        ‹
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-white px-3 py-1 rounded-r-md shadow hover:bg-neutral-300 dark:hover:bg-neutral-600 transition"
                    >
                        ›
                    </button>
                </div>

                {/* Link + Description */}
                <a
                    href="https://art-by-maryam"
                    className="inline-block px-5 py-2 rounded-xl mb-4 text-sm font-medium border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Live Site
                </a>

                <p className="body-text max-w-lg">
                    I redesigned an artist's website by adding a commission form and reorganized 200 products into
                    categories and created a script that added a print version of each product.
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

export default ArtByMaryam;