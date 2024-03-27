import React, { useEffect, useRef } from "react";
import { animate, motion, useInView, useScroll, useTransform } from "framer-motion";
import MovingBg from "../globalComponents/MovingBg";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";


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
  const form = useRef(null);

  // useLayoutEffect(()=>{
  //   gsap.registerPlugin(ScrollTrigger)

  //   const tl = gsap.timeline({
  //     scrollTrigger:{
  //       trigger:container,
  //       start:'top',
  //       end:'+=500px',
  //       scrub:true,
  //       markers:true
  //     }
  //   })
  //   tl
  //   .from(form.current,{clipPath:'inset(40%)'})
  //   .to(form.current,{clipPath:'inset(100%)'})
  // })
  const isInView = useInView(container, { once: true,amount:0.5 })
  
  useEffect(()=>{
   const mytext = new SplitType("#textContact");
  gsap.registerPlugin(ScrollTrigger)
  gsap.from("#textContact .char", {
    y: 130,
    opacity: 1,
    stagger: 0.02,
  
    duration: 0.8,
    ease: "circ.inOut",
    scrollTrigger:{
      trigger:'#contact',
      start:'30% 80%',
      
    }
  });
 },[])

  
  

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0,  1], [0, 50]);

  return (
    <section
      id="contact"
      
      className={`h-screen   bg-transparent myContainer flex items-center `}
    >
      <motion.div
        ref={container}
        // Fixing the clipPath usage
        className="  flex gap-0 items-center"
      >
        <h3 id="textContact" className="scaleCursor w-[1500px] text-8xl text-mwhite leading-tight ">
          Designing Your Web Vision, Together.
        </h3>
        <motion.div initial={{clipPath:'inset(0 50% 0 50%)'}} animate={isInView&&{clipPath:'inset(0 0 0 0)',transition:{duration:0.8}}}  ref={form}  className="w-2/3 h-[550px]   rounded-3xl relative overflow-hidden">
          <MovingBg balls={balls}/>
          <div className="w-full h-[550px] bg-white/70  rounded-3xl filter backdrop-blur-md ">
            <p></p>
          </div>
        </motion.div>
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
