import React from 'react'
import localfont from 'next/font/local'

const hanson=localfont({src:'../../../fonts/Hanson-Bold.ttf'})
const satoshiBold = localfont({src:'../../../fonts/OTF/Satoshi-Bold.otf'})

function Hero() {
  return (
    <section className='bg-mblack h-screen w-[1440px] mx-auto flex justify-start'>
        <h1 style={hanson.style} className='text-[100px] w-[1500px] mt-16 text-mwhite'>Let’s Design & Build Your Website Together</h1>
    </section>
  )
}

export default Hero