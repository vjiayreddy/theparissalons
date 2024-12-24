import React from "react";
import NextLink from "next/link";

interface AnchorLinkProps {
  href: string;
  name: string;
}

const AnchorLink = ({ href, name }: AnchorLinkProps) => {
  return (
    <NextLink
      href={href}
      className="font-quicksand font-semibold flex items-center text-sm  text-gray-700 hover:text-gray-800"
    >
      {name}
    </NextLink>
  );
};

export default AnchorLink;
