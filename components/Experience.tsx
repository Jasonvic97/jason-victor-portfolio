"use client";

import { useState } from "react";
import { experiences } from "@/data/experiences";
import ExperienceCard from "./ExperienceCard";
import ExperienceModal from "./ExperienceModal";

import {
  User,
  Monitor,
  Camera,
  ChurchIcon,
} from "lucide-react";

export default function Experience() {

 const [selectedExperience, setSelectedExperience] = useState<
  (typeof experiences)[number] | null
>(null);

  return (
    <>
      <section
        id="experience"
        className="bg-gray-50 px-8 py-40"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-20 max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Experience
            </p>

            <h2 className="mt-4 text-5xl font-bold text-gray-900">
              The opportunities that shaped my leadership.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Leadership isn't confined to one role. Each experience has strengthened my ability to serve others, solve problems, and continue growing.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2">

            {experiences.map((experiences) => (
  <ExperienceCard
    key={experiences.id}
    icon={User} // Temporary
    title={experiences.title}
    description={experiences.description}
    onClick={() => setSelectedExperience(experiences)}
  />
))}

          </div>

        </div>

      </section>

      <ExperienceModal
  isOpen={selectedExperience !== null}
  onClose={() => setSelectedExperience(null)}
  title={selectedExperience?.title ?? ""}
  subtitle={selectedExperience?.subtitle ?? ""}
  summary={selectedExperience?.summary ?? ""}
  highlights={selectedExperience?.highlights ?? []}
  skills={selectedExperience?.skills ?? []}
  philosophy={selectedExperience?.philosophy ?? ""}
  image={selectedExperience?.image ?? ""}
/>


    </>
  );
}