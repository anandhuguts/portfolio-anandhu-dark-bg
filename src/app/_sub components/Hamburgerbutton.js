"use client";

import { Sling as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Socialmedia from "./Socialmedia";

export const HamburgerButton = () => {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      href: "/",
      details: "Overview of my skills, role, and featured work.",
      svg: (
        <svg
          width="26"
          height="29"
          viewBox="0 0 26 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 25.3V10.9C0 10.3933 0.115375 9.91333 0.346125 9.46C0.576875 9.00667 0.894833 8.63333 1.3 8.34L11.05 1.14C11.6187 0.713333 12.2687 0.5 13 0.5C13.7312 0.5 14.3812 0.713333 14.95 1.14L24.7 8.34C25.1062 8.63333 25.4247 9.00667 25.6555 9.46C25.8862 9.91333 26.0011 10.3933 26 10.9V25.3C26 26.18 25.6815 26.9336 25.0445 27.5608C24.4075 28.188 23.6427 28.5011 22.75 28.5H17.875C17.4146 28.5 17.0289 28.3464 16.718 28.0392C16.4071 27.732 16.2511 27.3523 16.25 26.9V18.9C16.25 18.4467 16.094 18.0669 15.782 17.7608C15.47 17.4547 15.0843 17.3011 14.625 17.3H11.375C10.9146 17.3 10.5289 17.4536 10.218 17.7608C9.90708 18.068 9.75108 18.4477 9.75 18.9V26.9C9.75 27.3533 9.594 27.7336 9.282 28.0408C8.97 28.348 8.58433 28.5011 8.125 28.5H3.25C2.35625 28.5 1.59142 28.1869 0.955499 27.5608C0.319583 26.9347 0.00108333 26.1811 0 25.3Z"
            fill={`${pathname === "/" ? "#FAFAFA" : "#B0B0B0"}`}
          />
        </svg>
      ),
    },
    {
      name: "About",
      href: "/about",
      details: "Learn more about my journey and background.",
      svg: (
        <svg
          width="28"
          height="29"
          viewBox="0 0 28 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.4 10.3H12.6V7.5H15.4M15.4 21.5H12.6V13.1H15.4M14 0.5C12.1615 0.5 10.341 0.862121 8.64243 1.56569C6.94387 2.26925 5.40053 3.30048 4.1005 4.6005C1.475 7.22601 0 10.787 0 14.5C0 18.213 1.475 21.774 4.1005 24.3995C5.40053 25.6995 6.94387 26.7307 8.64243 27.4343C10.341 28.1379 12.1615 28.5 14 28.5C17.713 28.5 21.274 27.025 23.8995 24.3995C26.525 21.774 28 18.213 28 14.5C28 12.6615 27.6379 10.841 26.9343 9.14243C26.2307 7.44387 25.1995 5.90053 23.8995 4.6005C22.5995 3.30048 21.0561 2.26925 19.3576 1.56569C17.659 0.862121 15.8385 0.5 14 0.5Z"
            fill={`${pathname === "/about" ? "#FAFAFA" : "#B0B0B0"}`}
          />
        </svg>
      ),
    },
    {
      name: "Projects",
      href: "/project",
      details: "Explore real-world web apps I've built.",
      svg: (
        <svg
          width="28"
          height="29"
          viewBox="0 0 28 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_701_66)">
            <path
              d="M10.5001 18V27.3333H1.16675V18H10.5001ZM26.8334 18V27.3333H17.5001V18H26.8334ZM10.5001 1.66666V11H1.16675V1.66666H10.5001ZM26.8334 1.66666V11H17.5001V1.66666H26.8334Z"
              stroke={`${pathname === "/project" ? "#FAFAFA" : "#B0B0B0"}`}
              strokeWidth="2"
            />
          </g>
          <defs>
            <clipPath id="clip0_701_66">
              <rect
                width="28"
                height="28"
                fill={`${pathname === "/project" ? "#FAFAFA" : "#B0B0B0"}`}
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    ,
    {
      name: "Feedback",
      href: "/feedback",
      details: "Share your thoughts or suggestions about my portfolio.",
      svg: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.33325 25.6667V4.66668C2.33325 4.02501 2.56192 3.4759 3.01925 3.01934C3.47659 2.56279 4.0257 2.33412 4.66659 2.33334H23.3333C23.9749 2.33334 24.5244 2.56201 24.9818 3.01934C25.4391 3.47668 25.6674 4.02579 25.6666 4.66668V18.6667C25.6666 19.3083 25.4383 19.8578 24.9818 20.3152C24.5252 20.7725 23.9757 21.0008 23.3333 21H6.99992L2.33325 25.6667ZM13.9999 17.5C14.3305 17.5 14.6078 17.388 14.8318 17.164C15.0558 16.94 15.1674 16.6631 15.1666 16.3333C15.1658 16.0036 15.0538 15.7267 14.8306 15.5027C14.6074 15.2787 14.3305 15.1667 13.9999 15.1667C13.6694 15.1667 13.3925 15.2787 13.1693 15.5027C12.946 15.7267 12.834 16.0036 12.8333 16.3333C12.8325 16.6631 12.9445 16.9404 13.1693 17.1652C13.394 17.39 13.6709 17.5016 13.9999 17.5ZM12.8333 12.8333H15.1666V5.83334H12.8333V12.8333Z"
            fill={`${pathname === "/feedback" ? "#FAFAFA" : "#B0B0B0"}`}
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} color="#FAFAFA" size={25} />

      <div
        className={`h-[calc(100vh-3.5rem)] overflow-y-auto flex flex-col justify-between px-7 font-outfit absolute top-14 left-0 w-full bg-[#0A0A0A] text-white z-50 transition-transform duration-500 ease-in-out ${
          isOpen ? "block" : "hidden md:flex"
        }`}
      >
        <ul className="pt-8">
          {navItems.map((item) => (
            <li key={item.name} className="mt-[20px]">
              <Link
                href={item.href}
                className={`flex items-center gap-4.5 ${
                  pathname === item.href ? "text-[#FAFAFA]" : "text-[#B0B0B0]"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.svg}
                <div>
                  <span className="font-semibold text-[18px]">{item.name}</span>
                  <p className="font-regular text-[13px]">{item.details}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="py-8 flex justify-center">
          <Socialmedia width={"30"} />
        </div>
      </div>
    </>
  );
};
