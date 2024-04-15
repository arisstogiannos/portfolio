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
  const tst = useTransform(scrollYProgress, [0, 0.6], [-1, 4]);

  useMotionValueEvent(tst, "change", (latest) => {
    setPrevProject(currProject);
    setCurrProject(Math.floor(latest));
    latest > 0 && latest < 4
      ? setProjectColor(projects[Math.floor(latest)].color)
      : setProjectColor("#00A8B7");
  });

  return (
    <div ref={container} className="myContainer h-[300vh] my-52">
      <section
        id="library"
        className=" myContainer sticky  top-0  flex items-center justify-between h-screen"
      >
       {/* <div
          
          style={{color:projectColor}}
          className="myContainer  h-[120px] md:h-[150px] lg:h-[200px] xl:h-[250px]   uppercase  font-bold  flex items-center  text-7xl md:text-[90px] xl:text-[100px] lg:text-[130px] rounded-xl  overflow-hidden absolute top-0"
        >
          
          <MovingText text={"recent work. recent work. recent work"} />
          
        </div> */}
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
              prevProject={prevProject}
            />
          ))}
        </div>
        <div className=" relative   flex items-center justify-end w-[900px] h-[500px] mb-5">
          {/* <div  className="bg-[#FFA800] size-[350px] blur-[120px] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20"></div> */}
          <p
            className="text-9xl text-mblack/60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
            style={medium.style}
          >
            work
          </p>
          <AnimatePresence mode="wait">
            {projects.map(
              (project, index) =>
                currProject === index && (
                  <motion.div
                    key={index}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className={`px-10 flex h-full transition-all duration-300 ease-out  `}
                  >
                    <Image
                      src={`/libraryImages/${project.src}`}
                      width={400}
                      height={282}
                      className="rounded-xl mb-auto"
                      alt="img"
                    />
                    <Image
                      src={`/libraryImages/plhrof.png`}
                      width={400}
                      height={282}
                      className="rounded-xl mt-auto"
                      alt="img"
                    />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

export default LIbraryV2;
