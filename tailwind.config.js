/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       Primary:"#000000",
       Secondary:"#25282D",
       TextColor:"#B3B3B3",
       Border:"#333333",
       Green:"#1ED760",
       SpGreen:"#1ED760",
       IconDef:"#b3b3b3"

      },
    },
  },
  plugins: [],
}