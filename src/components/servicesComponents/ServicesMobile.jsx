import React from "react";
import { servicelist } from "@/app/data.js";
import localfont from "next/font/local";

const medium = localfont({ src: "../../../fonts/medium.otf" });


function ServicesMobile() {
  return (
    <section className=" lg:hidden w-screen overflow-x-scroll  my-32 ">
      <div className="flex gap-10 ml-9 overflow-x-scroll w-[300%]">
        {servicelist.map((service, index) => {
          const { title, desc,src } = service;
          return (
            <div className="border border-mwhite rounded-2xl w-[80vw] bg-mblack">
              <h3 style={medium.style} className=" ml-6 my-4 text-lg text-mwhite">{title}</h3>
              <hr className="w-full border-t border-t-mwhite" />
              <video
                id={index}
                lazy="true"
                loop
                src={src}
                width={"270px"}
                height={"525px"}
                className={` mx-auto  `}
                muted
                autoPlay
              />{" "}
              <hr className="w-full border-t border-t-mwhite" />
                <p className="ml-5 px-5 my-4 text-mwhite">{desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ServicesMobile;
