import React from "react";
import picone from "../assets/picone.jpg";
import pictwo from "../assets/pictwo.jpg";
import picthree from "../assets/picthree.jpg";

const services = [
  {
    number: "01",
    title: "BESPOKE &\nCUSTOM DESIGN",
    description:
      "Thoughtfully designed pieces made around you. From concept to finished garment, we create distinctive unisex pieces that reflect your style and individuality.",
    image: picone,
  },
  {
    number: "02",
    title: "SUSTAINABLE\nFASHION",
    description:
      "Fashion with intention. We create contemporary clothing while making conscious choices around materials, production, longevity, and responsible consumption.",
    image: picthree,
  },
  {
    number: "03",
    title: "FASHION TRAINING\n& WORKSHOPS",
    description:
      "Practical fashion training designed to build confidence, creativity, and real-world skills for emerging designers, creatives, and fashion enthusiasts.",
    image: pictwo,
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#f8f7f3] text-[#171717]">
      {/* Intro */}
      <section className="px-6 py-20 sm:px-10 md:px-14 lg:px-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_2fr] lg:gap-16">
          
          {/* Left editorial heading */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="mb-6 text-xs tracking-[0.3em] uppercase text-neutral-500">
                What we do
              </p>

              <h1 className="max-w-md text-[clamp(3.5rem,7vw,7rem)] font-light uppercase leading-[0.88] tracking-[-0.04em]">
                Fashion
                <br />
                With
                <br />
                Purpose
              </h1>
            </div>

            <div className="mt-10 max-w-sm">
              <p className="text-sm leading-7 text-neutral-600 sm:text-base">
                May Afrique creates contemporary fashion rooted in creativity,
                conscious design, and the belief that what we wear should say
                something about who we are.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
                  <img
                    src={service.image}
                    alt={service.title.replace("\n", " ")}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Number */}
                  <span className="absolute left-4 top-4 text-xs tracking-[0.2em] text-white mix-blend-difference">
                    {service.number}
                  </span>
                </div>

                {/* Text */}
                <div className="pt-5">
                  <h2 className="whitespace-pre-line text-xl font-light uppercase leading-[1.05] tracking-[-0.02em]">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-sm leading-6 text-neutral-600">
                    {service.description}
                  </p>

                  <button
                    type="button"
                    className="mt-6 border-b border-black pb-1 text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-50"
                  >
                    Discover
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Statement section */}
      <section className="border-t border-neutral-300 px-6 py-24 sm:px-10 md:px-14 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-8 text-xs tracking-[0.3em] uppercase text-neutral-500">
            Our approach
          </p>

          <h2 className="text-[clamp(2.5rem,5vw,5.5rem)] font-light leading-[0.95] tracking-[-0.04em]">
            Designed in Ghana.
            <br />
            Made with intention.
            <br />
            Created to last.
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
            We believe fashion can be expressive without being wasteful.
            Every May Afrique piece is an opportunity to explore individuality,
            celebrate contemporary African design, and move toward a more
            thoughtful relationship with clothing.
          </p>
        </div>
      </section>
    </main>
  );
}