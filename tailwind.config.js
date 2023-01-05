/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.twig',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'black-square': "url('/dist/public/images/black-square.svg')",
      },
    },
  },
  plugins: [],
}
