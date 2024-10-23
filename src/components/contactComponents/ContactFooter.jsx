import React, { useState,useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import localfont from "next/font/local";
import MovingBg from "../globalComponents/MovingBg";
import Magnetic from "../globalComponents/Button/Magnetic";
import Button from "../globalComponents/Button/Button";

const medium = localfont({ src: "../../../fonts/medium.otf" }); // import MovingBg from "../globalComponents/MovingBg";
// import gsap from "gsap";
// import SplitType from "split-type";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

function ContactFooter() {
  const container = useRef(null);

  const [stage, setStage] = useState(1);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]

  });
  const height = useTransform(scrollYProgress,[0,1],[50,0])
  const [submited,setSubmited] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
    type: "",
  });

  const handleChange = (e) => {
    const { value, id } = e.target;
    console.log(id + value);
    if (id === "RemakeWebsite" || id === "NewWebsite") {
      setFormData((prevData) => ({
        ...prevData,
        type: [id],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };
  async function handleNext(e) {
    e.preventDefault();
    setStage((prev) => prev + 1);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setSubmited(true)
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "5f3754d5-6ef3-4822-95e2-5c80667ebc3e",
        ...formData,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <>
      <motion.div style={{height:height}} className="relative w-full ">
        <div className="shadow-[0_38px_58px_rgba(0,0,0,0.7)] absolute h-[750%] w-[120%] -left-[10%] bg-mblack rounded-b-[50%] z-50  "></div>
      </motion.div>
    <section
    ref={container}
      id="contact"
      className={`h-[80vh] 3xl:h-[70vh]    myContainer  flex items-center relative   `}
    >
      {submited&&<div className="absolute top-0 left-0 filter backdrop-blur-md z-[1000] w-full h-full flex items-center justify-center">
        <div className="bg-mblack w-2/5 h-2/5 px-10 text-center rounded-3xl flex-col flex gap-8 items-center justify-center">
          <p className="text-mwhite text-4xl capitalize">Thanks for reaching out.I will get back to you asap :)</p>
          <button onClick={()=>(setSubmited(false))} className="bg-mwhite rounded-full text-xl font-medium px-6 py-1   uppercase">close</button>

        </div>
      </div>}
      <div className="bg-mwhite h-full w-screen absolute top-0 left-1/2 -translate-x-1/2 -z-[2000]"></div>
      {/* <div className="filter bg-mwhite/20 w-full h-full absolute top-0 left-0  backdrop-blur-xl z-10 "></div> */}
      <motion.div
        // Fixing the clipPath usage
        className=" myContainer flex flex-col  items-center md:items-start gap-4 h-full 3xl:py-32 lg:py-20 pb-32 pt-24    "
      >
        <motion.h3
          style={medium.style}
          id="textContact"
          className="scaleCursor text-[50px]  lg:text-[80px] text-mblack mb-auto ml-auto leading-tight flex shrin text-end lg:items-center max-mdw-[70vw] lg:gap-20  "
          initial={{ y: 50, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.2, duration: 0.5, ease: "easeOut" },
          }}
        >
        <svg className="max-lg:-rotate-45" width="71" height="71" viewBox="0 0 71 71" fill="black" xmlns="http://www.w3.org/2000/svg">
<path d="M43.5234 67.4707L43.5245 64.3249L9.3012 64.3222L65.5837 8.03973L63.3576 5.81362L7.07217 62.099L7.07538 27.8757L3.92658 27.8739L3.92658 67.4697L43.5234 67.4707Z" fill="black" stroke="black" strokeWidth="7"/>
</svg>

          Lets Talk
        </motion.h3>

        {/* <div className="w-full h-96 overflow-hidden relative ">
          <MovingBg balls={balls} />
          
        </div> */}
        <form className="w-full md:w-auto">
          <div className="flex flex-col md:flex-row gap-0   md:gap-20 items-center">
            <motion.div className="ml-0 md:mr-auto mt-auto w-full  md:w-[800px]  ">
              <AnimatePresence mode="wait">
                {form(stage, setFormData, handleChange)}
              </AnimatePresence>
            </motion.div>
            <Magnetic>
            <motion.button
                initial={{ width: 144, height: 144 }}
                animate={
                  stage === 4
                    ? { width: 320, height: 120 }
                    : { width: 144, height: 144 }
                }
                transition={{ duration: 0.6, ease: "easeInOut" }}
                onClick={(e) => {
                  if (stage === 4) handleSubmit(e);
                  else handleNext(e);
                }}
                className={`${
                  (stage === 1 && formData.fullname === "") ||
                  (stage === 2 && (!formData.email.includes(".gr") && !formData.email.includes(".com") || !formData.email.includes("@"))) ||
                  (stage === 3 && formData.message === "") ||
                  (stage === 4 && formData.type === "")
                    ? "pointer-events-none opacity-50"
                    : ""
                }
                } ${
                  stage === 4 && "w-80 h-28 "
                }  next md:flex justify-center hidden items-center rounded-full border bg-mblack group hover:bg-mblue transition-colors duration-500 cursor-pointer `}
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={stage === 4 ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
                  className={`${
                    stage === 4 ? "block " : "hidden"
                  } text-mwhite text-5xl pointer-events-none   mr-7  `}
                >
                  Submit
                </motion.p>
                <svg
                  width="46"
                  height="16"
                  viewBox="0 0 46 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="pointer-events-none"
                >
                  <path
                    d="M1 7H0V9H1V7ZM45.7071 8.70711C46.0976 8.31658 46.0976 7.68342 45.7071 7.29289L39.3431 0.928932C38.9526 0.538408 38.3195 0.538408 37.9289 0.928932C37.5384 1.31946 37.5384 1.95262 37.9289 2.34315L43.5858 8L37.9289 13.6569C37.5384 14.0474 37.5384 14.6805 37.9289 15.0711C38.3195 15.4616 38.9526 15.4616 39.3431 15.0711L45.7071 8.70711ZM1 9H45V7H1V9Z"
                    fill="white"
                  />
                </svg>
              </motion.button>
            </Magnetic>
            <Magnetic>
             
              <motion.button
                initial={{ width: 144, height: 70 }}
                animate={
                  stage === 4
                    ? { width: 184, height: 80 }
                    : { width: 144, height: 70 }
                }
                transition={{ duration: 0.6, ease: "easeInOut" }}
                onClick={(e) => {
                  if (stage === 4) handleSubmit(e);
                  else handleNext(e);
                }}
                className={`${
                  (stage === 1 && formData.fullname === "") ||
                  (stage === 2 && (!formData.email.includes(".gr") && !formData.email.includes(".com") || !formData.email.includes("@"))) ||
                  (stage === 3 && formData.message === "") ||
                  (stage === 4 && formData.type === "")
                    ? "pointer-events-none opacity-50"
                    : ""
                }
                } ${
                  stage === 4 && "w-60 h-28 "
                }  next flex md:hidden justify-center items-center rounded-full border bg-mblack group hover:bg-mblue transition-colors duration-500 cursor-pointer `}
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={stage === 4 ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
                  className={`${
                    stage === 4 ? "block " : "hidden"
                  } text-mwhite text-2xl pointer-events-none   mr-7  `}
                >
                  Submit
                </motion.p>
                <motion.p
                  
                  className={`${
                    stage === 4 ? "hidden " : "block"
                  } text-mwhite text-2xl pointer-events-none capitalize  mr-7  `}
                >
                  next
                </motion.p>
                <svg
          width="26"
          height="16"
          viewBox="0 0 71 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-[225deg]"
        >
          <path
            d="M43.5234 67.4707L43.5245 64.3249L9.3012 64.3222L65.5837 8.03973L63.3576 5.81362L7.07217 62.099L7.07538 27.8757L3.92658 27.8739L3.92658 67.4697L43.5234 67.4707Z"
            fill="white"
            stroke="white"
            strokeWidth="7"
          />
        </svg>
              </motion.button>
            </Magnetic>
          </div>
        </form>
      </motion.div>
    </section>
    </>
  );
}

function form(stage, setFormData, handleChange) {
  if (stage === 1) {
    return (
      <motion.div
        key={"stage1"}
        initial={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        className="input-container"
      >
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          id="fullname"
          required
        />
        <label htmlFor="fullname" className="label">
          Full Name
        </label>
        <div className="underline"></div>
      </motion.div>
    );
  } else if (stage === 2) {
    return (
      <motion.div
        key={"stage2"}
        initial={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        className="input-container"
      >
        <input
          onChange={(e) => handleChange(e)}
          type="email"
          id="email"
          required
        />
        <label htmlFor="email" className="label">
          Email
        </label>
        <div className="underline"></div>
      </motion.div>
    );
  } else if (stage === 3) {
    return (
      <motion.div
        key={"stage3"}
        initial={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        className="input-container"
      >
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          id="message"
          required
        />
        <label htmlFor="message" className="label">
          Message
        </label>
        <div className="underline"></div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        key={"stage4"}
        initial={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
      >
        <div className="radio-buttons-container">
          <div className="radio-button">
            <input
              onChange={(e) => handleChange(e)}
              name="radio-group"
              id="NewWebsite"
              className="radio-button__input"
              type="radio"
            />
            <label for="NewWebsite" className="radio-button__label text-xl font-medium xl:text-[40px]">
              <span className="radio-button__custom size-[20px] md:size-[30px]"></span>
              New Website
            </label>
          </div>
          <div className="radio-button">
            <input
              onChange={(e) => handleChange(e)}
              name="radio-group"
              id="RemakeWebsite"
              className="radio-button__input"
              type="radio"
            />
            <label for="RemakeWebsite" className="radio-button__label text-xl font-medium xl:text-[40px]">
              <span className="radio-button__custom size-[20px] md:size-[30px]"></span>
              Remake Website
            </label>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default ContactFooter;
