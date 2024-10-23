import React, { useEffect, useRef, useState } from "react";
import { projects } from "@/app/data";
import ProjectV2 from "./ProjectV2";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

import localfont from "next/font/local";
import Magnetic from "../globalComponents/Button/Magnetic";

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  // loading: () => <div className="bg-red-500">load</div>, // Loading indicator
});

const medium = localfont({ src: "../../../fonts/medium.otf" });

function LIbraryV2({ setProjectColor, projectColor }) {
  
  const [loaded, setLoaded] = useState(false);
  const [currProject, setCurrProject] = useState(0);
  const [prevProject, setPrevProject] = useState(-1);
  const container = useRef(null);
  // const { scrollYProgress } = useScroll({

  const inview = useInView(container, { amount: 0.05 });
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end center"],
  });
  const pos = useTransform(scrollYProgress, [0, 1], [56, -100]);
  useEffect(()=>{
setLoaded(!inview)
  },[inview])

  return (
    // <div ref={container} className="myContainer  h-[300vh]  relative">

    <section
      ref={container}
      id="library"
      
      className=" myContainer    flex flex-col md:flex-row items-center justify-between h-screen mt-28  mb-28"
    >
      <div className="flex flex-col w-full lg:w-[40%] 3xl:h-[800px] xl:h-[700px] py-10">
        <p className="scaleCursor  capitalize font-normal text-[20px] md:text-[32px] text-center lg:text-left xl:text-[27px] 3xl:text-4xl mb-auto text-mwhite ">
          <span className="opacity-80 font-normal">
          Explore My {" "}
          </span>
          <span className="opacity-100 text-mblue font-medium ">Projects</span>{" "}
          <span className="font-normal opacity-80">
          - A Collection of  {" "}
          </span>
          <span className="opacity-100 font-medium text-mblue">Innovative, Modern </span>{" "}
          <span className="font-normal opacity-80">
         Websites
          </span>
        </p>
        <div className=" relative mt-5 mb-2 lg:-right-5 flex items-center justify-end w-full h-[340px] md:h-[500px] 3xl:w-[850px] 3xl:h-[800px] xl:h-[700px] xl:w-[750px] overflow-y-hidden lg:hidden">
        <motion.div
          style={{ top: currProject * 100 + "%" }}
          className="relative  transition-all ease-out duration-500 w-full h-full  "
        >
          {(inview && currProject < projects.length && currProject >= 0)  &&
            projects.map((project, index) => (
              <motion.div
                // initial={{y:-50,opacity:1}}
                // animate={currProject === index ? {opacity:1,y:0}  : {opacity:1,y:-50} }
                // transition={{duration:0.2,ease:"easeOut"}}
                key={index}
                style={{ top: index * -100 + "%" }}
                className={`   absolute   top-0 right-0  w-full h-full`}
              >
                <Scene key={index} imagesrc={project.src} setLoaded={setLoaded} />
              </motion.div>
            ))}
        </motion.div>
            {(!loaded) && <div className="bg-mblack h-full w-full absolute top-0 left-0 text-mwhite text-lg flex justify-center items-center "><div className=" rounded-full  size-28 animate-spin  border-t-4 border-mblue"></div></div>}
      </div>
      <div className="relative xl:mb-28 3xl:mb-32 ml-auto 3xl:mt-36 mt-20  h-40 w-80 lg:block hidden ">
      <hr className="  w-80 absolute left-16 bottom-0 translate-y-1/2" />
          <Magnetic>
            <motion.div
              style={{ right: pos }}
              className="bg-mblack xl:size-28 3xl:size-32 border-2 cursor-pointer border-mblue rounded-full absolute xl:-bottom-14 3xl:-bottom-16   flex justify-center items-center "
            >
              {" "}
              <p className="pointer-events-none capitalize xl:text-lg 3xl:text-xl font-medium text-center text-mblue">
                view <br /> all
              </p>
            </motion.div>
          </Magnetic>
        </div>
        <div className=" flex flex-col justify-center   w-full">
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
      </div>
      <div className="  relative  md:-right-5  items-center justify-end w-full h-[400px] 3xl:w-[850px] 3xl:h-[800px] xl:h-[700px] xl:w-[750px] overflow-y-hidden hidden lg:flex">
        <motion.div
          style={{ top: currProject * 100 + "%" }}
          className="relative  transition-all ease-out duration-500 w-full h-full  "
        >
          {(inview && currProject < projects.length && currProject >= 0)  &&
            projects.map((project, index) => (
              <motion.div
                // initial={{y:-50,opacity:1}}
                // animate={currProject === index ? {opacity:1,y:0}  : {opacity:1,y:-50} }
                // transition={{duration:0.2,ease:"easeOut"}}
                key={index}
                style={{ top: index * -100 + "%" }}
                className={`   absolute   top-0 right-0  w-full h-full`}
              >
                <Scene key={index} imagesrc={project.src} setLoaded={setLoaded} />
              </motion.div>
            ))}
        </motion.div>
            {(!loaded) && <div className="bg-mblack h-full w-full absolute top-0 left-0 text-mwhite text-lg flex justify-center items-center "><div className=" rounded-full  size-28 animate-spin  border-t-4 border-mblue"></div></div>}
      </div>
    </section>
    //{" "}
    // </div>
  );
}


export default LIbraryV2;
