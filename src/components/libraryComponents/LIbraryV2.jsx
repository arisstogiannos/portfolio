import React, { useState } from "react";
import { projects } from "@/app/data";
import ProjectV2 from "./ProjectV2";
import Image from 'next/image';
import {motion} from 'framer-motion'
import localfont from "next/font/local";

const medium = localfont({ src: "../../../fonts/medium.otf" });

function LIbraryV2() {
    const [currProject,setCurrProject] = useState(-1);
  return (
    <section id="projects" className=" myContainer my-52 flex justify-between h-fit">
      <div className=" flex flex-col justify-center w-1/2">
        {projects.map((project, index) => (
          <ProjectV2
            title={project.title}
            services={project.services}
            year={"2024"}
            setCurrProject={setCurrProject}
            currProject={currProject}
            index={index}
          />
        ))}
      </div>
      <div className="   relative w-[900px] h-[500px] ">
        <div  className="bg-mblue size-[400px] blur-[120px] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20"></div>
          <p className="text-9xl text-mblack/60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" style={medium.style}>work</p>
        {projects.map((project, index) => (
          <motion.div   style={{
            clipPath: currProject == index ? "inset(0 0 0 0)" : "inset(0 50% 0 50%)",
          }} className={` py-16 px-16 transition-all duration-500 ease-services absolute top-1/2 -translate-y-1/2 right-0  `} >
            
            <Image src={`/libraryImages/${project.src}`} width={640} height={404} className="" alt='img'  />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default LIbraryV2;
