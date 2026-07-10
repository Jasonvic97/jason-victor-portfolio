import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
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
        <div className="mt-16 grid gap-8 md:grid-cols-2">

          <ExperienceCard
            title="Warehouse Leadership"
            description="Leading teams, improving operations, and creating an environment where people can succeed."
          />
          <ExperienceCard
          title="Technology"
            description="Learning, building, and solving problems through technology."
          />
          <ExperienceCard
            title="Victor Visuals"
            description="Capturing stories through photography, videography, and creative media."
          />
          <ExperienceCard
            title="Church Media"
            description="Serving through media production, livestreams, and supporting ministries."
          />

        </div>

      </div>
    </section>
  );
}