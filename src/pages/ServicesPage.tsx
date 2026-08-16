import React from "react";
import picone from "../assets/picone.jpg";
import pictwo from "../assets/pictwo.jpg";
import picthree from "../assets/picthree.jpg";
import ScrollReveal from "../components/ScrollReveal";

const services = [
  {
    number: "01",
    title: "MAYAFRIQUE\nREADY TO WEAR",
    description:
      "Effortless pieces for everyday expression. Our ready-to-wear collection blends contemporary style with distinctive African influence, creating versatile looks that move with you and never fade into the background.",
    image: picone,
  },
  {
    number: "02",
    title: "MAYAFRIQUE\nBRIDAL COLLECTION",
    description:
      "From intimate celebrations to grand entrances, our bridal pieces are designed to make your moment uniquely yours. Thoughtful details, flattering silhouettes, and timeless elegance come together to create a look you'll remember forever.",
    image: picthree,
  },
  {
    number: "03",
    title: "MAYAFRIQUE\nDINNER WEAR",
    description:
      "Sophisticated silhouettes designed for evenings that deserve a little more. MayAfrique Dinner Wear brings together bold details, refined craftsmanship, and effortless elegance for every unforgettable occasion.",
    image: pictwo,
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#f5f1e9] text-[#211b18]">
      {/* Intro */}
      <section className="relative overflow-hidden px-6 py-24 sm:px-10 md:px-14 lg:px-20 lg:py-36">
        <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full border border-[#7f0000]/10" />
        <div className="grid gap-14 lg:grid-cols-[0.8fr_2fr] lg:gap-16">

          {/* Left editorial heading */}
          <div className="flex flex-col justify-between">
            <div>
              <ScrollReveal direction="right">
                <p className="mb-6 flex items-center gap-4 text-xs tracking-[0.3em] uppercase text-[#7f0000]/70">
                  <span className="h-px w-8 bg-[#b58a52]" />
                What we do
              </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={100}>
                <h1 className="max-w-md text-[clamp(3.5rem,7vw,7rem)] font-light uppercase leading-[0.88] tracking-[-0.04em]">
                Fashion
                <br />
                With
                <br />
                Purpose
              </h1>
              </ScrollReveal>
            </div>

            <div className="mt-10 max-w-sm">
              <ScrollReveal delay={220}>
                <p className="text-sm leading-7 text-neutral-600 sm:text-base">
                May Afrique creates contemporary fashion rooted in creativity,
                conscious design, and the belief that what we wear should say
                something about who we are.
              </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Services */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ScrollReveal key={service.number} delay={index * 130} direction={index === 1 ? "up" : "scale"} className="image-lift">
                <article
                key={service.number}
                className="group flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-200 shadow-[0_24px_60px_rgba(57,33,23,.12)]">
                  <img
                    src={service.image}
                    alt={service.title.replace("\n", " ")}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                  />

                  {/* Number */}
                  <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-black/10 text-[10px] tracking-[0.12em] text-white backdrop-blur-sm">
                    {service.number}
                  </span>
                </div>
                <div className="flex min-h-[280px] flex-col pt-5">
                  <div>
                    <h2 className="whitespace-pre-line text-xl font-light uppercase leading-[1.05] tracking-[-0.02em]">
                      {service.title}
                    </h2>

                    <p className="mt-4 text-sm leading-6 text-neutral-600">
                      {service.description}
                    </p>
                  </div>

                  {/* Editorial detail */}
                  <div className="mt-auto pt-8">
                    <div className="h-px w-full bg-neutral-300 transition-all duration-500 group-hover:bg-black" />
                  </div>
                  {/* <button
                    type="button"
                    className="mt-6 border-b border-black pb-1 text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-50"
                  >
                    Discover
                  </button> */}
                </div>
              </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Statement section */}
      <section className="border-t border-[#211b18]/15 bg-[#681821] px-6 py-24 text-[#fffaf1] sm:px-10 md:px-14 lg:px-20 lg:py-36">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-8 text-xs tracking-[0.3em] uppercase text-[#d6aa71]">
            Our approach
          </p>

          <ScrollReveal delay={100} distance={55}>
            <h2 className="text-[clamp(2.5rem,5vw,5.5rem)] font-light leading-[0.95] tracking-[-0.04em]">
            Designed in Ghana.
            <br />
            Made with intention.
            <br />
            Created to last.
          </h2>
          </ScrollReveal>

          <p className="mx-auto mt-10 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
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
