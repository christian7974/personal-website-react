/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '30rem',
        'about-photo': '19rem'
      },
      colors: {
        'periwinkle': '#B5CCF8',
        'night': '#0A0A0A',
        'not-active-link': '#858585', // battleship grey
        'link-hover': '#FFC65C', // xanthous
        'active-link': '#AEEFA9', // celadon
      },
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      'project-desc': '1.1rem',
      'reg-header': '4.5rem',
      'home-header': '5rem',
    }
  },
  plugins: [],
}

