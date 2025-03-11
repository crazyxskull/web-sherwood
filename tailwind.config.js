/** @type {import('tailwindcss').Config} */
const FondoMaidmarian = require('./src/assets/ladymarian.png');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'xtra': ['Xtra', 'sans-serif'], // 'Xtra' es el font descargado manualmente (del sherwood)
        'QuadrataOSTBold' : ['QuadrataOSTBold']
      },
    },
    backgroundImage: {
      'maidmarian': `url('${FondoMaidmarian}')`,
    }
  },
  plugins: [require("tailwind-scrollbar")],
}