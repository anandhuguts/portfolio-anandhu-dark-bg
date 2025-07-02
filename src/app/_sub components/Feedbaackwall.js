"use client";
import Link from "next/link";

import dynamic from "next/dynamic";

const LittleBoy = dynamic(() => import("./Littleboy"), {
  ssr: false,
});

function Feedbaackwall() {
  return (
    <div className="relative w-full max-w-[697px] max-[865px]:max-w-full  h-[538px] border border-[#363636]  bg-gradient-to-br from-[#1f1f1f] to-[#000000] rounded-2xl  overflow-hidden">
      <div className="w-full max-w-[303px] mt-5 ml-5">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.5 31.6668H18.3333V25.0002H30V18.3335H36.6667V31.6668H32.5L30 34.1668L27.5 31.6668Z"
            stroke="#2F88FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.33334 5H30V25H14.1667L10.8333 28.3333L7.50001 25H3.33334V5Z"
            fill="#2F88FF"
            stroke="#2F88FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 18.3335H15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M10 11.6665H20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        <h3 className="font-semibold text-[20px] mt-3.5">Feedback Wall</h3>
        <p className="font-normal text-[18px] text-secondary mt-1">
          Leave your thoughts — about the site, the code, or the vibe.Think of
          this as an open console.log to the world.
        </p>
        <div className="flex relative items-center gap-[6px]  w-[66px] mt-2.5">
          <Link href="/feedback">Try it</Link>
          <svg
            className="text-white"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.39872 2.59873C9.61125 2.38626 9.89946 2.26691 10.2 2.26691C10.5005 2.26691 10.7887 2.38626 11.0012 2.59873L16.1012 7.69873C16.3137 7.91126 16.4331 8.19948 16.4331 8.5C16.4331 8.80052 16.3137 9.08873 16.1012 9.30127L11.0012 14.4013C10.7875 14.6077 10.5012 14.7219 10.2041 14.7194C9.90691 14.7168 9.62265 14.5976 9.41252 14.3875C9.20239 14.1773 9.0832 13.8931 9.08062 13.5959C9.07804 13.2988 9.19227 13.0125 9.39872 12.7987L12.4666 9.63333H1.69998C1.3994 9.63333 1.11114 9.51393 0.898596 9.30139C0.686055 9.08884 0.56665 8.80058 0.56665 8.5C0.56665 8.19942 0.686055 7.91115 0.898596 7.69861C1.11114 7.48607 1.3994 7.36667 1.69998 7.36667H12.4666L9.39872 4.20126C9.18625 3.98873 9.06689 3.70052 9.06689 3.4C9.06689 3.09948 9.18625 2.81126 9.39872 2.59873Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 right-0  ">
        <LittleBoy />
      </div>
    </div>
  );
}

export default Feedbaackwall;
