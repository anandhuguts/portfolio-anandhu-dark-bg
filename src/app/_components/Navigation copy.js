"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/project" },
  { name: "Contact", href: "/contact" },
];

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const pathname = usePathname();
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 h-[70px] transition-colors ease-in-out duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-xl" : "bg-[#0A0A0A]"
      }`}
    >
      <div className="flex items-center justify-between max-w-[1495px] h-full px-5 xl:px-[53px] mx-auto">
        <div className="relative w-[32px] h-[26px]">
          <Image
            src="/ANandhu logo.svg"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>

        <ul className="flex gap-9 px-10 py-2.5 text-rgb(255, 255, 255) rounded-[27px] font-outfit font-regular">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              <Link
                style={
                  pathname === item.href
                    ? { textShadow: "0px 25px 15.2px rgba(255, 255, 255)" }
                    : {}
                }
                href={item.href}
                className={`transition-colors duration-50 ease-in-out ${
                  pathname === item.href
                    ? "text-[#FAFAFA]"
                    : "text-[#B1B1B1] hover:text-white"
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute top-9 left-1/2 -translate-x-1/2 w-9 h-[4px] bg-white rounded-full transition-all duration-300" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="relative w-[24px] h-[24px]">
          <Image
            src="/anandhuemail.svg"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
