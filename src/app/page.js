'use client'
import TechStack from "@/components/TechStackComponents/TechStack";
import Library from "@/components/libraryComponents/Library";
import Navbar from "@/components/navComponents/Navbar";
import Cursor from "@/components/globalComponents/Cursor"
import Services from "@/components/servicesComponents/Services";
import { Montserrat,Instrument_Sans} from "next/font/google";
import { useLayoutEffect, useEffect, useState } from "react";
import HeroL from "@/components/heroComponents/HeroL";
import AboutContact from "@/components/contactComponents/Contact";
import CursorDesktop from "@/components/globalComponents/CursorDesktop";
import About from "@/components/aboutComponents/About";
import CursorNew from "@/components/globalComponents/CusorNew";
import Loading from "@/components/globalComponents/Loading";



const montserat = Montserrat({
  subsets:['latin'],
  weight:["300","400","500",'600']
})
const instrumentSans = Instrument_Sans({
  subsets:['latin'],
  weight:["700","400","500",'600']
})

export default function Home() {
  const [cursorScale, setCursorScale] = useState(false);
  // const [cursorInServices, setCursorInServices] = useState({x:-1,y:-1});
  // const [cursorInLibrary, setCursorInLibrary] = useState(-1);
  // const [cursorInTechStack, setCursorInTechStack] = useState(-1);
  // const [screenWidth,setScreenwidth]= useState(0)
  const [load,setLoad] = useState(true)
  const [loco, setLoco] = useState(null);
  useLayoutEffect(()=>{
    (
      async() => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
        setLoco(locomotiveScroll)
      }
    )()
  },[])
  // useEffect(()=>{
    
  //   setScreenwidth(window.innerWidth)
  //   window.onresize= function(){
  //     setScreenwidth(window.innerWidth)
  //       }
        
      
    
  // })
  

  

  return (
    // load? <Loading setLoading={setLoad} />:
     <main  style={montserat.style} className=" flex flex-col ">
    <Navbar loco={loco}/>
    <HeroL  />
      {/* <HeroN setCursorScale={setCursorScale}/> */}
      <Services />
      <About/>
      <Library setCursorScale={setCursorScale} />
      <TechStack loco={loco}/>
    <AboutContact/> 
       {/* {screenWidth>1000&&screenWidth<1600&&<Cursor cursorScale={cursorScale}  />}
      {screenWidth>=1600&&<CursorDesktop cursorScale={cursorScale}/>} */}
      <CursorNew cursorScale={cursorScale} />
    
      
   </main>

  );
}
