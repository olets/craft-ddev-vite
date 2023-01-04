/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.twig',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // name: "url('/dist/images/file.ext')",
      },
    },
  },
  plugins: [],
}
