"use client";
import CircleText from "@/components/servicesComponents/CircleText";
import { servicelist } from "../../../src/app/data.js";
import Service from "@/components/servicesComponents/Service";
import ServiceHovered from "@/components/servicesComponents/ServiceHovered";
import { useEffect, useRef, useState } from "react";
import localfont from "next/font/local";
import { motion, useInView } from "framer-motion";
import { Montserrat } from "next/font/google";
import VideoContainer from "./VideoContainer.jsx";

const medium = localfont({ src: "../../../fonts/medium.otf" });
const montserat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function Services({ setCursorInServices }) {
  const [selectedService, setSelectedService] = useState(null);
  const section = useRef(null);
  const inview = useInView(section, { amount: 0.5 });

  //  const { scrollYProgress } = useScroll({
  //   target: section,
  //   offset: ["center end", "end end"],

  // });
  //useMotionValueEvent(scrollYProgress,'change',(latest)=>(setServicesScrollProgress(latest)))

  return (
    <section
      ref={section}
      id="services"
      style={medium.style}
      className=" myContainer  items-center pt-20 overflow-hidden bg-transparent my-52 hidden lg:flex flex-col servicesSection"
    >
      <h1 className="text-6xl text-white mb-24 ml-auto overflow-hidden gap-14 scaleCursor inline-flex">
        <motion.svg
          initial={{ y: -100, x: 100 }}
          animate={inview && { y: 0, x: 0 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          width="71"
          height="71"
          viewBox="0 0 71 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43.5234 67.4707L43.5245 64.3249L9.3012 64.3222L65.5837 8.03973L63.3576 5.81362L7.07217 62.099L7.07538 27.8757L3.92658 27.8739L3.92658 67.4697L43.5234 67.4707Z"
            fill="white"
            stroke="white"
            strokeWidth="7"
          />
        </motion.svg>
        <motion.span
          initial={{ y: 100 }}
          animate={inview && { y: 0 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="translate-y-[100]"
        >
          the process
        </motion.span>
      </h1>
      <div className="w-full flex flex-col items-start justify-start  text-white ">
        <motion.hr
          animate={inview && { scaleX: 1, translateY: 3 }}
          transition={{
            duration: 1.4,
            ease: "circInOut",
            delay: 1,
          }}
          initial={{ scaleX: 0, translateY: 2 }}
          className="w-full h-1  origin-left max-lg:hidden"
        />
        <div className="flex  lg:text-[16px] 2xl:text-[20px] h-[500px] relative tracking-wide w-full">
          <Service
            inview={inview}
            services={servicelist}
            setSelectedService={setSelectedService}
            selectedService={selectedService}
          />
          <ServiceHovered
            services={servicelist}
            selectedService={selectedService}
          />

          <div
            
            id="videoPlayer"
            className={`w-1/4 h-full transition-opacity delay-1000 duration-[3s] ${inview?'opacity-100':'opacity-0'}  hidden lg:flex items-center   justify-center z-10 relative `}
          >
            {/* <div className="h-10 w-10 rounded-full bg-[#008080] absolute filter blur-md"></div>
              <div className="h-20 w-20 rounded-full bg-[#008080] absolute filter blur-xl"></div> */}
            <CircleText inview={inview} />
              {(selectedService>-1 && selectedService !==null) && <div className="bg-mblack w-full h-full absolute"></div>}
            {inview && <VideoContainer selectedService={selectedService} />}

           
          </div>
        </div>
        <motion.hr
          animate={inview && { scaleX: 1 }}
          transition={{
            duration: 1.4,
            ease: "circInOut",
            delay: 1,
          }}
          initial={{ scaleX: 0.0 }}
          className="max-lg:hidden w-full h-1  origin-right "
        />
      </div>
      {/* <h1 className="absolute hidden top-[1500px] md:top-[1060px] text-[250px] text-[#008080] filter blur-[20px] font-semibold" style={hanson.style}>SERVICES</h1>
        <div className="absolute md:top-[700px] 2xl:top-[1000px]  " >
            
          </div> */}
    </section>
  );
}

export default Services;
