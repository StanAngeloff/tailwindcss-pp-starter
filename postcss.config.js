const path = require('path');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss')(path.resolve(__dirname, 'tailwind.config.js')),
    require('postcss-sort-media-queries')({
      sort: 'mobile-first',
    }),
    require('postcss-preset-env')({
      features: { 'nesting-rules': false },
      autoprefixer: { grid: true },
    }),
  ],
};
