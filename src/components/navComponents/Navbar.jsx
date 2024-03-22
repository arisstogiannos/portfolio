"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import MenuButton from "./MenuButton";
import Dropdown from "./Dropdown";
import NavLinks from "./NavLinks";
import { Montserrat } from "next/font/google";

const montserat = Montserrat({
  subsets:['latin'],
  weight:['400','500','600','700']
})

function Navbar({loco}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(0);
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const [navlinksVisible, setNavLinksVisible] = useState(false);
  const nav = useRef(null);
  

  
  // useLayoutEffect(()=>{

    // window.scrollY < 150 && window.innerWidth>1023 ? setDropDownVisible(false) : setDropDownVisible(true);
    // window.scrollY < 150 && window.innerWidth>1023 ? setNavLinksVisible(true) : setNavLinksVisible(false);
  //   window.addEventListener('scroll',(e)=>{
  //     window.scrollY < 150 && window.innerWidth>1023  ? setDropDownVisible(false) : setDropDownVisible(true);
  //     const timeout = setTimeout(() => {
  //       window.scrollY < 150 && window.innerWidth>1023 && setNavLinksVisible(true) 
  //       window.scrollY >= 150 && window.innerWidth < 1023 && setNavLinksVisible(false);
  //   }, 2500);

  //   // Clean up the timeout to avoid memory leaks
  //   return () => clearTimeout(timeout);
  //   })
  // },[])

  

  return (
    <nav 
    style={montserat.style}
      ref={nav}
      className={` myContainer h-28 bg-transparent sticky top-0 z-50 text-white   text-xl font-medium flex justify-end items-center`}
    >
      <h1 className={`hidden cursor-pointer text-lg md:text-2xl absolute mt-9 md:mt-0 md:top-1/2 md:-translate-y-1/2 left-0 max-lg:block ${false ? "hidden" : ""}`}>
        Orbital Designs
      </h1>
      <div className="relative ">
        {/* <AnimatePresence>
      {navlinksVisible&& <NavLinks selectedLink={selectedLink} setSelectedLink={setSelectedLink} loco={loco}/>}
      </AnimatePresence> */}
      <AnimatePresence>
         <Dropdown isOpen={isOpen} selectedLink={selectedLink} loco={loco} />
      </AnimatePresence>
      <AnimatePresence>
        <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} dropDownVisible={dropDownVisible} />
      </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
