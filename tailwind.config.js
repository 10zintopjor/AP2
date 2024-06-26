/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#142349',
        customGreen: 'rgb(0, 128, 0)',
        customRed: '#ff0000',
      },
      fontFamily:{
        'defaultFont':["Raleway", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
}

