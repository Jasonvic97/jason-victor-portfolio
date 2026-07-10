type ExperienceCardProps = {
  title: string;
  description: string;
};

export default function ExperienceCard({
  title,
  description,
}: ExperienceCardProps) {
  return (
    <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-6 h-14 w-14 rounded-2xl bg-blue-100 transition-colors duration-300 group-hover:bg-blue-600"></div>

      <h3 className="text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        {description}
      </p>

    </div>
  );
}