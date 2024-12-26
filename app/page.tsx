"use client";

import AboutUs from "@/lib/views/home/AboutUs";
import Banner from "@/lib/views/home/Banner";
import BrandParners from "@/lib/views/home/BrandParners";
import OpeningHours from "@/lib/views/home/OpeningHours";
//import OurStory from "@/lib/views/home/OurStory";

const HomePage = () => {
  return (
    <>
      <Banner />
      <BrandParners />
      <AboutUs/>
      <OpeningHours/>
    </>
  );
};
export default HomePage;
