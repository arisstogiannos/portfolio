'use client'
import TechStack from "@/components/TechStackComponents/TechStack";
import Hero from "@/components/heroComponents/Hero";
import Library from "@/components/libraryComponents/Library";
import Navbar from "@/components/navComponents/Navbar";
import Services from "@/components/servicesComponents/Services";
import { useScroll } from 'framer-motion'

import Image from "next/image";
import { Work_Sans ,Zen_Dots} from "next/font/google";

import { useEffect, useRef, useState } from "react";


const worksans = Work_Sans({
  subsets:['latin'],
  weight:["300","400","500",'600']
})

export default function Home() {
  useEffect(()=>{
    (
      async() => {
        const LocomotiveScroll = (await  import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  },[])

  
  return (
   <main  style={worksans.style} className="flex flex-col ">
    <Navbar />
      <Hero/>
      <Services/>
      <Library/>
      <TechStack/>
      
   </main>
  );
}
