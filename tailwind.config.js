/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        light: ["light", "-apple-system", "system-ui", "sans-serif"],
        medium: ["medium", "-apple-system", "system-ui", "sans-serif"],
        bold: ["bold", "-apple-system", "system-ui", "sans-serif"],
      },
      colors: {
        blue: "#4F73D0",
        darkBlue: "#224DBA",
        shadowColor: "rgba(0, 0, 0, 0.08)",
        gray: "#9D9D9D",
        lightGray: "#E7E7E7",
        inputBg: "#FDFDFD",
        black: "#2D2D2D",
      },
      boxShadow: {
        btn: "0px 3px 4px rgba(0, 0, 0, 0.08)",
        btnHover: "0px 4px 4px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
