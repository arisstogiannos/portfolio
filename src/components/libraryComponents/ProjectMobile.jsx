import React, { useEffect, useState } from "react";
import {  motion } from "framer-motion";
import localfont from "next/font/local";
import Image from "next/image";

const medium = localfont({ src: "../../../fonts/medium.otf" });

function ProjectMobile({ i, title, setModal,modal, isInView ,scrollYProgress}) {
  const [isHovered,setIsHovered] = useState(-1)
const {active,index} = modal

useEffect(()=>{
    window.addEventListener('scroll', (e)=>{
        setIsHovered(Math.floor(scrollYProgress.get()))

    })
    
},[]);



  
  return (
    <>
      <div
     
       style={{
        clipPath: i===isHovered ? "inset(0 0 0 0)" : "inset(50% 0 50% 0)",
       
      }}
        key={i}
        onMouseEnter={() => {
          setModal({ active: true, index: i });
          //setIsHovered(true)
        }}
        onMouseLeave={() => {
          setModal({ active: false, index: i });
          //setIsHovered(false)
        }}
        className={`pointer-events-none bg-white ${i===isHovered?'z-50': '-z-30'}  text-mblack transition-all duration-300 ease-linear flex flex-col-reverse lg:flex-row w-full pt-[40px] pl-[50px] pb-[15px] lg:pt-[40px] lg:pl-[100px] lg:pb-[40px] pr-[100px] gap-5 lg:gap-0  lg:items-center lg:justify-between items-start justify-around cursor-pointer group relative`}
      >
        <motion.h2
        
          custom={i}
          animate={[{ x: 0 }]}
          initial={[{x: -1000  }]}
          style={medium.style}
          transition={index==-1?{
            duration: 0.8,
            ease: [0.215, 0.61, 0.315, 1],
            delay:  i * 0.2, 
          }:{duration: 0.01,
            ease: 'easeIn',
           
            }}
          className="uppercase font-medium  text-[50px] m-0 group-hover:opacity-40  transition transform  duration-200 ease-linear"
        >
          {title}
        </motion.h2>
        <motion.p
           custom={i}
           animate={[{ x: 0 }]}
           initial={[{x: 1000  }]}
           
           transition={index==-1?{
             duration: 0.8,
             ease: [0.215, 0.61, 0.315, 1],
             delay:  i * 0.2, 
           }:{duration: 0.01,
             ease: 'easeIn',
            
             }}
          className="font-medium group-hover:opacity-40 group-hover:translate-x-4 transition duration-200 ease-linear   "
        >
          Design&Development
        </motion.p>
        <Image
              loading='lazy'
              src={`/libraryImages/locomotive.png`}
              width={260}
              height={0}
              alt='image'
              className='h-auto absolute top-1/2 -translate-y-1/2 right-0 '
              />
      </div>
      
      
      <motion.hr
        animate={isInView && { scaleX: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.215, 0.61, 0.315, 1],
          delay:  index * 0.2,
        }}
        initial={{ scaleX: 0,translateY:2 }}
        className="w-full h-1 "
      />
    </>
  );
}


export default ProjectMobile;
