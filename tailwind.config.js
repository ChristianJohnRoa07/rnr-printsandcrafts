/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto:['Roboto', 'sans-serif']
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      blue: "#080915",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#C9D0F3",
      "light-blue": "#10163C",
      red: "#FF9494", //ED4337
      dark_violet: "#525568",
      light_violet: "#c0aae3",
    },
  },
  plugins: [],
}
