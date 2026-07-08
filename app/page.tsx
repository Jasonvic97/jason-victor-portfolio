import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-between gap-12 px-8 md:flex-row">

        <div className="max-w-2xl">

          <p className="text-blue-400 text-lg uppercase tracking-widest">
            Welcome
          </p>

          <h1 className="mt-4 text-6xl font-extrabold">
            Jason Victor
          </h1>

          <h2 className="mt-5 text-2xl text-gray-300">
            Operations Leader • IT Professional • Creative Problem Solver
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Helping organizations improve operations through leadership,
            technology, and continuous improvement.
          </p>

          <div className="mt-10 flex gap-4">

            <a
              href="/resume"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 transition"
            >
              View Resume
            </a>

            <a
              href="/about"
              className="rounded-lg border border-white px-6 py-3 hover:bg-white hover:text-slate-950 transition"
            >
              About Me
            </a>

          </div>

        </div>

        <Image
          src="/profile.jpg"
          alt="Jason Victor"
          width={420}
          height={420}
          priority
          className="rounded-full border-4 border-blue-500 object-cover shadow-2xl"
        />

      </section>
    </main>
  );
}