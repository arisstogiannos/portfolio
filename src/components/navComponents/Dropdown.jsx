'use client'
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/app/data";
import Link from "next/link";


function Dropdown({ isOpen }) {
  const [loco, setLoco] = useState(null);
  useEffect(()=>{
    (
      async() => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
        setLoco(locomotiveScroll)
      }
    )()
  },[])
  const [selectedLink, setSelectedLink] = useState(null);
  const [clickedLink, setClickedLink] = useState(null);
  
  

  const variants = {
    open: {
      opacity:1,
      width: 300,
      height: 350,
      top: -20,
      right: -20,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
     opacity:1,
      width: 96,
      height: 36,
      top: 0,
      right: 0,
      transition: {
        opacity:{ duration: 0.3, delay: 0.5, ease: [0.76, 0, 0.24, 1]},
        duration: 0.75, delay: 0.3, ease: [0.76, 0, 0.24, 1] },
    },
    initial:{
      opacity:0,
      width: 96,
      height: 36,
      right: 0,
     
    }
  };
  const perspective = {
    initial: {
      opacity: 0,
      rotateX:90,
      translateY:80,
      translateX:-20,
      transition: { duration: 0.75,  ease: [0.76, 0, 0.24, 1] },

    },
    enter: (i) => ({
      opacity: 1,
      rotateX:0,
      translateY:0,
      translateX:0,
      transition: { 
        duration:0.65,
        opacity: {duration:0.35,delay: 0.5 + i * 0.1},
        delay: 0.5 + i * 0.1 },
        ease:[.215, .61, .315,1]
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.75,  ease: [0.76, 0, 0.24, 1] },
    },
  };

  const hoverVariants ={
    enter:{
      translateX:-10,
      transition: { 
        duration:0.65,
        ease:[.215, .61, .315,1]
    }
    },
    exit:{
      translateX:0,
      transition: { 
        duration:0.65,
        ease:[.215, .61, .315,1]
    }
    }
  }

  return (
    <motion.div
      variants={variants}
      animate={isOpen ? "open" : "closed"}
      initial="initial"
      className={` bg-mwhite  rounded-[25px]  absolute   mt-9 `}
    >
      <AnimatePresence>
        {isOpen && (
          <div className="h-full  pt-[100px] pb-[50px] pr-[40px] box-border relative">
            <ul className={`flex flex-col    z-[1000]  relative   `}>
              {navLinks.map((link, i) => {
                return (
                  <motion.div variants={hoverVariants} animate='enter' exit='exit' initial='exit' key={i} style={{perspective:'120px',perspectiveOrigin:'bottom'}} className="" >
                    <motion.li
                     onMouseEnter={() => {
                      setSelectedLink(i);
                    }}
                    onMouseLeave={() => {
                      setSelectedLink(clickedLink);
                    }}
                    onClick={() => {
                      setClickedLink(i);
                      loco.scrollTo(link.href,{duration:2})
                    }}
                    className={`absolute `}
                    style={{top:i*50}}
                      custom={i}
                      variants={perspective}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                    >
                      <Link
                        className={`cursor-pointer text-3xl font-medium z-50 text-mblack transition absolute  duration-500 px-14 ease-in-out ${selectedLink==i?' -translate-x-1  scale-105  text-mwhite ':'translate-x-1'}`}
                        key={i}
                        href={link.href}
                      >
                        {link.title}
                      </Link>
                    </motion.li>
                  </motion.div>
                );
              })}
            </ul>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Dropdown;
