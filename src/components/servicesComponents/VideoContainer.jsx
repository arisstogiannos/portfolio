import React from "react";
import {AnimatePresence,motion} from 'framer-motion'

const VideoPlayer = ({ src, text }) => {
  return (
    <div className="bg-mblack h-full w-full absolute transition-all duration-[0.35s] ease-[cubic-bezier(0.5, 1, 0.89, 1)]">
      <video
        lazy
        src={src}
        width={"360px"}
        height={"700px"}
        className="bg-clip-content z-50"
        autoPlay
        loop
        muted
      />
      {text && (
        <p className="absolute z-[70] right-0 bottom-0 text-lg w-36 h-14 flex items-center justify-center bg-mblack">
          {text}
        </p>
      )}
    </div>
  );
};

const VideoContainer = ({ selectedService }) => {
  let videoSrc = "";
  let text = "";

  switch (selectedService) {
    case 0:
      videoSrc = "/servicesImages/devanim.mp4";
      text = "Made by me";
      break;
    case 1:
      videoSrc = "/servicesImages/designanim.mp4";
      break;
    case 2:
      videoSrc = "/servicesImages/seoanim.mp4";
      break;
    default:
      break;
  }

  return (
    <AnimatePresence >
    <motion.div

      style={{
        clipPath:
          selectedService || selectedService == 0
            ? "inset(0 0 0 0 )"
            : "inset(0 50% 0 50% )",
      }}
      className="h-full w-full absolute  transition-all duration-[0.35s] ease-services "
    >
      <VideoPlayer src={videoSrc} text={text} />
    </motion.div>
    </AnimatePresence>
  );
};

export default VideoContainer;
