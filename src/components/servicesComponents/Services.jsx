'use client'
import CircleText from "@/components/servicesComponents/CircleText";
import Image from "next/image";
import {servicelist} from '../../../src/app/data.js';
import Service from "@/components/servicesComponents/Service";
import ServiceHovered from "@/components/servicesComponents/ServiceHovered";
import { useEffect, useRef, useState } from "react";
import { Work_Sans ,Zen_Dots} from "next/font/google";
import localfont from 'next/font/local'
import gsap from "gsap";

const hanson=localfont({src:'../../../fonts/Hanson-Bold.ttf'})
const satoshiBold = localfont({src:'../../../fonts/OTF/Satoshi-Bold.otf'})
const satoshiRegular = localfont({src:'../../../fonts/OTF/Satoshi-Regular.otf'})

const worksans = Work_Sans({
    subsets:['latin'],
    weight:["300","400","500",'600']
  })
  const zendots = Zen_Dots({
    subsets:['latin'],
    weight:["400"]
  })

function Services() {
    const [selectedService, setSelectedService] = useState(null);
  
    let xPercent =0;
    let direction = -1;
    const firstText = useRef(null);
    const secondText = useRef(null);
    const thirdText = useRef(null);
  
  
    useEffect(()=>{
      requestAnimationFrame(animation);
    },[])
  
    const animation = () => {
      if(xPercent<=-100){
        xPercent=0;
      }
      if(xPercent>0){
        xPercent= -100;
      }
       gsap.set(firstText.current, {xPercent:xPercent})
       gsap.set(secondText.current, {xPercent:xPercent})
       gsap.set(thirdText.current, {xPercent:xPercent})
       xPercent +=0.05*direction;
       requestAnimationFrame(animation);
    }
  
    return (
      <section style={hanson.style} className="flex items-center h-[100vh] overflow-hidden bg-mblack ">
        <section className="w-[1440px] mx-auto flex flex-col items-start justify-start  text-white ">
          
          <div className="flex text-[27px]">
             <Service services={servicelist} setSelectedService={setSelectedService}/>
             <ServiceHovered services={servicelist} selectedService={selectedService}/>
            
            <div className="w-[360px] h-[700px] border-solid border-white  flex items-center border-[1px] border-l-0 border-r-0 justify-center z-50">
              <div className="h-10 w-10 rounded-full bg-[#008080] absolute filter blur-md"></div>
              <div className="h-20 w-20 rounded-full bg-[#008080] absolute filter blur-xl"></div>
              <CircleText/>
            </div>
          </div>
          
          
        </section>
        <div className="absolute top-[800px]   " >
            <div className="relative flex whitespace-nowrap" >
              <h2 ref={firstText} className="text-[#008080] text-[200px]  m-0 filter blur-md pl-28" >Services -</h2>
              <h2 ref={secondText} className="text-[#008080] text-[200px]  absolute left-[100%] filter blur-md pl-28" >Services - </h2>
              <h2 ref={thirdText} className="text-[#008080] text-[200px]  absolute left-[200%] filter blur-md pl-28" >Services - </h2>
            </div>
          </div>
      </section>
    );
  }

export default Services