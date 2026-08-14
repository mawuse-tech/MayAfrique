import React from "react";
import { FaArrowRight } from "react-icons/fa";
import picseven from "../assets/picseven.jpg";
import picten from "../assets/picten.jpeg";

const AboutUs = () => {
  return (
    <main className="bg-[#f8f7f3] text-[#171717]">
      {/* Hero */}
      <section className="px-6 pb-20 pt-40 sm:px-10 md:px-14 lg:px-20 lg:pb-28 lg:pt-40">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-end lg:gap-20">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-neutral-500">
              About May Afrique
            </p>

            <h1 className="text-[clamp(4rem,9vw,9rem)] font-light uppercase leading-[0.82] tracking-[-0.06em]">
              Made
              <br />
              With
              <br />
              Purpose
            </h1>
          </div>

          <div className="max-w-xl lg:pb-2">
            <p className="text-lg leading-8 text-neutral-700 sm:text-xl">
              May Afrique is a Ghanaian fashion brand creating contemporary
              clothing that brings together individuality, thoughtful design,
              and a more conscious approach to fashion.
            </p>
          </div>
        </div>
      </section>

      {/* Main image */}
      <section className="bg-[#7F0000] px-6 py-28 text-white sm:px-10 md:px-14 lg:px-20 lg:py-40">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-neutral-400">
            May Afrique
          </p>

          <h2 className="text-[clamp(3rem,7vw,7rem)] font-light uppercase leading-[0.88] tracking-[-0.05em]">
            Wear what
            <br />
            means something.
          </h2>

          <p className="mx-auto mt-10 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
            Discover a different approach to contemporary fashion — one built
            around creativity, individuality, and intention.
          </p>

          <a
            href="https://www.instagram.com/mayafrique?igsh=ZWNvcXd3MGh1MW40&utm_source=qr"
            className="group mt-10 inline-flex items-center gap-4 border-b border-white pb-2 text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
          >
            Explore May Afrique

            <FaArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-24 sm:px-10 md:px-14 lg:px-20 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              01 — Our Story
            </p>
            <h2 className="max-w-3xl text-[clamp(3rem,6vw,6rem)] font-light uppercase leading-[0.88] tracking-[-0.05em]">
              Our Story
            </h2>
          </div>

          <div className="max-w-4xl">
            <h2 className="text-[clamp(2.5rem,5vw,5.5rem)] font-light uppercase leading-[0.92] tracking-[-0.04em]">
              Fashion that feels
              <br />
              personal.
            </h2>

            <div className="mt-10 grid gap-6 text-sm leading-7 text-neutral-600 sm:grid-cols-2 sm:text-base">
              <p>
                Born in Ghana, May Afrique explores the relationship between
                fashion, identity, and everyday expression. We believe clothing
                should feel personal — something that reflects the person
                wearing it rather than simply following a trend.
              </p>

              <p>
                Our approach combines contemporary silhouettes with thoughtful
                details and a strong appreciation for craftsmanship. We design
                pieces that can move with you, be styled your way, and remain
                relevant beyond a single season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-neutral-300 bg-white px-6 py-24 sm:px-10 md:px-14 lg:px-20 lg:py-32">
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-neutral-500">
              02 — What Matters
            </p>

            <h2 className="max-w-3xl text-[clamp(3rem,6vw,6rem)] font-light uppercase leading-[0.88] tracking-[-0.05em]">
              Our values
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-neutral-600 sm:text-base">
            Everything we create is guided by a desire to make fashion more
            expressive, considered, and meaningful.
          </p>
        </div>

        <div className="grid border-t border-neutral-300 md:grid-cols-3">
          <article className="border-b border-neutral-300 py-10 md:border-b-0 md:border-r md:pr-10">
            <span className="text-xs tracking-[0.2em] text-neutral-400">
              01
            </span>

            <h3 className="mt-10 text-2xl font-light uppercase">
              Sustainability
            </h3>

            <p className="mt-5 text-sm leading-7 text-neutral-600">
              We believe in making conscious choices — from the materials we
              consider to the way garments are created and cared for.
            </p>
          </article>

          <article className="border-b border-neutral-300 py-10 md:border-b-0 md:border-r md:px-10">
            <span className="text-xs tracking-[0.2em] text-neutral-400">
              02
            </span>

            <h3 className="mt-10 text-2xl font-light uppercase">
              Individuality
            </h3>

            <p className="mt-5 text-sm leading-7 text-neutral-600">
              Fashion should give people room to express themselves. Our
              unisex approach allows each piece to be interpreted in your own
              way.
            </p>
          </article>

          <article className="py-10 md:pl-10">
            <span className="text-xs tracking-[0.2em] text-neutral-400">
              03
            </span>

            <h3 className="mt-10 text-2xl font-light uppercase">
              Craftsmanship
            </h3>

            <p className="mt-5 text-sm leading-7 text-neutral-600">
              We value thoughtful construction, attention to detail, and the
              human creativity behind every garment.
            </p>
          </article>
        </div>
      </section>

      {/* Ghana section */}
      <section className="px-6 py-24 sm:px-10 md:px-14 lg:px-20 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div className="order-2 lg:order-1">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-neutral-500">
              03 — From Ghana
            </p>

            <h2 className="text-[clamp(3rem,6vw,6rem)] font-light uppercase leading-[0.88] tracking-[-0.05em]">
              Rooted
              <br />
              Here.
              <br />
              Made for
              <br />
              Everywhere.
            </h2>

            <p className="mt-10 max-w-lg text-sm leading-7 text-neutral-600 sm:text-base">
              Ghana is part of our foundation. It shapes how we see colour,
              creativity, community, and the possibilities of African fashion.
              From our home in Ghana, May Afrique creates clothing for people
              everywhere who value style with substance.
            </p>
          </div>

          <div className="order-1 aspect-[4/5] overflow-hidden bg-neutral-200 lg:order-2">
            <img
              src={picseven}
              alt="May Afrique in Ghana"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Closing statement */}

    </main>
  );
};

export default AboutUs;