import "@/app/hero.css";      
export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-6">

      {/* Hero Text */}
      <div className="w-full text-center">

        <h1 className="hero-name">
          JASON VICTOR
        </h1>

        <p className="mt-6 text-2xl font-semibold uppercase tracking-[0.4em] text-gray-900">
          THIS IS WHO I AM
        </p>

        <p className="mt-4 text-lg text-gray-500">
          Leadership • Innovation • Creativity
        </p>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 flex flex-col items-center text-gray-400">

        <span className="animate-bounce text-3xl text-blue-600">↓</span>

        <p className="fade-up mt-2 text-sm uppercase tracking-[0.3em] text-gray-500">
          Discover My Story
        </p>

      </div>

    </section>
  );
}