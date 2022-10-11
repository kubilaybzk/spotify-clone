/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       Header:"#26292E",
       ListBg:"#0F0F0F",
       TextColor:"#9B9B9B",
       SmalTextColor:"#858585",
       BottomMenuColor:"#3E3A39",
       SpGreen:"#1ED760",
       TextColor:"#AEAEB3"

      },
    },
  },
  plugins: [],
}