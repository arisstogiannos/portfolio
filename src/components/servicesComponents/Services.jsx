"use client";
import CircleText from "@/components/servicesComponents/CircleText";
import { servicelist } from "../../../src/app/data.js";
import Service from "@/components/servicesComponents/Service";
import ServiceHovered from "@/components/servicesComponents/ServiceHovered";
import { useEffect, useRef, useState } from "react";
import localfont from "next/font/local";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
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
      <h1 className="text-6xl text-white mb-24 ml-auto flex gap-14 scaleCursor">
        <svg
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
            stroke-width="7"
          />
        </svg>
        the process
      </h1>
      <div className="w-full flex flex-col items-start justify-start  text-white ">
        <motion.hr
          whileInView={{ scaleX: 1, translateY: 3 }}
          transition={{
            duration: 0.8,
            ease: [0.215, 0.61, 0.315, 1],
            delay: 0.2,
          }}
          initial={{ scaleX: 0, translateY: 2 }}
          className="w-full h-1  origin-left max-lg:hidden"
        />
        <div className="flex  lg:text-[16px] 2xl:text-[20px] h-[500px] relative tracking-wide w-full">
          <Service
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
            className="w-1/4 h-full  hidden lg:flex items-center   justify-center z-10 relative "
          >
            {/* <div className="h-10 w-10 rounded-full bg-[#008080] absolute filter blur-md"></div>
              <div className="h-20 w-20 rounded-full bg-[#008080] absolute filter blur-xl"></div> */}
            <CircleText />

            <VideoContainer selectedService={selectedService} />

            {selectedService == 0 && (
              <p
                style={montserat.style}
                className="absolute z-[70] right-0 bottom-0 text-lg w-36 h-14 flex items-center justify-center bg-mblack"
              >
                Made by me
              </p>
            )}
          </div>
        </div>
        <motion.hr
          whileInView={{ scaleX: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.215, 0.61, 0.315, 1],
            delay: 0.2,
          }}
          initial={{ scaleX: 0.01 }}
          className="max-lg:hidden w-full h-1 translate-y-0 origin-right "
        />
      </div>
      {/* <h1 className="absolute hidden top-[1500px] md:top-[1060px] text-[250px] text-[#008080] filter blur-[20px] font-semibold" style={hanson.style}>SERVICES</h1>
        <div className="absolute md:top-[700px] 2xl:top-[1000px]  " >
            
          </div> */}
    </section>
  );
}

export default Services;
