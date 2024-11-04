"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import localfont from "next/font/local";

const medium = localfont({ src: "../../../fonts/medium.otf" });

function Loading({ setLoading, load, setAnimStart }) {
  const cont = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(
        ".containerLoader",
          {
            width: "80vw",
            height: "80vh",
            opacity:1,
            ease: "circ.inOut",

            duration: 1, // Adjust the duration for each word's entrance
          },
      ).to(".loaderText", {
        y: 0,

        duration: 0.8, // Adjust the duration for each word's entrance
        ease: "circ.out",

      },"-=0.4").
      to(
        "#welcome",
        {
          scale:1,
          opacity:1,
          duration: 1, // Adjust the duration for each word's entrance
        ease: "circ.out",
        },
        "<"
      )
        .to(".loaderText", {
          y: -100,
          delay: 0.5,
          duration: 0.8, // Adjust the duration for each word's entrance
          ease: "circ.in",
        }).to(
          "#welcome",
          {
            scale:1.7,
            opacity:0,
            delay: 0.5,
            duration: 1, // Adjust the duration for each word's entrance
            ease: "circ.inOut",

          },
          "<"
        )
        .to(
          ".containerLoader",
          {
            width: "101%",
            height: "101%",
            ease: "circ.inOut",

            duration: 1, // Adjust the duration for each word's entrance
          },
          ">-0.7"
        )
        .to(cont.current, {
          display: "none",
        });
     
    }, cont);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    setTimeout(() => setAnimStart(true), 3400);
    setTimeout(() => setLoading(false), 3250);
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
    
      ref={cont}
      className="bg-mwhite w-svw h-svh fixed top-0 left-0 flex items-center justify-center  overflow-hidden -z-[1100] "
    >
      {/* <motion.div initial={{scale:19}} animate={{scale:19, transition:{duration:1.3,delay:0.3, ease:'backIn'}}}  className='w-40 h-40 bg-mblack rounded-full mx-auto my-96 text-center text-mwhite flex items-center justify-center'></motion.div> */}
      <motion.div  className="containerLoader flex flex-col px-5 py-5 gap-2 justify-between items-center rounded-2xl opacity-0 w-[30vw] xl:w-[10vw] h-[10vh] xl:h-[30vh] bg-mblack ">
        {/* <div style={medium.style} className='textcont absolute top-1/2 -translate-x-[60%] overflow-hidden inline-flex gap-20 text-8xl text-nowrap items-center text-mwhite '>

        <motion.h1 className='loaderText  translate-y-[100px]'>aris stogiannos</motion.h1><motion.span className='loaderText translate-y-[100px]  font-sans font-black '>- </motion.span>
        <motion.h1 className='loaderText  translate-y-[100px]'>aris stogiannos</motion.h1><motion.span className='loaderText translate-y-[100px] font-sans font-black'>- </motion.span>
        <motion.h1 className='loaderText translate-y-[100px]'>aris stogiannos</motion.h1><motion.span className='loaderText translate-y-[100px] font-sans font-black'> -</motion.span>
        <motion.h1 className='loaderText translate-y-[100px]'>aris stogiannos</motion.h1><motion.span className='loaderText translate-y-[100px] font-sans font-black'>- </motion.span>
        </div> */}
        <div
          style={medium.style}
          className="  overflow-hidden inline-flex  mb-auto xl:mr-auto  "
        >
          <motion.h1 className="text-xl xl:text-4xl text-white loaderText translate-y-[100px] ">
            aris{" "}
          </motion.h1>
        </div>
        <div style={medium.style} className="   inline-flex    ">
          <motion.h1 id="welcome" className="text-3xl xl:text-7xl text-white  scale-50 opacity-0 ">
            welcome{" "}
          </motion.h1>
        </div>
        <div
          style={medium.style}
          className="  overflow-hidden inline-flex xl:ml-auto mt-auto "
        >
          <motion.h1 className="text-xl xl:text-4xl  text-white loaderText translate-y-[100px] ">
            stogiannos
          </motion.h1>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Loading;
