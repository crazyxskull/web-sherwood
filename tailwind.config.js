/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'xtra': ['Xtra', 'sans-serif'], // 'Xtra' es el font descargado manualmente (del sherwood)
      },
    },
  },
  plugins: [],
}