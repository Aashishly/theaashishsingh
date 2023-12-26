/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        custom : ["Druk", "sans-serif"],
        thinCustom : ['Thin-Druk', 'sans-serif']
      },
      gridTemplateColumns : {
        14 : 'repeat(14, minmax(0, 1fr))'
      },
      gridTemplateRows : {
        2 : 'repeat(2, 1fr)'
      }
    },
  },
  plugins: [],
}

