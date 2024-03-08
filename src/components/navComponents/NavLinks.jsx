import React from 'react'
import { navLinks } from "@/app/data";
import { useState } from 'react';
import Link from "next/link";
import Light from "./Light";



export default function NavLinks({selectedLink, setSelectedLink}) {

  
  const [clickedLink, setClickedLink] = useState(null);

  return (
   
      
      <ul className={` flex   gap-0 `}>
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
              className="flex justify-center items-center relative translate-x-8 "
            >
              <Link
                className={`absolute -translate-x-1/2  left-1/2   cursor-pointer ${
                  selectedLink == i ? "opacity-100 scale-105 -translate-y-1" : "opacity-50"
                } transition duration-300 z-50  drop-shadow `}
                key={i}
                href={''}
              >
                {link.title}
              </Link>
              
              <Light flag={selectedLink == i ? true : false} />
              
            </li>
          );
        })}
        <Link id='btn' href={'#hero'} className='w-32 
         h-10 my-auto border-mblue text-mblue border-solid border-2 rounded-lg flex justify-center items-center mr-10 fill-transparent hidden'>Hire me</Link>
      </ul>
     
  )
}
