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
import { Montserrat, Work_Sans ,Zen_Dots} from "next/font/google";

import { useEffect, useRef, useState } from "react";
import HeroN from "@/components/heroComponents/HeroN";
import HeroL from "@/components/heroComponents/HeroL";
import AboutContact from "@/components/aboutComponents/AboutContact";


const worksans = Work_Sans({
  subsets:['latin'],
  weight:["300","400","500",'600']
})
const montserat = Montserrat({
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
  const [libraryInView, setLibraryInView] = useState(false);

  const updateState = bool =>{
    setCursorScale(bool)
  }
  const updateServicesInVies = bool =>{
    setServicesInView(bool)
  }
  
  return (
   <main  style={montserat.style} className="flex flex-col ">
    <Navbar />
    <HeroL  />
      {/* <HeroN setCursorScale={setCursorScale}/> */}
      <Services />
      <Library setCursorScale={setCursorScale} />
      <TechStack/>
      {/* <AboutContact/> */}
      <Cursor cursorScale={cursorScale} />
    
      
   </main>
  );
}
