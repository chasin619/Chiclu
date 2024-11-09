import React from "react";
import Image from "next/image";
import { Flex, Text } from "@radix-ui/themes";
import { Button } from "@/components/button";

const Pricing = () => {
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
        <Flex justify="center" align="center" direction="column">
          <Text
            className="text-primaryGray !tracking-[.4px]"
            as="p"
            size={{ md: "8", initial: "7" }}
          >
            <Text className="text-green">SIMPLIFY</Text> YOUR BUSINESS WITH US
          </Text>
          <Text as="p" size="5" color="gray" mt="4">
            Try for free, and explore all the tools you need to make your
            business easier, faster
          </Text>
        </Flex>
        <Flex
          justify="center"
          align="center"
          gap="6"
          direction={{ initial: "column", md: "row" }}
        >
          <Flex
            direction="column"
            justify="center"
            align="center"
            maxWidth="380px"
            px="6"
            py="4"
            pb="9"
            className="w-full sm:w-1/2 lg:w-1/3 rounded-xl shadow-lg transition-all hover:shadow-xl focus:outline-none relative"
          >
            <Text
              as="p"
              size="5"
              align="center"
              className="text-green border-b-[0.2px] border-green w-full pb-2"
            >
              Monthly
            </Text>
            <Text as="p" weight="medium" color="gray" size="6" mt="6">
              $99/
              <Text size="3" weight="light">
                month
              </Text>
            </Text>
            <Text as="p" size="2" color="gray" mt="6">
              Get started with a free 31-day trial.
            </Text>
            <Text as="p" size="4" color="gray" my="6" weight="medium">
              FULL ACCESS TO ALL TOOLS!
            </Text>
            <Image
              src="/monthly.jpg"
              alt="Monthly Icon"
              width="100"
              height="100"
              className="self-end"
            />
            <button
              style={{
                background:
                  "linear-gradient(to bottom, rgba(126, 181, 167, 0.65) 0%, rgba(126, 181, 167, 0.85) 50%, rgb(126, 181, 167) 100%)",
              }}
              className="text-white py-3 px-8 rounded-full text-base shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 mt-8"
            >
              14-Day Free Trial
            </button>
          </Flex>
          <Flex
            direction="column"
            justify="center"
            align="center"
            maxWidth="380px"
            px="6"
            py="4"
            pb="9"
            className="w-full sm:w-1/2 lg:w-1/3 rounded-xl shadow-lg transition-all hover:shadow-xl focus:outline-none relative"
          >
            <Text
              as="p"
              size="5"
              align="center"
              className="text-orange border-b-[0.2px] border-orange w-full pb-2"
            >
              Yearly
            </Text>
            <Text as="p" weight="medium" color="gray" size="6" mt="6">
              $999/
              <Text size="3" weight="light">
                month
              </Text>
            </Text>
            <Text as="p" size="2" color="gray" mt="6">
              2 MONTH FOR FREE!
            </Text>
            <Text as="p" size="4" color="gray" my="6" weight="medium">
              FULL ACCESS TO ALL TOOLS!
            </Text>
            <Image
              src="/monthly.jpg"
              alt="Monthly Icon"
              width="100"
              height="100"
              className="self-end"
            />
            <Button title="Get Started" customStyles="mt-8 py-3 px-8" />
          </Flex>
        </Flex>
      </Flex>
    </section>
  );
};

export default Pricing;
