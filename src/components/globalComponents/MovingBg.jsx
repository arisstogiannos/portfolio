import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

function MovingBg({ balls }) {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const [r, setR] = useState({});
  let yPercent = 0;
  let direction = -1;

  const firstText = useRef(null);
  const secondText = useRef(null);

  // useEffect(()=>{
  //   requestAnimationFrame(animation);

  // },[])

  // const animation = () => {
  //   if(yPercent<=-100){
  //     yPercent=0;
  //   }
  //   if(yPercent>0){
  //     yPercent= -100;

  //   }
  //     gsap.set(ref.current, {yPercent:yPercent})
  //     gsap.set(ref2.current, {yPercent:yPercent})

  //    yPercent +=0.20*direction;
  //    requestAnimationFrame(animation);
  // }
  // useEffect(()=>{

  //   const rect = ref.current.getBoundingClientRect();
  //   setR(rect)
  // },[])
  // const { left, right, top, bottom } = r

  return (
    <>
      <div
        ref={ref}
        className="w-full h-full  absolute top-0 left-0  rounded-3xl"
      >
        {balls.map((b, i) => (
          <Ball key={i} {...b} ballRef={ref} />
        ))}
      </div>
      <div
        ref={ref2}
        className="w-full h-full  absolute top-full left-0  rounded-3xl"
      >
        {balls.map((b, i) => (
          <Ball key={i} {...b} ballRef={ref} />
        ))}
      </div>
    </>
  );
}

function Ball({ top, left, scale, ballRef }) {
  const [x, setX] = useState(left);
  const [y, setY] = useState(top);
  const [scalee, setScalee] = useState(scale);
  const ballR = useRef(null);

  // useEffect(() => {
  //   const { left, right, top, bottom } = ballRef.current.getBoundingClientRect();
  //       const parentWidth = right - left;
  //       const parentHeight = bottom - top;
   
  //   var tl = gsap.timeline({repeat: 100, repeatDelay: 0});
  //   tl.to(ballR.current, {x: Math.random()*parentWidth,y:Math.random()*parentHeight, duration: 1,ease:'back.inOut'});
  //   tl.to(ballR.current, {x: Math.random()*parentWidth,y:Math.random()*parentHeight, duration: 1,ease:'back.inOut'});
  //   tl.to(ballR.current, {x: Math.random()*parentWidth,y:Math.random()*parentHeight, duration: 1,ease:'back.inOut'});
  //   tl.to(ballR.current, {x: Math.random()*parentWidth,y:Math.random()*parentHeight, duration: 1,ease:'back.inOut'});
  //   tl.to(ballR.current, {x: Math.random()*parentWidth,y:Math.random()*parentHeight, duration: 1,ease:'back.inOut'});
   

  // }, []);

  // useEffect(() => {
  //   const moveCursorX = gsap.quickTo(ballR.current, "left", {
  //     duration: 0.5,
  //     ease: "back.out",
  //   });
  //   const moveCursorY = gsap.quickTo(ballR.current, "top", {
  //     duration: 0.5,
  //     ease: "back.out",

  //   });

  //   const interval = setInterval(() => {
  //     const { left, right, top, bottom } = ballRef.current.getBoundingClientRect();
  //     const parentWidth = right - left;
  //     const parentHeight = bottom - top;

  //       moveCursorX(Math.random()*parentWidth); // Reverse direction when reaching boundaries
  //       setScalee(Math.random()+0.7)
  //       moveCursorY(Math.random()*parentHeight); // Reverse direction when reaching boundaries

  //   }, 470);

  //   return () => clearInterval(interval);
  // }, [x, y, ballRef]);

  //animation frame----------------------------------

  // useEffect(() => {
  //   requestAnimationFrame(animation);
  // }, []);

  // const animation = () => {
  //   const { left, right, top, bottom } = ballRef.current.getBoundingClientRect();
  //     const parentWidth = right - left;
  //     const parentHeight = bottom - top;
  //   const moveCursorX = gsap.quickTo(ballR.current, "left", {
  //         duration: 0.5,
  //         ease: "back.out",
  //       });
  //       const moveCursorY = gsap.quickTo(ballR.current, "top", {
  //         duration: 0.5,
  //         ease: "back.out",
    
  //       });

        
  
  //   moveCursorX(Math.random() * parentWidth); // Reverse direction when reaching boundaries
  //   setScalee(Math.random() + 0.7);
  //   moveCursorY(Math.random() * parentHeight); // Reverse direction when reaching boundaries

    
  //   requestAnimationFrame(animation);
  // };

  return (
    <div
      ref={ballR}
      className="w-20 h-20 -translate-y-full absolute bg-mblue rounded-full filter "
    ></div>
  );
}

export default MovingBg;
