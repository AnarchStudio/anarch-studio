/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        attract: ["var(--font-urbanist)", "sans-serif"],
        crap: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
