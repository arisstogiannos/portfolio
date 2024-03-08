'use client'
import TechStack from "@/components/TechStackComponents/TechStack";
import Hero from "@/components/heroComponents/Hero";
import Library from "@/components/libraryComponents/Library";
import Navbar from "@/components/navComponents/Navbar";
import Cursor from "@/components/globalComponents/Cursor"
import Services from "@/components/servicesComponents/Services";
import ServicesN from "@/components/servicesv2Components/ServicesN";
import { useScroll } from 'framer-motion'

import Image from "next/image";
import { Work_Sans ,Zen_Dots} from "next/font/google";

import { useEffect, useRef, useState } from "react";
import HeroN from "@/components/heroComponents/HeroN";
import HeroL from "@/components/heroComponents/HeroL";


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

  const [cursorScale, setCursorScale] = useState(false);
  const [servicesInView, setServicesInView] = useState(false);
  
  return (
   <main  style={worksans.style} className="flex flex-col ">
    <Navbar />
    <HeroL setCursorScale={setCursorScale} cursorScale={cursorScale} />
      {/* <HeroN setCursorScale={setCursorScale}/> */}
      <Services setServicesInView={setServicesInView}/>
      <Library setCursorScale={setCursorScale}/>
      <TechStack/>
      <Cursor cursorScale={cursorScale} servicesInView={servicesInView}/>
    
      
   </main>
  );
}
