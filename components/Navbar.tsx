import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-blue-400 transition"
        >
          Jason Victor
        </Link>

        <div className="flex items-center gap-6 text-gray-300">

          <Link href="/" className="hover:text-blue-400">
            Home
          </Link>

          <Link href="/about" className="hover:text-blue-400">
            About
          </Link>

          <Link href="/experience" className="hover:text-blue-400">
            Experience
          </Link>

          <Link href="/projects" className="hover:text-blue-400">
            Projects
          </Link>

          <Link href="/resume" className="hover:text-blue-400">
            Resume
          </Link>

          <Link href="/contact" className="hover:text-blue-400">
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
}