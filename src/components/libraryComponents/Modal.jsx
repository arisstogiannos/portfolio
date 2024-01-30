'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import {easeIn, motion} from 'framer-motion'
import gsap from 'gsap'



const scaleAnimation ={
  initial:{scale:0, x:"-50%", y:"-50%"},
  open:{scale:1, x:"-50%", y:"-50%",transition:{duration:0.4, ease: [0.76, 0, 0.24, 1]}},
  closed:{scale:0, x:"-50%", y:"-50%",transition:{duration:0.4, ease: [0.32, 0, 0.67, 0]}},

}

 function Modal({modal,projects}) {

  const {active,index} = modal;
  const container = useRef(null);
  const cursor =useRef(null);
  const cursorLabel = useRef(null);

  useEffect( ()=> {
    const moveContainerX = gsap.quickTo(container.current, "left", {duration:0.8, ease:"power3"});
    const moveContainerY = gsap.quickTo(container.current, "top", {duration:0.8, ease:"power3"});

    const moveCursorX = gsap.quickTo(cursor.current, "left", {duration:0.5, ease:"power3"});
    const moveCursorY = gsap.quickTo(cursor.current, "top", {duration:0.5, ease:"power3"});

    const moveCursorLabelX = gsap.quickTo(cursorLabel.current, "left", {duration:0.45, ease:"power3"});
    const moveCursorLabelY = gsap.quickTo(cursorLabel.current, "top", {duration:0.45, ease:"power3"});


    window.addEventListener("mousemove",(e)=> {
      const {clientX, clientY}= e;
      const l =e.pageY;
      console.log(l);
      moveContainerX(clientX);
      moveContainerY(l );
      
      moveCursorX(clientX);
      moveCursorY(l );

      moveCursorLabelX(clientX);
      moveCursorLabelY(l );
    })
    
  },[])

  return (
    <>
    <motion.div ref={container} variants={scaleAnimation} initial={"initial"} animate={active? "open" : "closed"} className='pointer-events-none h-[300px] w-[350px] flex items-center justify-center absolute overflow-hidden z-40'>
      <div style={{top: index * -100 +"%", transition:"top 0.5s cubic-bezier(0.76, 0, 0.24, 1)"}} className='h-full w-full absolute'>
        {
          projects.map( (project,index) => {
            const {src, color} = project;
          
            return <div key={`modal_${index}`}  style={{backgroundColor:color, position:'relative',display:"flex", height:"100%", alignItems:"center", justifyContent:'center'}}>
              <Image
              src={`/libraryImages/${src}`}
              width={300}
              height={0}
              alt='image'
              className='h-auto'
              />
            </div>
          })
        }
      </div>
    </motion.div>
    <motion.div variants={scaleAnimation} initial={"initial"} animate={active? "open" : "closed"} ref={cursor} className='w-20 h-20 absolute bg-[#008080] pointer-events-none rounded-full z-50 ' ></motion.div>
    <motion.div variants={scaleAnimation} initial={"initial"} animate={active? "open" : "closed"} ref={cursorLabel} className='w-20 h-20 absolute bg-transparent pointer-events-none rounded-full z-50 flex justify-center items-center text-white'>View</motion.div>
    </>
  )
}

export default Modal;