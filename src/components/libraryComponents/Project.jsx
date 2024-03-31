import React, { useState, useEffect, useLayoutEffect } from "react";
import { animate, inView, motion } from "framer-motion";
import localfont from "next/font/local";
import Link from "next/link";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const medium = localfont({ src: "../../../fonts/medium.otf" });

function Project({ i, title, setModal, modal, isInView }) {
  const [isHovered, setIsHovered] = useState(false);
  const { active, index } = modal;

 

  return (
    <>
      <Link href="/project1" className="w-full">
        <motion.div
          key={i}
          onMouseEnter={() => {
            setModal({ active: true, index: i });
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setModal({ active: false, index: i });
            setIsHovered(false);
          }}
          className="project transition  duration-1000 flex flex-col-reverse lg:flex-row w-full pt-[30px] sm:pt-[40px]  pl-[20px] sm:pl-[30px] pb-[15px] lg:pt-[70px] xl:pt-[80px] lg:pl-[50px]  lg:pb-[70px] xl:pb-[80px] lg:pr-[50px]  gap-3 sm:gap-5 lg:gap-0  lg:items-center lg:justify-between items-start justify-around cursor-pointer group"
        >
          <motion.h2
            custom={i}
            style={medium.style}
            className="projectTitle uppercase font-medium text-xl sm:text-4xl   lg:text-3xl 2xl:text-4xl m-0 group-hover:-translate-x-4 group-hover:opacity-40  transition transform  duration-200 ease-linear text-white"
          >
            {title}
          </motion.h2>
          <motion.p
            custom={i}
            className="projectText font-light text-xs sm:text-base group-hover:opacity-40 group-hover:translate-x-4 transition duration-200 ease-linear   text-white"
          >
            Design&Development
          </motion.p>
        </motion.div>
      </Link>
      <motion.hr
        style={{scaleX:1}}
        className="projectHr  translate-y-2 w-full h-1 origin-left"
      />
    </>
  );
}

export default Project;
