import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

function MovingBg({balls}) {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const [r,setR] = useState({})
    let yPercent =0;
    let direction = -1;
    
    const firstText = useRef(null);
    const secondText = useRef(null);
  
    
  
    useEffect(()=>{
      requestAnimationFrame(animation);
      
    },[])
  
    const animation = () => {
      if(yPercent<=-100){
        yPercent=0;
      }
      if(yPercent>0){
        yPercent= -100;
  
      }   
        gsap.set(ref.current, {yPercent:yPercent})
        gsap.set(ref2.current, {yPercent:yPercent})
       
       yPercent +=0.20*direction;
       requestAnimationFrame(animation);
    }
    useEffect(()=>{
  
      const rect = ref.current.getBoundingClientRect();
      setR(rect)
    },[])
    const { left, right, top, bottom } = r
    
  
    return (
      <><div
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
      </div></>
    );
  }
  
  function Ball({key, top, left, scale, ballRef }) {
    const [x, setX] = useState(left);
    const [y, setY] = useState(top);
    const [scalee, setScalee] = useState(scale);
  
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     const { left, right, top, bottom } = ballRef.current.getBoundingClientRect();
    //     const parentWidth = right - left;
    //     const parentHeight = bottom - top;
  
       
    //       setX(Math.random()*parentWidth); // Reverse direction when reaching boundaries
    //       setScalee(Math.random()+0.7)
    //       setY(Math.random()*parentHeight); // Reverse direction when reaching boundaries
        
    //   }, 390);
  
    //   return () => clearInterval(interval);
    // }, [x, y, ballRef]);
  
    return (
      <motion.div
      key={key}
        initial={{ top: y, left: x, scale: scale  }}
        animate={{
          top: y,
          left: x,
          scale: scalee,
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="w-20 h-20 -translate-y-full absolute bg-mblue rounded-full filter "
      ></motion.div>
    );
  }

export default MovingBg