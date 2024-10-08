import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CursorNew({ cursorScale,projectColor,modal }) {
  const [servicesInView, setServicesInView] = useState(false);
  const [techStackInView, setTechStackInView] = useState(false);
  const [libraryInView, setLibraryInView] = useState(false);
  const [cursorIsHovering, setCursorIsHovering] = useState(false);
  const [lastCursorPos, setLastCursorPos] = useState({ x: 0, y: 0, pageY: 0 });
  const cursor = useRef(null);
  const servicesInViewRef = useRef(false); // useRef to hold the latest value
  const { active, index } = modal;
  useEffect(() => {
    servicesInViewRef.current = servicesInView; // Update the ref whenever state changes
  }, [servicesInView]);

  useEffect(() => {
    const array = document.getElementsByClassName("scaleCursor");

    const handleEnter = (event) => {
      // Your event handling logic goes here
      setCursorIsHovering(true);
    };
    const handleLeave = (event) => {
      // Your event handling logic goes here
      setCursorIsHovering(false);
    };

    // Loop through each element with the class name "scaleCursor" and add a click event listener
    for (let i = 0; i < array.length; i++) {
      array.item(i).addEventListener("mouseenter", handleEnter);
      array.item(i).addEventListener("mouseleave", handleLeave);
    }

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      for (let i = 0; i < array.length; i++) {
        array.item(i).removeEventListener("mouseenter", handleEnter);
        array.item(i).removeEventListener("mouseleave", handleLeave);
      }
    };
  }, []);

  useEffect(() => {
    const moveCursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.4,
      ease: "power3",
    });
    const moveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.4,
      ease: "power3 ",
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      if (techStackInView) {
        moveCursorX(window.innerWidth / 2);
        moveCursorY(window.innerHeight / 2);
      } else if (servicesInView) {
        setLastCursorPos({ x: clientX, y: clientY });
      // } else if (libraryInView) {
        
      //   setLastCursorPos({ x: clientX, y: clientY });
      } else {
        setLastCursorPos({ x: clientX, y: clientY });
        moveCursorX(clientX);
        moveCursorY(clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.target.id === "services") {
          setServicesInView(entry.isIntersecting);
          
          const handleScroll = (e) => {
            const rect = videoPlayer.getBoundingClientRect();
            if (servicesInViewRef.current) {
              moveCursorX(rect.left + (rect.right - rect.left) / 2);
              moveCursorY(rect.top + (rect.bottom - rect.top) / 2);
            } 
          };
          if (servicesInViewRef.current) {
            window.addEventListener("scroll", handleScroll);
          }else{
            window.removeEventListener("scroll", handleScroll);
          }
          // Cleanup function to remove event listener when "services" is not intersecting
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        } else if (entry.target.id === "techStack") {
          setTechStackInView(entry.isIntersecting);
        }else if (entry.target.id === "library") {
          setLibraryInView(entry.isIntersecting);
        }

        if (!servicesInView && !libraryInView) {
          moveCursorX(lastCursorPos.x);
          moveCursorY(lastCursorPos.y);
        }

        // if(libraryInView){
        //   moveCursorX(window.innerWidth * (69/100));
        //   moveCursorY(window.innerHeight / 2);
          
        // }else{
        //   moveCursorX(lastCursorPos.x);
        //   moveCursorY(lastCursorPos.y);
        // }
        if (techStackInView && !libraryInView ) {
          moveCursorX(window.innerWidth / 2);
          moveCursorY(window.innerHeight / 2);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7, // Adjust as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    observer.observe(document.getElementById("services"));
    // observer.observe(document.getElementById("techStack"));
    observer.observe(document.getElementById("library"));

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [servicesInView, techStackInView, cursorScale,index,libraryInView]);

  return (
    <div
      ref={cursor}
      style={{backgroundColor:projectColor}}
      className={`work w-32  h-32 fixed  pointer-events-none rounded-full -translate-x-1/2 -translate-y-1/2 -z-[900] filter transition-transform duration-300 ease-in-out ${
        servicesInView
          ? "scale-[0.9] blur-2xl "
          : "scale-[0.1] "
      } ${
        cursorIsHovering
          ? "scale-[0.9]  mix-blend-exclusion  z-[1000] "
          : "scale-[0.1] "
      } ${techStackInView ? "scale-[3.5] blur-2xl " : "scale-[0.1]"}`}
    ></div>
  );
}
