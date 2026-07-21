"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, FileText, Briefcase } from "lucide-react";

export default function ResumeDropdown() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 font-medium text-gray-800 transition hover:border-blue-500 hover:text-blue-600"
      >
        Resume
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 mt-3 w-72 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl z-50">

          <a
            href="/resume-it.pdf"
            download
            className="flex items-center gap-4 px-5 py-4 transition hover:bg-gray-50"
          >
            <div className="rounded-lg bg-blue-100 p-2">
              <FileText className="text-blue-600" size={18} />
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                IT Resume
              </p>
              <p className="text-sm text-gray-500">
                Technology & Infrastructure
              </p>
            </div>
          </a>

          <div className="border-t border-gray-100" />

          <a
            href="/resume-operations.pdf"
            download
            className="flex items-center gap-4 px-5 py-4 transition hover:bg-gray-50"
          >
            <div className="rounded-lg bg-amber-100 p-2">
              <Briefcase
                className="text-amber-600"
                size={18}
              />
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                Leadership & Operations Resume
              </p>
              <p className="text-sm text-gray-500">
                Warehouse • Logistics • Leadership
              </p>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}