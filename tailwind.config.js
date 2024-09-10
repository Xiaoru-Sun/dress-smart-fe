/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        lobster: ["Lobster", "sans-serif"],
      },
      colors: {
        primary: "#ED67E2",
        secondary: "#6622CC",
        mainFont: "#4A4A4A",
        validationTrue: "#2BA84A",
      },
    },
    plugins: [],
  },
};
