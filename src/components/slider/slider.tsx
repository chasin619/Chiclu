"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface SliderProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  slidesPerView?: number;
}

const Slider = <T,>({ data, renderItem, slidesPerView = 3 }: SliderProps<T>) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="w-full overflow-hidden h-96">
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={slidesPerView}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        loop
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          350: {
            slidesPerView: 1,
          },
          660: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1240: {
            slidesPerView: 4,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "100%",
            }}
          >
            {renderItem(item, index)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
