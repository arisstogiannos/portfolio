"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/app/data";
import Link from "next/link";

function Dropdown({ isOpen, setIsOpen, loco }) {
  const [selectedLink, setSelectedLink] = useState(null);
  const [clickedLink, setClickedLink] = useState(null);

  const linkVariants = {
    open: (i) => ({
      translateY: 0,
      transition: {
        duration: 0.6,
        ease: [0, 0.55, 0.45, 1],
        delay: 0.5 + i * 0.1,
      },
    }),
    closed: (i) => ({
      translateY: 200,
      transition: { duration: 0.6, ease: [0.55, 0, 1, 0.45], delay: i * 0.1 },
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
        delay: 0.4,
      },
    },
    initial: {
      top: "-100vh",
      right: 0,
    },
  };
  const sidebar = {
    open: {
      clipPath: `circle(1600px at 1450px 60px)`,
      transition: {
        duration: 1,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    closed: {
      clipPath: "circle(10px at 1450px 60px)",
      transition: {
        delay: 0.5,
        ease: [0.32, 0, 0.67, 0],
        duration: 1,
      },
    },
  };

  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={
          isOpen
            ? { opacity: 1, transition: { duration: 0.2, delay: 0.9 } }
            : { opacity: 0, transition: { duration: 0.2, delay: 0.5 } }
        }
        className="filter pointer-events-none backdrop-blur-3xl h-screen w-screen fixed top-0 left-0"
      ></motion.div> */}

      <motion.div className="h-screen w-screen pointer-events-none fixed top-0 right-0 ">
        <motion.div
          variants={sidebar}
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          exit='closed'
          
          className={` bg-mblue/30 h-screen w-screen backdrop-blur-3xl      z-[100] `}
        >
          <div className="  pt-[100px] pb-[50px] pr-[40px] pl-[40px] box-border relative">
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
                    className={`cursor-pointer pointer-events-auto text-6xl font-medium z-50 text-mblack transition pt-12   duration-300  ease-in-out ${
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
                        exit='closed'
                        custom={i}
                        className="px-10"
                      >
                        {link.title}
                      </motion.li>
                      <motion.hr
                        className="mt-5 origin-left border-solid border-t-mblack border-t-2"
                        initial={{ scaleX: 0 }}
                        exit={{scaleX: 0,
                          transition: {
                            duration: 0.8,
                            ease: [0.55, 0, 1, 0.45],
                            delay: i * 0.05,
                          },}}

                        animate={
                          isOpen
                            ? {
                                scaleX: 1,
                                transition: {
                                  duration: 0.8,
                                  ease: [0, 0.55, 0.45, 1],
                                  delay: 0.8 + i * 0.05,
                                },
                              }
                            : {
                                scaleX: 0,
                                transition: {
                                  duration: 0.8,
                                  ease: [0.55, 0, 1, 0.45],
                                  delay: i * 0.05,
                                },
                              }
                        }
                      />
                    </motion.div>
                  </Link>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Dropdown;
