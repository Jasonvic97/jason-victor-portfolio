"use client";

import { motion } from  "framer-motion"
import { useState } from "react";
import { experiences } from "@/data/experiences";
import ExperienceCard from "./ExperienceCard";
import ExperienceModal from "./ExperienceModal";
import Reveal from "./Reveal";

export default function Experience() {

 const [selectedExperience, setSelectedExperience] = useState<
  (typeof experiences)[number] | null
>(null);

  return (
    <>
    <Reveal>
      <section
        id="experience"
        className="bg-white px-8 py-40"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-20 max-w-3xl text-center">

  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
    Experience
  </p>

  <h2 className="mt-4 text-5xl font-bold tracking-tight text-gray-900">
    Experiences that shaped who I am
  </h2>

  <p className="mt-8 text-xl leading-9 text-gray-600">

    Every opportunity has taught me something new—from leading teams
    and supporting technology to serving my community and creating
    meaningful experiences.

  </p>

</div>
          <div className="grid gap-8 md:grid-cols-2">

           {experiences.map((experience, index) => (
  <motion.div
    key={experience.id}
    initial={{
      opacity: 0,
      y: 40,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 0.5,
      delay: index * 0.12,
    }}
    viewport={{
      once: true,
    }}
    className={index % 2 === 1 ? "md:mt-16" : ""}
  >
    <ExperienceCard
      icon={experience.icon}
      title={experience.title}
      description={experience.description}
      onClick={() => setSelectedExperience(experience)}
    />
  </motion.div>
))}

          </div>

        </div>

      </section>
      </Reveal>

      <ExperienceModal
  isOpen={selectedExperience !== null}
  onClose={() => setSelectedExperience(null)}
  title={selectedExperience?.title ?? ""}
  subtitle={selectedExperience?.subtitle ?? ""}
  summary={selectedExperience?.summary ?? ""}
  highlights={selectedExperience?.highlights ?? []}
  skills={selectedExperience?.skills ?? []}
/>

    </>
  );
}