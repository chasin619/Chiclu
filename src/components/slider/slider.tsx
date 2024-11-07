"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Flex, Text } from "@radix-ui/themes";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const data = [
    {
      review: `Build your wedding feature is so amazing, it allowed me to create proposal and instantly see a quote in a few clicks …. 
Super easy to use, and impressed by inquiry form.So up to date with technology. I loved seeing proposal after a few clicks, instead of waiting days for other florists to reply on my emails.`,
      clientName: "Sarah Schmidt",
    },
    {
      review: `Wow… such an easy platform, I was so impressed with design feature, I was able to add my inspirational images and choose everything needed for my wedding.`,
      clientName: "Leila Kalckin",
    },
    {
      review: `When I was searching for a wedding florist, I landed on CHICLU.COM  platform and immediately chose everything I needed for my wedding, I was able to see prices. And after florist sent me a confirmation I was ready to book. My wedding came out as I always dreamed.`,
      clientName: "Julia Simon",
    },
    {
      review: `I booked my wedding Florist only because it was super easy to update things inside the proposal itself, without even emailing for updates.`,
      clientName: "Deborah Sing",
    },
    {
      review: `I love detailed notes and descriptions of everything what I will be getting for my wedding. And I was so impressed when  received proposal from a florist with such a beautiful design board. I am a visual person and proposal helped me so much with visualization of my Wedding Day.`,
      clientName: "Stephanie Reyes",
    },
    {
      review: `Super fast and so beautiful proposal sold itself. Booked florist for my wedding in mAy with proposal builder feature.`,
      clientName: "Anna Kim",
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={4}
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
              width: index === activeIndex ? "33.3%" : "33.3%",
            }}
          >
            <Flex
              direction="column"
              minHeight="300px"
              justify="between"
              px="6"
              className="border-l-2 border-[#e8994d]"
            >
              <Text size="3" color="gray" weight="light">
                {item.review}
              </Text>
              <Text align="right">- {item.clientName}</Text>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
