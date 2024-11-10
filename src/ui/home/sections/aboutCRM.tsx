import React from "react";
import Image from "next/image";
import { Box, Flex, Text } from "@radix-ui/themes";
import { softwareCRMData } from "@/utils/constants";

const AboutCRM = () => {
  return (
    <section>
      <Flex
        justify="between"
        align="center"
        maxWidth="1380px"
        mx="auto"
        px="6"
        py={{ initial: "0", md: "8" }}
        gap="6"
        direction={{ initial: "column-reverse", md: "row" }}
      >
        {/* <Box className="bg-[#FBEBDE] rounded-full max-w-[600px]"> */}
          <Image
            src="/inquiry-form.png"
            alt="Inquiry Form Image"
            width="700"
            height="700"
            className="xs:hidden md:block"
          />
        {/* </Box> */}
        <Flex maxWidth={{ initial: "100%", md: "50%" }}>
          <Text
            className="text-primaryGray !tracking-[.4px]"
            as="p"
            size={{ md: "8", initial: "7" }}
          >
            Inquiry Form in a Form of{" "}
            <Text className="text-orange">Proposal Builder</Text> feature
            {softwareCRMData.map((feature, index) => (
              <Text
                as="p"
                key={index}
                color="gray"
                my="5"
                className="text-base border-l-[3px] border-l-orange pl-6"
              >
                {feature.name}
              </Text>
            ))}
          </Text>
        </Flex>
      </Flex>
    </section>
  );
};

export default AboutCRM;
