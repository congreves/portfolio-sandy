/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        satoshi: "Satoshi, black",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [require("tailwindcss-filters")],
};
