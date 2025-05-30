"use client";
import { Montserrat } from "next/font/google";
import React from "react";
import Magnetic from "../globalComponents/Button/Magnetic";
import { motion } from "framer-motion";

const montserat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
function HeroNew({ loco, load, animStart }) {
  const slideUpButton = {
    open: {
      x: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 1.6,
        delay: 1.4,
      },
      // transition: {duration: 0.8, delay: 1,ease: [0, 0.55, 0.45, 1]}
    },
    closed: {
      x: "100%",
      opacity: 0,
    },
  };
  const slideUpButton2 = {
    open: {
      x: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 1.6,
        delay: 1.6,
      },
      // transition: {duration: 0.8, delay: 1,ease: [0, 0.55, 0.45, 1]}
    },
    closed: {
      x: "100%",
      opacity: 0,
    },
  };

  const slideUp = {
    open: (i) => ({
      y: "0%",
      transition: {
        duration: 1,
        delay: 1.4 + 0.02 * i,
        ease: [0, 0.55, 0.45, 1],
      },
    }),
    closed: {
      y: "100%",
      transition: { duration: 0.5 },
    },
  };
  const slideUpHeading = {
    open: (i) => ({
      y: "0%",
      opacity: 1,

      transition: {
        duration: 1,
        delay: 1.2 + 0.01 * i,
        ease: [0, 0.55, 0.45, 1],
      },
    }),
    closed: {
      y: "100%",
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };
  const heading = "Designed Developed Delivered";
  const phrase =
    "I am a creative web developer with passion in making interactive eye-catching websites that will make your bussiness stand out in the digital world";
  return (
    <section className="myContainer  3xl:pt-16 pt-0  relative">
      <motion.div
        animate={animStart && { opacity: 1, transition: { duration: 0.1 } }}
        initial={{ opacity: 0 }}
        className=" w-full h-[180px] md:h-[250px] lg:h-[300px] xl:h-[400px] relative"
      >
        <motion.video
          src="Mountains.webm"
          loop
          autoPlay
          muted
          playsInline
          className="overflow-hidden  object-fill w-full h-full absolute -z-[1000] "
        ></motion.video>
        <motion.svg
          height={"100%"}
          width={"100%"}
          style={montserat.style}
          className="font-bold  text-[90px] md:text-[190px] lg:text-[250px] xl:text-[360px] 3xl:text-[420px] w-full h-full relative top-0 left-0 tracking-wider -z-[1000] "
        >
          <defs>
            <mask id="mask" x="0" y="0" width={"100%"} height={"100%"}>
              <rect
                x="0"
                y="0"
                width="101%"
                height="100%"
                className="fill-white klkl -z-[1000] "
              />

              <motion.text
                animate={
                  !load && {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 1.7, ease: "circInOut" },
                  }
                }
                initial={{ opacity: 0, scale: 0.5 }}
                fill="red"
                textAnchor={"middle"}
                x="52%"
                y="80%"
                width="101%"
                height="100%"
                className=""
              >
                VISION
              </motion.text>
            </mask>
          </defs>
          <rect
            x="0"
            y="0"
            width="135%"
            height="100%"
            className="fill-mblack klkl -z-[2000] "
          />
        </motion.svg>

        <h1 className="text-center lg:text-left  text-mwhite text-[30px] md:text-[50px] lg:text-[50px] xl:text-[80px] 3xl:text-[100px] -z-[900] leading-tight capitalize font-medium absolute top-full -translate-y-2/3 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-0  w-full bg-gradient-to-t via-mblack via-60%  from-mblack to-mblack/0">
          {heading.split(" ").map((word, wordIndex) => (
            <span
              key={wordIndex}
              className="ml-0 first-of-type:ml-0 relative overflow-hidden inline-flex z-0"
            >
              <motion.span
                className="mr-3 md:mr-6 first-of-type:ml-0 relative overflow-hidden inline-flex "
                key={wordIndex}
              >
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    variants={slideUpHeading}
                    custom={word.length * wordIndex + letterIndex}
                    initial="closed"
                    animate={!load && "open"}
                    key={wordIndex + letterIndex}
                    className=" lowercase first-of-type:uppercase scaleCursor"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
              {wordIndex === 0 ? (
                <span className="w-[690px] h-10 hidden lg:inline-block"></span>
              ) : (
                ""
              )}
            </span>
          ))}
        </h1>
      </motion.div>
      <div className="flex flex-col lg:flex-row gap-10  justify-between items-center mt-20 md:mt-28 lg:mt-20 3xl:mt-28">
        <p className=" text-[15px] text-center lg:text-left md:text-[21px] xl:text-[25px] text-mwhite font-normal scaleCursor max-w-[500px] lg:max-w-[600px] xl:max-w-[800px]">
          {phrase.split(" ").map((word, index) => {
            return (
              <span
                key={index}
                className={
                  "mr-2 first-of-type:ml-0 relative overflow-hidden inline-flex"
                }
              >
                <motion.span
                  variants={slideUp}
                  custom={index}
                  initial={"closed"}
                  animate={!load && "open"}
                  key={index}
                >
                  {" "}
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <div className="h-36 w-full md:w-2/3 lg:w-[270px] 3xl:w-[300px] relative">
          <Magnetic>
            <motion.div
              onClick={() => {
                loco.scrollTo("#contact", { duration: 2 });
              }}
              variants={slideUpButton2}
              initial={"closed"}
              animate={!load && "open"}
              className="bg-transparent buttons w-40 h-14  md:w-56 md:h-20 lg:size-36 3xl:size-40 border-2 cursor-pointer border-mwhite rounded-full  absolute top-0 lg:right-0 max-lg:left-0  flex justify-center items-center "
            >
              {" "}
              <p className="pointer-events-none capitalize text-lg md:text-xl xl:text-lg 3xl:text-xl font-medium text-center text-mwhite">
                Get in <br className="hidden md:block" /> touch
              </p>
            </motion.div>
          </Magnetic>
          <Magnetic>
            <motion.div
              onClick={() => {
                const serviceSection =
                  document.querySelectorAll(".servicesSection");
                loco.scrollTo(
                  serviceSection[window.innerWidth > 1024 ? 0 : 1],
                  { duration: 2 }
                );
              }}
              variants={slideUpButton}
              initial={"closed"}
              animate={!load && "open"}
              className="bg-transparent w-40 h-14 md:w-56 group md:h-20 buttons lg:size-36 3xl:size-40 border-2 cursor-pointer border-mblue rounded-full  absolute top-0 lg:left-0 max-lg:right-0 flex justify-center items-center "
            >
              {" "}
              <p className="pointer-events-none group-hover:text-white capitalize text-lg md:text-xl xl:text-lg 3xl:text-xl font-medium text-center text-mblue">
                explore
              </p>
            </motion.div>
          </Magnetic>
        </div>
        {/* <div className="size-40 rounded-full relative flex border-2 border-mblue capitalize justify-center items-center  text-2xl text-mblue cursor-pointer font-medium">
          <div className="absolute size-40 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-t-4  border-t-mblue"></div>
          explore
        </div> */}
      </div>

      {/* <div className="absolute top-full left-0 h-[500px] w-[700px] -translate-y-1/2 -translate-x-1/2 filter blur-3xl  bg-[radial-gradient(rgba(0,168,183,1)_0%,rgba(8,9,10,0.00)_60%)]"></div> */}
      <motion.div
        initial={{
          scale: 0.3,
          opacity: 0,
          x: "-66%", // Equivalent to -translate-x-2/3
          y: "-33%", // Equivalent to -translate-y-1/3
        }}
        animate={
          !load && {
            scale: 1,
            opacity: 1,
            transition: { delay: 0.3, duration: 4, ease: "circInOut" },
          }
        }
        className=" size-[270px] absolute lg:hidden top-2/3 left-0 gradient blur-3xl rounded-full -z-[900] -translate-y-1/3 -translate-x-2/3"
      ></motion.div>
      <motion.div
        initial={{
          scale: 0.3,
          opacity: 0,
          x: "-50%", // Equivalent to -translate-x-1/2
        }}
        animate={
          !load && {
            scale: 1,
            opacity: 1,
            transition: { delay: 0.3, duration: 4, ease: "circInOut" },
          }
        }
        className=" size-[270px] lg:hidden absolute top-[80%] left-[110%] gradient2 blur-3xl rounded-full -z-[900] -translate-x-1/2"
      ></motion.div>
    </section>
  );
}

export default HeroNew;
