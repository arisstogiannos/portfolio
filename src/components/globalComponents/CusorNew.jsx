import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CursorNew({ cursorScale }) {
  const [servicesInView, setServicesInView] = useState(false);
  const [techStackInView, setTechStackInView] = useState(false);
  const [cursorIsHovering, setCursorIsHovering] = useState(false);
  const [lastCursorPos, setLastCursorPos] = useState({ x: 0, y: 0, pageY: 0 });
  const cursor = useRef(null);

  useEffect(() => {
    const array = document.getElementsByClassName("scaleCursor");

    const handleEnter = (event) => {
      // Your event handling logic goes here
      setCursorIsHovering(true);
      console.log("just")
    };
    const handleLeave = (event) => {
      // Your event handling logic goes here
      setCursorIsHovering(false);
      console.log("justLeft")

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
      duration: 0.5,
      ease: "power3",
    });
    const moveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3 ",
    });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;

      if (techStackInView) {
        moveCursorX(window.innerWidth / 2);
        moveCursorY(window.innerHeight / 2);
      } else if (servicesInView) {
        moveCursorX(1300);
        moveCursorY(550);
        // setLastCursorPos({ x: clientX, y: clientY });
      } else if (cursorScale) {
        moveCursorX(clientX < 900 ? clientX + 100 : clientX - 100);
        moveCursorY(
          clientY < 400 || window.scrollY < 1700 ? clientY + 150 : clientY - 150
        );
        // setLastCursorPos({ x: clientX, y: clientY });
      } else {
        // setLastCursorPos({ x: clientX, y: clientY });
        moveCursorX(clientX);
        moveCursorY(clientY);
      }
    });

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.target.id === "services") {
          setServicesInView(entry.isIntersecting);
          moveCursorX(1300);
          moveCursorY(550);
        } else if (entry.target.id === "techStack") {
          setTechStackInView(entry.isIntersecting);
        }

        // if (!servicesInView) {
        //   moveCursorX(lastCursorPos.x);
        //   moveCursorY(lastCursorPos.y);
        // }
        if (techStackInView) {
          moveCursorX(window.innerWidth / 2);
          moveCursorY(window.innerHeight / 2);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    observer.observe(document.getElementById("services"));
    observer.observe(document.getElementById("techStack"));

    return () => observer.disconnect();
  }, [servicesInView, techStackInView, cursorScale]);

  return (
    <div
      ref={cursor}
      className={`work w-32  h-32 fixed bg-[#008080] pointer-events-none rounded-full -translate-x-1/2 -translate-y-1/2 -z-[1000] filter transition-transform duration-300 ease-in-out ${
        cursorScale ? "scale-[3.5] blur-xl " : "scale-[0.1]"
      } ${
        servicesInView
          ? "scale-[0.9] blur-2xl 3xl:translate-x-32 3xl:translate-y-32 "
          : "scale-[0.1] "
      } ${
        cursorIsHovering
          ? "scale-[0.9]  mix-blend-exclusion  z-[1000] "
          : "scale-[0.1] "
      } ${techStackInView ? "scale-[3.5] blur-2xl " : "scale-[0.1]"}`}
    ></div>
  );
}
