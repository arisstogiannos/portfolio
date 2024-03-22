"use client";
import CircleText from "@/components/servicesComponents/CircleText";
import { servicelist } from "../../../src/app/data.js";
import Service from "@/components/servicesComponents/Service";
import ServiceHovered from "@/components/servicesComponents/ServiceHovered";
import { useEffect, useRef, useState } from "react";
import localfont from "next/font/local";
import { motion, useInView } from "framer-motion";
import { Montserrat } from "next/font/google";

const medium = localfont({ src: "../../../fonts/medium.otf" });
const montserat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function Services({setCursorInServices}) {
  const [selectedService, setSelectedService] = useState(null);
  const section = useRef(null);
  const isInView = useInView(section, { once: true, amount: 0.4 });
  
 

  return (
    <section
      ref={section}
      id="services"
      style={medium.style}
      className=" myContainer flex items-center h-screen overflow-hidden bg-transparent mb-20"
    >
      <div className="w-full flex flex-col items-start justify-start  text-white ">
        <motion.hr
          animate={isInView && { scaleX: 1, translateY: 3 }}
          transition={{
            duration: 0.8,
            ease: [0.215, 0.61, 0.315, 1],
            delay: 0.2,
          }}
          initial={{ scaleX: 0, translateY: 2 }}
          className="w-full h-1  origin-left"
        />
        <div className="flex xl:text-[16px] 2xl:text-[20px] h-[600px] 3xl:h-[700px] relative tracking-wide w-full">
          <Service
            isInView={isInView}
            services={servicelist}
            setSelectedService={setSelectedService}
          />
          <ServiceHovered
            services={servicelist}
            selectedService={selectedService}
          />

          <div  className="w-1/4 h-full   flex items-center   justify-center z-10 relative ">
            {/* <div className="h-10 w-10 rounded-full bg-[#008080] absolute filter blur-md"></div>
              <div className="h-20 w-20 rounded-full bg-[#008080] absolute filter blur-xl"></div> */}
            <CircleText />
            <div
              style={{
                clipPath:
                  selectedService || selectedService === 0
                    ? "inset(0 0 0 0 )"
                    : "inset(0 50% 0 50% )",
              }}
              className="h-full w-full absolute  transition-all duration-[0.35s] ease-[cubic-bezier(0.5, 1, 0.89, 1)] "
            >
               <video
                
                src="/servicesImages/Frame-1.mp4"
                width={"700px"}
                height={"360px"}
                className="bg-clip-content "
                autoPlay
                loop
                muted
              ></video>
            </div>

            {selectedService == 0 && (
              <p
                style={montserat.style}
                className="absolute z-[70] right-0 bottom-0 text-lg w-36 h-16 flex items-center justify-center bg-mblack"
              >
                Made by me
              </p>
            )}
          </div>
        </div>
        <motion.hr
          animate={isInView && { scaleX: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.215, 0.61, 0.315, 1],
            delay: 0.2,
          }}
          initial={{ scaleX: 0 }}
          className="w-full h-1 translate-y-0 origin-right"
        />
      </div>
      {/* <h1 className="absolute hidden top-[1500px] md:top-[1060px] text-[250px] text-[#008080] filter blur-[20px] font-semibold" style={hanson.style}>SERVICES</h1>
        <div className="absolute md:top-[700px] 2xl:top-[1000px]  " >
            
          </div> */}
    </section>
  );
}

export default Services;
