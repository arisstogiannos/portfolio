"use client";
import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";

export default function Cursor({ cursorScale }) {
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
      

  

      if (pageY>1850&&pageY<2450) {
        moveCursorX(clientX < 900 ? clientX + 100 : clientX - 100);
        moveCursorY(clientY < 400 || window.scrollY<1700 ? pageY + 150 : pageY - 150);
      } else if (pageY > 900 && pageY < 1600) {
        setServicesInView(true);
        setTechStackInView(false);

        moveCursorX(1300);
        moveCursorY(1310);
      
      } else if (pageY >= 2450&& pageY<3500) {
        setTechStackInView(true);
        // moveCursorX(750);
        // moveCursorY(2850);
        console.log(pageY);
      } else {
        setTechStackInView(false);

        setServicesInView(false);
        moveCursorX(clientX);
        moveCursorY(pageY);
      }

      // if (pageY>1850&&pageY<2450) {
      //   moveCursorX(clientX < 900 ? clientX + 100 : clientX - 100);
      //   moveCursorY(clientY < 400 || window.scrollY<1700 ? pageY + 150 : pageY - 150);
      // } else if (pageY > 900 && pageY < 1600) {
      //   // setServicesInView(true);
      //   // setTechStackInView(false);

      //   // moveCursorX(1300);
      //   // moveCursorY(1310);
      
      // } else if (pageY >= 2450&& pageY<3500) {
      //   // setTechStackInView(true);
      //   // moveCursorX(750);
      //   // moveCursorY(2850);
      //   console.log(pageY);
      // } else {
      //   setTechStackInView(false);

      //   setServicesInView(false);
      //   moveCursorX(clientX);
      //   moveCursorY(pageY);
      // }
    });

    window.addEventListener("scroll",(e)=>{
      // console.log(window.scrollY)
      if(window.scrollY>610&&window.scrollY<1300){
        setServicesInView(true);
        setTechStackInView(false);

        moveCursorX(1300);
        moveCursorY(1310);
      }else if(window.scrollY>2100&&window.scrollY<2500){
        setTechStackInView(true);
        moveCursorX(750);
        moveCursorY(2850);
      }else if(window.scrollY>2500&& window.scrollY<3200){
        setTechStackInView(true);

        moveCursorX(750);
        moveCursorY(window.scrollY+400);
      }else if(window.scrollY>3200){
        setTechStackInView(false)
      }
    })
  }, []);
  return (
    <div
      ref={cursor}
      className={` work w-32 h-32 absolute bg-[#008080] pointer-events-none rounded-full  -translate-x-1/2 -translate-y-1/2 -z-[1000] filter  transition-transform duration-300 ease-in-out ${
        cursorScale ? "scale-[3.5] blur-xl " : "scale-[0.1]"
      } ${servicesInView ? "scale-[0.9] blur-2xl 3xl:translate-x-32 3xl:translate-y-32" : "scale-[0.1]"} ${
        techStackInView ? "scale-[3] blur-2xl " : "scale-[0.1]"
      }`}
    ></div>
  );
}
