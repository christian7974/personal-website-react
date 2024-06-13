/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
        'tablet': {'min': '640px', 'max': '1045px'},
        'phone': {'min': '300px', 'max': '639px'},
      },
    extend: {
      
      borderRadius: {
        'inner-link' : "40px"
      },
      height: {
        '128': '30rem',
        'about-photo': '19rem'
      },
      colors: {
        'night': '#0A0A0A',
        'dim-gray': '#707070',
        'project-scroller': '#020813', // nyanza
        'individual-project': '#CBBAA4', // dun
        'featured-project': '#858585', // khaki
        'platinum': '#E2E2E2',
        'link-color': '#fbfbfb'
      },
      backgroundImage: theme => ({
        'gradient-to-45': 
            'linear-gradient(135deg, #030F26, #0A275C)',
      })
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
      'link-size': '1.5rem',
    }
  },
  plugins: [],
}

