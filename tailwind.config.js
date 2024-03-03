/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

// Rotate X utilities
const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.-rotate-x-85': {
      transform: 'rotateX(85deg)',
    },
    '.-rotate-x-45': {
      transform: 'rotateX(-45deg)',
    },
    '.-rotate-x-90': {
      transform: 'rotateX(-90deg) translateY(12px)',
    },
    '.rotate-x-90': {
      transform: 'rotateX(90deg) ',
    },
  })
})

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow':'spin 29s linear infinite',
        'mBounce':'myBounce 1s infinite 0.3s',
        'mBounce-long':'myBounceLong 5s infinite ',
      },
      keyframes:{
        myBounce:{
         ' 0%, 100%' :{
           transform: 'none',
           'animation-timing-function': 'cubic-bezier(0,0,0.2,1)'
          
          },
          ' 50%' : {
            transform: 'translateY(-25%)',
            'animation-timing-function' : 'cubic-bezier(0.8,0,1,1)',
              
          }
      },
        myBounceLong:{
         ' 0%, 100%' :{
           transform: 'none',
          // 'animation-timing-function': 'cubic-bezier(0,0.25,0.50,0.75,1)'
          
          },
          ' 50%' : {
            transform: 'translateY(-15%)',
           // 'animation-timing-function' : 'cubic-bezier(0,0.25,0.50,0.75,1)',
              
          }
      },
      },
      colors:{
        'mwhite':'#D4F1F4',
        'mblack':'#070914'
      },
      
    },
    
  },
  plugins: [rotateX],
};
