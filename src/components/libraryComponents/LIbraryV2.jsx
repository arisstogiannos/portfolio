import React, {  useRef, useState } from "react";
import { projects } from "@/app/data";
import ProjectV2 from "./ProjectV2";
import {
  motion,
  useInView,
} from "framer-motion";
import dynamic from "next/dynamic";

import localfont from "next/font/local";


const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  // loading: () => <div className="bg-red-500">load</div>, // Loading indicator
});

const medium = localfont({ src: "../../../fonts/medium.otf" });

function LIbraryV2({ setProjectColor, projectColor }) {
  const [currProject, setCurrProject] = useState(-1);
  const [prevProject, setPrevProject] = useState(-1);
  const container = useRef(null);
  // const { scrollYProgress } = useScroll({

  const inview = useInView(container, { amount: 0.05 });


  
  return (
    // <div ref={container} className="myContainer  h-[300vh]  relative">
      
      <section
      ref={container}
        id="library"
        className=" myContainer    flex items-center justify-between h-screen"
      >
    
        <div className=" flex flex-col justify-center w-[40%]">
          {projects.map((project, index) => (
            <ProjectV2
              key={index}
              title={project.title}
              services={project.services}
              year={"2024"}
              setCurrProject={setCurrProject}
              currProject={currProject}
              index={index}
              setProjectColor={setProjectColor}
              color={project.color}
              prevProject={prevProject}
            />
          ))}
        </div>
        <div className=" relative   flex items-center justify-end w-[780px] h-[580px] overflow-hidden">
          {/* <div  className="bg-[#FFA800] size-[350px] blur-[120px] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20"></div> */}
          <p
            className="text-8xl text-mwhite/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
            style={medium.style}
          >
            work
          </p>
       
               <motion.div style={{top:currProject*(100)+"%"}} className="relative transition-all ease-out duration-500  w-full h-full">

          {(inview&&currProject<projects.length) &&
            projects.map((project, index) => (
              <motion.div
              // initial={{y:-50,opacity:1}}
              // animate={currProject === index ? {opacity:1,y:0}  : {opacity:1,y:-50} }
              // transition={{duration:0.2,ease:"easeOut"}}
                key={index}
                style={{top:index*(-100)+"%"}}
                className={`   absolute   top-0 left-0 w-full h-full`}
              >
                <Scene
                key={index}
                  
                  imagesrc={project.src}
                />
               </motion.div>
            ))} 

               </motion.div>
          
        </div>
      </section>
      //{" "}
    // </div>
  );
}

export default LIbraryV2;
