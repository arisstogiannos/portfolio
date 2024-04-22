import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { navLinks } from "@/app/data";
import Link from "next/link";
import localfont from "next/font/local";
import Magnetic from "../globalComponents/Button/Magnetic";

const medium = localfont({ src: "../../../fonts/medium.otf" });

function Menu({ isOpen, setIsOpen, loco, setLock }) {
  const [selectedLink, setSelectedLink] = useState(null);
  const [clickedLink, setClickedLink] = useState(null);
  const variants = {
    open: {
      opacity: 1,

      left: 0,
      top: 0,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      left: "-100vw",
      top: 0,

      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.1,
      },
    },
    initial: {
      left: "-100vw",
      top: 0,
      opacity: 0,
    },
  };

  const linkVariants = {
    open: (i) => ({
      translateY: 0,
      transition: {
        duration: 0.6,
        ease: [0, 0.55, 0.45, 1],
        delay: 0.7 + i * 0.07,
      },
    }),
    closed: (i) => ({
      translateY: 200,
      transition: { duration: 0.4, ease: [0.55, 0, 1, 0.45] },
    }),
  };
  return (
    <motion.div
      variants={variants}
      animate={isOpen ? "open" : "closed"}
      initial="closed"
      exit="closed"
      onAnimationComplete={(def) => def == "closed" && setLock(false)}
      className={` bg-mwhite h-full w-full   fixed top-0 left-0    z-[100] `}
    >
      <motion.hr
        initial={{ scaleY: 0 }}
        animate={
          isOpen
            ? { scaleY: 1, transition: { duration: 0.6, delay: 0.7 } }
            : { scaleY: 0, transition: { duration: 0.3 } }
        }
        transition={{ duration: 0.5, delay: 0.7 }}
        className="border-l-2 origin-bottom absolute left-80 top-0  h-screen border-l-mblack border-solid opacity-100 z-[10000] "
      />
      <div className="absolute left-80 top-[790px]">
        <motion.p
          initial={{ x: -40, opacity: 0 }}
          animate={
            isOpen
              ? { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.7 } }
              : { x: -40, opacity: 0, transition: { duration: 0.3 } }
          }
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-mblack capitalize font-normal ml-10 mb-2 text-4xl"
        >
          Where Next ?
        </motion.p>
        <motion.hr
          initial={{ scaleX: 0 }}
          animate={
            isOpen
              ? { scaleX: 1, transition: { duration: 0.6, delay: 0.7 } }
              : { scaleX: 0, transition: { duration: 0.3 } }
          }
          transition={{ duration: 0.5, delay: 0.7 }}
          className="border-t-2 origin-left   w-80 border-t-mblack border-solid opacity-100 z-[10000] "
        />
      </div>
      <div className="myContainer  lg:pt-[100px] flex justify-end  lg:pr-[40px] lg:pl-[40px] 2xl:pt-[90px] 3xl:pt-[120px]  2xl:pr-[0px] 2xl:pl-[80px] box-border relative">
        <ul className={`flex flex-col items-end   z-[1000]  relative   `}>
          {navLinks.map((link, i) => {
            return (
              <Magnetic key={i}>
                <Link
                  onMouseEnter={() => {
                    setSelectedLink(i);
                  }}
                  onMouseLeave={() => {
                    setSelectedLink(clickedLink);
                  }}
                  onClick={() => {
                    setLock(true);
                    setClickedLink(i);
                    setIsOpen(false);
                    loco.scrollTo(link.href, { duration: 2 });
                  }}
                  className={`cursor-pointer group pointer-events-auto hover:text-mblue transition-colors duration-300 lg:text-5xl 3xl:text-8xl font-medium z-50   pt-12 ${
                    clickedLink == i ? "text-mblue" : "text-mblack"
                  }   `}
                  key={i}
                  href={link.href}
                >
                  <motion.div
                    className="flex  items-center gap-7 translate-x-12"
                    style={{ clipPath: "inset(0 0 0 0 round 0%)" }}
                    key={i}
                  >
                    <motion.li
                      variants={linkVariants}
                      initial="closed"
                      animate={isOpen ? "open" : "closed"}
                      exit="closed"
                      custom={i}
                      className="px-0 "
                      style={medium.style}
                    >
                      {link.title}
                    </motion.li>

                    <motion.span
                      initial={{ scale: 0 }}
                      animate={
                        isOpen && selectedLink === i
                          ? { scale: 1 }
                          : { scale: 0 }
                      }
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      exit={{ scale: 0 }}
                      className={`size-7 rounded-full bg-mblue ${
                        selectedLink === i ? "scale-100" : "scale-0"
                      }`}
                    />
                    {/* <motion.hr
                  key={i}
                    className={`mt-5 origin-right  group-hover:w-full group-hover:border-t-mblue ease-services transition-all duration-300  border-solid  border-t-2 ${clickedLink===i?'w-full border-t-mblue':'w-20 border-t-mblack'}`}
                    initial={{ scaleX: 0 }}
                    exit={{
                      scaleX: 0,
                      transition: {
                        duration: 0.5,
                        ease: [0, 0.55, 0.45, 1],
                        delay: i * 0.05,
                      },
                    }}
                    animate={isOpen?{
                      scaleX: 1,
                      transition: {
                        duration: 0.4,
                        ease: [0, 0.55, 0.45, 1],
                        delay:  0.7 + i * 0.07,
                      },
                    }:{
                      scaleX: 0,
                      transition: {
                        duration: 0.3,
                        ease: [0, 0.55, 0.45, 1],
                        
                      },
                    }}
                  /> */}
                  </motion.div>
                </Link>
              </Magnetic>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}

export default Menu;
