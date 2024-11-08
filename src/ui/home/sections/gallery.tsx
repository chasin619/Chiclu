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
        px="8"
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
                direction={index % 2 === 0 ? "row" : "row-reverse"}
                className={`${description ? "gap-11" : "gap-28"}`}
              >
                {photoPath && (
                  <Image
                    src={photoPath}
                    alt="Public Recipe"
                    width={300}
                    height={300}
                    className="rounded-full"
                    priority
                  />
                )}
                <Flex justify="center" direction="column">
                  <Text className="text-primaryGray !tracking-[.4px] block text-4xl">
                    {orangeText}{" "}
                    <Text as="span" className="text-orange" mt="1">
                      {title}
                    </Text>
                  </Text>
                  {description && (
                    <Text size="3" color="gray" mt="4" className="max-w-80">
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
