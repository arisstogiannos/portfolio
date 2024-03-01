"use client";
import Link from "next/link";
import React, { useState } from "react";
import { navLinks } from "@/app/data";
import Light from "./Light";


function Navbar() {
  const [selectedLink, setSelectedLink] = useState(null);
  const [clickedLink, setClickedLink] = useState(null);

  return (
    <nav className="flex w-[1440px] h-28 mx-auto bg-mblack text-white justify-between items-center text-xl font-medium">
      <h1>Aris Stogiannos</h1>

      <ul className="flex gap-0">
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
                window.scrollTo({top:1000*i,left:0,behavior:"smooth"})
              }}
              className="flex justify-center items-center relative  "
            >
              <Link
                className={`absolute -translate-x-1/2 left-1/2  cursor-pointer ${selectedLink == i? 'opacity-100' : 'opacity-50'} transition duration-300 z-50  drop-shadow `}
                key={i}
                href={""}
              >
                {link.title}
              </Link>
              <Light flag={(selectedLink == i ? true : false) } />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
