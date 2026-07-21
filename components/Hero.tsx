"use client";

import ResumeDropdown from "@/components/Resumedropdown";
import Image from "next/image";
import { motion } from "framer-motion";
import "@/app/hero.css";

export default function Hero() {
  return (
    
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-4 sm:px-6"
    >
      {/* Victor Visuals Watermark */}

      <motion.div
  initial={{
    opacity: 0,
    scale: 0.95,
  }}
  animate={{
    opacity: 1,
    scale: 1,
    y: [0, -10, 0],
  }}
  transition={{
    opacity: {
      duration: 1,
    },
    scale: {
      duration: 1,
    },
    y: {
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  className="pointer-events-none absolute inset-0 flex items-center justify-center"
>
  <Image
    src="/images/logo.png"
    alt=""
    width={900}
    height={900}
    priority
    className="select-none opacity-[0.10]"
  />
</motion.div>

      {/* Hero Content */}

      <div className="relative z-10 text-center">

        {/* Name */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="hero-name"
        >
          JASON VICTOR
        </motion.h1>

        {/* Philosophy */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.35,
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mt-8 flex flex-wrap items-center justify-center text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.25em] sm:tracking-[0.4em] md:tracking-[0.6em]"        >
          <span className="text-blue-600">
            LEARN
          </span>

          <span className="mx-3 text-[#C8A14D]">
            •
          </span>

          <span className="text-blue-600">
            BUILD
          </span>

          <span className="mx-3 text-[#C8A14D]">
            •
          </span>

          <span className="text-blue-600">
            SERVE
          </span>

        </motion.p>

        {/* CTA */}

        <motion.a
          href="#projects"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.7,
            duration: 0.7,
          }}
          className="
            mt-14
            inline-flex
            items-center
            rounded-full
            border
            border-gray-300
            px-6
            sm:px-8
            py-3
            sm:py-4
            text-xs
            sm:text-sm
            font-semibold
            uppercase
            tracking-[0.25em]
            text-gray-700
            transition-all
            duration-300
            hover:border-blue-600
            hover:bg-blue-600
            hover:text-white
            hover:-translate-y-1
          "
        >
          View My Work
        </motion.a>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
          duration: 1,
        }}
        className="absolute bottom-10 flex flex-col items-center"
      >
        <span className="animate-bounce text-3xl text-blue-600">
          ↓
        </span>
      </motion.div>

    </section>
  );
}