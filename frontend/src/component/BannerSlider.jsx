

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./BannerSlider.css";
import Education from "../assets/education.jpg";
import Medical from "../assets/Medical.jpg";


import RightArrow from "../assets/right-arrow.svg";
import LeftArrow from "../assets/Left-arrow.svg";

const slides = [
  {
    img: Medical,
    subtitle: "Uplifting Lives Through Care & Compassion",
    title: "Where Care Begins. Skills Take Shape. Lives Are Saved.",
    description: "Dedicated to building a healthier society through quality Medical education, CPR & First Aid training, rural health development, emergency medical aid, and life-saving healthcare training services ensuring every life receives timely, dignified, and professional care.",
    button: "Become a Contributor",
        buttonLink: "#cta"   // ⭐ LINK 2

  },
  {
    img: Education,
    subtitle: "Extending Healing Hands to the Needy",
    title: " Reaching the Needy. Delivering Emergency Care. Protecting Every Life.",
    description: "Dedicated to delivering quality treatment, emergency medical aid, free medication, rural health support, and life-saving care to the underprivileged ensuring that no one is denied healthcare due to poverty, distance, or lack of resources.",
    button: "Become a Contributor",
        buttonLink: "#cta"   // ⭐ LINK 2

  }
];

function BannerSlider() {
  const thumbsSwiper = useRef(null);
  const prevBtn = useRef(null);
  const nextBtn = useRef(null);
  const mainSwiper = useRef(null);

  useEffect(() => {
    if (
      mainSwiper.current &&
      prevBtn.current &&
      nextBtn.current &&
      mainSwiper.current.params
    ) {
      mainSwiper.current.params.navigation.prevEl = prevBtn.current;
      mainSwiper.current.params.navigation.nextEl = nextBtn.current;
      mainSwiper.current.navigation.init();
      mainSwiper.current.navigation.update();
    }
  }, []);

  return (
    <section className="ul-banner ul-banner-2" id="home">
      <Swiper
        modules={[Navigation, Thumbs, Autoplay]}
        loop={true}
        autoplay={{ delay: 3500 }}
        spaceBetween={0}
        thumbs={{ swiper: thumbsSwiper.current }}
        onSwiper={(swiper) => (mainSwiper.current = swiper)}
        className="ul-banner-2-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="ul-banner-2-slide">
              <img src={slide.img} alt="Slide Background" className="ul-banner-2-slide-bg-img" />

              <div className="row gy-4 align-items-center">
                <div className="col-md-7">
                  <div className="ul-banner-txt">
                    <span className="ul-banner-sub-title ul-section-sub-title">
                      {slide.subtitle}
                    </span>

                    <h1 className="ul-banner-title">
                      {slide.title}
                    </h1>

                    <p className="ul-banner-descr">
                      {slide.description}
                    </p>

                    <div className="ul-banner-btns">
  <a href={slide.buttonLink} className="ul-btn">
                        <span className="ul-icon">»</span>
                        {slide.button}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* THUMBNAILS + ARROWS */}
      <div className="ul-banner-2-slider-navigation">
        <button ref={prevBtn} className="prev">
          <img src={LeftArrow} alt="arrow" />
        </button>

        <Swiper
          modules={[Thumbs]}
          slidesPerView={2}
          spaceBetween={0}
          onSwiper={(swiper) => (thumbsSwiper.current = swiper)}
          watchSlidesProgress
          className="ul-banner-2-thumb-slider"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.img} alt="thumb" />
            </SwiperSlide>
          ))}
        </Swiper>

        <button ref={nextBtn} className="next">
          <img src={RightArrow} alt="arrow" />
        </button>
      </div>
    </section>
  );
}

export default BannerSlider;
