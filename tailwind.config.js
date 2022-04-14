module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx,jpg}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
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