import React, { useRef, useState } from "react";
import { Work_Sans, Zen_Dots } from "next/font/google";
import { animate, easeIn, inView, motion, useInView } from "framer-motion";

const Worksans = Work_Sans({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

const zen = Zen_Dots({
  weight: ["400"],
  subsets: ["latin"],
});

function Project({ index, title, setModal, isInView }) {
  const [isHovered,setIsHovered] = useState(false)
  return (
    <>
      <div
        key={index}
        onMouseEnter={() => {
          setModal({ active: true, index: index });
          setIsHovered(true)
        }}
        onMouseLeave={() => {
          setModal({ active: false, index: index });
          setIsHovered(false)
        }}
        className="transition duration-1000 flex w-full pt-[40px] pl-[100px] pb-[40px] pr-[100px]  items-center justify-between  cursor-pointer group"
      >
        <motion.h2
          custom={index}
          animate={[isInView && { x: 0 }]}
          initial={{ x: -1000 }}
          transition={{
            duration: 0.8,
            ease: [0.215, 0.61, 0.315, 1],
            delay:  index * 0.2,
          }}
          className="font-normal text-[50px] m-0 group-hover:opacity-40  transition transform group-hover:scale-50 duration-200 ease-linear text-white"
        >
          {title}
        </motion.h2>
        <motion.p
          custom={index}
          animate={isInView && { x: 0 }}
          initial={{ x: 1000 }}
          transition={{
            duration: 0.8,
            ease: [0.215, 0.61, 0.315, 1],
            delay:  index * 0.2,
          }}
          className="font-light group-hover:opacity-40 group-hover:translate-x-4 transition duration-200 ease-linear  text-white"
        >
          Design&Development
        </motion.p>
      </div>
      
      <motion.hr
        animate={isInView && { scaleX: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.215, 0.61, 0.315, 1],
          delay:  index * 0.2,
        }}
        initial={{ scaleX: 0 }}
        className="w-full h-1 "
      />
    </>
  );
}

export default Project;
