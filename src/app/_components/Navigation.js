"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { HamburgerButton } from "../_sub components/Hamburgerbutton";
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/project" },
  { name: "Contact", href: "/contact" },
];

function Navigation() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" flex   top-0 w-full max-w-[1495px] h-[44px] pt-10 px-5  xl:px-53 lg:px-40 items-center  justify-between mx-auto sticky z-50">
      <div className="relative w-[32px] h-[26px]">
        <Image
          src="/ANandhu logo.svg" // Make sure it's in the `public` folder
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>

      <ul className=" md:flex hidden  gap-9  px-10 py-2.5 bg-black/40 backdrop-blur-sm text-[#a1a1a1]  rounded-full font-outfit font-regular border border-[#a1a1a1]">
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
      <div className="md:block hidden relative w-[24px] h-[24px]">
        <Image
          src="/anandhuemail.svg" // Make sure it's in the `public` folder
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="md:hidden block">
        <HamburgerButton />
      </div>
    </nav>
  );
}

export default Navigation;
