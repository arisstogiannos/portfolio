"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { navLinks } from "@/app/data";
import Link from "next/link";

function Dropdown({ isOpen, setIsOpen, loco }) {
  const [selectedLink, setSelectedLink] = useState(null);
  const [clickedLink, setClickedLink] = useState(null);

  const linkVariants = {
    open: (i) => ({
      translateY: 0,
      transition: {
        duration: 0.4,
        ease: [0, 0.55, 0.45, 1],
        delay: 0.7 + i * 0.1,
      },
    }),
    closed: (i) => ({
      translateY: 200,
      transition: { duration: 0.4, ease: [0.55, 0, 1, 0.45], delay: i * 0.1 },
    }),
  };

  // const variants = {
  //   open: {
  //     opacity: 1,

  //     top: 0,
  //     right: 0,
  //     transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
  //   },
  //   closed: {
  //     top: "-100vh",
  //     right: 0,

  //     transition: {
  //       duration: 1.2,
  //       ease: [0.76, 0, 0.24, 1],
  //       delay: 0.4,
  //     },
  //   },
  //   initial: {
  //     top: "-100vh",
  //     right: 0,
  //   },
  // };
  const sidebar = {
    open: {
      clipPath: `circle(2000px at 86% 60px)`,
      transition: {
        duration: 0.8,
        ease: [0.32, 0, 0.67, 0],
      },
    },
    closed: {
      clipPath: "circle(0px at 86% 60px)",
      transition: {
        delay: 0.5,
        ease: [0.33, 1, 0.68, 1],
        duration: 0.8,
      },
    },
  };

  return (
   
    

      <motion.div className="h-screen w-screen pointer-events-none fixed top-0 right-0 ">
        <motion.div
          variants={sidebar}
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          exit="closed"
          className={` bg-mblue/50 h-screen w-screen backdrop-blur-3xl      z-[100] `}
        >
          <div className="myContainer  lg:pt-[100px]  lg:pr-[40px] lg:pl-[40px] 2xl:pt-[120px]  2xl:pr-[0px] 2xl:pl-[0px] box-border relative">
            <ul className={`flex flex-col    z-[1000]  relative   `}>
              {navLinks.map((link, i) => {
                return (
                  <Link
                    onMouseEnter={() => {
                      setSelectedLink(i);
                    }}
                    onMouseLeave={() => {
                      setSelectedLink(clickedLink);
                    }}
                    onClick={() => {
                      setClickedLink(i);
                      setIsOpen(false);
                      loco.scrollTo(link.href, { duration: 2 });
                    }}
                    className={`cursor-pointer pointer-events-auto lg:text-5xl 3xl:text-7xl font-medium z-50 text-mblack transition pt-12   duration-300  ease-in-out ${
                      selectedLink == i
                        ? " translate-x-10  scale-105  text-mwhite "
                        : "translate-x-1"
                    }`}
                    key={i}
                    href={link.href}
                  >
                    <motion.div
                      style={{ clipPath: "inset(0 0 0 0 round 0%)" }}
                      key={i}
                    >
                      <motion.li
                        variants={linkVariants}
                        initial="closed"
                        animate={isOpen ? "open" : "closed"}
                        exit="closed"
                        custom={i}
                        className="px-10"
                      >
                        {link.title}
                      </motion.li>
                      <motion.hr
                      key={i}
                        className="mt-5 origin-left border-solid border-t-mblack border-t-2"
                        initial={{ scaleX: 0 }}
                        exit={{
                          scaleX: 0,
                          transition: {
                            duration: 0.5,
                            ease: [0.55, 0, 1, 0.45],
                            delay: i * 0.05,
                          },
                        }}
                        animate={isOpen?{
                          scaleX: 1,
                          transition: {
                            duration: 0.6,
                            ease: [0, 0.55, 0.45, 1],
                            delay: 0.8 + i * 0.05,
                          },
                        }:{
                          scaleX: 0,
                          transition: {
                            duration: 0.5,
                            ease: [0.55, 0, 1, 0.45],
                            delay: i * 0.05,
                          },
                        }}
                      />
                    </motion.div>
                  </Link>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    
  );
}

export default Dropdown;
