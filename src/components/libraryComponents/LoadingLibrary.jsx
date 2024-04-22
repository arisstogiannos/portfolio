import React from "react";
import {motion} from 'framer-motion'

function LoadingLibrary() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1}} className="bg-mblack flex justify-center items-center text-8xl text-mwhite w-full h-full absolute top-0 left-0 -z-[000]">
       <p
            className="text-8xl text-mwhite/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
            
          >
            work
          </p>
    </motion.div>
  );
}

export default LoadingLibrary;
