import React from "react";
import { Flex, Text } from "@radix-ui/themes";

const AboutSoftware = () => {
  return (
    <section className="flex justify-center">
      <Flex
        justify="between"
        maxWidth="1380px"
        direction="column"
        mx="auto"
        px="8"
        py="8"
        gap="6"
      >
        <Flex direction="column" gap="5">
          <Text
            className="text-primaryGray !tracking-[.4px]"
            as="p"
            size={{ md: "8", initial: "7" }}
          >
            <Text className="text-green">Weddings</Text> and{" "}
            <Text className="text-green">Proposals</Text> software
          </Text>
          <Text as="p" size="5" color="gray" mt="2">
            Provides all resources to be aware of each events changes:
          </Text>
        </Flex>
      </Flex>
    </section>
  );
};

export default AboutSoftware;
