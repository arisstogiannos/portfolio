import React from "react";
import { servicelist } from "../../../src/app/data.js";

function ServicesN() {
  return (
    <section className="h-screen w-[1440px] mx-auto relative flex">
      <div className="w-full h-[70%] relative my-auto">
        <div className="flex justify-start items-end bg-mwhite/20  shadow filter  backdrop-blur rounded-3xl absolute w-2/3 h-full left-0 top-0 border-solid border-mblack border-[10px]">
          <div className="w-2/3 mb-[4%] ml-[5%]">
            <h2 className="mb-[2%] text-3xl font-medium">{servicelist[0].title}</h2>
            <p>{servicelist[0].desc}</p>
          </div>
        </div>
        <div className="flex justify-start items-end bg-mwhite/20  shadow filter  backdrop-blur rounded-3xl absolute w-1/3 h-2/3 top-0 right-0 border-solid border-mblack border-[10px]">
          <div className="w-2/3 mb-[4%] ml-[5%]">
            <h2 className="mb-[2%] text-3xl font-medium">{servicelist[1].title}</h2>
            <p>{servicelist[1].desc}</p>
          </div>
        </div>
        <div className="flex justify-start items-end bg-mwhite/20  shadow filter  backdrop-blur rounded-3xl absolute w-1/3 h-1/3 bottom-0 right-0 border-solid border-mblack border-[10px]">
          <div className="w-2/3 mb-[4%] ml-[5%]">
            <h2 className="mb-[2%] text-3xl font-medium">{servicelist[2].title}</h2>
            <p>{servicelist[2].desc}</p>
          </div>
        </div>
      </div>
    </section>


  );
}

export default ServicesN;
