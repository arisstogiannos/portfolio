import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import localfont from "next/font/local";
import MovingBg from "../globalComponents/MovingBg";
import Magnetic from "../globalComponents/Button/Magnetic";
import Button from "../globalComponents/Button/Button";

const medium = localfont({ src: "../../../fonts/medium.otf" }); // import MovingBg from "../globalComponents/MovingBg";
// import gsap from "gsap";
// import SplitType from "split-type";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

function ContactFooter() {
  const [stage, setStage] = useState(1);
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
      setSubmited(true)
    }
  }

  return (
    <section
      id="contact"
      className={`h-[80vh] 3xl:h-[70vh]    w-full  flex items-center relative   `}
    >
      {submited&&<div className="absolute top-0 left-0 filter backdrop-blur-md z-[1000] w-full h-full flex items-center justify-center">
        <div className="bg-mblack w-1/3 h-1/3 rounded-3xl flex-col flex gap-8 items-center justify-center">
          <p className="text-mwhite text-4xl capitalize">hello beautifull :)</p>
          <button onClick={()=>(setSubmited(false))} className="bg-mwhite rounded-full text-xl font-medium px-6 py-1   uppercase">close</button>

        </div>
      </div>}
      <div className="bg-mwhite h-full w-full absolute top-0 left-0 -z-[2000]"></div>
      {/* <div className="filter bg-mwhite/20 w-full h-full absolute top-0 left-0  backdrop-blur-xl z-10 "></div> */}
      <motion.div
        // Fixing the clipPath usage
        className=" myContainer flex flex-col items-start gap-4 h-full 3xl:py-32 py-20    "
      >
        <motion.h3
          style={medium.style}
          id="textContact"
          className="scaleCursor   text-[80px] text-mblack mb-auto ml-auto leading-tight flex items-center gap-20  "
          initial={{ y: 50, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.2, duration: 0.5, ease: "easeOut" },
          }}
        >
          <svg
            width="76"
            height="76"
            viewBox="0 0 76 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M72.8284 8.82843L75.6569 6L70 0.343146L67.1716 3.17157L72.8284 8.82843ZM-1.98727e-06 72C-9.7575e-07 74.2091 1.79086 76 4 76L40 76C42.2091 76 44 74.2091 44 72C44 69.7909 42.2091 68 40 68L8 68L8 36C8 33.7909 6.20914 32 4 32C1.79086 32 -1.32813e-07 33.7909 1.21589e-06 36L-1.98727e-06 72ZM67.1716 3.17157L1.17157 69.1716L6.82843 74.8284L72.8284 8.82843L67.1716 3.17157Z"
              fill="black"
            />
          </svg>
          Lets Talk
        </motion.h3>

        {/* <div className="w-full h-96 overflow-hidden relative ">
          <MovingBg balls={balls} />
          
        </div> */}
        <form>
          <div className="flex gap-20 items-center">
            <motion.div className="ml-0 mr-auto mt-auto w-[800px]  ">
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
                  (formData.fullname === "" && stage === 1) ||
                  (!formData.email.includes("@"&&".com"&&".gr") && stage == 2) ||
                  (formData.message === "" && stage === 3) ||
                  (formData.type ==="" && stage === 4)
                    ? "pointer-events-none opacity-50 "
                    : " "
                } ${
                  stage === 4 && "w-80 h-28 "
                }  next flex justify-center items-center rounded-full border bg-mblack group hover:bg-mblue transition-colors duration-500 cursor-pointer `}
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
          </div>
        </form>
      </motion.div>
    </section>
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
            <label for="NewWebsite" className="radio-button__label">
              <span className="radio-button__custom"></span>
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
            <label for="RemakeWebsite" className="radio-button__label">
              <span className="radio-button__custom"></span>
              Remake Website
            </label>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default ContactFooter;
