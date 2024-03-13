import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import localfont from "next/font/local";
import Image from "next/image";

const medium = localfont({ src: "../../../fonts/medium.otf" });

function ProjectMobile({
  i,
  title,
  setModal,
  modal,
  isInView,
  scrollYProgress,
}) {
  const [isHovered, setIsHovered] = useState(-1);
  const { active, index } = modal;

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setIsHovered(Math.floor(scrollYProgress.get()));
    });
  }, []);

  return (
    <>
      <div
        style={{
          clipPath: i === isHovered ? "inset(0 0 0 0)" : "inset(50% 0 50% 0)",
        }}
        key={i}
        onMouseEnter={() => {
          setModal({ active: true, index: i });
          //setIsHovered(true)
        }}
        onMouseLeave={() => {
          setModal({ active: false, index: i });
          //setIsHovered(false)
        }}
        className={`pointer-events-none bg-white ${
          i === isHovered ? "z-50" : "-z-30"
        }  text-mblack transition-all duration-300 ease-linear flex flex-col-reverse lg:flex-row w-full pt-[30px] sm:pt-[40px] pl-[20px] sm:pl-[30px] pb-[15px] lg:pt-[40px] lg:pl-[100px] lg:pb-[40px] pr-[100px] gap-3 sm:gap-5 lg:gap-0  lg:items-center lg:justify-between items-start justify-around cursor-pointer group relative`}
      >
        <motion.h2
          custom={i}
          animate={[{ x: 0 }]}
          initial={[{ x: -1000 }]}
          style={medium.style}
          transition={
            index == -1
              ? {
                  duration: 0.8,
                  ease: [0.215, 0.61, 0.315, 1],
                  delay: i * 0.2,
                }
              : { duration: 0.01, ease: "easeIn" }
          }
          className="uppercase font-medium text-xl sm:text-4xl m-0 group-hover:opacity-40  transition transform  duration-200 ease-linear"
        >
          {title}
        </motion.h2>
        <motion.p
          custom={i}
          animate={[{ x: 0 }]}
          initial={[{ x: 1000 }]}
          transition={
            index == -1
              ? {
                  duration: 0.8,
                  ease: [0.215, 0.61, 0.315, 1],
                  delay: i * 0.2,
                }
              : { duration: 0.01, ease: "easeIn" }
          }
          className="font-semibold text-xs sm:text-base  group-hover:opacity-40 group-hover:translate-x-4 transition duration-200 ease-linear    "
        >
          Design&Development
        </motion.p>
        <div className="absolute top-1/3  left-1/2 -translate-x-1/2">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 1C13 0.447715 12.5523 1.59617e-07 12 1.82894e-07L3 5.62216e-07C2.44771 5.85493e-07 2 0.447716 2 1C2 1.55229 2.44771 2 3 2L11 2L11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10L13 1ZM1.70711 12.7071L12.7071 1.70711L11.2929 0.292893L0.292893 11.2929L1.70711 12.7071Z"
              fill="black"
            />
          </svg>
        </div>

        <Image
          loading="lazy"
          src={`/libraryImages/locomotive.png`}
          width={260}
          height={0}
          alt="image"
          className="h-auto absolute bottom-0 right-0 w-40 "
        />
      </div>

      <motion.hr
        animate={isInView && { scaleX: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.215, 0.61, 0.315, 1],
          delay: index * 0.2,
        }}
        initial={{ scaleX: 0, translateY: 2 }}
        className="w-full h-1 "
      />
    </>
  );
}

export default ProjectMobile;
