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
        'mainBackground': "url('./src/Asserts/pexels-gustavo-fring-4127623.jpg')"
      },
      colors: {
        'mainColor': '#2F3444'
      },
    },
  },
  plugins: [],
}