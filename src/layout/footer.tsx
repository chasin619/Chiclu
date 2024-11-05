import React from "react";
import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";
import { FacebookSvg, InstagramSvg, TwitterSvg } from "@/assets/svgs";

const Footer = () => {
  return (
    <footer className="px-20 py-10 border-t border-[color(display-p3 0 0 0 / .608)]">
      <Flex justify="between" align="center">
        <Text color="gray">&copy; {new Date().getFullYear()} Chiclu LLC</Text>
        <nav className="w-1/2 flex justify-between items-center">
          <Link href="/about">
            <Text color="gray">About</Text>
          </Link>
          <Link href="/terms">
            <Text color="gray">Terms</Text>
          </Link>
          <Link href="/privacy">
            <Text color="gray">Piracy</Text>
          </Link>
          <Link href="/help">
            <Text color="gray">Help</Text>
          </Link>
        </nav>
        <Flex gap="4">
          <Image src={FacebookSvg} alt="Facebook Image" />
          <Image src={TwitterSvg} alt="Twitter Image" />
          <Image src={InstagramSvg} alt="Facebook Image" />
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
