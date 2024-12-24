"use client";
import React from "react";
import { Container, styled } from "@mui/material";
import Marquee from "react-fast-marquee";
import BrandCard from "@/lib/components/cards/BrandCard";

const StyledBrandParnersContainer = styled(Container)(({ theme }) => ({
  paddingTop: 20,
  paddingBottom: 20,
}));

const ourBrandParners = [
  "https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2021/09/client-logo-02.png",
  "https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2021/09/client-logo-03.png",
  "https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2021/09/client-logo-05.png",
  "https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2021/09/client-logo-04.png",
  "https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2021/09/client-logo-01.png",
];

const BrandParners = () => {
  return (
    <StyledBrandParnersContainer maxWidth="xl">
      <Marquee autoFill={true}>
        {ourBrandParners.map((item) => (
          <BrandCard key={item} imgUrl={item} />
        ))}
      </Marquee>
    </StyledBrandParnersContainer>
  );
};

export default BrandParners;
