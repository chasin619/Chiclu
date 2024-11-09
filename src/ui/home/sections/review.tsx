"use client";

import React from "react";
import { Slider } from "@/components/slider";
import { Flex, Heading, Text } from "@radix-ui/themes";
import { customerReviewsData } from "@/utils/constants";

const Review = () => {
  return (
    <section>
      <Flex
        justify="between"
        maxWidth="1380px"
        direction="column"
        mx="auto"
        px="8"
        py="8"
        gap="6"
      >
        <Heading
          align="left"
          weight="medium"
          size="6"
          className="text-primaryGray"
        >
          What Brides Say
        </Heading>
        <Slider
          data={customerReviewsData}
          slidesPerView={4}
          renderItem={(item, index) => (
            <Flex
              key={index}
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
          )}
        />
      </Flex>
    </section>
  );
};

export default Review;
