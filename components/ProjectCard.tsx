import { LucideIcon } from "lucide-react";

type ProjectCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveUrl?: string;
  status: "Completed" | "In Progress";
};

export default function ProjectCard({
  icon: Icon,
  title,
  description,
  technologies,
  githubLink,
  liveUrl,
  status,
}: ProjectCardProps) {
  return (
    <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Top Row */}
      <div className="mb-6 flex items-center justify-between">

        {/* Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-all duration-300 group-hover:bg-blue-600">
          <Icon
            size={24}
            className="text-blue-600 transition-all duration-300 group-hover:text-white"
          />
        </div>

        {/* Status Badge */}
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            status === "Completed"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {status}
        </span>

      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-gray-600">
        {description}
      </p>

      {/* Technology Badges */}
      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">

        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold transition hover:bg-gray-100"
        >
          GitHub
        </a>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Live Demo
          </a>
        )}

      </div>

    </div>
  );
}