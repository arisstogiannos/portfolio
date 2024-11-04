"use client";
import Navbar from "@/components/navComponents/Navbar";
import Services from "@/components/servicesComponents/Services";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";
import CursorNew from "@/components/globalComponents/CusorNew";
import Loading from "@/components/globalComponents/Loading";
import ContactFooter from "@/components/contactComponents/ContactFooter";
import LIbraryV2 from "@/components/libraryComponents/LIbraryV2";
import AboutV2 from "@/components/aboutComponents/AboutV2";
import Footer from "@/components/globalComponents/Footer";
import HeroNew from "@/components/heroComponents/HeroNew";
import ServicesMobile from "@/components/servicesComponents/ServicesMobile";
import Loader2 from "@/components/globalComponents/Loader2";

const montserat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  const [cursorScale, setCursorScale] = useState(false);
  const [projectColor, setProjectColor] = useState("#00A8B7");
  // const [cursorInServices, setCursorInServices] = useState({x:-1,y:-1});
  // const [cursorInLibrary, setCursorInLibrary] = useState(-1);
  // const [cursorInTechStack, setCursorInTechStack] = useState(-1);
  // const [screenWidth,setScreenwidth]= useState(0)
  // const [servicesScroll,setServicesScroll] = useState(0.0)
  const [load, setLoad] = useState(true);
  const [animStart, setAnimStart] = useState(false);
  const [loco, setLoco] = useState(null);
  const [modal, setModal] = useState({ active: false, index: -1 });

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check screen width and set isDesktop accordingly
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280); // 1024px is a common breakpoint for desktop
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    // window.scrollTo(0,0)
    if(window.innerWidth<1000){

      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll({
          smooth: true,
          lenisOptions:{smoothWheel:true,smoothTouch:false,},
          
        });
        setLoco(locomotiveScroll);
      })();
    }else{

      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll({
          smooth: true,
          lenisOptions:{smoothWheel:true,smoothTouch:true,duration:1.7},
          
        });
        setLoco(locomotiveScroll);
      })();
    }
  }, []);

  return  (
  
  <main style={montserat.style} className=" flex flex-col   ">
      
      <Loader2 setLoading={setLoad} load={load} setAnimStart={setAnimStart} />
      <Navbar loco={loco} load={load} />
      <div className=" overflow-x-hidden">

      <HeroNew loco={loco} load={load} animStart={animStart} />
      <Services />
      <ServicesMobile/>
      <AboutV2 loco={loco} />{" "}
      <LIbraryV2
        setProjectColor={setProjectColor}
        projectColor={projectColor}
        loco={loco}
        />
      <ContactFooter />
      </div>
      {isDesktop&&<CursorNew
        cursorScale={cursorScale}
        projectColor={projectColor}
        modal={modal}
      />}
      <Footer loco={loco} />
    </main>
  );
}
