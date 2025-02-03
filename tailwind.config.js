/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Segoe UI", "Arial", "sans-serif"], 
      },
      animation: {
        "fade-in": "fadeIn 3s ease-out forwards",
        "image-move": "imageMove 6s infinite ease-in-out",
        "image-rotate": "rotate 10s infinite linear",
        "text-fade": "fadeText 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        imageMove: {
          "0%": { transform: "rotate(0deg) translateX(0)" },
          "50%": { transform: "rotate(15deg) translateX(10px)" },
          "100%": { transform: "rotate(0deg) translateX(0)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        fadeText: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },






  plugins: [require('daisyui'),],
  variants: {
    extend: {
      scrollBehavior: ['responsive'],
    },
}
}
