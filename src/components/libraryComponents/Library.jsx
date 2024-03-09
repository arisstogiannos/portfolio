"use client"

import { useState,useRef } from "react";
import  Project  from "./Project";
import Modal from "./Modal";
import { Montserrat, Work_Sans } from "next/font/google";
import localfont from "next/font/local";
import { inView, motion, useInView } from "framer-motion";

const medium = localfont({ src: "../../../fonts/medium.otf" });

function Library({setCursorScale,setLibraryInView}){

    const projects= [
      {
        title:"Project 1",
        src:"c2montreal.png",
        color:"#008080"
      }, 
      {
        title:"Project 2",
        src:"locomotive.png",
        color:"#333333"
      },
      {
        title:"Project 3",
        src:"c2montreal.png",
        color:"#000000"
      },
      {
        title:"Project 4",
        src:"locomotive.png",
        color:"#000080"
      },
    ]
  
    const [modal, setModal] = useState({active:false, index:-1})
    const ref = useRef(null)
const isInView= useInView(ref,{once:true,amount:0.4})
  
    return (
      <section  ref={ref} className="flex items-center justify-center h-[100vh] bg-transparent  mt-40">
        <div onMouseEnter={()=>setCursorScale(true)} onMouseLeave={()=>setCursorScale(false)} className=" flex justify-center items-center flex-col  w-[1440px] z-10">
          {
             projects.map( (project, index) =>{
              return <Project key={index} i={index}  title ={project.title} setModal={setModal} modal={modal} isInView={isInView} />
            })
          }
        </div>
        <Modal modal={modal} projects={projects}/>
        <h3 style={medium.style} className="absolute left-1/2 -translate-x-1/2 3xl:top-[2320px] 2xl:top-[1900px] text-[350px] text-mblack/60   " >WORK</h3>
      
      </section>
    )
  }

export default Library;