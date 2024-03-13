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
  const { scrollY } = useScroll({
    target: nav,
    offset: ["start start", "end end"],
  });
  useEffect(()=>{
    scrollY.get() < 150 && window.innerWidth>1023 ? setFlag(false) : setFlag(true);
    window.onscroll = function () {
      scrollY.get() < 150 && window.innerWidth>1023 ? setFlag(false) : setFlag(true);
      
    };
  },[])

  

  return (
    <nav
    style={montserat.style}
      ref={nav}
      className={`flex justify-end items-start myContainer h-28 bg-transparent sticky top-0 z-50 text-white   text-xl font-medium `}
    >
      <h1 className={` cursor-pointer text-2xl absolute top-1/2 -translate-y-1/2 left-0 max-lg:block ${flag ? "hidden" : ""}`}>
        Orbital Designs
      </h1>
      {!flag&&<NavLinks selectedLink={selectedLink} setSelectedLink={setSelectedLink} />}
      <AnimatePresence>
        {flag&&<MenuButton isOpen={isOpen} setIsOpen={setIsOpen} flag={flag} />}
      </AnimatePresence>
      <AnimatePresence>
        {flag && <Dropdown isOpen={isOpen} selectedLink={selectedLink} />}
      </AnimatePresence>

    </nav>
  );
}

export default Navbar;
