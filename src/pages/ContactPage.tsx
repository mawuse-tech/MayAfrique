import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import contactImage from "../assets/contact.png";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-[#f8f7f3] px-4 pb-16 pt-32 sm:px-6 md:px-10 lg:px-16 lg:pt-40">

      {/* Page Header */}
      <section className="mx-auto mb-12 max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500 pt-8">
          Get in touch
        </p>

        <h1 className="max-w-3xl text-5xl font-medium uppercase leading-[0.95] tracking-tight text-black sm:text-6xl md:text-7xl lg:text-8xl">
          Let's talk
          <br />
          about fashion.
        </h1>
      </section>

      {/* Contact Card */}
      <section className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-sm lg:grid-cols-[1.6fr_0.8fr]">

        {/* Image */}
        <div className="relative min-h-[450px] overflow-hidden sm:min-h-[550px] lg:min-h-[650px]">
          <img
            src={contactImage}
            alt="May Afrique fashion"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute bottom-8 left-8 max-w-sm text-white sm:bottom-12 sm:left-12">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/70">
              May Afrique
            </p>

            <h2 className="text-3xl font-medium leading-tight sm:text-4xl">
              Fashion made
              <br />
              with purpose.
            </h2>
          </div>
        </div>

        {/* Contact Information */}
        <aside className="relative overflow-hidden bg-[#7F0000] p-8 text-white sm:p-10 md:p-14 lg:p-12">

          {/* Decorative Circles */}
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full border border-white/10" />

          <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full border border-white/10" />

          <div className="relative z-10">

            <div className="mb-10 flex items-start justify-between">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/50">
                  Contact information
                </p>

                <h2 className="text-3xl font-medium leading-tight sm:text-4xl">
                  We'd love
                  <br />
                  to hear from you.
                </h2>
              </div>

              <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 sm:flex">
                <FaEnvelope className="text-sm text-white/70" />
              </div>
            </div>

            {/* Location */}
            <div className="mb-8 flex gap-4">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-sm text-white/60" />

              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.15em] text-white/40">
                  Studio
                </p>

                <p className="text-sm leading-6 text-white/80">
                  McCharthy, Accra, Ghana
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-8 flex gap-4">
              <FaPhoneAlt className="mt-1 shrink-0 text-sm text-white/60" />

              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.15em] text-white/40">
                  Phone
                </p>

                <p className="text-sm leading-6 text-white/80">
                  +233 553029326/ +233 209360330
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="mb-12 flex gap-4">
              <FaEnvelope className="mt-1 shrink-0 text-sm text-white/60" />

              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.15em] text-white/40">
                  Email
                </p>

                <p className="break-all text-sm leading-6 text-white/80">
                  mayafriquefashion1@gmail.com
                </p>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.15em] text-white/40">
                Follow May Afrique
              </p>

              <div className="flex items-center gap-5">

                <a
                  href="https://www.instagram.com/mayafrique?igsh=ZWNvcXd3MGh1MW40&utm_source=qr"
                  aria-label="Instagram"
                  className="transition-opacity hover:opacity-50"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href="https://www.facebook.com/mayafrique"
                  aria-label="Facebook"
                  className="transition-opacity hover:opacity-50"
                >
                  <FaFacebookF size={18} />
                </a>
              </div>
            </div>

          </div>
        </aside>
      </section>

      {/* Bottom statement */}
      <section className="mx-auto max-w-7xl py-20 text-center sm:py-28">
        <p className="mx-auto max-w-2xl text-2xl font-light leading-relaxed text-neutral-600 sm:text-3xl">
          Whether you're looking for a unique piece, interested in our
          sustainable approach, or want to collaborate, we're here to listen.
        </p>
      </section>

    </main>
  );
};

export default ContactPage;