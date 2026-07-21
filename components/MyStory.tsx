"use client";

import Reveal from "./Reveal";
import Image from "next/image";

export default function MyStory() {
  return (
    <Reveal>
      <section
        id="my-story"
        className="bg-white px-8 py-40"
      >
        <div className="mx-auto max-w-7xl">

          {/* Header */}

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
              Beyond the Résumé
            </p>

            <h2 className="mt-4 text-5xl font-bold tracking-tight text-gray-900">
              The person behind
              the profession.
            </h2>

          </div>

          {/* Content */}

          <div className="mt-24 grid items-center gap-20 lg:grid-cols-2">

            {/* Portrait */}

            <div>

              <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl">

                <Image
                  src="/images/about.jpg"
                  alt="Jason Victor"
                  width={700}
                  height={900}
                  className="h-full w-full object-cover"
                  priority
                />

              </div>

            </div>

            {/* Story */}

            <div>

              <p className="text-lg leading-9 text-gray-600">

                I've always been someone who enjoys learning, creating,
                and finding better ways to solve problems. Whether I'm
                exploring new technology, capturing meaningful moments
                through photography, or serving behind the scenes at
                church, I find the most fulfillment in opportunities
                that allow me to grow while making a positive impact
                on others.

              </p>

              <p className="mt-8 text-lg leading-9 text-gray-600">

                Some of my favorite moments are the simple ones—
                spending time with family and friends, planning my next
                creative project, or enjoying a warm brownie after a
                long day. I believe the greatest success isn't measured
                only by career milestones, but by the relationships we
                build, the people we serve, and the willingness to keep
                learning every day.

              </p>

              {/* Personal Card */}

              <div
                className="
                  group
                  relative
                  mt-16
                  overflow-hidden
                  rounded-3xl
                  border
                  border-gray-200
                  bg-white
                  p-10
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                {/* Victor Visuals Watermark */}

                 <Image
    src="/images/logo.png"
    alt=""
    width={200}
    height={200}
    className="
        absolute
        -right-18
        -top-25
        opacity-[0.03]
        select-none
        pointer-events-none
        transition-all
        duration-500
        group-hover:opacity-[.15]
    "

                />

                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
                  Life Outside of Work
                </p>

                <div className="mt-8 space-y-8">

                  <div className="flex items-start gap-5">

                    <span className="text-2xl">
                      👨‍👩‍👧‍👦
                    </span>

                    <p className="leading-8 text-gray-700">
                      Spending quality time with family and friends is
                      what keeps me grounded and reminds me of what
                      matters most.
                    </p>

                  </div>

                  <div className="flex items-start gap-5">

                    <span className="text-2xl">
                      📷
                    </span>

                    <p className="leading-8 text-gray-700">
                      Photography and videography allow me to preserve
                      meaningful moments and tell stories that last.
                    </p>

                  </div>

                  <div className="flex items-start gap-5">

                    <span className="text-2xl">
                      🍫
                    </span>

                    <p className="leading-8 text-gray-700">
                      I'll almost never turn down a warm brownie.
                    </p>

                  </div>

                </div>

                <div className="mt-10 border-t border-gray-100 pt-8">

                  <p className="text-lg italic text-gray-500">
                    "I'm always looking for the next opportunity to learn,
                    create, and make a difference."
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}