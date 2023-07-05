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
        'states-danger': '#F0E3E4',
        'danger': '#D0021B',
        'cfblue-400' : '#5DAFEF',
        'mineshaft-200' : '#C8C8C8',
        'mineshaft-300' : '#A4A4A4',
        'warning' : '#E7B53B',
        'sukses' : '#3EAF76',
        "neutral-10": "#FFFFFF",
        "primary-main" : '#1B87DC',
        'danger-main': '#D0021B',


      },

      borderRadius: {
          sm: "12px",
          md: "16px",
          lg: "25px",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
