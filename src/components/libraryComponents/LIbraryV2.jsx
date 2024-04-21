import React, { useEffect, useRef, useState } from "react";
import { projects } from "@/app/data";
import ProjectV2 from "./ProjectV2";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import localfont from "next/font/local";
import MovingText from "../globalComponents/MovingText";

const medium = localfont({ src: "../../../fonts/medium.otf" });

function LIbraryV2({ setProjectColor,projectColor }) {
  const [currProject, setCurrProject] = useState(-1);
  const [prevProject, setPrevProject] = useState(-1);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const tst = useTransform(scrollYProgress, [0, 0.7], [-1, projects.length]);

  useMotionValueEvent(tst, "change", (latest) => {
    setPrevProject(currProject);
    setCurrProject(Math.floor(latest));
    latest > 0 && latest < projects.length
      ? setProjectColor(projects[Math.floor(latest)].color)
      : setProjectColor("#00A8B7");
  });

  const variants = {
    open: {
      clipPath: `circle(2000px at 50% 50%)`,
      transition: {
        duration: 0.8,
        ease: [0.32, 0, 0.67, 0],
      },
    },
    closed: {
      clipPath: "circle(0px at 50% 50%)",
      transition: {
        
        ease: [0.33, 1, 0.68, 1],
        duration: 0.4,
      },
    },
  };

  return (
    <div ref={container} className="myContainer h-[300vh]  relative">
      <section
        id="library"
        className=" myContainer sticky top-0   flex items-center justify-between h-screen"
      >
      {/* <div style={{background: "radial-gradient(53.97% 53.97% at 50% 50%, rgba(0, 168, 183, 0.20) 0%, rgba(0, 0, 0, 0) 80%)"}} className="absolute blur-xl -left-1/2 -z-50 top-0 w-[1200px] h-[500px]"></div> */}
       {/* <div
          
          style={{color:projectColor}}
          className="myContainer  h-[120px] md:h-[150px] lg:h-[200px] xl:h-[250px]   uppercase  font-bold  flex items-center  text-7xl md:text-[90px] xl:text-[100px] lg:text-[130px] rounded-xl  overflow-hidden absolute top-0"
        >
          
          <MovingText text={"recent work. recent work. recent work"} />
          
        </div> */}
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
        <div className=" relative   flex items-center justify-end w-[900px] h-[580px] mb-5">
          {/* <div  className="bg-[#FFA800] size-[350px] blur-[120px] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20"></div> */}
          <p
            className="text-8xl text-mwhite/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
            style={medium.style}
          >
            work
          </p>
            {projects.map(
              (project, index) =>
                currProject === index && (
                  <motion.div
                    key={index}
                    variants={variants}
                    initial='closed'
                    animate='open'
                    className={` flex justify-end items-center h-full transition-all duration-300 ease-out w-full  `}
                  >
                    <Image
                      src={`/libraryImages/${project.src}`}
                      unoptimized={true}
                      width={800}
                      height={478}
                      className="rounded-xl "
                      alt="img"
                    />
                   
                  </motion.div>
                )
            )}
        </div>
      </section>
    // </div>
  );
}

export default LIbraryV2;
