"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ZoomVideoSection({ videoRef }) {
  const ref = useRef(null);

  // Scroll animation setup
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className=" absolute left-1/2 -translate-x-1/2  bottom-1 w-[667px] h-[363px] min-h-[363px] max-w-full mx-auto rounded-[19px] overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/preview.png"
        preload="none"
        className="w-full h-full object-cover"
      >
        <source src="/uiux.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
}
