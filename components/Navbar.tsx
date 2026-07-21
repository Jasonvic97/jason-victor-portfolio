"use client";

import ResumeDropdown from "@/components/Resumedropdown";
import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { name: "My Story", href: "#my-story" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-gray-200 bg-white/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-start px-8">

        {/* Logo */}

       <a
  href="#home"
  className="group flex items-center"
>
  <Image
    src="/images/logo.png"
    alt="Jason Victor"
    width={42}
    height={42}
    priority
    className="
      opacity-60 
      transition-all
      duration-300
      group-hover:opacity-100
      group-hover:scale-110"
  />

</a>

        {/* Navigation */}

        <div className="ml-58 flex items-center gap-9">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-sm font-semibold uppercase tracking-[0.22em] text-gray-600 transition-colors duration-300 hover:text-[#C8A14D]"
            >
              {link.name}

              <span
                className="
                absolute
                -bottom-2
                left-0
                h-[2px]
                w-0
                rounded-full
                bg-[#C8A14D]
                transition-all
                duration-300
                group-hover:w-full
                "
              />

            </a>
          ))}

          <ResumeDropdown/>

        </div>

      </div>
    </nav>
  );
}