/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.6s",
      },
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
      fontFamily: {
        light: [
          "light",
          "-apple-system",
          "system-ui",
          "BlinkMacSystemFont",
          "Dubai",
          "Segoe UI",
          "Tahoma",
          "Noto Sans Arabic UI",
          "Dejavu Sans",
          "Arial",
          "sans-serif",
        ],
        bold: [
          "bold",
          "-apple-system",
          "system-ui",
          "BlinkMacSystemFont",
          "Dubai",
          "Segoe UI",
          "Tahoma",
          "Noto Sans Arabic UI",
          "Dejavu Sans",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        blurDarkGreen: "#1cd478c2",
      },
      backgroundImage: {
        heroPattern: "url('/dna.webp')",
      },
    },
  },
  plugins: [],
};
