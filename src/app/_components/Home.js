"use client";

import Image from "next/image";

import Typewriter from "../_animations/Typewriter";
import ZoomVideoSection from "../_sub components/VideoScroll";
import { useRef } from "react";
import { motion } from "framer-motion";
import ContactButton from "../_sub components/Button";

function Home() {
  return (
    <section className="mx-auto flex flex-col items-center font-outfit  text-primary pt-25 px-10 max-sm:px-5 lg:px-0">
      <div className=" sm:text-[16px]  max-[428px]:!text-[12px] max-sm:text-[14px] font-semibold   p-2 border bg-[#161616]/40  text-primary border-[#313131] rounded-full ">
        🎯 MERN Stack Specialist
      </div>

      <h1 className="  text-center lg:text-5xl max-[664px]:text-[30px] max-[428px]:whitespace-nowrap max-[428px]:text-[27px]  text-[42px] font-outfit font-medium mt-3.5 max-[664px]:leading-[36px] leading-[60px]">
        I design and build intuitive&nbsp;
        <br />
        MERN stack web apps — from&nbsp;
        <br />
        wireframes to deployment.
      </h1>
      <h2
        className="font-regular text-[22px] max-[664px]:text-[20px] mt-5  font-primary text-[#B9B1B1] max-sm:text-center  "
        // style={{
        //   backgroundImage:
        //     "linear-gradient(0deg,rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 1) 30%)",
        //   WebkitBackgroundClip: "text", // required for Safari
        // }}
      >
        Hi, I&apos;m Anandhu Prasad — a&nbsp;
        <br className="sm:hidden block" /> <Typewriter />
      </h2>
      <div className="mt-5 font-medium flex gap-7 max-[428px]:flex-col max-[428px]:gap-5.5">
        <ContactButton />
        <button className=" flex justify-center items-center px-5 text-primary py-2 rounded-full gap-2.5 bg-[#161616]/40 border  border-[#313131] overflow-hidden ">
          Resume
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 2.83334H9.91667V7.08334H11.6875L8.5 10.2708M8.5 2.83334H7.08333V7.08334H5.3125L8.5 10.2708"
              fill="#FAFAFA"
            />
            <path
              d="M8.5 2.83334H9.91667V7.08334H11.6875L8.5 10.2708L5.3125 7.08334H7.08333V2.83334H8.5Z"
              stroke="#FAFAFA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.25 13.4583H12.75"
              stroke="#FAFAFA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="relative flex mx-auto w-full xl:max-w-[1350px] lg:w-full  px-5 h-[420px]  ">
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            x: { type: "spring", stiffness: 100, damping: 10 },
            opacity: { duration: 0.8 },
          }}
          className="absolute top-1 xl:left-1 lg:left-0 w-[369px] h-[201px] rounded-[19px] overflow-hidden max-[1250px]:!hidden"
        >
          <Image
            src="/macmonitor.jpg"
            alt="Logo"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            x: { type: "spring", stiffness: 100, damping: 10 },
            opacity: { duration: 0.8 },
          }}
          className="absolute right-1 w-[307px] h-[327px] rounded-[19px] overflow-hidden max-[1250px]:!hidden"
        >
          <Image
            src="/2151150106.jpg"
            alt="Logo"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ x: -600, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            x: { type: "spring", stiffness: 100, damping: 10 },
            opacity: { duration: 0.8 },
          }}
          className="w-[189px] absolute xl:left-[130px] lg:left-15 bottom-1 h-[201px] rounded-[19px] overflow-hidden max-[1250px]:!hidden"
        >
          <Image
            src="/3d-graph-computer-illustration.jpg"
            alt="Logo"
            fill
            className="object-cover"
          />
        </motion.div>

        <div className=" absolute left-1/2 -translate-x-1/2  sm:bottom-1 bottom-30 sm:max-w-[667px] sm:h-[363px] max-w-[386px] h-[240px]  w-full mx-auto rounded-[19px] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/preview.png"
            preload="none"
            className="w-full h-full  object-cover"
          >
            <source src="/uiux.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default Home;
