module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss')({
      content: ['./public/index.html', './public/script.js'],
      defaultExtractor: (content) => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g),
    }),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
