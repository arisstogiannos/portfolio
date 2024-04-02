import React, { Fragment } from 'react'
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


function MovingText({text}) {

    let xPercent =0;
    let direction = -1;
    let speed =0.02;
    const slider = useRef(null)
    const firstText = useRef(null);
    const secondText = useRef(null);
    const array = text.split('.',10)
    

   useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight+100,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animation);
  }, [])
  
    const animation = () => {
      if(xPercent<=-100){
        xPercent=0;
      }
      if(xPercent>0){
        xPercent= -100;
      }
       gsap.set(firstText.current, {xPercent:xPercent})
       gsap.set(secondText.current, {xPercent:xPercent})
       
       xPercent +=speed*direction;
       requestAnimationFrame(animation);
    }
  return (
    <div onMouseEnter={()=>(speed=0.1)} onMouseLeave={()=>(speed=0.02)} ref={slider} className="relative flex whitespace-nowrap  " >
    <h2 ref={firstText} className=" flex items-center m-0  pl-16 " >{array.map((word,i)=> (<Fragment key={i}> {word}<svg className='mx-16' width="55" height="60" viewBox="0 0 55 60" fill="none"  xmlns="http://www.w3.org/2000/svg">
    <path d="M53.535 39.155L36.87 30.0025L53.535 20.85C54.41 20.3625 54.995 19.4425 54.995 18.385C54.995 17.8675 54.855 17.3825 54.61 16.965L54.6175 16.9775L52.335 13.0175C51.84 12.17 50.935 11.61 49.9 11.61C49.36 11.61 48.8575 11.7625 48.43 12.025L48.4425 12.0175L32.185 21.875L32.5925 2.8675C32.5925 2.85 32.5925 2.8325 32.5925 2.8125C32.5925 1.26 31.335 0 29.7825 0H25.2175C23.665 0 22.405 1.26 22.405 2.8125V2.875V2.8725L22.8125 21.88L6.5525 12.025C6.1375 11.77 5.6325 11.6175 5.095 11.6175C4.06 11.6175 3.155 12.1775 2.6675 13.01L2.66 13.0225L0.3775 16.975C0.14 17.3775 0 17.865 0 18.3825C0 19.44 0.5825 20.36 1.445 20.84L1.46 20.8475L18.125 30L1.46 39.1525C0.585 39.64 0 40.56 0 41.6175C0 42.135 0.14 42.62 0.385 43.0375L0.3775 43.025L2.66 46.98C3.155 47.8275 4.06 48.3875 5.095 48.3875C5.635 48.3875 6.1375 48.235 6.565 47.9725L6.5525 47.98L22.81 38.1225L22.4025 57.13V57.19C22.4025 58.7425 23.6625 60.0025 25.215 60.0025H29.78C31.3325 60.0025 32.5925 58.7425 32.5925 57.19C32.5925 57.1675 32.5925 57.1475 32.5925 57.1275L32.185 38.1225L48.4425 47.98C48.8575 48.235 49.3625 48.3875 49.9 48.3875C50.935 48.3875 51.84 47.8275 52.3275 46.995L52.335 46.9825L54.6175 43.0275C54.855 42.625 54.995 42.1375 54.995 41.62C54.995 40.5625 54.4125 39.6425 53.55 39.1625L53.535 39.155Z" fill="#000000"/>
    </svg></Fragment>) )}</h2>
    <h2 ref={secondText} className=" flex items-center  absolute left-[100%]  pl-16" >{array.map((word,i)=> (<Fragment key={i}> {word}<svg className='mx-16' width="55" height="60" viewBox="0 0 55 60" fill="none"  xmlns="http://www.w3.org/2000/svg">
    <path d="M53.535 39.155L36.87 30.0025L53.535 20.85C54.41 20.3625 54.995 19.4425 54.995 18.385C54.995 17.8675 54.855 17.3825 54.61 16.965L54.6175 16.9775L52.335 13.0175C51.84 12.17 50.935 11.61 49.9 11.61C49.36 11.61 48.8575 11.7625 48.43 12.025L48.4425 12.0175L32.185 21.875L32.5925 2.8675C32.5925 2.85 32.5925 2.8325 32.5925 2.8125C32.5925 1.26 31.335 0 29.7825 0H25.2175C23.665 0 22.405 1.26 22.405 2.8125V2.875V2.8725L22.8125 21.88L6.5525 12.025C6.1375 11.77 5.6325 11.6175 5.095 11.6175C4.06 11.6175 3.155 12.1775 2.6675 13.01L2.66 13.0225L0.3775 16.975C0.14 17.3775 0 17.865 0 18.3825C0 19.44 0.5825 20.36 1.445 20.84L1.46 20.8475L18.125 30L1.46 39.1525C0.585 39.64 0 40.56 0 41.6175C0 42.135 0.14 42.62 0.385 43.0375L0.3775 43.025L2.66 46.98C3.155 47.8275 4.06 48.3875 5.095 48.3875C5.635 48.3875 6.1375 48.235 6.565 47.9725L6.5525 47.98L22.81 38.1225L22.4025 57.13V57.19C22.4025 58.7425 23.6625 60.0025 25.215 60.0025H29.78C31.3325 60.0025 32.5925 58.7425 32.5925 57.19C32.5925 57.1675 32.5925 57.1475 32.5925 57.1275L32.185 38.1225L48.4425 47.98C48.8575 48.235 49.3625 48.3875 49.9 48.3875C50.935 48.3875 51.84 47.8275 52.3275 46.995L52.335 46.9825L54.6175 43.0275C54.855 42.625 54.995 42.1375 54.995 41.62C54.995 40.5625 54.4125 39.6425 53.55 39.1625L53.535 39.155Z" fill="#000000"/>
    </svg></Fragment>) )}</h2>
    
  </div>
  )
}

export default MovingText