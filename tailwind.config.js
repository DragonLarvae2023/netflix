/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        formClr: "rgba(5, 4, 4, 0.831);",
        searchBg: "rgba(5, 4, 4, 0.231);",
        formClrLight: "rgba(5, 4, 4, 0.531);",
      },
    },
  },
  plugins: [],
};
