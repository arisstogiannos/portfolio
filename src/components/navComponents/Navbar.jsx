"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuButton from "./MenuButton";
import DropDownFull from "./DropDownFull";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "../globalComponents/Button/Magnetic";
import Logo from "../globalComponents/Logo";
import Menu from "./Menu";

const montserat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function Navbar({ loco,load }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(0);
  const [navVisible, setNavVisible] = useState(-1);
  const [lock, setLock] = useState(false);
  const [initial, setInitial] = useState(true);

  const nav = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(nav, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: "200px",

        onUpdate: (e) =>
          !lock ? setNavVisible(e.direction) : setNavVisible(-1),
      },
    });
  }, [lock]);

  useEffect(()=>{
    if(!load){

      setTimeout(() => {
        setInitial(false)
      }, 1500);
    }
  },[load])

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
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={
        (navVisible === -1 && !load) ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }
      }
      transition={{ type: "spring", bounce: 0.4, duration: initial?1.5:1, delay: initial?1.2:0 }}
      style={montserat.style}
      ref={nav}
      className={` myContainer  h-28 bg-transparent sticky top-0 z-50 text-white   text-xl font-medium flex justify-end items-center`}
    >
      {/* <h1 id="logo" className={` cursor-pointer text-lg md:text-2xl mr-auto max-lg:block ${false ? "hidden" : ""}`}>
        Aris Stogiannos
      </h1> */}
      <Logo loco={loco} color={"white"} classes={"top-[15px] md:top-[13px] -z-20"} position={"mr-auto mix-blend-exclusion "}/>

      {/* <AnimatePresence>
      {navlinksVisible&& <NavLinks selectedLink={selectedLink} setSelectedLink={setSelectedLink} loco={loco}/>}
      </AnimatePresence> */}
      <AnimatePresence>
        <Menu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedLink={selectedLink}
          loco={loco}
          setLock={setLock}
        />
      </AnimatePresence>

      <AnimatePresence>
        <MenuButton isOpen={isOpen} setLock={setLock} setIsOpen={setIsOpen} />
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
