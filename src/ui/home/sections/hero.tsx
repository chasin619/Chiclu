import React from "react";
import Image from "next/image";
import { Box, Flex, Text } from "@radix-ui/themes";
import { Button } from "@/components/button";

const HeroSection = () => {
  return (
    <section>
      <Flex align="center" justify="between" maxWidth="1280px" mx="auto">
        <Box>
          <Text className="text-primaryGray !tracking-[.4px] block text-[38px]">
            Florist Software to manage
            <Text className="text-orange block !tracking-[.4px]" mt="1">
              Wedding
            </Text>
          </Text>
          <Text size="5" color="gray" mt="4" className="block max-w-80">
            Recipes, Sales, Booking Process, Communications, Efficiency
          </Text>
          <Text size="5" color="gray" my="4" className="block">
            Have your clients booked with just a few clicks
          </Text>
          <Button title="Start a Free Trial" customStyles="mt-4" />
        </Box>
        <Box>
          <Image src="/hero.jpg" alt="Hero Image" width="700" height="700" />
        </Box>
      </Flex>
    </section>
  );
};

export default HeroSection;
