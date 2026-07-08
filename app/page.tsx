export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-extrabold md:text-7xl">
          Jason Victor
        </h1>

        <p className="mt-6 text-xl text-blue-400">
          Operations Leader • IT Professional • Problem Solver
        </p>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
          I help organizations improve operations through leadership,
          technology, and efficient processes. My experience includes warehouse
          operations, inventory management, database administration, and
          technical support.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#experience"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
          >
            View Experience
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-slate-950"
          >
            Contact Me
          </a>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-5xl px-6 py-20"
      >
        <h2 className="mb-6 text-4xl font-bold">About Me</h2>

        <p className="text-lg leading-8 text-gray-300">
          I'm an operations-focused professional with experience in warehouse
          operations, inventory management, database administration, and IT
          support. I enjoy improving workflows, solving problems, and helping
          teams succeed through organization and technology.
        </p>
      </section>

      <section
        id="experience"
        className="mx-auto max-w-5xl px-6 py-20"
      >
        <h2 className="mb-8 text-4xl font-bold">Experience</h2>

        <div className="space-y-8">
          <div className="rounded-xl bg-slate-900 p-6">
            <h3 className="text-2xl font-semibold">
              Warehouse Clerk
            </h3>
            <p className="mt-2 text-gray-300">
              Parts tracking, inventory documentation, forklift operation,
              material handling, and operational support.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900 p-6">
            <h3 className="text-2xl font-semibold">
              Junior Database Analyst
            </h3>
            <p className="mt-2 text-gray-300">
              Database maintenance, inventory reporting, data accuracy, and
              operational analytics.
            </p>
          </div>

          <div className="rounded-xl bg-slate-900 p-6">
            <h3 className="text-2xl font-semibold">
              Dispatcher
            </h3>
            <p className="mt-2 text-gray-300">
              Emergency communications, coordination, documentation, and
              high-pressure decision making.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-5xl px-6 py-20"
      >
        <h2 className="mb-6 text-4xl font-bold">Contact</h2>

        <p className="text-gray-300">
          Email: Jasonvic97@gmail.com
        </p>

        <p className="text-gray-300">
          GitHub: github.com/jasonvic97
        </p>
      </section>
    </main>
  );
}