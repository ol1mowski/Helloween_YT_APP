/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orangeDark: "#A24304",
        transparentDark: "rgba(45, 46, 45, .7)",
        lightWhite: "rgba(255, 255, 255, .6)",
      },
      fontFamily: {
        header: "Creepster",
      },
      lineHeight: {
        headerHeight: "7rem",
      },
      width: {
        pumpkinWidth: "80rem",
      }
    },
  },
  plugins: [],
};

