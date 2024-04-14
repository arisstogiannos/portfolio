import React from "react";
import localfont from "next/font/local";

const medium = localfont({ src: "../../../fonts/medium.otf" });

function ProjectV2({index, title, services, year ,setCurrProject,currProject}) {
  return (
    <div onMouseEnter={()=>(setCurrProject(index))} onMouseLeave={()=>(setCurrProject(-1))} className={`flex flex-col cursor-pointer ${currProject==index?"opacity-100":"opacity-50"} transition-opacity duration-200 ease-services`}>
      <div  className={`flex justify-between text-mwhite relative  `}>
        <p className={`text-sm ${currProject===index?"translate-x-4":"translate-x-0"} transition-transform duration-200 ease-services`}>{year}</p>
        <div className={`flex flex-col gap-1 pr-40 ${currProject===index?"translate-x-4":"translate-x-0"} transition-transform duration-200 ease-services`}>
          <h3 style={medium.style} className="text-2xl capitalize tracking-wide">
            {title}
          </h3>
          <p className="capitalize opacity-80 text-xl">{services}</p>
        </div>
        <div className="relative size-5 overflow-hidden ">
          <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-all duration-300 ease-services absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ${currProject===index?"translate-x-full":"-translate-x-1/2"}`}
          >
            <path
              d="M18.9151 6.53033C19.208 6.23744 19.208 5.76256 18.9151 5.46967L14.1421 0.696699C13.8492 0.403806 13.3744 0.403806 13.0815 0.696699C12.7886 0.989592 12.7886 1.46447 13.0815 1.75736L17.3241 6L13.0815 10.2426C12.7886 10.5355 12.7886 11.0104 13.0815 11.3033C13.3744 11.5962 13.8492 11.5962 14.1421 11.3033L18.9151 6.53033ZM0 6.75H18.3848V5.25H0V6.75Z"
              fill="white"
            />
          </svg>
          <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-all duration-300 ease-services -rotate-[30deg] absolute  -translate-y-1/2 -translate-x-1/2 ${currProject===index?"top-1/2 left-1/2":"top-full -left-1/2"}`}
          >
            <path
              d="M18.9151 6.53033C19.208 6.23744 19.208 5.76256 18.9151 5.46967L14.1421 0.696699C13.8492 0.403806 13.3744 0.403806 13.0815 0.696699C12.7886 0.989592 12.7886 1.46447 13.0815 1.75736L17.3241 6L13.0815 10.2426C12.7886 10.5355 12.7886 11.0104 13.0815 11.3033C13.3744 11.5962 13.8492 11.5962 14.1421 11.3033L18.9151 6.53033ZM0 6.75H18.3848V5.25H0V6.75Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <hr className={`border-mwhite w-full my-7 `}  />
    </div>
  );
}

export default ProjectV2;
