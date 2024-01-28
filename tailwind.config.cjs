/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', "./src/**/*.tsx", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        navBar: '#012B83',
        header: '#e9e2d8'
      },
      flex: {
        '2': '2 2 0%'
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      inset: {
        '16': '400rem'
      },
      scale: {
        '175': '1.75',
        '200': '2'
      },
    },
  },
  plugins: [],
  important: false,
}
