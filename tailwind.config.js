/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      'raleway': ['"Raleway"'],
    },
    extend: {
      colors: {
        'bgprimary' : '#FEFEFE',
        'black' : '#000000',
        'lightgrey' : '#A4A4A4',
        'grey' : '#818181',
        'lightblue': '#EEF4FF',
        'blue' : '#1B87DC',
        'buttonblue' : '#5DAFEF',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
