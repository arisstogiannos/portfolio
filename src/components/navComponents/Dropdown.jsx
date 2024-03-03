import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { navLinks } from "@/app/data";
import Link from "next/link";

function Dropdown({ isOpen }) {
  const [selectedLink, setSelectedLink] = useState(null);
  const [clickedLink, setClickedLink] = useState(null);
  const variants = {
    open: {
      width: 300,
      height: 400,
      top: -20,
      right: -20,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: 96,
      height: 36,
      top: 0,
      right: 0,
      transition: { duration: 0.75, delay: 0.3, ease: [0.76, 0, 0.24, 1] },
    },
  };
  const perspective = {
    initial: {
      opacity: 0,
      rotateX:90,
      translateY:80,
      translateX:-20
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

  return (
    <motion.div
      variants={variants}
      animate={isOpen ? "open" : "closed"}
      initial="closed"
      className={` bg-[#008080]  rounded-[25px] z-[900] absolute   mt-9 `}
    >
      <AnimatePresence>
        {isOpen && (
          <div className="h-full pl-[40px] pt-[100px] pb-[50px] pr-[40px] box-border ">
            <ul className={`flex flex-col   z-[1000]  gap-5   `}>
              {navLinks.map((link, i) => {
                return (
                  <div key={i} style={{perspective:'120px',perspectiveOrigin:'bottom'}} >
                    <motion.li
                    
                      custom={i}
                      variants={perspective}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                    >
                      <Link
                        className={`cursor-pointer text-3xl font-medium z-50 text-mblack `}
                        key={i}
                        href={""}
                      >
                        {link.title}
                      </Link>
                    </motion.li>
                  </div>
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
