import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import girl1 from "../assets/picfour.jpg";
import girl2 from "../assets/picfive.jpg";
import girl3 from "../assets/picsix.jpg";
import ServicesPage from "./ServicesPage";

const slides = [
  {
  image: girl1,
  collection: "Everyday Expression",
  title: "Mayafrique RTW Collection",
  buttonText: "Discover",
},
{
  image: girl2,
  collection: "Made for the Moment",
  title: "Mayafrique Dinner Wear Collection",
  buttonText: "Discover",
},
{
  image: girl3,
  collection: "For Your Special Day",
  title: "Mayafrique Bridal Collection",
  buttonText: "Discover",
},
];

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        speed={1000} // smooth fade duration
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // track active slide
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[90vh] lg:h-[110vh] mt-32">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[90vh] lg:h-[120vh] object-cover mt-32"
              />

              {/* Overlay with right-aligned and centered text */}
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center md:p-16 text-right">

                {/* Centered collection + title together */}
                <div className="mb-4 flex flex-col items-center">
                  <p
                    className={`text-white text-base md:text-xl transition-all duration-700 delay-100 lg:ml-80 md:ml-72 ${activeIndex === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                      }`}
                  >
                    {slide.collection}
                  </p>

                  <h1
                    className={`text-white text-4xl md:text-6xl font-bold transition-all duration-700 ${activeIndex === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                      }`}
                  >
                    {slide.title}
                  </h1>
                </div>

                {/* Button moved a bit down */}
                <a
                  href="https://www.instagram.com/mayafrique?igsh=ZWNvcXd3MGh1MW40&utm_source=qr"
                  className={`text-white text-lg md:text-2xl mt-2 underline transition-all duration-1000 delay-200 lg:ml-80 md:ml-72${activeIndex === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ServicesPage/>
    </div>
  );
};

export default HomePage;