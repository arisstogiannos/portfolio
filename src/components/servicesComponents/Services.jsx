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
import { useInView } from "framer-motion";

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

    const section =useRef(null)
    const isInView = useInView(section,{once:true,amount:0.5})  
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
      <section ref={section} style={hanson.style} className="flex items-center h-screen overflow-hidden bg-mblack ">
        <div className="w-[1440px] mx-auto flex flex-col items-start justify-start  text-white h-[600px] ">
          
          <div className="flex text-[27px] h-[600px] relative">
             <Service isInView={isInView} services={servicelist} setSelectedService={setSelectedService}/>
             <ServiceHovered services={servicelist} selectedService={selectedService}/>
            
            <div className="w-[360px] h-full border-solid border-white  flex items-center border-[1px] border-l-0 border-r-0 justify-center z-10">
              <div className="h-10 w-10 rounded-full bg-[#008080] absolute filter blur-md"></div>
              <div className="h-20 w-20 rounded-full bg-[#008080] absolute filter blur-xl"></div>
              <CircleText/>
            </div>
          </div>
          
          
        </div>
        <h1 className="absolute hidden top-[1500px] md:top-[1060px] text-[250px] text-[#008080] filter blur-[20px] font-semibold" style={hanson.style}>SERVICES</h1>
        <div className="absolute top-[700px]  " >
            <div className="relative flex whitespace-nowrap " >
              <h2 ref={firstText} className="text-mwhite text-[100px]  m-0  pl-16 " >Services -</h2>
              <h2 ref={secondText} className="text-mwhite text-[100px]  absolute left-[100%]  pl-16" >Services - </h2>
              <h2 ref={thirdText} className="text-mwhite text-[100px]  absolute left-[200%]  pl-16" >Services - </h2>
            </div>
          </div>
      </section>
    );
  }

export default Services