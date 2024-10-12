import React from "react";
import { AnimatePresence, motion } from "framer-motion";

// const VideoPlayer = ({ src, text }) => {
//   return (
//     <div className="bg-mblack h-full w-full absolute transition-all duration-[0.35s] ease-[cubic-bezier(0.5, 1, 0.89, 1)]">
//       <video
//         lazy
//         src={"/servicesImages/devanim.mp4"}
//         width={"360px"}
//         height={"700px"}
//         className={`bg-clip-content z-50 ${}`}
//         autoPlay

//         muted
//       />
//       <video
//         lazy
//         src={"/servicesImages/designanim.mp4"}
//         width={"360px"}
//         height={"700px"}
//         className={`bg-clip-content z-50 ${}`}
//         autoPlay

//         muted
//       />
//       <video
//         lazy
//         src={"/servicesImages/seoanim.mp4"}
//         width={"360px"}
//         height={"700px"}
//         className={`bg-clip-content z-50 ${}`}
//         autoPlay

//         muted
//       />
//       {text && (
//         <p className="absolute z-[70] right-0 bottom-0 text-lg w-36 h-14 flex items-center justify-center bg-mblack">
//           {text}
//         </p>
//       )}
//     </div>
//   );
// };

const VideoContainer = ({ selectedService }) => {
  const videos = [
    { src:"/servicesImages/desanimM.webm",idN:'des'},
   { src:"/servicesImages/DevanimM.webm",idN:'dev'},
    {src:"/servicesImages/seoanimM.webm",idN:'seo'},
  ];

  return videos.map((video, index) => (
    <motion.div
      style={{
        clipPath:
          selectedService === index ? "inset(0 0 0 0 ) " : "inset(0 50% 0 50% ) ",
      }}
      key={index}
      className="h-full w-full absolute  transition-all duration-[0.35s] ease-services "
    >
      <div
        className={`${
          selectedService === index ? "" : ""
        } bg-mblack h-full w-full absolute transition-all duration-[0.35s] ease-[cubic-bezier(0.5, 1, 0.89, 1)]`}
      >
        <video
        id={video.idN}
          lazy='true'
          loop
          src={video.src}
          
          width={"430px"}
          height={"537px"}
          className={`bg-clip-content  video`}
          
          
          muted
        />
      </div>
    </motion.div>
  ));
  {
    /* {text && (
        <p className="absolute z-[70] right-0 bottom-0 text-lg w-36 h-14 flex items-center justify-center bg-mblack">
          {text}
        </p>
      )} */
  }
};

export default VideoContainer;
