"use client";
import React, { useEffect, useRef, useState } from "react";
import {  AnimatePresence } from "framer-motion";
import MenuButton from "./MenuButton";
import DropDownFull from "./DropDownFull";

import { Montserrat } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const montserat = Montserrat({
  subsets:['latin'],
  weight:['400','500','600','700']
})

function Navbar({loco}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(0);

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
      className={` myContainer pointer-events-none h-28 bg-transparent sticky top-0 z-50 text-white   text-xl font-medium flex justify-end items-center`}
    >
      {/* <h1 id="logo" className={` cursor-pointer text-lg md:text-2xl mr-auto max-lg:block ${false ? "hidden" : ""}`}>
        Aris Stogiannos
      </h1> */}
      <div className="mr-auto "><svg width="56" height="54" viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="27.9109" cy="26.4356" r="24.3661" stroke="white"/>
<path d="M28.4185 10.1159C28.4185 10.1159 19.9923 0.18417 14.5452 2.59847C10.8861 4.22028 10.3622 9.41745 10.3622 9.41745" stroke="white" stroke-width="0.5"/>
<circle cx="28.4184" cy="10.1159" r="1.01494" fill="#00A8B7"/>
<path d="M28.4184 10.1159C28.4184 10.1159 36.5015 0.207524 41.9487 2.62183C45.6078 4.24364 46.1317 9.4408 46.1317 9.4408" stroke="white" stroke-width="0.5"/>
<circle cx="1.5" cy="1.5" r="1.5" transform="matrix(-1 0 0 1 30 9)" fill="#00A8B7"/>
<path d="M36.7917 29.1461C36.7917 29.1461 48.3449 21.2151 53.792 23.6294C57.4511 25.2512 52.5234 28.3276 52.5234 28.3276" stroke="white" stroke-width="0.5"/>
<circle cx="1.5" cy="1.5" r="1.5" transform="matrix(-1 0 0 1 38 28)" fill="#00A8B7"/>
<path d="M19.5377 29.6536C19.5377 29.6536 7.65513 38.0304 2.208 35.6161C-1.4511 33.9943 3.47664 30.918 3.47664 30.918" stroke="white" stroke-width="0.5"/>
<circle cx="1.5" cy="1.5" r="1.5" transform="matrix(1 0 0 -1 18 31)" fill="#00A8B7"/>
<path d="M15.478 38.7881C15.478 38.7881 36.1656 52.5924 41.6128 50.1781C45.2719 48.5563 45.7958 43.3591 45.7958 43.3591" stroke="white" stroke-width="0.5"/>
<circle cx="15.5" cy="38.5" r="1.5" transform="rotate(180 15.5 38.5)" fill="#00A8B7"/>
<path d="M40.68 38.7777C40.68 38.7777 19.9923 52.582 14.5452 50.1677C10.8861 48.5458 10.3622 43.3487 10.3622 43.3487" stroke="white" stroke-width="0.5"/>
<circle cx="1.5" cy="1.5" r="1.5" transform="matrix(1 0 0 -1 40 40)" fill="#00A8B7"/>
</svg>



</div>
      
        {/* <AnimatePresence>
      {navlinksVisible&& <NavLinks selectedLink={selectedLink} setSelectedLink={setSelectedLink} loco={loco}/>}
      </AnimatePresence> */}
      <AnimatePresence>
        {isOpen&&<DropDownFull isOpen={isOpen} setIsOpen={setIsOpen} selectedLink={selectedLink} loco={loco} />}
        </AnimatePresence>
        
      <AnimatePresence>
        <MenuButton isOpen={isOpen} setIsOpen={setIsOpen}  />
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
