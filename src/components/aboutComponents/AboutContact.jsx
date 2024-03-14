import React,{useRef} from "react";
import {motion, useScroll,useTransform} from 'framer-motion'


function AboutContact() {
  
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0.6, 1]);

  return (
    <section id="contact"  className={`h-screen   bg-transparent myContainer flex items-center `}>
      <motion.div
      ref={container}
      style={{scale:scale}}
      
      className=" flex gap-0 items-center">
        <h3 className="text-8xl text-mwhite">
          Designing Your Web Vision, Together.
        </h3>
        <div className="w-full h-[500px] bg-white/70  rounded-3xl">
          <p></p>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutContact;
