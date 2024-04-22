import React from "react";
import Button from "../globalComponents/Button/Button";

function AboutV2({loco}) {
  return (
    <section id="about" className="mt-10 myContainer pt-10">
      <div className="flex justify-between w-full  ">
        <h3  className="scaleCursor  text-[70px]  text-mwhite capitalize leading-tight w-fit whitespace-nowrap h-fit">
          i am creating unique
          <br /> websites to help your
          <br /> business stand out{" "}
        </h3>
        <div className="mt-0 relative">

        <hr className="scaleCursor border-solid border-l h-[520px]   mx-28 border-mwhite  " />
        <div data-scroll data-scroll-speed="0.3" className="relative bottom-64">

        <Button loco={loco} />
        </div>
        </div>
        <p  className="scaleCursor text-[28px] text-mwhite/85  font-light  leading-snug tracking-wide w-fit h-fit">
          My goal is to showcase your brand while engaging visitors, creating
          meaningful interactions, and boosting your business success.
        </p>
      </div>
      
    </section>
  );
}

export default AboutV2;
