"use client";

import { useState } from "react";
import MobileMenuComponent from "./MobileMenu";

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
