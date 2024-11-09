import { galleryData } from "@/utils/constants";
import { Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <section className="flex justify-center">
      <Flex
        direction="column"
        justify="center"
        align="center"
        my="9"
        gap="4"
        px="6"
        maxWidth="1380px"
        width="100%"
      >
        <Flex direction="column" justify="center" align="center">
          <Text
            className="text-primaryGray !tracking-[.4px] block"
            size={{ md: "8", initial: "7" }}
          >
            Easy to Start!
          </Text>
          <Text size="5" color="gray" mt="4" className="block">
            We provide finished gallery of flowers, items, colors, and recipes
          </Text>
        </Flex>
        <Flex mt="7" direction="column" gap="6">
          {galleryData.map((item, index) => {
            const { title, description, orangeText, photoPath } = item;
            return (
              <Flex
                key={index}
                className={`${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } ${description ? "md:gap-11" : "md:gap-28"} xs:flex-col-reverse xs:gap-6`}
                align="center"
              >
                {photoPath && (
                  <Image
                    src={photoPath}
                    alt="Public Recipe"
                    width={300}
                    height={300}
                    className="rounded-full md:w-80 xs:w-56"
                    priority
                  />
                )}
                <Flex justify="center" direction="column">
                  <Text className="text-primaryGray !tracking-[.4px] block md:text-4xl xs:text-3xl">
                    {orangeText}{" "}
                    <Text as="span" className="text-orange" mt="1">
                      {title}
                    </Text>
                  </Text>
                  {description && (
                    <Text size="3" color="gray" mt="4" className="max-w-80 md:flex xs:hidden">
                      {description}
                    </Text>
                  )}
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </section>
  );
};

export default Gallery;
