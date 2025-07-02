"use client";

import Image from "next/image";

import HoverLottie from "./Lottielab";
import { useState } from "react";

function Certifications() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative w-full max-w-[576px] max-[865px]:max-w-full h-[538px] border border-[#363636]  rounded-2xl  overflow-hidden bg-gradient-to-b from-[#000000] via-[#0a0a0a] to-[#111111]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full max-w-[303px] mt-5 ml-5">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 5C6.17392 5 4.90215 5.52678 3.96447 6.46447C3.02678 7.40215 2.5 8.67392 2.5 10V22.5H3.75C3.75 24.545 4.7325 26.36 6.25 27.5V30H32.5C33.8261 30 35.0979 29.4732 36.0355 28.5355C36.9732 27.5979 37.5 26.3261 37.5 25V10C37.5 8.67392 36.9732 7.40215 36.0355 6.46447C35.0979 5.52678 33.8261 5 32.5 5H7.5Z"
            fill="url(#paint0_linear_526_37)"
          />
          <path
            d="M21.25 20C20.9185 20 20.6005 20.1317 20.3661 20.3661C20.1317 20.6005 20 20.9185 20 21.25C20 21.5815 20.1317 21.8995 20.3661 22.1339C20.6005 22.3683 20.9185 22.5 21.25 22.5H28.75C29.0815 22.5 29.3995 22.3683 29.6339 22.1339C29.8683 21.8995 30 21.5815 30 21.25C30 20.9185 29.8683 20.6005 29.6339 20.3661C29.3995 20.1317 29.0815 20 28.75 20H21.25Z"
            fill="url(#paint1_linear_526_37)"
            fillOpacity="0.9"
          />
          <path
            d="M11.25 12.5C10.9185 12.5 10.6005 12.6317 10.3661 12.8661C10.1317 13.1005 10 13.4185 10 13.75C10 14.0815 10.1317 14.3995 10.3661 14.6339C10.6005 14.8683 10.9185 15 11.25 15H28.75C29.0815 15 29.3995 14.8683 29.6339 14.6339C29.8683 14.3995 30 14.0815 30 13.75C30 13.4185 29.8683 13.1005 29.6339 12.8661C29.3995 12.6317 29.0815 12.5 28.75 12.5H11.25Z"
            fill="url(#paint2_linear_526_37)"
            fillOpacity="0.9"
          />
          <path
            d="M5 27.3599V36.2499C4.99991 36.4762 5.06125 36.6982 5.17749 36.8924C5.29373 37.0866 5.46049 37.2455 5.66 37.3524C5.85966 37.4586 6.08438 37.5086 6.31023 37.4971C6.53609 37.4857 6.7546 37.4132 6.9425 37.2874L10 35.2499L13.0575 37.2899C13.1984 37.3835 13.3569 37.4476 13.5233 37.4782C13.6897 37.5088 13.8606 37.5053 14.0257 37.4679C14.1907 37.4305 14.3464 37.36 14.4834 37.2606C14.6204 37.1613 14.7357 37.0351 14.8225 36.8899C14.9387 36.6957 15.0001 36.4736 15 36.2474V27.3599C13.4866 28.2596 11.7606 28.7394 10 28.7499C8.23938 28.7394 6.51341 28.2596 5 27.3599Z"
            fill="url(#paint3_radial_526_37)"
          />
          <path
            d="M17.5 22.5C17.5 23.4849 17.306 24.4602 16.9291 25.3701C16.5522 26.2801 15.9997 27.1069 15.3033 27.8033C14.6069 28.4997 13.7801 29.0522 12.8701 29.4291C11.9602 29.806 10.9849 30 10 30C9.01509 30 8.03982 29.806 7.12987 29.4291C6.21993 29.0522 5.39314 28.4997 4.6967 27.8033C4.00026 27.1069 3.44781 26.2801 3.0709 25.3701C2.69399 24.4602 2.5 23.4849 2.5 22.5C2.5 20.5109 3.29018 18.6032 4.6967 17.1967C6.10322 15.7902 8.01088 15 10 15C11.9891 15 13.8968 15.7902 15.3033 17.1967C16.7098 18.6032 17.5 20.5109 17.5 22.5Z"
            fill="url(#paint4_radial_526_37)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_526_37"
              x1="3.75"
              y1="9.6875"
              x2="19.87"
              y2="33.135"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0FAFFF" />
              <stop offset="1" stopColor="#2764E7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_526_37"
              x1="39"
              y1="35.5"
              x2="28.0575"
              y2="2.51"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9DEAFF" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_526_37"
              x1="39"
              y1="35.5"
              x2="28.0575"
              y2="2.51"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9DEAFF" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <radialGradient
              id="paint3_radial_526_37"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(10 25.7774) rotate(90) scale(15.9814 22.0739)"
            >
              <stop stopColor="#163697" />
              <stop offset="1" stopColor="#29C3FF" />
            </radialGradient>
            <radialGradient
              id="paint4_radial_526_37"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-29.9122 -37.4994) rotate(56.615) scale(83.7263 71.7077)"
            >
              <stop offset="0.772" stopColor="#FFCD0F" />
              <stop offset="0.991" stopColor="#E67505" />
            </radialGradient>
          </defs>
        </svg>

        <h3 className="font-semibold text-[20px] mt-3.5"> Certifications</h3>
        <p className="font-outfit font-normal text-[18px] text-secondary mt-1">
          A verified training milestone marking my progress as a developer and
          designer.
        </p>
      </div>
      <div className=" bg-[#121212] border-t border-l border-r border-[#363636] w-full max-w-[313px] h-[270px] rounded-t-[17px] absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden ">
        <div className="flex w-full max-w-[267px] items-center justify-between mt-2.5 ml-5">
          <div className="flex w-full max-w-[190px] justify-between items-center">
            <div className="relative  w-[41px] h-[46px]">
              <Image
                src="/techmindz.svg" // Make sure it's in the `public` folder
                alt="techmindzlogo"
                fill
                className="object-contain"
              />
            </div>
            <p className="font-medium text-[15px]">Techmindz Kakkanad</p>
          </div>
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
        </div>
        <div className="flex flex-col mx-auto w-full max-w-[262px] justify-center items-center mt-7">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_546_113)">
              <path
                d="M13 26C9.55219 26 6.24558 24.6304 3.80761 22.1924C1.36964 19.7544 0 16.4478 0 13C0 9.55219 1.36964 6.24558 3.80761 3.80761C6.24558 1.36964 9.55219 0 13 0C16.4478 0 19.7544 1.36964 22.1924 3.80761C24.6304 6.24558 26 9.55219 26 13C26 16.4478 24.6304 19.7544 22.1924 22.1924C19.7544 24.6304 16.4478 26 13 26ZM10.4 19.5L22.1 8.45L20.15 6.5L10.4 15.6L5.85 11.05L3.9 13L10.4 19.5Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_546_113">
                <rect width="26" height="26" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h5 className="font-semibold text-[15px] mt-2 mb-2">
            Techmindz Certified
          </h5>
          <p className="font-medium text-[13px] text-secondary text-center">
            Completed a course in UI/UX Design and JavaScript Development,
            focusing on creating user-friendly, interactive web experiences.
          </p>
          <div className="absolute top-0">
            <HoverLottie isHovered={isHovered} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
