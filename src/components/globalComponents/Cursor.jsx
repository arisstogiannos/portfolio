'use client'
import React, { useEffect, useRef } from 'react'

import gsap from 'gsap'





export default function Cursor({cursorScale,servicesInView}) {

  
  const cursor =useRef(null);
  

  useEffect( ()=> {
   

    const moveCursorX = gsap.quickTo(cursor.current, "left", {duration:0.5, ease:"power3"});
    const moveCursorY = gsap.quickTo(cursor.current, "top", {duration:0.5, ease:"powe3 "});


    window.addEventListener("mousemove",(e)=> {
      const {clientX, clientY}= e;
      const pageY =e.pageY;
      
      
     
     
      // if(servicesInView){
      //   moveCursorX(clientX<900?clientX+150:clientX-150);
      //   moveCursorY(clientY<500?pageY+150:pageY-150 );
      //   console.log("in")
      // }else{
      //   moveCursorX(1400);
      //   moveCursorY(1600);
      //   console.log("out")
      // }
      
      if(cursorScale){
        moveCursorX(clientX<900?clientX+100:clientX-100);
        moveCursorY(clientY<500?pageY+150:pageY-150 );
        
      }else{
        
        moveCursorX(clientX);
        moveCursorY(pageY );
        
      }

  
    })
    
  },[cursorScale])

  return (

    <div  ref={cursor} className={` work w-32 h-32 absolute bg-[#008080] pointer-events-none rounded-full  -translate-x-1/2 -translate-y-1/2 -z-[1000] filter blur-xl transition-transform duration-300 ease-in-out ${cursorScale?'scale-[3.5] ':'scale-[0.1]'} `} ></div>
   
  )
}