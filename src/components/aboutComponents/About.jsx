import MovingBg from "../globalComponents/MovingBg";

function About() {
  return (
    <div className="h-screen myContainer flex flex-col justify-center items-start my-20 ">
      <h3  className="text-mwhite text-9xl font-normal capitalize leading-tight">
        Building Unique <br /> digital experiences
      </h3>
      
      <div className="flex w-full gap-20 h-1/2 items-end justify-start">
        <div className="w-[800px] h-[155px] rounded-3xl mr-20 relative overflow-hidden">
          <MovingBg/>
          <div className="w-full h-full bg-mwhite/30 rounded-3xl filter backdrop-blur"></div>
        </div>
        <hr className="border-solid border-l-2 h-80 mt-20 border-mwhite  self-center" />
        <p className="capitalize text-mwhite text-5xl min-w-[500px] max-w-[510px] leading-[1.1] font-normal">
          modern aesthetics with cutting-edge technology.
        </p>
      </div>
    </div>
  );
}



export default About;
