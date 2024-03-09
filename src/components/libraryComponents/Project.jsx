import React, { useRef, useState } from "react";
import { Work_Sans, Zen_Dots } from "next/font/google";
import { animate, easeIn, inView, motion, useInView } from "framer-motion";

const Worksans = Work_Sans({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

const zen = Zen_Dots({
  weight: ["400"],
  subsets: ["latin"],
});

function Project({ i, title, setModal,modal, isInView }) {
  const [isHovered,setIsHovered] = useState(false)
const {active,index} = modal
  console.log(active)
  
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
        className="transition duration-1000 flex w-full pt-[40px] pl-[100px] pb-[40px] pr-[100px]  items-center justify-between  cursor-pointer group"
      >
        <motion.h2
        
          custom={i}
          animate={[isInView && { x: 0 },isHovered&&{x:-20 }]}
          initial={[!isInView?{x: -1000  }:{x:0}]}
          
          transition={index==-1?{
            duration: 0.8,
            ease: [0.215, 0.61, 0.315, 1],
            delay:  i * 0.2, 
          }:{duration: 0.01,
            ease: 'easeIn',
           
            }}
          className="font-normal  text-[50px] m-0 group-hover:opacity-40  transition transform  duration-200 ease-linear text-white"
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
          className="font-light group-hover:opacity-40 group-hover:translate-x-4 transition duration-200 ease-linear self-end  text-white"
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
        initial={{ scaleX: 0 }}
        className="w-full h-1 "
      />
    </>
  );
}

export default Project;
