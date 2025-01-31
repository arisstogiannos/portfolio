import React from "react";
import {motion} from 'framer-motion';
import Magnetic from "../globalComponents/Button/Magnetic";

export default function MenuButton({ isOpen, setIsOpen,setLock  }) {
  const variants = {
    initial:{
      y:-200
    },
    enter:{
      y:0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
        delay:0.3
        
      }
    },
    exit:{
      y:-200,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
    }
  }
  return (
    <Magnetic distance={2}>
    <motion.div
    
    // variants={variants}
    // initial='initial'
    // animate='enter'
    // exit='exit'
  
      onClick={()=>{setLock(true);setIsOpen(!isOpen)}}
      className={` pointer-events-auto cursor-pointer z-[2000] text-sm md:text-base w-20 h-8 md:w-24 md:h-9   rounded-full relative   overflow-hidden  `}
    >
      <motion.div
      className="relative w-full h-full"
        animate={{top: isOpen?'-100%':'0'}}
        transition={{duration:0.5, ease:[0.76,0,0.24,1]}}
      >
        <div  className="w-full h-full  bg-mwhite text-mblack group">
          <PerspectiveText text={'MENU'}/>
        </div>
        <div className="w-full h-full  absolute top-full bg-mblack group ">
          <PerspectiveText text={'CLOSE'}/>
        </div>
      </motion.div>
      {/* <div className="bounds border border-red-500 rounded-full"></div> */}


    </motion.div>
    </Magnetic>
  );
}

function PerspectiveText({text}){
    return(
    <div style={{transformStyle:"preserve-3d"}} className="w-full h-full flex justify-center items-center group-hover:rotate-x-90   duration-700 ease-in-out">
        <p className="cursor-pointer   duration-700 ease-in-out group-hover:-translate-y-full transition-all group-hover:opacity-0">{text}</p>
        <p className="cursor-pointer absolute   origin-bottom opacity-0 transition-all duration-700 ease-in-out -rotate-x-90 group-hover:opacity-100 translate-y-2">{text}</p>
    </div>
    )
}