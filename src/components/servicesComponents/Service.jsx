import React from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
function Service({ isInView, services, setSelectedService, selectedService }) {
  const enterViewVariants = {
    initial: {
      x: -1400,
    },
    enter: (i) => ({
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.315, 1],
        delay: 0.2 + i * 0.2,
      },
    }),
  };

  return services.map((s, i) => {
    const { title, desc } = s;

    return (
      <motion.div
        key={i}
       
        onMouseOver={() => {
          setSelectedService(i);
        }}
        onMouseLeave={() => {
          setSelectedService(null);
        }}
        className=" w-full lg:w-1/4 h-full max-lg:py-10 max-lg:gap-14   cursor-pointer flex  lg:items-center max-lg:flex-col  border-[1px] lg:border-t-0 lg:border-b-0 lg:border-l-0 justify-between z-30"
      >
        <div className="w-full h-fit flex justify-between lg:items-center">
          <h3 className="w-10 ml-6  ">{title}</h3>
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
        <motion.div
          initial={{ height: 0 }}
          animate={
            selectedService == i
              ? {
                  height: 600,
                  transition: { duration: 0.8, ease:[0.5, 1, 0.89, 1] },
                }
              : {
                  height: 0,
                  transition: { duration: 0.8, ease:[0.5, 1, 0.89, 1] },
                }
          }
          className="w-4/5 mx-auto relative lg:hidden"
        >
          {" "}
          <div
            style={{
              clipPath:
                selectedService || selectedService === 0
                  ? "inset(0 0 0 0 )"
                  : "inset( 0 50% 0  50%  )",
            }}
            className=" h-full w-full absolute  transition-all duration-[0.35s] delay-200 ease-[cubic-bezier(0.5, 1, 0.89, 1)] "
          >
            <video
              src="/servicesImages/Frame-1.mp4"
              width={"100%"}
              height={"100%"}
              className="bg-clip-content rounded-xl "
              autoPlay
              loop
              muted
            ></video>
          </div>
        </motion.div>
        <p style={montserat.style} className="lg:hidden text-mwhite ml-6 w-2/3">
          {desc}
        </p>
      </motion.div>
    );
  });
}

export default Service;
