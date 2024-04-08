"use client";

import { useState, useRef, useEffect } from "react";
import Project from "./Project";
import Modal from "./Modal";
import localfont from "next/font/local";
import { useInView, useScroll, useTransform,motion } from "framer-motion";
import ProjectMobile from "./ProjectMobile";

const medium = localfont({ src: "../../../fonts/medium.otf" });

function Library({ setCursorScale }) {
  const projects = [
    {
      title: "chess uom",
      src: "chess-uom.webp",
      color: "#FFA800",
      height:216
    },
    {
      title: "Project 2",
      src: "locomotive.webp",
      color: "#333333",
      height:230

    },
    {
      title: "Project 3",
      src: "c2montreal.webp",
      color: "#000000",
      height:230

    },
    {
      title: "Project 4",
      src: "locomotive.webp",
      color: "#000080",
      height:230

    },
  ];

  const refi = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refi,
    offset: ["start end", "end center"],
  });
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [-1, 4]);

  const [modal, setModal] = useState({ active: false, index: -1 });
  const isInView = useInView(refi, { once: true, amount: 0.5 });

  return (
    <section
      ref={refi}
      id="projects"
      className="myContainer h-[100vh] bg-transparent my-72   relative   "
    >
      <div
        onMouseEnter={() => setCursorScale(true)}
        onMouseLeave={() => setCursorScale(false)}
        id="libraryContainer"
        className=" flex justify-center items-center flex-col  absolute top-1/2 -translate-y-1/2 w-full   "
      >
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              i={index}
              title={project.title}
              setModal={setModal}
              modal={modal}
              isInView={isInView}
            />
          );
        })}
      </div>
      <div className=" absolute top-1/2 -translate-y-1/2  flex justify-center items-center flex-col pointer-events-none  w-full lg:hidden">
        {projects.map((project, index) => {
          return (
            <ProjectMobile
              key={index}
              i={index}
              title={project.title}
              setModal={setModal}
              modal={modal}
              isInView={isInView}
              scrollYProgress={scrollProgress}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
      {/* <motion.div className="w-40 h-96 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute bg-mwhite  "></motion.div> */}
      <motion.h3
      initial={{clipPath:'inset(5% 0 0)'}}
        style={medium.style}
        className="max-md:hidden  text-[350px] text-mblack/60 -z-20  absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 "
      >
        WORK
      </motion.h3>
    </section>
  );
}

export default Library;
