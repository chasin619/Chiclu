import React from "react";
import Image from "next/image";
import { Box, Flex, Text } from "@radix-ui/themes";
import { Button } from "@/components/button";

const HeroSection = () => {
  return (
    <section>
      <Flex
        align="center"
        justify="between"
        direction={{ initial: "column", xs: "column", md: "row" }}
        maxWidth="1380px"
        mx="auto"
        px="6"
        mt={{ initial: "6", md: "0" }}
      >
        <Box>
          <Text
            as="p"
            className="text-primaryGray !tracking-[.4px] md:text-[38px] xs:text-3xl"
          >
            Florist Software to manage
            <Text as="p" className="text-orange !tracking-[.4px]" mt="1">
              Wedding
            </Text>
          </Text>
          <Text
            size={{ initial: "4", md: "5" }}
            color="gray"
            mt="4"
            className="block max-w-80"
          >
            Recipes, Sales, Booking Process, Communications, Efficiency
          </Text>
          <Text
            size={{ initial: "4", md: "5" }}
            color="gray"
            my="4"
            className="block"
          >
            Have your clients booked with just a few clicks
          </Text>
          <Button title="Start a Free Trial" customStyles="mt-4" />
          <Text color="gray" my="8" className="block">
            Get started with a free 31-day trial.
          </Text>
        </Box>
        <Box>
          <Image
            src="/hero.jpg"
            alt="Hero Image"
            width="700"
            height="700"
            className="xs:hidden md:block"
          />
        </Box>
      </Flex>
    </section>
  );
};

export default HeroSection;
