'use client'
import Hero from "@/components/heroComponents/Hero";
import Library from "@/components/libraryComponents/Library";
import Navbar from "@/components/navComponents/Navbar";
import Services from "@/components/servicesComponents/Services";
import Image from "next/image";
import { useEffect, useRef } from "react";

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
   <main className="flex flex-col ">
    <Navbar/>
      <Hero/>
      <Services/>
      <Library/>
      
   </main>
  );
}
