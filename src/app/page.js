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
  const [cursorScale, setCursorScale] = useState(false);
  const [screenWidth,setScreenwidth]= useState(0)

  useEffect(()=>{
    (
      async() => {
        const LocomotiveScroll = (await  import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  },[])
  useEffect(()=>{
    
    setScreenwidth(window.innerWidth)
    console.log(screenWidth)
    window.onresize= function(){
      setScreenwidth(window.innerWidth)
        }
        
      
    
  })
  

  

  return (
   <main  style={montserat.style} className=" flex flex-col ">
    <Navbar/>
    <HeroL  />
      {/* <HeroN setCursorScale={setCursorScale}/> */}
      <Services />
      <Library setCursorScale={setCursorScale} />
      <TechStack/>
      <AboutContact/>
      {screenWidth>1000&&screenWidth<1600&&<Cursor cursorScale={cursorScale} />}
      {screenWidth>=1600&&<CursorDesktop cursorScale={cursorScale}/>}
    
      
   </main>
  );
}
