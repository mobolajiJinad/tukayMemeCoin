/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        RubikGlitch: ["Rubik Glitch"],
        DMSerif: ["DM Serif"],
      },
    },
  },
  plugins: [],
};
