import React from "react";
import Magnetic from "./Magnetic";

function Button({loco}) {
  return (
    
    <Magnetic distance={3}>
    <div onClick={()=>(loco.scrollTo('#library', { duration: 2 }))} className="size-36 md:size-52 hover:size-56 absolute  rounded-full bg-mblack border-2 border-mblue flex items-center justify-center cursor-pointer   duration-300 ease-in-out transition-[width,height]">
     {/* <Magnetic distance={2}> */}
      <div className="relative size-fit pointer-events-none">
        <p className="capitalize text-mblue text-xl md:text-4xl font-medium leading-snug group-hover:text-mwhite duration-500 ease-in-out transition-colors">see my<br/> work</p>
        <svg
          width="16"
          height="22"
          viewBox="0 0 16 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 md:bottom-3 -right-1 md:right-0 fill-mblue group-hover:fill-mwhite duration-500 scale-75 ease-in-out transition-colors"
          
        >
          <path
            d="M7.29289 21.7071C7.68342 22.0976 8.31658 22.0976 8.70711 21.7071L15.0711 15.3431C15.4616 14.9526 15.4616 14.3195 15.0711 13.9289C14.6805 13.5384 14.0474 13.5384 13.6569 13.9289L8 19.5858L2.34315 13.9289C1.95262 13.5384 1.31946 13.5384 0.928933 13.9289C0.538409 14.3195 0.538409 14.9526 0.928933 15.3431L7.29289 21.7071ZM7 4.37114e-08L7 21L9 21L9 -4.37114e-08L7 4.37114e-08Z"
            
          />
        </svg>
      </div>
      <div className="absolute left-0 top-0 w-full h-full pointer-events-auto scale-110 hover:scale-125  rounded-full"></div>
      {/* </Magnetic> */}
      {/* <div className="absolute left-0 top-0 w-full h-full pointer-events-auto scale-110 hover:scale-120  rounded-full"></div> */}
    </div>
    </Magnetic>
  );
}

export default Button;
