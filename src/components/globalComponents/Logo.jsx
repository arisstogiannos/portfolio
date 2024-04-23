import React, { useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "./Button/Magnetic";
import Link from "next/link";
function Logo({ loco, color, classes, position }) {
  const [hovered, setHovered] = useState(false);
  const variants = {
    enter: {
      strokeDashoffset: 0,
      transition: { duration: 1, delay: 0, ease: "easeInOut" },
    },
    exit: {
      strokeDashoffset: "-100%",
      transition: { duration: 1, delay: 0, ease: "easeInOut" },
    },
  };
  const circleVariants = {
    enter: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1, delay: 0.2, ease: "easeInOut" },
    },
  };
  return (
    <Magnetic>
      <motion.a
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        href="#home"
        onClick={() => {
          loco.scrollTo(0, { duration: 2 });
        }}
        className={`${position}  pointer-events-auto relative group z-[1000]`}
        initial={{ paddingRight: 0 }}
        animate={hovered ? { paddingRight: 195 } : { paddingRight: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{color:color}}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={
            hovered
              ? { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
              : {
                  opacity: 0,
                  transition: { duration: 0.5, delay: 0.9, ease: "easeOut" },
                }
          }
          className={` ${classes} pointer-events-none absolute left-[18px]    whitespace-nowrap cursor-pointer text-[40px] font-light`}
        >
          A
        </motion.span>
        <motion.div
        initial={{width:0}}
        animate={hovered?{width:288}:{width:0}}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className=" absolute w-72  left-[49px] h-[59px]  line ">
          <motion.p
            initial={{ opacity: 1, x: -250 }}
            animate={
              hovered
                ? {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, delay: 0, ease: "easeOut" },
                  }
                : {
                    opacity: 1,
                    x: -250,
                    transition: { duration: 0.7, ease: "easeOut" },
                  }
            }
            className="    pointer-events-none absolute left-[0px] top-[13px] text-3xl font-light  whitespace-nowrap cursor-pointer"
          >
            ris Stogiannos
          </motion.p>
        </motion.div>

        <svg
        
          className=" "
          width="62"
          height="59"
          viewBox="0 0 62 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="30.9038"
            cy="29.4023"
            r="25.9554"
            stroke={color}
            strokeWidth="1.8"
            variants={circleVariants}
            initial={"exit"}
            animate={!hovered ? "enter" : "exit"}
            exit={"exit"}
          />

          <motion.path
            d="M31.4518 11.777C31.4518 11.777 22.3516 1.05076 16.4688 3.6582C12.5169 5.40976 11.9511 11.0227 11.9511 11.0227"
            stroke={color}
            strokeWidth="0.9"
            variants={variants}
            initial={"exit"}
            animate={!hovered ? "enter" : "exit"}
            exit={"exit"}
            strokeDasharray="100%"
          />

          <motion.circle
            cx="31.4519"
            cy="11.777"
            r="1.09614"
            fill="#00A8B7"
            variants={circleVariants}
            initial={"exit"}
            animate={!hovered ? "enter" : "exit"}
            exit={"exit"}
          />
          <motion.path
            d="M31.45 11.0479C31.45 11.0479 40.1817 1.07598 46.0646 3.68342C50.0165 5.43498 50.3501 11.5307 50.3501 11.5307"
            stroke={color}
            strokeWidth="0.9"
            variants={variants}
            initial={"exit"}
            animate={!hovered ? "enter" : "exit"}
            exit={"exit"}
            strokeDasharray="100%"
          />
          <motion.circle
            cx="2.25"
            cy="2.25"
            r="2.25"
            transform="matrix(-1 0 0 1 33.7 9.28073)"
            fill="#00A8B7"
            variants={circleVariants}
            initial={"exit"}
            animate={!hovered ? "enter" : "exit"}
            exit={"exit"}
          />
          <motion.path
            d="M40.4951 32.3296C40.4951 32.3296 52.9725 23.7642 58.8554 26.3716C62.8073 28.1232 57.4853 31.4456 57.4853 31.4456"
            stroke={color}
            strokeWidth="0.9"
            variants={variants}
            initial={"exit"}
            animate={!hovered ? "enter" : "exit"}
            exit={"exit"}
            strokeDasharray="100%"
          />
          <motion.circle
            cx="2.25"
            cy="2.25"
            r="2.25"
            transform="matrix(-1 0 0 1 42.7 29.9807)"
            fill="#00A8B7"
            variants={circleVariants}
            initial={"exit"}
            animate={!hovered ? "enter" : "exit"}
            exit={"exit"}
          />
          <motion.path
            d="M21.8607 32.8777C21.8607 32.8777 9.02748 41.9247 3.14459 39.3173C-0.807247 37.5657 4.51472 34.2433 4.51472 34.2433"
            stroke={color}
            strokeWidth="0.9"
            variants={variants}
            initial={"exit"}
            animate={!hovered ? "enter" : "exit"}
            exit={"exit"}
            strokeDasharray="100%"
          />
          <motion.circle
            cx="2.25"
            cy="2.25"
            r="2.25"
            transform="matrix(1 0 0 -1 19.3 35.3807)"
            fill="#00A8B7"
            variants={circleVariants}
            initial={"exit"}
            animate={!hovered ? "enter" : "exit"}
            exit={"exit"}
          />
          <motion.path
            d="M17.4758 42.7429C17.4758 42.7429 39.8185 57.6516 45.7014 55.0441C49.6533 53.2926 50.2191 47.6796 50.2191 47.6796"
            stroke={color}
            strokeWidth="0.9"
            variants={variants}
            initial={"exit"}
            animate={!hovered ? "enter" : "exit"}
            exit={"exit"}
            strokeDasharray="100%"
          />
          <motion.circle
            cx="17.9497"
            cy="43.0307"
            r="2.25"
            transform="rotate(180 17.9497 43.0307)"
            fill="#00A8B7"
            variants={circleVariants}
            initial={"exit"}
            animate={!hovered ? "enter" : "exit"}
            exit={"exit"}
          />
          <motion.path
            d="M44.6943 42.7317C44.6943 42.7317 22.3516 57.6403 16.4687 55.0329C12.5169 53.2813 11.9511 47.6684 11.9511 47.6684"
            stroke={color}
            strokeWidth="0.9"
            className="scale-"
            variants={variants}
            initial={"exit"}
            animate={!hovered ? "enter" : "exit"}
            exit={"exit"}
            strokeDasharray="100%"
          />
          <motion.circle
            cx="2.25"
            cy="2.25"
            r="2.25"
            transform="matrix(1 0 0 -1 42.7 45.2807)"
            fill="#00A8B7"
            variants={circleVariants}
            initial={"exit"}
            animate={!hovered ? "enter" : "exit"}
            exit={"exit"}
          />
        </svg>
      </motion.a>
    </Magnetic>
  );
}

export default Logo;
