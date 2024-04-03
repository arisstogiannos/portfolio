import MovingBg from "../globalComponents/MovingBg";


function About() {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.from(".about h3", {
  //     y: 100,
  //     opacity: 0,

  //     duration: 0.3,
  //     ease: "circ.out",
  //     scrollTrigger: {
  //       trigger: ".about",
  //       start: "30% 60%",
  //       markers: true,
  //     },
  //   });
   
  // }, []);
  const balls = [
    { top: 0, left: "100%", scale: 1 },
    { top: "7%", left: "75%", scale: 1.4 },
    { top: "60%", left: "33%", scale: 0.8 },
    { top: "20%", left: "22%", scale: 1 },
    { top: "30%", left: "50%", scale: 1.6 },
    { top: "15%", left: 0, scale: 1.3 },
  ];
  return (
    <section id='about' className="about h-screen myContainer flex flex-col justify-center items-start my-20 ">
      <h3 className="  scaleCursor cursor-default text-mwhite text-9xl font-normal capitalize leading-tight">
        Building Unique <br /> digital experiences
      </h3>

      <div className=" flex w-full gap-20 h-1/2 3xl:h-[45%] items-end justify-start">
        <div className=" w-[800px] h-[155px] rounded-3xl mr-20 relative overflow-hidden">
          <MovingBg balls={balls} />
          <div className="w-full h-full bg-mwhite/30 rounded-3xl filter backdrop-blur"></div>
        </div>
        <hr className="scaleCursor border-solid border-l-2 h-80  mt-20 border-mwhite  self-center" />
        <p className="scaleCursor capitalize text-mwhite text-5xl min-w-[500px] max-w-[510px] leading-[1.1] font-normal">
          modern aesthetics with cutting-edge technology.
        </p>
      </div>
    </section>
  );
}

export default About;
