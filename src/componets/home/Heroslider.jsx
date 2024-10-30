import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

const Heroslider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("./img/Hero_Slider/slider.json")
      .then((response) => response.json())
      .then((data) => setSlides(data.heroSlider));
  }, []);

  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.length > 0 &&
          slides.map((slide) => (
            <SwiperSlide className="max-h-[90vh] relative" key={slide.id}>
              <img src={slide.image} alt={`slide`} />
              <div className="text_container absolute top-[18%] ">
                <h1 className="font-bold text-slate-800 tracking-wide text-5xl ">
                  {slide.title}{" "}
                </h1>
                <p className="text-sm italic py-3 text-gray-100">
                  {slide.subtitle}
                </p>
                <Link to={slide.link}>
                  <button className="font-bold bg-lime-400 px-5 text-md py-3 hover:bg-lime-600 transition ease-in  duration-200 ">
                    {slide.buttonText}
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Heroslider;
