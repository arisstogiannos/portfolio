import React, { useEffect, useRef, useState } from "react";
import { projects } from "@/app/data";
import ProjectV2 from "./ProjectV2";
import Image from 'next/image';
import {AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform} from 'framer-motion'
import localfont from "next/font/local";

const medium = localfont({ src: "../../../fonts/medium.otf" });

function LIbraryV2({setProjectColor}) {
    const [currProject,setCurrProject] = useState(-1);
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
      target: container,
    offset: ["start start", "end 30vh"],
    })
    const tst = useTransform(scrollYProgress,[0,0.5],[0,3])

  

  useMotionValueEvent(tst,'change',(latest)=>{setCurrProject(Math.floor(latest));setProjectColor(projects[Math.floor(latest)].color)});


    

  return (
    <div ref={container} className=" h-[300vh]">
    <section id="library" className=" myContainer sticky  top-0 my-52 flex justify-between h-screen">
      <div className=" flex flex-col justify-center w-1/2">
        {projects.map((project, index) => (
          <ProjectV2
            title={project.title}
            services={project.services}
            year={"2024"}
            setCurrProject={setCurrProject}
            currProject={currProject}
            index={index}
            setProjectColor={setProjectColor}
            color={project.color}
          />
        ))}
      </div>
      <div className=" relative   flex items-center justify-center w-[900px] ">
        {/* <div  className="bg-[#FFA800] size-[350px] blur-[120px] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20"></div> */}
          <p className="text-9xl text-mblack/60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" style={medium.style}>work</p>
          <AnimatePresence mode="wait">
        {projects.map((project, index) => (
          currProject===index&&<motion.div  key={index}  initial={{y:40,opacity:0}} animate={{y:0,opacity:1}}   className={` pt-10 px-10 transition-all duration-300 ease-out  `} >
            
            <Image src={`/libraryImages/${project.src}`} width={640} height={404} className="rounded-t-xl" alt='img'  />
          </motion.div>
        ))}
        </AnimatePresence>
      </div>
    </section>
    </div>
  );
}

export default LIbraryV2;
