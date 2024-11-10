import React from "react";
import { Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { inquiryFormData } from "@/utils/constants";

const InquiryForm = () => {
  return (
    <section>
      <Flex
        justify="between"
        align="end"
        maxWidth="1380px"
        mx="auto"
        mt={{ initial: "8", md: "0" }}
        px="6"
        py={{ initial: "0", md: "8" }}
        gap="6"
        direction={{ initial: "column-reverse", md: "row" }}
      >
        <Flex maxWidth={{ initial: "100%", md: "50%" }}>
          <Text
            className="text-primaryGray !tracking-[.4px]"
            as="p"
            size={{ md: "8", initial: "7" }}
          >
            Inquiry Form in a Form of{" "}
            <Text className="text-green">Proposal Builder</Text> feature
            {inquiryFormData.map((feature, index) => (
              <Text
                as="p"
                key={index}
                color="gray"
                my="5"
                className="text-base border-l-[3px] border-l-green pl-6"
              >
                {feature.name}
              </Text>
            ))}
          </Text>
        </Flex>
        <Image
          src="/inquiry-form.png"
          alt="Inquiry Form Image"
          width="700"
          height="700"
          className="xs:hidden md:block"
        />
      </Flex>
    </section>
  );
};

export default InquiryForm;
