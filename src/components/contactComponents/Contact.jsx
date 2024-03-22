import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MovingBg from "../globalComponents/MovingBg";

function AboutContact() {

  const balls = [
    { top: 0, left: '100%', scale: 1 },
    { top: '80%', left: '75%', scale: 1.8 },
    { top: '60%', left: '33%', scale: 1.8 },
    { top: '20%', left: '29%', scale: 2 },
    { top: '30%', left: '80%', scale: 1.6 },
    { top: '90%', left: '10%', scale: 1.3 },
   
    { top: '15%', left: 0, scale: 1.3 },
 
  ];
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 1]);

  return (
    <section
      id="contact"
      className={`h-screen   bg-transparent myContainer flex items-center `}
    >
      <motion.div
        ref={container}
        style={{ scale: scale }}
        className=" flex gap-0 items-center"
      >
        <h3 className="text-8xl text-mwhite leading-tight ">
          Designing Your Web Vision, Together.
        </h3>
        <div className="w-2/3 h-[550px]   rounded-3xl relative overflow-hidden">
          <MovingBg balls={balls}/>
          <div className="w-full h-[550px] bg-white/70  rounded-3xl filter backdrop-blur-md ">
            <p></p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function background() {
  const balls = [
    { top: "0%", left: "20%", scale: 1 },
    { top: "20%", left: "70%", scale: 1.4 },
    { top: "50%", left: "10%", scale: 0.8 },
    { top: "60%", left: "60%", scale: 1 },
    { top: "100%", left: "0%", scale: 1.6 },
  ];
  return <div className=" w-full h-full absolute top-0 left-0 overflow-hidden rounded-3xl ">{balls.map((b)=>{return <div className="w-40 h-40 absolute bg-mblue rounded-full" style={{top:b.top,left:b.left,scale:b.scale}}></div>})}</div>;
}

export default AboutContact;
