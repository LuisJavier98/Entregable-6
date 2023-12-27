/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./index.html', "./src/**/*.tsx","./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.neutral,
        red: colors.red,
        blue: colors.sky,
        yellow: colors.amber,
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      inset: {
        '16': '400rem'
      }
    }
  },
  plugins: [],
}
