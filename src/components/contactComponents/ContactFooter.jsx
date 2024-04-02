import React, { useEffect, useRef } from "react";
import { delay, motion, useInView } from "framer-motion";
import MovingBg from "../globalComponents/MovingBg";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ContactFooter() {
  return (
    <section
      id="contact"
      className={`h-[60vh]   bg-mwhite  flex items-center -z-[1200]  `}
    >
      <motion.div
        // Fixing the clipPath usage
        className=" myContainer flex flex-col items-start gap-4  "
      >
        <motion.h3
          id="textContact"
          className="scaleCursor   text-9xl text-mblack leading-tight z-10"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.2, duration: 0.4, ease: "easeOut" },
          }}
        >
          Let's Talk
        </motion.h3>
        <motion.hr className="border-mblack w-1/2 origin-left" initial={{scaleX:0}} whileInView={{scaleX:1,transition:{ delay: 0.2, duration: 0.5, ease: "easeOut" }}}/>
        <motion.div initial={{ y: 50, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.2, duration: 0.4, ease: "easeOut" },
          }} className="flex gap-10 mt-8">
          <button className="border-solid border-mblack border-[1px] px-7 py-3 rounded-full text-xl font-medium">
            info@arisstogiannos.com
          </button>
          <button className="border-solid border-mblack border-[1px] px-7 py-3 rounded-full text-xl font-medium">
            6982163367
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ContactFooter;
