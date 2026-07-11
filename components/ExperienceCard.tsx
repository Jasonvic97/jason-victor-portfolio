import { LucideIcon } from "lucide-react";

type ExperienceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick?: () => void;
};

export default function ExperienceCard({
  icon: Icon,
  title,
  description,
  onClick,
}: ExperienceCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-all duration-300 group-hover:bg-blue-600">
        <Icon
          size={24}
          strokeWidth={2}
          className="text-blue-600 transition-all duration-300 group-hover:text-white"
        />
      </div>

      <h3 className="text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        {description}
      </p>

      <p className="mt-8 text-sm font-semibold text-blue-600 transition group-hover:translate-x-1">
        See more... →
      </p>
    </div>
  );
}