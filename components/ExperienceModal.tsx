"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

type ExperienceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  summary: string;
  highlights: string[];
  skills: string[];
};

export default function ExperienceModal({
  isOpen,
  onClose,
  title,
  subtitle,
  summary,
  highlights,
  skills,
}: ExperienceModalProps) {

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
     className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md px-4 py-6"
    >
      <div className="flex min-h-full items-center justify-center">
      <div
        onClick={(e) => e.stopPropagation()}
        className="
  relative
  w-full
  max-w-3xl
  max-h-[90vh]
  overflow-y-auto
  rounded-3xl
  bg-white
  p-6
  sm:p-8
  md:p-12
  shadow-2xl
  "
      >
        {/* Close Button */}

        <button
          onClick={onClose}
          aria-label="Close modal"
          className="
sticky
top-4
ml-auto
z-50
flex
rounded-full
bg-white
p-2
text-gray-500
shadow
transition
duration-200
hover:bg-gray-100
hover:text-red-600
"
        >
          <X size={22} />
        </button>

        {/* Role */}

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
          {subtitle}
        </p>

        {/* Category */}

        <h1 className="
mt-3
text-3xl
sm:text-4xl
md:text-5xl
font-bold
tracking-tight
text-gray-900
">
          {title}
        </h1>

        {/* Summary */}

        <p className="
mt-6
text-base
sm:text-lg
md:text-xl
leading-7
sm:leading-8
text-gray-600
">
          {summary}
        </p>

        {/* Highlights */}

        <section className="mt-10 md:mt-14">

          <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
            Highlights
          </h2>

          <ul className="mt-6 space-y-4">

            {highlights.map((item) => (
              <li
                key={item}
                className="
flex
items-start
gap-3
text-base
sm:text-lg
text-gray-700
"
              >
                <span className="mt-3 h-1.5 w-1.5 rounded-full bg-black"></span>

                <span>{item}</span>

              </li>
            ))}

          </ul>

        </section>

        {/* Skills */}

        <section className="mt-10 md:mt-14">

          <div className="flex flex-wrap gap-3">

            {skills.map((skill) => (
              <span
                key={skill}
                className="
rounded-full
border
border-blue-200
px-4
py-2
text-xs
sm:text-sm
font-medium
text-blue-700
transition
duration-200
hover:-translate-y-0.5
hover:bg-blue-600
hover:text-white
"
              >
                {skill}
              </span>
            ))}

          </div>

        </section>

        {/* Philosophy */}

      </div>
      </div>
    </div>
  );
}