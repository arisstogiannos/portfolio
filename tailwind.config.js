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
        'mBounce-long':'myBounceLong 2s infinite ',
        'background':'background 9s linear infinite'
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
           transform: 'translateY(-40%) translateX(-50%)',
           'animation-timing-function': 'cubic-bezier(0,0,0.2,1)'
          
          },
          ' 50%' : {
            transform: 'translateY(-60%) translateX(-50%)',
            'animation-timing-function' : 'cubic-bezier(0.8,0,1,1)'
              
          }
      },
      background:{
        '0%':{
          left:550,
          top:550,
          
           'animation-timing-function': 'cubic-bezier(0,0.2,0.4,0.6,0.8,1)'
        },
        '25%':{
          left:300,
          top:200,
          
          
           'animation-timing-function': 'cubic-bezier(0,0.2,0.4,0.6,0.8,1)'
        },
        '50%':{
          left:500,
          top:290,
          
           'animation-timing-function': 'cubic-bezier(0,0.2,0.4,0.6,0.8,1)'
        },
        '75%':{
          left:800,
          top:690,
          
           'animation-timing-function': 'cubic-bezier(0,0.2,0.4,0.6,0.8,1)'
        },
        '100%':{
          left:1000,
          top:490,
          
           'animation-timing-function': 'cubic-bezier(0,0.2,0.4,0.6,0.8,1)'
        },
        
        
      }
      },
     
      // colors:{
      //   'mwhite':'#D4F1F4',
      //   'mblack':'#070914',
      //   'mblue' : '#008080',
      // },
      colors:{
        'mwhite':'#FFFFFF',
        'mblack':'#000000',
        'mblue' : '#00A8B7',
      },
      // colors:{
      //   'white':'#000000',
      //   'black':'#FFFFFF',
      //   'mwhite':'#000000',
      //   'mblack':'#FFFFFF',
      //   'mblue' : '#008080',
      // },
      screens:{
        'xsm' : '400px',
        '3xl':'1700px'
      },
    },
    
  },
  plugins: [rotateX],
};
