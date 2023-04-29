/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
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
                mono: {
                    100:"#F8F9FA",
                    200:"#E9ECEF",
                    300:"#DEE2E6",
                    400:"#CED4DA",
                    500:"#ADB5BD",
                    600:"#6C757D",
                    700:"#495057",
                    800:"#343A40",
                    900:"#212529",
                },
            },
        },
    },
    plugins: [require("@headlessui/tailwindcss")],
};
