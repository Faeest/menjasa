/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                mint: "#1abc9c",
                tiffany: "#7fd8cc",
                gunmetal: "#1f2d3d",
                charcoal: "#2c3e50",
                antiflash: "#e9ecef",
                seasalt: "#f8f9fa",
            },
        },
    },
    plugins: [require("@headlessui/tailwindcss")],
};
