const { transparent } = require("tailwindcss/colors");
const colors = require("tailwindcss/colors");
module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx,jpg}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'transparent': transparent,
      'black': '#000',
      'darkgray': '#333',
      'white': '#ffffff',
      'red': '#FF5858',
      'gray': '#212121',
      'lightgray': '#777'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}