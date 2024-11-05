import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

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
        </Box>
        <Box>
          <Image src="/hero.jpg" alt="Hero Image" width="700" height="700" />
        </Box>
      </Flex>
    </section>
  );
};

export default HeroSection;
