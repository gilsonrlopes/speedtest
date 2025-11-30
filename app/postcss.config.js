module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Remove CSS não utilizado em produção
    ...(process.env.NODE_ENV === 'production'
      ? {
          '@fullhuman/postcss-purgecss': {
            content: [
              './app/**/*.{js,jsx,ts,tsx}',
              './components/**/*.{js,jsx,ts,tsx}',
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
            safelist: {
              standard: ['html', 'body', 'dark'],
              deep: [/^swiper/],
            },
          },
        }
      : {}),
  },
};