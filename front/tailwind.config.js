/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{},
      colors: {
        navBarColor:'#525252',
        
      },
      animation:{
        
        slideDown: 'slideDown 3s',
        slideLeft: 'slideLeft 2s',
        slide: 'slide 1s ease-in-out',

      },
      keyframes:{
        
        slideDown:{
          '0%':{
            transform: 'translateY(-25rem)',
          },
          '100%':{
            transform: 'translateY(0rem)'
          }
        },
        slideLeft:{
          '0%':{
            transform: 'translatex(-7rem)',
            opacity:'0%'
          },
          '25%':{
            opacity:'0%'
          },
          '55%':{
            opacity:'50%'
          },
          '100%':{
            transform: 'translatex(0rem)',
            opacity:'0%'
          }
        },
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
  },
  boxShadow:{},
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
}

