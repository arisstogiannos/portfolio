"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import localfont from "next/font/local";

const medium = localfont({ src: "../../../fonts/medium.otf" });

function Loader2({ setLoading, load, setAnimStart }) {
  const cont = useRef(null);
  const lettersRef = useRef([]);
  useLayoutEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 200);
    console.log("hello")
  }, []);
  useEffect(() => {
   

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Re-enable scrolling after animation finishes
          document.body.style.overflowY = "auto";
        },
        onStart:()=>{
          document.body.style.overflowY = "hidden";
        }
      });

      // Ensure loader is visible only when animation starts
      // gsap.set(cont.current, { visibility: "visible" });

      // Loader background animation sequence
      tl // Scroll to top immediately
        .to(".containerLoader", {
          width: "100vw",
          duration: 0.4,
          ease: "circ.inOut",
          transformOrigin: "right"
        }).set(cont.current, { zIndex: -1100 })
        .to(".containerLoader", {
          height: "30vh",
          duration: 0.4,
          ease: "circ.inOut",
          transformOrigin: "center"
        }, ">")
        .to(
          lettersRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.07, // Stagger animation start for each letter
            ease: "circ.out",
          }, ">"
        )
        .to(lettersRef.current, {
          x: -60,
          opacity: 0,
          duration: 0.3,
          ease: "circ.out",
          delay: 0,
        })
        .to(".containerLoader", {
          height: "100vh",
          duration: 0.8,
          ease: "circ.inOut",
          transformOrigin: "center"
        })
        .to(cont.current, {
          display: "none",
        })
        .add(() => {
          setAnimStart(true);
        }, "-=0.9")
        .add(() => {
          setLoading(false);
        }, "-=0.8");

    }, cont);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cont}
      style={{ zIndex:1100 }} // Initially hidden to prevent flash
      className="bg-mwhite w-svw h-svh fixed top-0 left-0 flex items-center justify-end overflow-hidden "
    >
      <div
        style={medium.style}
        className="containerLoader flex flex-col justify-center items-center w-0 h-[1vh] bg-mblack"
      >
        <h1 id="name" className="text-3xl xsm:text-4xl md:text-6xl xl:text-7xl text-mwhite flex flex-col items-center sm:flex-row">
          <span className="inline-flex overflow-hidden">
            {"aris".split("").map((letter, letterIndex) => (
              <span
                key={letterIndex}
                className="opacity-0 translate-x-[60px] letter"
                ref={(el) => (lettersRef.current[letterIndex] = el)}
              >
                {letter}
              </span>
            ))}
          </span>
          <span className="inline-flex overflow-hidden xl:ml-10">
            {"stogiannos".split("").map((letter, letterIndex) => (
              <span
                key={letterIndex + 4} // Offset key to prevent conflicts
                className="opacity-0 translate-x-[60px] letter"
                ref={(el) => (lettersRef.current[letterIndex + 4] = el)}
              >
                {letter}
              </span>
            ))}
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Loader2;
