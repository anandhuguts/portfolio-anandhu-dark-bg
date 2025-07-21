"use client";
import Aurora from "../_sub components/Aurorabg";
import ContactButton from "../_sub components/ContactButton";
import BurgerMenu from "../_sub components/ContactButton";
import Socialmedia from "../_sub components/Socialmedia";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="w-full min-h-[788px] relative overflow-hidden flex flex-col justify-center font-outfit ">
      <div className="scale-y-[-1] absolute inset-0 bg-[#0A0A0A] opacity-50 z-0">
        <Aurora />
      </div>

      <div className="flex flex-col mx-auto relative w-full max-w-[715px] z-10 justify-center px-3.5 ">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
          className="glow-text font-medium sm:text-[35px] max-[428px]:text-[22px] text-[28px] md:text-[39px] lg:text-[40px] text-primary   text-center"
        >
          Let&apos;s build something together
          <br />
          I&apos;m open to full-time or freelance work
        </motion.h2>
        <p className="text-[18px] max-md:text-[17px] font-normal text-secondary text-center mt-1 ">
          Focused on full-stack web development,
          <br className="md:hidden block" /> with an eye for clean, intuitive
          user interfaces
        </p>
        <div className="mt-7 self-center ">
          <ContactButton />
        </div>
      </div>
      <div className=" absolute  left-1/2 -translate-x-1/2 bottom-7  flex  w-full max-w-[1823px] justify-between px-5">
        <h5 className="text-primary font-normal max-[500px]:text-[14px]">
          © 2025 Anandhu Prasad
        </h5>
        <div className="max-[500px]:hidden block">
          <Socialmedia />
        </div>
        <div className="max-[500px]:block hidden">
          <Socialmedia width={19} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
