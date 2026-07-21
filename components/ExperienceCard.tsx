"use client";

import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

type ExperienceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick?: () => void;
};

const watermarkVariants = {
  rest: {
    rotate: 0,
    scale: 1,
    x: 0,
    y: 0,
  },

  hover: {
    rotate: -4,
    scale: 1.04,
    x: -3,
    y: 2,
  },
};

export default function ExperienceCard({
  title,
  description,
  icon: Icon,
  onClick,
}: ExperienceCardProps) {
  return (
    <motion.div
      onClick={onClick}
      initial="rest"
      whileHover="hover"    
      className="group relative overflow-hidden cursor-pointer rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl"
    >
      {/* Watermark Icon */}

      <motion.div
        variants={watermarkVariants}
        className="absolute -right-12 -top-10 text-blue-200 opacity-20 transition-all duration-200 group-hover:opacity-40"
>
        <Icon
          size={190}
          strokeWidth={1}
        />
      </motion.div>

      {/* Card Content */}

      <div className="relative z-10">

        <motion.h3
  variants={{
    rest: {
      color: "#111827",
    },
    hover: {
      color: "#2563EB",
    },
  }}
  className="mt-4 text-3xl font-bold tracking-tight"
>
  {title}
</motion.h3>

        <p className="mt-5 max-w-sm leading-6 text-gray-600">
          {description}
        </p>

        <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-6">

          <span className="font-semibold text-blue-600 transition-all duration-300 group-hover:tracking-wide">
            Learn More...
          </span>

          <motion.div
  variants={{
    rest: {
      x: 0,
    },
    hover: {
      x: 5,
    },
  }}
>
  <ArrowRight
    size={18}
    className="text-blue-600"
  />
  </motion.div>

        </div>

      </div>

    </motion.div>
  );
}