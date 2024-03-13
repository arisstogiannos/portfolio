"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import MenuButton from "./MenuButton";
import Dropdown from "./Dropdown";
import NavLinks from "./NavLinks";
import { Montserrat } from "next/font/google";

const montserat = Montserrat({
  subsets:['latin'],
  weight:['400','500','600','700']
})

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(0);
  const [flag, setFlag] = useState(false);
  const nav = useRef(null);
  
  const [loco, setLoco] = useState(null);
  useEffect(()=>{
    (
      async() => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
        setLoco(locomotiveScroll)
      }
    )()
  },[])
  
  useEffect(()=>{
    window.scrollY < 150 && window.innerWidth>1023 ? setFlag(false) : setFlag(true);
    window.addEventListener('scroll',(e)=>{
      
      
      window.scrollY < 150 && window.innerWidth>1023 ? setFlag(false) : setFlag(true);
    
    })
  },[])

  

  return (
    <nav
    style={montserat.style}
      ref={nav}
      className={` myContainer h-28 bg-transparent sticky top-0 z-50 text-white   text-xl font-medium  `}
    >
      <h1 className={` cursor-pointer text-lg md:text-2xl absolute mt-9 md:mt-0 md:top-1/2 md:-translate-y-1/2 left-0 max-lg:block ${flag ? "hidden" : ""}`}>
        Orbital Designs
      </h1>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 ">
        <AnimatePresence>
      {!flag&&<NavLinks selectedLink={selectedLink} setSelectedLink={setSelectedLink} loco={loco}/>}
      </AnimatePresence>
      <AnimatePresence>
        {flag && <Dropdown isOpen={isOpen} selectedLink={selectedLink} loco={loco} />}
      </AnimatePresence>
      <AnimatePresence>
        {flag&&<MenuButton isOpen={isOpen} setIsOpen={setIsOpen} flag={flag} />}
      </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
