"use client";

import { useState, useRef, useEffect } from "react";
import Project from "./Project";
import Modal from "./Modal";
import localfont from "next/font/local";
import { useInView, useScroll, useTransform } from "framer-motion";
import ProjectMobile from "./ProjectMobile";

const medium = localfont({ src: "../../../fonts/medium.otf" });

function Library({ setCursorScale, setLibraryInView }) {
  const projects = [
    {
      title: "Project 1",
      src: "c2montreal.png",
      color: "#008080",
    },
    {
      title: "Project 2",
      src: "locomotive.png",
      color: "#333333",
    },
    {
      title: "Project 3",
      src: "c2montreal.png",
      color: "#000000",
    },
    {
      title: "Project 4",
      src: "locomotive.png",
      color: "#000080",
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
      className="myContainer h-[100vh] bg-transparent my-32   relative   "
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
      <h3
        style={medium.style}
        className="max-md:hidden absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  text-[350px] text-mblack/60  -z-20 "
      >
        WORK
      </h3>
    </section>
  );
}

export default Library;
