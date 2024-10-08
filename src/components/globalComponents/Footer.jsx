import React, { useState } from 'react'
import {motion} from 'framer-motion'
import Magnetic from './Button/Magnetic'
import Logo from './Logo'

function Footer({loco}) {

  return (
    <footer className=" bg-mwhite  ">
        <div className='myContainer'>
        <motion.hr
          className=" w-full h-[3px] bg-black origin-left z-20"
          initial={{ scaleX: 0 }}
          whileInView={{
            scaleX: 1,
            transition: { delay: 0.2, duration: 0.5, ease: "easeOut" },
          }}
        />
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.2, duration: 0.5, ease: "easeOut" },
          }}
          className="flex flex-col md:flex-row gap-4 md:gap-10 mt-8 mb-6 w-full z-[120]"
        >
          <Magnetic distance={2}>
            <a href='mailto:ics22124@uom.edu.gr' className="border-solid bg-mblack hover:bg-mblue transition-colors duration-500 text-mwhite px-7 py-4 md:py-0  flex  items-center justify-center  rounded-full text-base font-light tracking-wide">
              info@arisstogiannos.com
            </a>
          </Magnetic>
          <Magnetic distance={2}>
            <a href="tel:+306982163367" className="border-solid bg-mblack hover:bg-mblue transition-colors duration-500 text-mwhite px-7 py-4 md:py-0  flex  items-center justify-center  rounded-full text-base font-light tracking-wide">
              6982163367
            </a>
          </Magnetic>
         <Logo loco={loco} color={"black"} classes={" -top-[3px] "} position={"md:ml-auto max-md:mx-auto"}/>
        </motion.div>
        </div>
      </footer>
  )
}

export default Footer