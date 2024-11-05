import React from "react";
import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white px-20 py-6">
      <Flex justify="between" align="center">
        <Text size="4" weight="light" className="tracking-[.25em]">
          CHICLU
        </Text>
        <nav>
          <ul className="flex items-center flex-row gap-14">
            <Link href="/help">Help</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/login">Log in</Link>
            <Link href="/signup">Sign Up</Link>
          </ul>
        </nav>
      </Flex>
    </header>
  );
}
