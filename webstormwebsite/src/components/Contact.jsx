import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://charming-nature-production.up.railway.app/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Error: " + data.error);
            }
        } catch (error) {
            console.error(error);
            alert("Failed to send message.");
        }
    };

    return (
        <div className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white px-6 py-16 min-h-screen flex flex-col items-center transition-colors duration-300">
            <h1 className="section-header">Contact Me</h1>

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-xl space-y-6 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow-sm p-6 bg-neutral-50 dark:bg-neutral-800 transition-colors duration-300"
            >
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 dark:bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition"
                >
                    Send Message
                </button>
            </form>

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

export default Contact;
