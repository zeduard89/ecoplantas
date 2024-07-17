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
    },
  },
  boxShadow:{},
  },
  variants:{
    extends: {}
  },
  plugins: [],
}

