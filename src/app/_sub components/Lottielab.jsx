"use client";

import React, { useEffect, useRef } from "react";
// import Lottie from "lottie-react";
import yourIcon from "../_json files/Animation - 1751071616484.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const HoverLottie = ({ isHovered }) => {
  const lottieRef = useRef();
  useEffect(() => {
    if (isHovered) {
      lottieRef.current?.play();
    } else {
      lottieRef.current?.stop();
    }
  }, [isHovered]);

  return (
    <div style={{ width: 400, height: 400 }}>
      <Lottie
        lottieRef={lottieRef}
        animationData={yourIcon}
        loop={false}
        autoplay={false}
      />
    </div>
  );
};

export default HoverLottie;
// components/Confetti.js

// "use client";
// import dynamic from "next/dynamic";

// const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
// import animationData from "../_json files/Animation - 1751071616484.json";

// export default function Confetti() {
//   return (
//     <Lottie
//       animationData={animationData}
//       autoplay={false}
//       loop={false}
//       style={{ width: 200, height: 200 }}
//     />
//   );
// }
