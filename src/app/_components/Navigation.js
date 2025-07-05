"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { HamburgerButton } from "../_sub components/Hamburgerbutton";
const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Feedback", href: "/feedback" },
];

function Navigation() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" flex  left-1/2 -translate-x-1/2 top-0 w-full max-w-[1495px] h-[44px] pt-10 px-7   xl:px-53 lg:px-40 items-center  justify-between mx-auto fixed z-50">
      <Link href="#">
        <svg
          width="32"
          height="26"
          viewBox="0 0 32 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.3434 15H9.38341L8.99941 12.72H7.12741L6.71941 15H-0.000593759L2.90341 0.0959988H13.4394L16.3434 15ZM8.47141 9.528V6.552H7.70341V9.528H8.47141ZM31.3203 15H25.1763L22.4643 10.224V15H16.6323V0.0959988H22.9443L25.4403 4.92V0.0959988H31.3203V15Z"
            fill="#FAFAFA"
          />
        </svg>
      </Link>

      <ul className=" md:flex hidden  gap-9  px-10 py-2.5 bg-black/70 backdrop-blur-sm text-[#a1a1a1]  rounded-full font-outfit font-regular border border-[#a1a1a1]">
        {navItems.map((item) => (
          <li key={item.name} className="relative ">
            <Link
              style={
                pathname === item.href
                  ? { textShadow: "0px 25px 15.2px rgba(255, 255, 255)" }
                  : {}
              }
              href={item.href}
              className={` transition-colors duration-100 ease-in-out ${
                pathname === item.href
                  ? "text-[#FAFAFA]"
                  : "text-[#B1B1B1] hover:text-white"
              }`}
            >
              {item.name}
              {/* Underline */}
              {pathname === item.href && (
                <span className="absolute top-8.5 left-1/2 -translate-x-1/2 w-10 h-[3px] bg-white rounded-full transition-all duration-300" />
              )}
            </Link>
          </li>
        ))}
      </ul>
      <a href="mailto:anandhup059@gmail.com" className=" md:block hidden">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
            fill="#FAFAFA"
          />
        </svg>
      </a>

      <div className="md:hidden block">
        <HamburgerButton />
      </div>
    </nav>
  );
}

export default Navigation;
