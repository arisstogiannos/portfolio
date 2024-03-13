import React, { useState } from "react";
import {  motion } from "framer-motion";
import localfont from "next/font/local";

const medium = localfont({ src: "../../../fonts/medium.otf" });

function Project({ i, title, setModal,modal, isInView }) {
  const [isHovered,setIsHovered] = useState(false)
const {active,index} = modal
  
  return (
    <>
      <div
        key={i}
        onMouseEnter={() => {
          setModal({ active: true, index: i });
          setIsHovered(true)
        }}
        onMouseLeave={() => {
          setModal({ active: false, index: i });
          setIsHovered(false)
        }}
        className="transition  duration-1000 flex flex-col-reverse lg:flex-row w-full pt-[40px] pl-[50px] pb-[15px] lg:pt-[70px] lg:pl-[100px] lg:pb-[70px] pr-[100px] gap-5 lg:gap-0  lg:items-center lg:justify-between items-start justify-around cursor-pointer group"
      >
        <motion.h2
        
          custom={i}
          animate={[isInView && { x: 0 },isHovered&&{x:-20 }]}
          initial={[!isInView?{x: -1000  }:{x:0}]}
          style={medium.style}
          transition={index==-1?{
            duration: 0.8,
            ease: [0.215, 0.61, 0.315, 1],
            delay:  i * 0.2, 
          }:{duration: 0.01,
            ease: 'easeIn',
           
            }}
          className="uppercase font-medium  text-[50px] lg:text-3xl m-0 group-hover:opacity-40  transition transform  duration-200 ease-linear text-white"
        >
          {title}
        </motion.h2>
        <motion.p
           custom={i}
           animate={[isInView && { x: 0 },isHovered&&{x:20 }]}
           initial={[!isInView?{x: 1000  }:{x:0}]}
           
           transition={index==-1?{
             duration: 0.8,
             ease: [0.215, 0.61, 0.315, 1],
             delay:  i * 0.2, 
           }:{duration: 0.01,
             ease: 'easeIn',
            
             }}
          className="font-light group-hover:opacity-40 group-hover:translate-x-4 transition duration-200 ease-linear   text-white"
        >
          Design&Development
        </motion.p>
      </div>
      
      <motion.hr
        animate={isInView && { scaleX: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.215, 0.61, 0.315, 1],
          delay:  index * 0.2,
        }}
        initial={{ scaleX: 0,translateY:2}}
        className="w-full h-1 "
      />
    </>
  );
}

export default Project;
