/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          950: '#17275c',
        },
      },
      backgroundImage: {
        'background-image': "url('./public/assets/background-portfolio.png')",
      },
      fontFamily: {
        'primary': ['Poppins', 'sans-serif'],
        'secondary': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
