import React, { useRef } from "react";
import { circInOut, motion, useInView } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
function Service({ services, setSelectedService, selectedService , inview}) {
  // const enterViewVariants = {
  //   initial: {
  //     x: -1400,
  //   },
  //   enter: (i) => ({
  //     x: 0,
  //     transition: {
  //       duration: 0.8,
  //       ease: [0.215, 0.61, 0.315, 1],
  //       delay: 0.2 + i * 0.2,
  //     },
  //   }),
  // };
  const ref = useRef(null)

  return services.map((s, i) => {
    const { title, desc } = s;

    return (
      <motion.div
      key={i}
      initial={{
        x: (i + 1) * -100 + "%",
        clipPath: "inset(0  0 0 95% )" // Start hidden with clip-path
      }}
      animate={
        inview && {
          x: 0,
          clipPath: "inset(0 0 0 0)", // Reveal on animation
          transition: {
            x: { duration: 1.2, delay: 0.8, ease: "circOut" },
            clipPath: { duration: 0.8, delay: 1.5, ease: "linear" } // Add transition for clipPath
          }
        }
      }
       ref={ref}
        onMouseOver={() => {
          var vid;
          if(i===0){  vid = document.getElementById('dev')};
          if(i===1){  vid = document.getElementById('des')};
          if(i===2){  vid = document.getElementById('seo')};
          vid.play();
          vid.currentTime = 0;
          setSelectedService(i);
        }}
        onMouseLeave={() => {
          setSelectedService(null);
        }}
        className="  w-1/4 h-full     cursor-pointer flex  items-center   border-[1px] border-t-0 border-b-0 border-l-0 justify-between z-30 relative "
      >
        <span className="absolute bottom-0 left-0 text-[200px] mb-20 text-white opacity-[3%]"><span className="font-bold" style={montserat.style}>#</span>{i+1}</span>
        <div className="w-full h-fit flex justify-between lg:items-center pointer-events-none">
        <h3 className="w-20 ml-6 text-white flex gap-4">{title}</h3>
          <svg
            className="mr-6"
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
              stroke="#D4F1F4"
            />
            <path
              d="M28.3536 20.3536C28.5488 20.1583 28.5488 19.8417 28.3536 19.6464L25.1716 16.4645C24.9763 16.2692 24.6597 16.2692 24.4645 16.4645C24.2692 16.6597 24.2692 16.9763 24.4645 17.1716L27.2929 20L24.4645 22.8284C24.2692 23.0237 24.2692 23.3403 24.4645 23.5355C24.6597 23.7308 24.9763 23.7308 25.1716 23.5355L28.3536 20.3536ZM14 20.5H28V19.5H14V20.5Z"
              fill="white"
            />
          </svg>
        </div>
       
        <p style={montserat.style} className="lg:hidden text-mwhite ml-6 w-2/3 pointer-events-none">
          {desc}
        </p>
      </motion.div>
    );
  });
}

export default Service;
