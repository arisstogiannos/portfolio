import React, { useRef, useState } from "react";
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

  return (
    // <div ref={container} className="myContainer  h-[300vh]  relative">

    <section
      ref={container}
      id="library"
      className=" myContainer    flex items-center justify-between h-screen mt-40 "
    >
      <div className="flex flex-col w-[40%] h-[700px] py-10">
        <p className="scaleCursor capitalize font-normal xl:text-[27px] 3xl:text-3xl mb-auto text-mwhite ">
          <span className="opacity-80 font-normal">
            designing & developing each website with{" "}
          </span>
          <span className="opacity-100 font-medium ">passion</span>{" "}
          <span className="font-normal opacity-80">
            looking to achieve the{" "}
          </span>
          <span className="opacity-100 font-medium ">greatest result</span>{" "}
          possible
        </p>

        <div className="relative xl:mb-28 3xl:mb-48 ml-auto  h-40 w-80">
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
      <div className=" relative  -right-5 flex items-center justify-end 3xl:w-[850px] 3xl:h-[800px] xl:h-[700px] xl:w-[750px] overflow-y-hidden">
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
                <Scene key={index} imagesrc={project.src} />
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
