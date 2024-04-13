import React, { useState } from "react";
import {  motion } from "framer-motion";
import localfont from "next/font/local";
import Link from "next/link";


const medium = localfont({ src: "../../../fonts/medium.otf" });

function Project({ i, title, setModal, modal, isInView }) {
  const [isHovered, setIsHovered] = useState(false);
  const { active, index } = modal;
  // useEffect(()=>{
  //   const mytext = new SplitType(".projectTitle");
  //   const mytext2 = new SplitType(".projectText");
  //  gsap.registerPlugin(ScrollTrigger)
  //  gsap.from(".projectTitle .char", {
  //    y: 130,
  //    opacity: 1,
  //    stagger: 0.02,

  //    duration: 0.8,
  //    ease: "circ.inOut",
  //    scrollTrigger:{
  //      trigger:'.project',
  //      start:'30% 80%',

  //    }
  //   });



  //  gsap.from(".projectText .char", {
  //    y: 130,
  //    opacity: 1,
  //    stagger: 0.01,

  //    duration: 0.8,
  //    ease: "circ.inOut",
  //    scrollTrigger:{
  //      trigger:'.project',
  //      start:'30% 80%',

  //    }
  //  });
  // },[])

 

  return (
    <>
      <Link href="/project1" className={`w-full ${(index===i&&active)?'opacity-100 scale-105 ':'opacity-40'} transition  duration-300 ease-services`}>
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
          className="project  flex flex-col-reverse lg:flex-row w-full pt-[30px] sm:pt-[40px]  pl-[20px] sm:pl-[30px] pb-[15px] lg:pt-[70px] lg:pl-[50px]  lg:pb-[70px]  lg:pr-[50px]  gap-3 sm:gap-5 lg:gap-0  lg:items-center lg:justify-between items-start justify-around cursor-pointer group"
        >
          <motion.h2
            custom={i}
            style={medium.style}
            className="projectTitle uppercase  text-xl sm:text-4xl   lg:text-3xl 2xl:text-5xl m-0   text-white"
          >
            {title}
          </motion.h2>
          <motion.p
            custom={i}
            className="projectText font-light text-xs sm:text-lg     text-white"
          >
            Design&Development
          </motion.p>
        </motion.div>
      </Link>
      <motion.hr
        style={{scaleX:1}}
        className={`projectHr ${(index===i&&active)?'opacity-100 scale-105':'opacity-40'} transition  duration-300 ease-services translate-y-2 w-full h-1 origin-left`}
      />
    </>
  );
}

export default Project;
