import React from "react";
import {motion} from 'framer-motion'
import { Montserrat } from "next/font/google";

const montserat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600","700"],
});


function ServiceHovered({ services, selectedService }) {
  return (<div className="absolute flex h-full w-full"> 
    {services.map((s, i) => {
    const { title, desc } = s;

    

    return (
      <div
      key={i}
        style={{
          clipPath: selectedService == i ? "inset(0 0 0 0)" : "inset(0 50% 0 50%)",
        }}
        className={`z-50  pointer-events-none w-1/4 h-full border-solid border-white bg-white grid  grid-rows-3 grid-cols-1  border-[1px] border-l-0  transition-all duration-[0.35s] ease-services relative`}
      >
        <div className="h-full flex items-center justify-between row-start-2 row-end-3 ">
            <h3 className="w-20 ml-6 text-mblack flex gap-4">{title}</h3>
            <svg
            className={`mr-6 ${selectedService == i ? " animate-mBounce " : ""}  duration-1000`}
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            >
            <rect
                x="0.5"
                y="0.5"
                width="40"
                height="40"
                rx="20"
                fill="#000000"
            />
            <path
                d="M28.3536 20.3536C28.5488 20.1583 28.5488 19.8417 28.3536 19.6464L25.1716 16.4645C24.9763 16.2692 24.6597 16.2692 24.4645 16.4645C24.2692 16.6597 24.2692 16.9763 24.4645 17.1716L27.2929 20L24.4645 22.8284C24.2692 23.0237 24.2692 23.3403 24.4645 23.5355C24.6597 23.7308 24.9763 23.7308 25.1716 23.5355L28.3536 20.3536ZM14 20.5H28V19.5H14V20.5Z"
                fill="white"
            />
            </svg>
        </div>
            <motion.p style={montserat.style} animate={{top: selectedService==i ? '75%' :'110%'}} transition={{duration:0.5}}  className=" text-sm 2xl:text-[16px] leading-snug   font-semibold  text-black  absolute w-[90%] top-[90%] mx-4">{desc}</motion.p>
            
      </div>
    );
  })}
  </div>)
}
  
// transform -rotate-45 transition duration-200 delay-300
export default ServiceHovered;
