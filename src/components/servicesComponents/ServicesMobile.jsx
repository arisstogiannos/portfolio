import React, { useEffect, useRef, useState } from "react";
import { servicelist } from "@/app/data.js";
import localfont from "next/font/local";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Montserrat } from "next/font/google";

const montserat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const medium = localfont({ src: "../../../fonts/medium.otf" });

function ServicesMobile() {
  const container = useRef(null);
  const target = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState([false, false, false]);
  const [currService, setCurrService] = useState("top-0");
  const [currServiceTime, setCurrServiceTime] = useState(13);
  const { scrollXProgress } = useScroll({
    container: container,
    target: target,
    offset: ["end start", "center start"],
  });
  const inview = useInView(container, { amount: 0.5 });

  useEffect(() => {
    if (inview) {
      var des = document.getElementById("Design");
      des.play();
      des.currentTime = 0;
    }
  }, [inview]);

  useMotionValueEvent(scrollXProgress, "change", (latest) => {
    var dev;
    var des;
    var seo;
    if (inview) {
      if (latest > 0.9) {
        seo = document.getElementById("SEO");
        seo.play();
        seo.currentTime = 0;
        setCurrService("-top-12");
        setCurrServiceTime(10);
      } else if (latest > 0.45) {
        dev = document.getElementById("Development");
        dev.play();
        dev.currentTime = 0;
        setCurrService("-top-6");
        setCurrServiceTime(17);
      } else if (latest >= 0) {
        des = document.getElementById("Design");
        des.play();
        des.currentTime = 0;
        setCurrService("top-0");
        setCurrServiceTime(13);
      }
    }
  });

  const handleVideoLoaded = (index) => {
    console.log(index);
    setVideoLoaded((prev) => {
      // Create a new array based on the previous state
      const updated = [...prev];
      // Set the specific index to true
      updated[index] = true;
      return updated; // Return the new array as the updated state
    });
  };

  return (
    <>
      <h2
        style={medium.style}
        className="servicesSection text-4xl text-white  mr-auto flex gap-14 scaleCursor mb-16 mt-24 ml-9 lg:hidden"
      >
        the <br /> process
      </h2>
      <section
        id="services"
        ref={container}
        className="  lg:hidden w-screen overflow-x-scroll snap-x snap-mandatory snap-normal scrollbar-hidden     "
      >
        <div ref={target} className="flex gap-10 ml-9   w-[270vw] ">
          {servicelist.map((service, index) => {
            const { title, desc, src } = service;
            return (
              <div
                key={index}
                className="border border-mwhite relative  w-[75vw] xsm:w-[80vw] snap-center rounded-xl  bg-mblack  "
              >
                {/* <hr className="w-full border-t border-t-mwhite" /> */}

                <video
                  id={title}
                  preload="none"
                  loop
                  src={src}
                  width={"340px"}
                  height={"424px"}
                  className={` mx-auto mt-2 ${
                    !videoLoaded[index] && "hidden"
                  }  `}
                  muted
                  playsInline
                  onCanPlay={() => handleVideoLoaded(index)}
                />
                {!videoLoaded[index] && (
                  <div className="w-[75vw] h-[93.3vw] mx-auto mt-2 flex justify-center items-center">
                    <div className=" rounded-full  size-20 animate-spin  border-t-4 border-mblue"></div>
                  </div>
                )}

                {/* <hr className="w-full border-t border-t-mwhite" /> */}
                <h3
                  style={medium.style}
                  className=" ml-5 px-3 my-0 text-base xsm:text-lg text-mwhite"
                >
                  <span style={montserat.style}>#</span>
                  {index + 1} {title}
                </h3>
                <p className="ml-5 px-3 my-4 text-xs xsm:text-sm text-mwhite">
                  {desc}
                </p>
                {/* <span style={medium.style} className="absolute bottom-0 right-2 text-[150px] leading-tight text-white opacity-[3%]"><span style={montserat.style} className="font-bold" >#</span >{index+1}</span> */}
              </div>
            );
          })}
        </div>
      </section>
      <div className=" relative left-[80vw] -translate-x-full   ml-9 mt-10  h-7 w-36 overflow-hidden lg:hidden">
        {inview && currServiceTime === 17 && (
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: 0 }}
            onAnimationComplete={(definition) => {
              container.current.scrollBy({
                left: 200, // Adjust the amount to scroll by (scroll left by one full screen)
                behavior: "smooth", // Smooth scroll behavior
              });
            }}
            transition={{ duration: 17 }}
            className=" absolute -left-full h-[2px] w-36 bottom-0 bg-white"
          ></motion.div>
        )}
        {inview && currServiceTime === 13 && (
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: 0 }}
            onAnimationComplete={(definition) => {
              container.current.scrollBy({
                left: 200, // Adjust the amount to scroll by (scroll left by one full screen)
                behavior: "smooth", // Smooth scroll behavior
              });
            }}
            transition={{ duration: 13 }}
            className=" absolute -left-full h-[2px] w-36 bottom-0 bg-white"
          ></motion.div>
        )}
        {inview && currServiceTime === 10 && (
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: 0 }}
            onAnimationComplete={(definition) => {
              container.current.scrollBy({
                left: -1800, // Adjust the amount to scroll by (scroll left by one full screen)
                behavior: "smooth", // Smooth scroll behavior
              });
            }}
            transition={{ duration: 10 }}
            className=" absolute -left-full h-[2px] w-36 bottom-0 bg-white"
          ></motion.div>
        )}
        <div className=" absolute left-0 h-[2px] w-36 bottom-0 bg-white/30"></div>
        <motion.button
          className={` overflow-hidden  text-white absolute left-0 ${currService} transform duration-1000  text-left  `}
        >
          {servicelist.map((s, i) => {
            return (
              <p
                key={i}
                onClick={() => {
                  container.current.scrollBy({
                    left: 200, // Adjust the amount to scroll by (scroll left by one full screen)
                    behavior: "smooth", // Smooth scroll behavior
                  });
                }}
                className="flex justify-between items-center w-36"
              >
                {i != 0 && s.title}
                {i != 0 && (
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 16 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" fill-white -rotate-90 "
                  >
                    <path d="M7.29289 21.7071C7.68342 22.0976 8.31658 22.0976 8.70711 21.7071L15.0711 15.3431C15.4616 14.9526 15.4616 14.3195 15.0711 13.9289C14.6805 13.5384 14.0474 13.5384 13.6569 13.9289L8 19.5858L2.34315 13.9289C1.95262 13.5384 1.31946 13.5384 0.928933 13.9289C0.538409 14.3195 0.538409 14.9526 0.928933 15.3431L7.29289 21.7071ZM7 4.37114e-08L7 21L9 21L9 -4.37114e-08L7 4.37114e-08Z" />
                  </svg>
                )}
              </p>
            );
          })}
          <p
            onClick={() => {
              container.current.scrollBy({
                left: -1800, // Adjust the amount to scroll by (scroll left by one full screen)
                behavior: "smooth", // Smooth scroll behavior
              });
            }}
            className="flex justify-between items-center w-36"
          >
            Design
            {
              <svg
                width="15"
                height="16"
                viewBox="0 0 16 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" fill-white -rotate-90 "
              >
                <path d="M7.29289 21.7071C7.68342 22.0976 8.31658 22.0976 8.70711 21.7071L15.0711 15.3431C15.4616 14.9526 15.4616 14.3195 15.0711 13.9289C14.6805 13.5384 14.0474 13.5384 13.6569 13.9289L8 19.5858L2.34315 13.9289C1.95262 13.5384 1.31946 13.5384 0.928933 13.9289C0.538409 14.3195 0.538409 14.9526 0.928933 15.3431L7.29289 21.7071ZM7 4.37114e-08L7 21L9 21L9 -4.37114e-08L7 4.37114e-08Z" />
              </svg>
            }
          </p>
        </motion.button>
      </div>
    </>
  );
}

export default ServicesMobile;
