"use client";
import { useState } from "react";
import Socialmedia from "./Socialmedia";

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="bg-primary font-medium  flex items-center px-5 text-black py-2 rounded-full gap-2.5  hover:bg-secondary transition-colors ease-out cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        Contact me
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
            fill="black"
          />
        </svg>
      </button>

      <div
        className={`fixed z-1 transition-all duration-500 ${
          isOpen && " inset-0 w-full z-30 bg-backg/40 backdrop-blur-sm "
        }`}
        onClick={() => setIsOpen(!isOpen)}
      ></div>
      <div
        className={`font-outfit fixed w-full max-w-[600px] h-[416px] bg-backg z-40 bottom-0  left-1/2 -translate-x-1/2 rounded-t-[19px] border-t border-l border-r border-secondary transition-transform duration-500 px-5 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex flex-col mx-auto justify-center items-center max-w-[396px] mt-12">
          <svg
            width="36"
            height="35"
            viewBox="0 0 36 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4687 26.7604L11.2917 21.5833L13.4063 19.4687L16.4687 22.5312L22.5937 16.4062L24.7083 18.5208L16.4687 26.7604ZM7.79167 32.0833C6.98958 32.0833 6.30319 31.798 5.7325 31.2273C5.16181 30.6566 4.87597 29.9697 4.875 29.1667V8.74999C4.875 7.94791 5.16083 7.26152 5.7325 6.69082C6.30417 6.12013 6.99056 5.8343 7.79167 5.83332H9.25V2.91666H12.1667V5.83332H23.8333V2.91666H26.75V5.83332H28.2083C29.0104 5.83332 29.6973 6.11916 30.269 6.69082C30.8406 7.26249 31.126 7.94888 31.125 8.74999V29.1667C31.125 29.9687 30.8397 30.6556 30.269 31.2273C29.6983 31.7989 29.0114 32.0843 28.2083 32.0833H7.79167ZM7.79167 29.1667H28.2083V14.5833H7.79167V29.1667Z"
              fill="white"
            />
          </svg>
          <h5 className="text-[26px] font-semibold  text-primary mt-2.5 text-center">
            Available for work
          </h5>
          <p className="text-[17px] font-normal text-secondary text-center mt-1">
            I&apos;m currently open to new opportunities across roles, projects,
            or collaborations. If you're hiring or have something in mind, feel
            free to reach out.
          </p>
          <button className="flex items-center justify-center w-full max-w-[266px] h-[45px] bg-primary gap-2.5 rounded-[9px] mt-7">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.1667 21.75H21.75V11.1771L14.5 15.7083L7.24999 11.1771V21.75H4.83332V7.24999H6.28332L14.5 12.3854L22.7167 7.24999H24.1667M24.1667 4.83333H4.83332C3.49207 4.83333 2.41666 5.90874 2.41666 7.24999V21.75C2.41666 22.3909 2.67127 23.0056 3.12448 23.4588C3.57769 23.912 4.19238 24.1667 4.83332 24.1667H24.1667C24.8076 24.1667 25.4223 23.912 25.8755 23.4588C26.3287 23.0056 26.5833 22.3909 26.5833 21.75V7.24999C26.5833 6.60905 26.3287 5.99437 25.8755 5.54115C25.4223 5.08794 24.8076 4.83333 24.1667 4.83333Z"
                fill="black"
              />
            </svg>
            <span className="font-medium text-[20px] text-black ">
              Send me an email
            </span>
          </button>
          <div className="mt-8">
            <Socialmedia width={"24"} />
          </div>
        </div>
      </div>
    </>
  );
}
