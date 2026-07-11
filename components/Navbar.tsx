"use client";

import { useEffect , useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
  
      window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <nav
     className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled 
    ? "bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-md"
    : "bg-transparent"
    }`}
    >

      <div className="mx-auto flex max-w-7xl items-center justify-center px-8 py-6">

        {/* Logo */}

        {/*<a
          href="/"
          className="text-2xl font-bold text-black tracking-tight"
        >
          Jason Victor
        </a> */}

        {/* Navigation */}

        <div className="flex items-center gap-10 text-sm font-medium uppercase tracking-wide">

          <a href="#home" className="nav-link">
            Home
          </a>

          <a href="#my-story" className="nav-link">
           My Story
          </a>

          <a href="#experience" className="nav-link">
            Experience
          </a>

          <a href="#projects" className="nav-link">
            Projects
          </a>

          <a href="#resume" className="nav-link">
            Resume
          </a>

          <a href="#contact" className="nav-link">
            Contact
          </a>

        </div>

        {/* CTA */}

        {/*<button className="rounded-full bg-blue-600 px-6 py-3 text-white font-semibold transition hover:bg-blue-700">
          Hire Me
        </button>*/}

      </div>

    </nav>
  );
}