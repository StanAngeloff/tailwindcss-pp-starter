const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  theme: {
    container: { },
    extend: {
      colors: {
        // See → https://github.com/tailwindlabs/tailwindcss/blob/v3.0.23/src/public/colors.js
        //     → https://moh-slimani.github.io/tailwind-css-color-matcher/
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1366px',
      '2xl': '1920px',

      'max-xs': { max: '374.98px' },
      'max-sm': { max: '639.98px' },
      'max-md': { max: '767.98px' },
      'max-lg': { max: '991.98px' },
      'max-xl': { max: '1365.98px' },
    },
    fontFamily: {
      body: [...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),

    plugin(function ({ addVariant }) {
      // addVariant('no-js', '.no-js &');
      // addVariant('js', '.js &');
    }),
  ],
  content: ['public/**/*.html'],
  safelist: [],
};
