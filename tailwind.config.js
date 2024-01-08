/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: '#D7A830',
          gray: '#6C6C70',
        },
      },
      textShadow: {
        custom: '0px 0px 30px rgba(102, 204, 255, 0.20)',
      },
    },
  },
  plugins: [],
}
