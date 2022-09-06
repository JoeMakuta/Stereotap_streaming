/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'mainFont': 'Poppins, sans-serif;'
    },
    extend: {
      backgroundImage: {
        'mainBackground': "url('./src/Asserts/pexels-gustavo-fring-4127623.jpg')",
        'subMainBackground': "url('./src/Asserts/pexels-andrea-piacquadio-783243.jpg')",
        'thirdBackground': "url('./src/Asserts/pexels-orione-conceição-8663209.jpg')",

      },
      colors: {
        'mainColor': '#2F3444',
        'backOpacity': 'rgba(255,255,255,0.3)',
        'blackOpacity': 'rgba(0,0,0,0.5)'

      },

    },
  },
  plugins: [],
}