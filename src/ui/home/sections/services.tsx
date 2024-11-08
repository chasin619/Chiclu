import React from "react";
import Image from "next/image";
import { Flex, Text } from "@radix-ui/themes";
import { servicesData } from "@/utils/constants";

const Services = () => {
  return (
    <section className="flex justify-center">
      <Flex
        direction="column"
        justify="center"
        align="center"
        my="9"
        gap="4"
        px="8"
        maxWidth="1380px"
        width="100%"
      >
        <Text className="text-primaryGray !tracking-[.4px] block md:text-4xl xs:text-3xl">
          What{" "}
          <Text as="span" className="text-orange" mt="1">
            Else?
          </Text>
        </Text>
        <Flex
          direction="row"
          wrap="wrap"
          justify="center"
          gap="6"
          mt="8"
          width="100%"
        >
          {servicesData.map((service, index) => {
            return (
              <Flex
                key={index}
                direction="column"
                align="center"
                maxWidth="320px"
                px="6"
                py="4"
                className="w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-lg transition-all hover:shadow-xl focus:outline-none"
              >
                <Image
                  src={service.image}
                  alt={`${service.title} icon`}
                  width={60}
                  height={60}
                  objectFit="cover"
                />

                <Text
                  as="p"
                  mt="2"
                  className="text-gray-700 !tracking-[.4px] md:text-2xl text-xl"
                >
                  {service.title}
                </Text>
                <Text
                  as="p"
                  color="gray"
                  my="5"
                  align="center"
                  className="text-base"
                >
                  {service.description}
                </Text>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </section>
  );
};

export default Services;
