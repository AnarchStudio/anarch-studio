/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        attract: ["var(--font-bodoni-moda)", "sans-serif"],
        crap: ["var(--font-manrope)", "sans-serif"],
      },
      animation: {
        "appear-up": "cloud-up 1s ease-in-out forwards",
        "appear-down": "cloud-down 1s ease-in-out forwards",
      },
      keyframes: {
        ["cloud-up"]: {
          "0%": {
            opacity: 0,
            transform: "translateY(2rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        ["cloud-down"]: {
          "0%": {
            opacity: 0,
            transform: "translateY(-2rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            h2: {
              "font-family": ["var(--font-bodoni-moda)"]
            }
          }
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
