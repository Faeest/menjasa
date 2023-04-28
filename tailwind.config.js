/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: "#1ABC9C",
        black: "#1F2D3D"
      }
    },
    
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}

