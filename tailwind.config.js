const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "brand-light-green": "#73E0A9",
      "brand-white": "#E6E6E6",
      "brand-gradient-black-transparent": "rgba(5,5,5,0.71)",
    },
    extend: {
      backgroundImage: {
        "brand-gradient-white-green":
          "linear-gradient(90deg, #73E0A9 0%, #3F7A5C 100%)",
        "brand-gradient-border":
          "linear-gradient(100.76deg, rgba(244, 47, 254, 0.76) 2.05%, rgba(20, 19, 20, 0.76) 47.25%, rgba(137, 253, 145, 0.76) 96.22%)",
        "brand-gradient-button":
          "linear-gradient(90deg, #E0FF8A 0%, #FFA3EB 61.99%)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
