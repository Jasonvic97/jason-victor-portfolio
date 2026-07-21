"use client";

import Link from "next/link";
import Reveal from "./Reveal";

const projects = [
  {
    title: "Jason Victor Portfolio",
    description:
      "A modern portfolio showcasing my experience, projects, and creative work.",
    status: "Completed",
    statusStyle: "bg-blue-50 text-blue-700",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    techStyle: "bg-blue-50 text-blue-700",
    primary: {
      label: "GitHub",
      href: "https://github.com/Jasonvic97/jason-victor-portfolio",
    },    
  },
  {
    title: "Victor Visuals",
    description:
      "Building a creative brand through photography, videography, and design.",
    status: "In Progress",
    statusStyle: "bg-amber-50 text-amber-700",
    tech: ["Photography", "Videography", "Story Telling"],
    techStyle: "bg-violet-50 text-violet-700",
    primary: {
      label: "Coming Soon",
      href: "",
    },
  },
  {
    title: "Linux Home Server",
    description:
      "A self-hosted Linux server for learning infrastructure and networking.",
    status: "Completed",
    statusStyle: "bg-blue-50 text-blue-700",
    tech: ["Linux", "Networking", "SSH", "CLI"],
    techStyle: "bg-emerald-50 text-emerald-700",
    primary: {
      label: "",
      href: "#",
    },
  },
  {
    title: "Faith Archive",
    description:
      "Designing a knowledge platform for church.",
    status: "In Development",
    statusStyle: "bg-slate-100 text-slate-700",
    tech: ["AI", "Cloud Platform", "Multi-Platform"],
    techStyle: "bg-amber-50 text-amber-700",
    primary: {
      label: "In Development",
      href: "",
    },
  },
];

export default function Projects() {
  return (
    <Reveal>
      <section
        id="projects"
        className="bg-white px-8 py-40"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
              Projects
            </p>

            <h2 className="mt-4 text-5xl font-bold tracking-tight text-gray-900">
              Things I've Built
            </h2>

            <p className="mt-8 text-xl leading-9 text-gray-600">
              A collection of projects that reflect my passion for technology,
              creativity, and continuous learning.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-gold-200 hover:shadow-md"
              >
                {/* Status */}
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${project.statusStyle}`}
                >
                  {project.status}
                </span>

                {/* Title */}
                <div className="mt-6 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {project.title}
                  </h3>

                </div>

                {/* Description */}
                <p className="mt-4 leading-7 text-gray-600">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="mt-6 flex flex-wrap gap-2">
  {project.tech.map((item) => (
    <span
      key={item}
      className={`rounded-full px-3 py-1 text-sm font-medium ${project.techStyle}`}
    >
      {item}
    </span>
  ))}
</div>

                {/* Actions */}
                <div className="mt-8 flex gap-6">
                  {project.primary.href ? (
                    <Link
                      href={project.primary.href}
                      className="font-medium text-blue-600 transition-colors hover:text-blue-700"
                    >
                      {project.primary.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-gray-400">
                      {project.primary.label}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}