import React from "react";
import { Slider } from "@/components/slider";
import { Flex, Heading } from "@radix-ui/themes";

const Review = () => {
  return (
    <section>
      <Flex
        justify="between"
        maxWidth="1380px"
        direction="column"
        mx="auto"
        px="8"
        py="9"
        gap="6"
      >
        <Heading align="left" weight="medium" size="6" className="text-primaryGray">What Brides Say</Heading>
        <Slider />
      </Flex>
    </section>
  );
};

export default Review;
