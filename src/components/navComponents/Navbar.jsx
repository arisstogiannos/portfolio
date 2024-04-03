"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuButton from "./MenuButton";
import DropDownFull from "./DropDownFull";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const montserat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function Navbar({ loco }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(0);
  const [navVisible, setNavVisible] = useState(-1);
  const [lock, setLock] = useState(false);

  const nav = useRef(null);

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(nav, {
      scrollTrigger: {
        trigger: document.documentElement,
        start:"200px",

        onUpdate: (e) => (!lock?setNavVisible(e.direction):setNavVisible(-1)),
      },

    });
  },[lock])

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
      animate={navVisible===-1?{ y: 0, opacity: 1 }:{ y: -100, opacity: 0 }}
      transition={{ type: "spring", bounce: 0.4, duration: 1, delay: 0 }}
      style={montserat.style}
      ref={nav}
      className={` myContainer pointer-events-none h-28 bg-transparent sticky top-0 z-50 text-white   text-xl font-medium flex justify-end items-center`}
    >
      {/* <h1 id="logo" className={` cursor-pointer text-lg md:text-2xl mr-auto max-lg:block ${false ? "hidden" : ""}`}>
        Aris Stogiannos
      </h1> */}
      <Link
        href="#home"
        onClick={() => {
          loco.scrollTo(0, { duration: 2 });
        }}
        className="mr-auto  pointer-events-auto "
      >
        <svg
          width="62"
          height="59"
          viewBox="0 0 62 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="30.9038"
            cy="29.4023"
            r="25.9554"
            stroke="white"
            strokeWidth="1.8"
          />
          <path
            d="M31.4518 11.777C31.4518 11.777 22.3516 1.05076 16.4688 3.6582C12.5169 5.40976 11.9511 11.0227 11.9511 11.0227"
            stroke="white"
            strokeWidth="0.9"
          />
          <circle cx="31.4519" cy="11.777" r="1.09614" fill="#00A8B7" />
          <path
            d="M31.45 11.0479C31.45 11.0479 40.1817 1.07598 46.0646 3.68342C50.0165 5.43498 50.3501 11.5307 50.3501 11.5307"
            stroke="white"
            strokeWidth="0.9"
          />
          <circle
            cx="2.25"
            cy="2.25"
            r="2.25"
            transform="matrix(-1 0 0 1 33.7 9.28073)"
            fill="#00A8B7"
          />
          <path
            d="M40.4951 32.3296C40.4951 32.3296 52.9725 23.7642 58.8554 26.3716C62.8073 28.1232 57.4853 31.4456 57.4853 31.4456"
            stroke="white"
            strokeWidth="0.9"
          />
          <circle
            cx="2.25"
            cy="2.25"
            r="2.25"
            transform="matrix(-1 0 0 1 42.7 29.9807)"
            fill="#00A8B7"
          />
          <path
            d="M21.8607 32.8777C21.8607 32.8777 9.02748 41.9247 3.14459 39.3173C-0.807247 37.5657 4.51472 34.2433 4.51472 34.2433"
            stroke="white"
            strokeWidth="0.9"
          />
          <circle
            cx="2.25"
            cy="2.25"
            r="2.25"
            transform="matrix(1 0 0 -1 19.3 35.3807)"
            fill="#00A8B7"
          />
          <path
            d="M17.4758 42.7429C17.4758 42.7429 39.8185 57.6516 45.7014 55.0441C49.6533 53.2926 50.2191 47.6796 50.2191 47.6796"
            stroke="white"
            strokeWidth="0.9"
          />
          <circle
            cx="17.9497"
            cy="43.0307"
            r="2.25"
            transform="rotate(180 17.9497 43.0307)"
            fill="#00A8B7"
          />
          <path
            d="M44.6943 42.7317C44.6943 42.7317 22.3516 57.6403 16.4687 55.0329C12.5169 53.2813 11.9511 47.6684 11.9511 47.6684"
            stroke="white"
            strokeWidth="0.9"
          />
          <circle
            cx="2.25"
            cy="2.25"
            r="2.25"
            transform="matrix(1 0 0 -1 42.7 45.2807)"
            fill="#00A8B7"
          />
        </svg>
      </Link>

      {/* <AnimatePresence>
      {navlinksVisible&& <NavLinks selectedLink={selectedLink} setSelectedLink={setSelectedLink} loco={loco}/>}
      </AnimatePresence> */}
      <AnimatePresence>
        <DropDownFull
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedLink={selectedLink}
          loco={loco}
          setLock={setLock}
        />
      </AnimatePresence>

      <AnimatePresence>
        <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
