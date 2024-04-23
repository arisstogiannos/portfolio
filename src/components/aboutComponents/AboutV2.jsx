import React, { useRef,useEffect } from "react";
import Button from "../globalComponents/Button/Button";
import {motion, useInView} from 'framer-motion'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';


function AboutV2({loco}) {
const container = useRef(null)
  const inView = useInView(container,{amount:0.3})
  let refs = useRef([]);
  const Heading = useRef(null)
  

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, [])

  const createAnimation = () => {
      gsap.to(refs.current, {
        scrollTrigger: {
            trigger: Heading.current,
            scrub: true,
            start: "top bottom",
            end: "bottom+=90px bottom",
        },
        opacity: 1,
        ease: "none",
        stagger: 0.1
    })
  }

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach( (word, i) => {
      const letters = splitLetters(word);
      body.push(<p className="mr-4" key={word + "_" + i}>{letters}</p>)
    })
    return body
  }

  const splitLetters = (word) => {
    let letters = []
    word.split("").forEach( (letter, i) => {
      letters.push(<span key={letter + "_" + i} className="opacity-10" ref={el => {refs.current.push(el)}}>{letter}</span>)
    })
    return letters;
  }

   const slideUp = {
    initial: {
        y: "100%"
    },
    open: (i) => ({
        y: "0%",
        transition: {duration: 0.5, delay: 0.02 * i}
    }),
    closed: {
        y: "100%",
        transition: {duration: 0.5}
    }
}

 const opacity = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: {duration: 0.5}
    },
    closed: {
        opacity: 0,
        transition: {duration: 0.5}
    }
}
  const phrase =" My goal is to showcase your brand while engaging visitors, creating meaningful interactions, and boosting your business success."
  return (
    <section  ref={container} id="about" className="mt-10 myContainer pt-10">
      <div   className="flex justify-between w-full  ">
        <h3 ref={Heading} className="scaleCursor  text-[70px]  text-mwhite capitalize leading-tight relative min-w-[790px]  flex flex-wrap  h-fit">
          {splitWords("i am creating unique websites to help your business stand out")}
        </h3>
        <div className="mt-0 relative">

        <hr className="scaleCursor border-solid border-l h-[520px]   mx-28 border-mwhite  " />
        <div data-scroll data-scroll-speed="0.3" className="relative bottom-64">

        <Button loco={loco} />
        </div>
        </div>
        <p  className="scaleCursor text-[28px] text-mwhite/95 mt-3  font-light  leading-snug tracking-wide  h-fit relative ">
        {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={"ml-2 first-of-type:ml-0 relative overflow-hidden inline-flex"}><motion.span variants={slideUp} custom={index}  animate={inView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
        </p>
      </div>
      
    </section>
  );
}

export default AboutV2;
