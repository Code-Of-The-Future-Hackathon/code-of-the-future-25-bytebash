import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
    images: {
        domains: [
            "res.cloudinary.com",
            "images.unsplash.com",
            "images.pexels.com",
            "randomuser.me",
            "i.imgur.com"
            // Allow images from RandomUser
        ],
    },
};

export default config;
