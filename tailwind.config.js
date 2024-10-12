/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: "#141615",
        secondary: "#F8F8F8",
        lightGrey: "#EBEDEE",
      },
      fontFamily: {
        montsserat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}

