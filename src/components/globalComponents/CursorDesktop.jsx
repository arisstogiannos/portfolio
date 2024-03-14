"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CursorDesktop({ cursorScale }) {
  const [servicesInView, setServicesInView] = useState(false);
  const [techStackInView, setTechStackInView] = useState(false);

  const cursor = useRef(null);

  useLayoutEffect(() => {
    const moveCursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const moveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3 ",
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const pageY = e.pageY;
      console.log(window.scrollY)
      if (pageY > 2300 && pageY < 2800) {
        moveCursorX(clientX < 900 ? clientX + 100 : clientX - 100)
        moveCursorY(clientY < 400 || window.scrollY<1700 ? clientY + 150 : clientY - 150)  
        setTechStackInView(false)
      } else if (pageY > 950 && pageY < 2000) {
        setServicesInView(true);
        setTechStackInView(false);
        moveCursorX(1500)
        moveCursorY(1540-window.scrollY)  
      } else if (pageY >= 2900 && pageY < 4000) {
        
      } else {
        setTechStackInView(false);
        setServicesInView(false);
        moveCursorX(clientX)
        moveCursorY(clientY)
      }
    };

    const handleScroll = () => {
      const { scrollY } = window;
      if (scrollY>550&&scrollY<1440){
        setServicesInView(true);
        setTechStackInView(false);
        moveCursorX(1500)
        moveCursorY(1540-window.scrollY) 
      } else if (scrollY > 2800 && scrollY < 4000) {
        setTechStackInView(true);
        moveCursorX(950)
        moveCursorY(500)
      } else if (scrollY > 4200) {
        setTechStackInView(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={cursor}
      className={`work w-32 h-32 fixed bg-[#008080] pointer-events-none -translate-x-1/2 -translate-y-1/2 -z-[1000] filter transition-transform duration-300 ease-in-out ${
        cursorScale ? "scale-[3.5] blur-xl rounded-3xl" : "scale-[0.1] rounded-full"
      } ${servicesInView ? "scale-[0.9] blur-2xl" : "scale-[0.1]"} ${techStackInView ? "scale-[4] blur-2xl" : "scale-[0.1]"}`}
    ></div>
  );
}
