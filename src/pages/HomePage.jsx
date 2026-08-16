import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-fade";
import girl1 from "../assets/picfour.jpg";
import girl2 from "../assets/picfive.jpg";
import girl3 from "../assets/picsix.jpg";
import ServicesPage from "./ServicesPage";

const instagram = "https://www.instagram.com/mayafrique?igsh=ZWNvcXd3MGh1MW40&utm_source=qr";

const slides = [
  { image: girl1, eyebrow: "Everyday expression", title: "Ready to wear", number: "01" },
  { image: girl2, eyebrow: "Made for the moment", title: "Dinner wear", number: "02" },
  { image: girl3, eyebrow: "For your special day", title: "Bridal", number: "03" },
];

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full bg-[#f5f1e9]">
      <section className="relative h-[100svh] min-h-[680px] overflow-hidden bg-[#241713] text-white">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5200, disableOnInteraction: false }}
          loop
          speed={1400}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="h-full w-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={slide.title}>
              <div className="group relative h-full w-full overflow-hidden">
                <img
                  src={slide.image}
                  alt={`May Afrique ${slide.title} collection`}
                  className={`h-full w-full object-cover object-center transition-transform duration-[6500ms] ease-out ${activeIndex === i ? "scale-105" : "scale-100"}`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,10,8,.72)_0%,rgba(20,10,8,.2)_58%,rgba(20,10,8,.36)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,8,6,.6)_0%,transparent_45%,rgba(15,8,6,.2)_100%)]" />

                <div className="absolute inset-x-0 bottom-0 top-28 flex items-end px-6 pb-24 sm:px-10 md:px-14 lg:px-20 lg:pb-20">
                  <div className="w-full max-w-[1500px]">
                    <div className={`transition-all duration-1000 ease-out ${activeIndex === i ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                      <p className="mb-5 flex items-center gap-4 text-[11px] uppercase tracking-[0.34em] text-white/75">
                        <span className="h-px w-10 bg-[#d7aa66]" />
                        {slide.eyebrow}
                      </p>
                      <h1 className="max-w-5xl text-[clamp(4.4rem,12vw,10.5rem)] font-light uppercase leading-[0.76] tracking-[-0.07em]">
                        {slide.title}
                      </h1>
                      <a href={instagram} className="group/link mt-10 inline-flex items-center gap-4 text-xs uppercase tracking-[0.26em]">
                        Explore collection
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 transition-all duration-300 group-hover/link:bg-white group-hover/link:text-[#64151e]">
                          <FaArrowRight size={11} />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="pointer-events-none absolute bottom-8 right-6 z-10 hidden items-center gap-5 sm:flex sm:right-10 md:right-14 lg:right-20">
          <span className="text-xs tracking-[0.24em]">{slides[activeIndex].number}</span>
          <div className="h-px w-24 overflow-hidden bg-white/30">
            <span key={activeIndex} className="block h-full origin-left animate-[heroProgress_5.2s_linear] bg-white" />
          </div>
          <span className="text-xs text-white/50">03</span>
        </div>

        <a href="#collections" className="absolute bottom-7 left-6 z-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-white/70 sm:left-10 md:left-14 lg:left-20">
          <FaArrowDown className="animate-bounce" size={10} /> Scroll to discover
        </a>
      </section>

      <div id="collections">
        <ServicesPage />
      </div>
    </div>
  );
};

export default HomePage;
