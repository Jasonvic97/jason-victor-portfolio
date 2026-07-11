import ProjectCard from "./ProjectCard";
import {
  Globe,
  Server,
  Camera,
  Smartphone,
} from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-8 py-40"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Projects
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Building ideas into reality.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every project represents a challenge, an opportunity to learn, and
            another step in my journey as a creator and problem solver.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          <ProjectCard
            icon={Globe}
            title="Jason Victor Portfolio"
            description="A modern portfolio website built with Next.js, React, TypeScript, and Tailwind CSS."
            technologies={["Next.js", "React", "TypeScript", "Tailwind"]}
            githubLink="#"
            liveUrl="#"
            status="In Progress"
          />

          <ProjectCard
            icon={Server}
            title="Linux Home Server"
            description="Built and configured a Linux home server for learning networking, remote access, and system administration."
            technologies={["Linux", "SSH", "Networking", "Ubuntu"]}
            githubLink="#"
            liveUrl=""
            status="Completed"
          />

          <ProjectCard
            icon={Camera}
            title="Victor Visuals"
            description="Photography, videography, editing, and creative storytelling through visual media."
            technologies={["Photography", "Video", "Lightroom", "DaVinci"]}
            githubLink="#"
            liveUrl="#"
            status="In Progress"
          />

          <ProjectCard
            icon={Smartphone}
            title="Life App"
            description="A mobile app concept focused on helping people organize and improve daily life."
            technologies={["Figma", "UI/UX", "Planning"]}
            githubLink="#"
            liveUrl=""
            status="In Progress"
          />

        </div>

      </div>
    </section>
  );
}