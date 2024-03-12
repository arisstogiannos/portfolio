import React from 'react'

function Light({flag}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="130" height="126" viewBox="0 0 173 126" fill="none" className={`${flag ? 'opacity-100' : 'opacity-0'} transition duration-300`}>
  <g filter="url(#filter0_f_1_671)">
    <path d="M146.459 100L110.099 -19L67.5547 -19L26.0001 100L146.459 100Z" fill="url(#paint0_linear_1_671)"/>
    <path d="M146.459 100L110.099 -19L67.5547 -19L26.0001 100L146.459 100Z" stroke="black" strokeWidth="0.208406"/>
  </g>
  <defs>
    <filter id="filter0_f_1_671" x="0.219418" y="-44.7382" width="172.014" height="170.476" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="12.817" result="effect1_foregroundBlur_1_671"/>
    </filter>
    <linearGradient id="paint0_linear_1_671" x1="86.2296" y1="100" x2="86.2296" y2="-19" gradientUnits="userSpaceOnUse">
      <stop stopColor="#D4F1F4" stopOpacity="0.06"/>
      <stop offset="1" stopColor="#008080" stopOpacity="0.60"/>
    </linearGradient>
  </defs>
</svg>
  )
}

export default Light