import React from 'react'
import { navLinks } from "@/app/data";
import { useState, } from 'react';
import Link from "next/link";
import {motion} from 'framer-motion'




export default function NavLinks({selectedLink, setSelectedLink,loco}) {
  

  
  
  const [clickedLink, setClickedLink] = useState(0);

  return (
   
      
      <motion.ul
      
      initial={{y:-100}}
      animate={{y:0}}
      exit={{y:-100}}
      transition={{duration:0.1, ease:[0.76,0,0.24,1],}}
      className={` flex   gap-0  `}>
        {navLinks.map((link, i) => {
          return (
            <li
            key={i}
              onMouseEnter={() => {
                setSelectedLink(i);
              }}
              onMouseLeave={() => {
                setSelectedLink(clickedLink);
              }}
              onClick={() => {
                setClickedLink(i);
                loco.scrollTo(link.href,{duration:2})
              }}
              className="flex justify-center items-center relative translate-x-8 "
            >
              <Link
                className={`absolute -translate-x-1/2  left-1/2   cursor-pointer ${
                  selectedLink == i ? "opacity-100 scale-105 -translate-y-1" : "opacity-50"
                } transition duration-300 z-50  drop-shadow `}
                key={i}
                href={link.href}
              >
                {link.title}
              </Link>
              
              <Light flag={selectedLink == i ? true : false} />
              
            </li>
          );
        })}
        {/* <Link id='btn' href={'#hero'} className='w-32 
         h-10 my-auto border-mblue text-mblue border-solid border-2 rounded-lg flex justify-center items-center mr-10 fill-transparent hidden'>Hire me</Link> */}
      </motion.ul>
     
  )
}

