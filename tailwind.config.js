/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       Primary:"#22252A",
       Secondary:"#25282D",
       TextColor:"#B3B3B3",
       SmalTextColor:"#858585",
       BottomMenuColor:"#3E3A39",
       SpGreen:"#1ED760",
       TextColor:"#AEAEB3"

      },
    },
  },
  plugins: [],
}