'use client'
import TechStack from "@/components/TechStackComponents/TechStack";
import Library from "@/components/libraryComponents/Library";
import Navbar from "@/components/navComponents/Navbar";
import Cursor from "@/components/globalComponents/Cursor"
import Services from "@/components/servicesComponents/Services";
import { Montserrat} from "next/font/google";
import { useEffect, useRef, useState } from "react";
import HeroL from "@/components/heroComponents/HeroL";
import AboutContact from "@/components/aboutComponents/AboutContact";
import CursorDesktop from "@/components/globalComponents/CursorDesktop";



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
  

  return (
   <main  style={montserat.style} className="flex flex-col ">
    <Navbar />
    <HeroL  />
      {/* <HeroN setCursorScale={setCursorScale}/> */}
      <Services />
      <Library setCursorScale={setCursorScale} />
      <TechStack/>
      <AboutContact/>
      {screen.width<1700?<Cursor cursorScale={cursorScale} />:<CursorDesktop cursorScale={cursorScale}/>}
    
      
   </main>
  );
}
