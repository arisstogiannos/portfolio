"use client"

import { useState } from "react";
import  Project  from "./Project";
import Modal from "./Modal";

function Library(){

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
  
    const [modal, setModal] = useState({active:false, index:0})
  
    return (
      <section className="flex items-center justify-center h-[100vh] bg-[#070914] ">
        <div className=" flex justify-center items-center flex-col  w-[1440px] z-10">
          {
             projects.map( (project, index) =>{
              return <Project key={index} index={index} title ={project.title} setModal={setModal} />
            })
          }
        </div>
        <Modal modal={modal} projects={projects}/>
        <h1 className="absolute top-[2000px] text-[500px] text-[#008080] " style={{filter:'blur(50px)'}}>WORK</h1>
      </section>
    )
  }

export default Library;