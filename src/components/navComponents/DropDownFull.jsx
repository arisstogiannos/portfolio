"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/app/data";
import Link from "next/link";

function Dropdown({ isOpen, loco }) {
  const [selectedLink, setSelectedLink] = useState(null);
  const [clickedLink, setClickedLink] = useState(null);

  const linkVariants = {
    open:(i)=>( {
      translateY: 0,
      transition: { duration: 0.6, ease: [0, 0.55, 0.45, 1], delay: 0.8+i*0.1}    }),
    closed:(i)=>( {
      translateY: 200,
      transition: { duration: 0.6, ease: [0.55, 0, 1, 0.45], delay: i*0.1},
    }),
  };

  const variants = {
    open: {
      opacity: 1,

      top: 0,
      right: 0,
      transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      top: "-100vh",
      right: 0,

      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
        delay:0.4
      },
    },
    initial: {
      top: "-100vh",
      right: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={isOpen ? "open" : "closed"}
      initial="initial"
      className="h-screen w-screen  fixed"
    >
      <motion.div className={` bg-mwhite/90 h-[75vh] w-screen   fixed   z-[100] `}>
        
            <div className="  pt-[100px] pb-[50px] pr-[40px] pl-[40px] box-border relative">
              <ul className={`flex flex-col gap-10    z-[1000]  relative   `}>
                {navLinks.map((link, i) => {
                  return (
                    <motion.div
                      style={{ clipPath: "inset(0 0 0 0 round 0%)" }}
                      key={i}
                      className="flex flex-col"
                    >
                      <motion.li
                        onMouseEnter={() => {
                          setSelectedLink(i);
                        }}
                        onMouseLeave={() => {
                          setSelectedLink(clickedLink);
                        }}
                        onClick={() => {
                          setClickedLink(i);
                          loco.scrollTo(link.href, { duration: 2 });
                        }}
                        variants={linkVariants}
                        initial="closed"
                        animate={isOpen ? "open" : "closed"}
                        custom={i}
                      >
                        <Link
                          className={`cursor-pointer text-5xl font-medium z-50 text-mblack transition   duration-500 px-14 ease-in-out ${
                            selectedLink == i
                              ? " -translate-x-1  scale-105  text-mwhite "
                              : "translate-x-1"
                          }`}
                          key={i}
                          href={link.href}
                        >
                          {link.title}
                        </Link>
                      </motion.li>
                      <motion.hr className="mt-5 origin-left border-solid border-t-mblack border-t-2" initial={{scaleX:0}} animate={isOpen?{scaleX:1, transition: { duration: 0.8, ease: [0, 0.55, 0.45, 1], delay: 0.8+i*0.05 }}:{scaleX:0, transition: { duration: 0.5, ease: [0.55, 0, 1, 0.45], delay: 0.3+i*0.05 }    }} />
                    </motion.div>
                  );
                })}
              </ul>
            </div>
         
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={
          isOpen
            ? { opacity: 1, transition: { duration: 0.2, delay: 0.9 } }
            : { opacity: 0, transition: { duration: 0.2, delay: 0.5 } }
        }
        className="filter pointer-events-none backdrop-blur-sm h-screen w-screen fixed top-0 left-0"
      ></motion.div>
    </motion.div>
  );
}

export default Dropdown;
