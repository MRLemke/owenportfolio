const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// POST /contact endpoint
app.get("/", (req, res) => {
    res.send("API is running");
});
app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    if (!email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail", // or another provider
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: "New Contact Form Submission",
            text: message,
        });

        res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error("Error sending mail:", error);
        res.status(500).json({ error: "Failed to send message." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});