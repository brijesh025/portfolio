/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "rgb(220, 38, 38)", // Tailwind red-600
          dark: "rgb(185, 28, 28)", // Tailwind red-700
        },
        secondary: {
          DEFAULT: "rgb(31, 41, 55)", // Tailwind gray-800
          light: "rgb(75, 85, 99)", // Tailwind gray-600
        },
      },
    },
  },
  plugins: [],
};
