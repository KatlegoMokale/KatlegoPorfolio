/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
      primary: '#b1a491',
      secondary:'#575757',
      toColor:"#ededef"
      },
      backgroundImage:{
        'whiteroom':"url('/src/Assets/images/backImage.jpg')",
      }
    },
  },
  plugins: [],
}