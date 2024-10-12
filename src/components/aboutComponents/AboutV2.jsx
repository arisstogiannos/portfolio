import React, { useRef, useEffect, useState } from "react";
import Button from "../globalComponents/Button/Button";
import { motion, useInView } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

function AboutV2({ loco }) {
  const container = useRef(null);
  const text2 = useRef(null);
  const inView = useInView(container, { amount: 0.3 });
  const inView2 = useInView(text2, { amount: 0.9 });

  let refs = useRef([]);
  const Heading = useRef(null);

  useEffect(() => {
    
    gsap.registerPlugin(ScrollTrigger);
    if(window.innerWidth<1024){
      createAnimationMobile();
    }else{

      createAnimation();
    }
  }, []);

  const createAnimation = () => {
   
    ScrollTrigger.defaults({
      markers: false, // Disable debug markers
      onTouch: true,  // Ensure touch interactions are enabled
    });
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: Heading.current,
        scrub: true,
        start: "top-=50px bottom-=150px",
        end: "bottom bottom-=150px",
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };
  const createAnimationMobile = () => {
   
    ScrollTrigger.defaults({
      markers: false, // Disable debug markers
      onTouch: true,  // Ensure touch interactions are enabled
    });
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: Heading.current,
        scrub: true,
        start: "top-=80px center",
        end: "bottom+=120px center",
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(
        <p className="mr-2 md:mr-4" key={word + "_" + i}>
          {letters}
        </p>
      );
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          className="opacity-10 "
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  const slideUp = {
    initial: {
      y: "100%",
    },
    open: (i) => ({
      y: "0%",
      transition: { duration: 0.5, delay: 0.02 * i },
    }),
    closed: {
      y: "100%",
      transition: { duration: 0.5 },
    },
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };
  const phrase2 =
    " My goal is to showcase your brand while engaging visitors, creating meaningful interactions, and boosting your business success. I build websites that are designed to attract and retain visitors.";
  const phrase =
    " Think of your website as a space where customers can learn about your business, explore your offerings, and engage with your brand.";
  return (
    <section
      ref={container}
      id="about"
      className="mt-20 lg:mt-10 myContainer pt-10 mb-10"
    >
      <div className="flex justify-between w-full flex-col md:flex-row  ">
        <h3
          ref={Heading}
          className="scaleCursor text-[33px] md:text-[70px]  text-mwhite capitalize    leading-tight relative min-w-[400px] md:min-w-[790px]  flex flex-wrap  h-fit"
        >
          {splitWords("Your digital presence starts with an impactful website")}
        </h3>
        <div className="w-full flex">
          <div className="mt-10 md:mt-0 relative">
            <hr className="scaleCursor border-solid border-l h-[300px] md:h-[420px] w-0  mx-[70px] md:mx-[104px] border-mwhite  " />
            <div
              data-scroll
              data-scroll-speed="0.3"
              className="relative bottom-64"
            >
              <Button loco={loco} />
            </div>
          </div>
          <p
            ref={text2}
            className="scaleCursor text-[15px] md:text-[26px] ml-8 md:ml-16 text-mwhite/95  font-light  leading-snug tracking-wide  h-fit relative mt-auto  "
          >
            {phrase.split(" ").map((word, index) => {
              return (
                <span
                  key={index}
                  className={
                    "md:ml-2 ml-1 first-of-type:ml-0 relative overflow-hidden inline-flex"
                  }
                >
                  <motion.span
                    variants={slideUp}
                    custom={index}
                    animate={inView2 ? "open" : "closed"}
                    key={index}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
        </div>
        </div>

    </section>
  );
}

export default AboutV2;
