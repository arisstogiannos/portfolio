"use client";
import React, { useRef, useState } from "react";
import localfont from "next/font/local";
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
  window.onscroll = function () {
    scrollY.get() < 150 ? setFlag(false) : setFlag(true);
  };

  

  return (
    <nav
    style={montserat.style}
      ref={nav}
      className={`flex ${
        flag ? "justify-end items-start" : "justify-between items-center"
      }  w-[1440px] h-28 mx-auto bg-transparent sticky top-0 z-50 text-white   text-xl font-medium `}
    >
      <h1 className={`${flag ? "hidden" : ""} cursor-pointer text-2xl `}>
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
