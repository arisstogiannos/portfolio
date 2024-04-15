'use client'
import TechStack from "@/components/TechStackComponents/TechStack";
import Library from "@/components/libraryComponents/Library";
import Navbar from "@/components/navComponents/Navbar";
import Services from "@/components/servicesComponents/Services";
import { Montserrat} from "next/font/google";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import HeroL from "@/components/heroComponents/HeroL";
import AboutContact from "@/components/contactComponents/Contact";
import About from "@/components/aboutComponents/About";
import CursorNew from "@/components/globalComponents/CusorNew";
import Loading from "@/components/globalComponents/Loading";
import ContactFooter from "@/components/contactComponents/ContactFooter";
import LIbraryV2 from "@/components/libraryComponents/LIbraryV2";




const montserat = Montserrat({
  subsets:['latin'],
  weight:["300","400","500",'600']
})

export default function Home() {
 

  const [cursorScale, setCursorScale] = useState(false);
  const [projectColor, setProjectColor] = useState("#00A8B7");
  // const [cursorInServices, setCursorInServices] = useState({x:-1,y:-1});
  // const [cursorInLibrary, setCursorInLibrary] = useState(-1);
  // const [cursorInTechStack, setCursorInTechStack] = useState(-1);
  // const [screenWidth,setScreenwidth]= useState(0)
  // const [servicesScroll,setServicesScroll] = useState(0.0)
  const [load,setLoad] = useState(true)
  const [loco, setLoco] = useState(null);
  const [modal, setModal] = useState({ active: false, index: -1 });

  useLayoutEffect(()=>{
    (
      async() => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
        setLoco(locomotiveScroll)
       
      }
    )()
  
  },[])

  

  return (
    load? <Loading setLoading={setLoad} />: 
     <main   style={montserat.style} className=" flex flex-col  ">
      
      
    <Navbar loco={loco}/>
    <HeroL loco={loco} />
      <Services />
      <About/>
      {/* <Library setCursorScale={setCursorScale} modal={modal} setModal={setModal} /> */}
      <LIbraryV2 setProjectColor={setProjectColor} projectColor={projectColor}/>
      <TechStack loco={loco}/>
    <ContactFooter/>
      <CursorNew cursorScale={cursorScale} projectColor={projectColor}  modal={modal}/>
      
   </main>

  );
}
