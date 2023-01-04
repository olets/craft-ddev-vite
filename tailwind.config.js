/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.twig',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          craft: '#0B69A3',
        },
      },
      screens: {
        'md+h': {
          raw: '(min-width:768px) and (min-height: 376px)',
        }
      },
    },
  },
  plugins: [
    ({ addBase }) => {
      addBase({
        p: {
          '@apply mb-5': {},
          lineHeight: '1.4em',
        },
        ul: {
          '@apply pl-5 list-disc': {},
          lineHeight: '1.3em',
          marginBottom: 0,

          li: {
            marginBottom: '0.35em',
          },
        },
        a: {
          '@apply hover:underline text-blue-craft': {},
        },
        small: {
          color: 'hsl(211, 11%, 59%)',
        },
        code: {
          '@apply inline-block p-0.5 rounded-sm': {},
          background: 'hsl(212, 60%, 97%)',
          color: '#EF4EFE',
          fontSize: '0.9em',
          lineHeight: '1.3',
        },
      })
    }
  ],
}
