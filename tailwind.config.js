/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00FFC2",
        "background-dark": "#020B18",
        "column-dark": "rgba(255, 255, 255, 0.015)",
        "card-pink": "#FF2E63",
        "card-teal": "#00D1FF",
        "card-blue": "#4D77FF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
        accent: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
