/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.twig',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'black-square': "url('/dist/images/black-square.svg')",
      },
    },
  },
  plugins: [],
}
