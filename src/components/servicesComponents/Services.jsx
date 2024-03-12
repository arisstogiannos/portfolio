'use client'
import CircleText from "@/components/servicesComponents/CircleText";
import {servicelist} from '../../../src/app/data.js';
import Service from "@/components/servicesComponents/Service";
import ServiceHovered from "@/components/servicesComponents/ServiceHovered";
import {  useRef, useState } from "react";
import localfont from 'next/font/local'
import {  motion,useInView } from "framer-motion";


const medium=localfont({src:'../../../fonts/medium.otf'})



  

function Services() {
    const [selectedService, setSelectedService] = useState(null);

    const section =useRef(null)
    const isInView = useInView(section,{once:true,amount:0.4})  


   
    
  
    return (
      <section ref={section} id="services" style={medium.style} className="flex items-center h-screen overflow-hidden bg-transparent ">
        <div className="w-[1440px] mx-auto flex flex-col items-start justify-start  text-white  ">
          <motion.hr animate={isInView && { scaleX: 1 ,translateY:3}}
        transition={{
          duration: 0.8,
          ease: [0.215, 0.61, 0.315, 1],
          delay: 0.2,
        }}
        initial={{ scaleX: 0,translateY:2 }}
         className="w-full h-1  origin-left"/>
          <div className="flex text-[20px] h-[600px] 3xl:h-[700px] relative tracking-wide">
             <Service isInView={isInView} services={servicelist} setSelectedService={setSelectedService}/>
             <ServiceHovered services={servicelist} selectedService={selectedService}/>

            
            <div className="w-[360px] h-full   flex items-center   justify-center z-10">
              {/* <div className="h-10 w-10 rounded-full bg-[#008080] absolute filter blur-md"></div>
              <div className="h-20 w-20 rounded-full bg-[#008080] absolute filter blur-xl"></div> */}
              <CircleText/>
              {selectedService==0&&<video src="/servicesImages/Frame-1.mp4" width={'100%'} height={'100%'} className="z-[60]" autoPlay loop></video>}
            </div>
          </div>
          <motion.hr animate={isInView && { scaleX: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.215, 0.61, 0.315, 1],
          delay: 0.2,
        }}
        initial={{ scaleX: 0 }}
        className="w-full h-1 translate-y-0 origin-right"/>
          
        </div>
        {/* <h1 className="absolute hidden top-[1500px] md:top-[1060px] text-[250px] text-[#008080] filter blur-[20px] font-semibold" style={hanson.style}>SERVICES</h1>
        <div className="absolute md:top-[700px] 2xl:top-[1000px]  " >
            
          </div> */}
      </section>
    );
  }

export default Services