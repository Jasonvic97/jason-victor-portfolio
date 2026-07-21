import ResumeDropdown from "@/components/Resumedropdown";
import Reveal from "./Reveal";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin  } from "react-icons/fa";

export default function Contact() {
  return (
    <Reveal>
      <section
        id="contact"
        className="flex min-h-screen items-center justify-center px-6"
      >
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A14D]">
            Contact
          </p>

          <h2 className="text-5xl font-bold text-gray-900">
            Let's Connect
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Whether you're looking for an IT professional, creative media
            specialist, or someone passionate about building meaningful
            technology, I'd love to hear from you.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <a
              href="mailto:Jasonvic97@gmail.com"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <Mail size={18} />
              Email Me
            </a>

            <ResumeDropdown />

          </div>

          <div className="mt-12 flex justify-center gap-8">

            <a
              href="https://github.com/Jasonvic97"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition hover:text-black"
            >
              <FaGithub size={26} />
            </a>

            <a
              href="https://www.linkedin.com/in/jason-victor-795b3b193/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition hover:text-[#0A66C2]"
            >
              <FaLinkedin size={26} />
            </a>

          </div>

        </div>
      </section>
    </Reveal>
  );
}