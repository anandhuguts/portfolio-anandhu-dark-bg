"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function Skillscontainer({ skills, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.01, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="hover:scale-105 hover:-translate-y-2 transition-transform duration-300 shadow-md hover:shadow-cyan-500/30 flex items-center justify-center flex-col max-[428px]:w-[100px] max-[428px]:h-[96px] w-[113px] h-[107px] border border-[#454545] bg-[#171717] rounded-[8px]"
    >
      <div className="relative  w-[41px] h-[46px]">
        <Image
          src={`/${skills.icon}`} // Make sure it's in the `public` folder
          alt={skills.title}
          fill
          className="object-contain"
        />
      </div>
      <p className="font-semibold text-[14px] mt-2">{skills.title}</p>
    </motion.div>
  );
}

export default Skillscontainer;
