"use client";
import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";

export default function CursorDesktop({ cursorScale }) {
  const [servicesInView, setServicesInView] = useState(false);
  const [techStackInView, setTechStackInView] = useState(false);

  const cursor = useRef(null);

  useEffect(() => {
    const moveCursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const moveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "powe3 ",
    });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const pageY = e.pageY;
    

      if (pageY>2300&&pageY<2950) {
        moveCursorX(clientX < 900 ? clientX + 100 : clientX - 100);
        moveCursorY(clientY < 400 || window.scrollY<1700 ? pageY + 150 : pageY - 150);
        setTechStackInView(false);
        console.log(window.scrollY)
      } else if (pageY > 950 && pageY < 2000) {
        setServicesInView(true);
        setTechStackInView(false);

        moveCursorX(1500);
        moveCursorY(1520);
      
      } else if (pageY >= 2950&& pageY<3300) {
        setTechStackInView(true);
        moveCursorX(950);
        moveCursorY(3550);
      }else if(pageY>3300&& pageY<4700){

      } else {
        setTechStackInView(false);

        setServicesInView(false);
        moveCursorX(clientX);
        moveCursorY(pageY);
      }
      // console.log(clientY)
    });

    window.addEventListener("scroll",(e)=>{
     
      if(window.scrollY>2520&&window.scrollY<3000){
        setTechStackInView(true);
        moveCursorX(950);
        moveCursorY(3500);
      }else if(window.scrollY>=3000&& window.scrollY<3900){
        setTechStackInView(true);

        moveCursorX(950);
        moveCursorY(window.scrollY+500);
      }else if(window.scrollY>4200){
        setTechStackInView(false)
      }
    })
    
  }, []);
  return (
    <div
      ref={cursor}
      className={` work w-32 h-32 absolute bg-[#008080] pointer-events-none rounded-full  -translate-x-1/2 -translate-y-1/2 -z-[1000] filter  transition-transform duration-300 ease-in-out ${
        cursorScale ? "scale-[3.5] blur-xl " : "scale-[0.1]"
      } ${servicesInView ? "scale-[0.9] blur-2xl " : "scale-[0.1]"} ${
        techStackInView ? "scale-[4] blur-2xl " : "scale-[0.1]"
      }`}
    ></div>
  );
}
