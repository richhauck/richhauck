const colors = require("tailwindcss/colors");
module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx,jpg}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'black': '#000',
      'darkgray': '#333',
      'white': '#ffffff',
      'red': '#FF5858',
      'gray': '#212121',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}