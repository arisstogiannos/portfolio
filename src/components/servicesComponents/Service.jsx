import React from "react";
import { motion } from "framer-motion";

function Service({ isInView,services, setSelectedService }) {
  
  const enterViewVariants ={
    initial:{
      x:-1300,

    },
    enter:(i)=>({
      x:0,
      transition:{
        duration:0.8, 
        ease:[.215, .61, .315,1],
        delay:0.2+i*0.2


      }
    }),
  }

  return services.map((s, i) => {
    const { title, desc } = s;

    return (
      <motion.div
      custom={2-i}
      variants={enterViewVariants}
      initial='initial'
    animate={`${isInView&&'enter'}`}
        onMouseOver={() => {
          setSelectedService(i);
        }}
        onMouseLeave={() => {
          setSelectedService(null);
        }}
        className=" w-[360px] h-full  border-solid border-white cursor-pointer flex items-center border-[1px] border-l-0 justify-between z-30"
      >
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
      </motion.div>
    );
  });
}

export default Service;
