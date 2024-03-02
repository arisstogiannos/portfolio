"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import localfont from "next/font/local";
import { useScroll } from "framer-motion";
import { navLinks } from "@/app/data";
import Light from "./Light";

function Navbar() {
  const [selectedLink, setSelectedLink] = useState(null);
  const [clickedLink, setClickedLink] = useState(null);
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
      ref={nav}
      className={`${flag ? "justify-end" : "justify-between"} flex w-[1440px] h-28 mx-auto bg-transparent sticky top-0 z-50 text-white  items-center text-xl font-medium `}
    >
      <h1 className={`${flag ? "hidden" : ""} cursor-pointer`}>Aris Stogiannos</h1>
      <svg
        className={`${flag ? "" : "hidden"} cursor-pointer z-[1200]`}
        width="60px"
        height="60px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
          fill="#ffffff"
        />
      </svg>
      <div className={`${flag?'w-[300px] h-[400px] bg-red-800 fixed  top-6 right-10 rounded-md z-[900]':''}`}>
      <ul className={`  flex gap-0  ${flag ? " flex-col absolute -translate-y-1/2 top-1/2 right-1/2  z-[1000]  gap-20 " : ""}`}>
        {navLinks.map((link, i) => {
          return (
            <li
              onMouseEnter={() => {
                setSelectedLink(i);
              }}
              onMouseLeave={() => {
                setSelectedLink(clickedLink);
              }}
              onClick={() => {
                setClickedLink(i);
                window.scrollTo({ top: 1000 * i, left: 0, behavior: "smooth" });
              }}
              className="flex justify-center items-center relative  "
            >
              <Link
                className={`absolute -translate-x-1/2  left-1/2   cursor-pointer ${
                  selectedLink == i ? "opacity-100" : "opacity-50"
                } transition duration-300 z-50  drop-shadow `}
                key={i}
                href={""}
              >
                {link.title}
              </Link>
              <div className={`${flag?'hidden':''}`}>
              <Light flag={selectedLink == i ? true : false} />
              </div>
            </li>
          );
        })}
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
