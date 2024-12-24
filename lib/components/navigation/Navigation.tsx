"use client";

import { Fragment, useState } from "react";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { navigation } from "@/lib/utils/constants";
import NextImage from "next/image";
import MobileMenuComponent from "./MobileMenu";
import AnchorLink from "./AnchorLink";

const NavigationComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      <MobileMenuComponent open={open} setOpen={() => setOpen(!open)} />
      <header className="relative">
        <nav aria-label="Top">
          {/* Secondary navigation */}
          <div className="tw-bg-white tw-border-b tw-border-gray-200"></div>
        </nav>
      </header>
    </div>
  );
};

export default NavigationComponent;
