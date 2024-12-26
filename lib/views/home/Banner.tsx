"use client";

import { Box, Button, styled, Typography } from "@mui/material";
import NextImage from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "/hero/4.webp",
    brand: "The Paris Salon",
    title: "PREMIUM HAIR",
    subtitle: "SERVICE FOR MEN",
    description: "",
  },
  {
    id: 2,
    image: "/hero/5.webp",
    brand: "The Paris Salon",
    title: "PREMIUM HAIR",
    subtitle: "SERVICE FOR WOMEN",
    description: "",
  },
  {
    id: 3,
    image: "/hero/6.webp",
    brand: "The Paris Salon",
    title: "PREMIUM HAIR",
    subtitle: "MAKEUP SERVICE",
    description: "",
  },
  {
    id: 4,
    image: "/hero/7.webp",
    brand: "The Paris Salon",
    title: "PREMIUM NAIL",
    subtitle: "SERVICE",
    description: "",
  },
];

const StyledBanner = styled(Box)(({ theme }) => ({
  height: 600,
  background: theme.palette.common.black,
  position: "relative",
  overflow: "hidden",
  "& .next-image": {
    objectPosition: "cover",
  },
  "& .content": {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Banner = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      speed={1000}
      navigation={false}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="h-full w-full"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <StyledBanner className="tw-relative tw-w-full  tw-bg-gray-200">
            <Box component="div" className="content">
              <Typography
                variant="body1"
                className="tw-text-pretty tw-text-lg tw-font-medium tw-text-primary  sm:tw-text-xl/8"
              >
                {slide.brand}
              </Typography>
              <Typography
                variant="h1"
                className="tw-mt-5 tw-text-balance tw-uppercase tw-text-5xl  tw-tracking-tight tw-text-white tw-sm:text-6xl"
              >
                {slide.title}
              </Typography>
              <Typography
                variant="h1"
                className="tw-text-balance tw-uppercase tw-text-5xl  tw-tracking-tight tw-text-white tw-sm:text-6xl"
              >
                {slide.subtitle}
              </Typography>
              <Button
                size="large"
                color="primary"
                variant="contained"
                className="tw-mt-5"
                //className="tw-mt-5 tw-text-white tw-border tw-border-white"
              >
                BOOK NOW
              </Button>
            </Box>
            <NextImage
              quality={100}
              fill={true}
              priority={true}
              src={slide.image}
              alt={slide.title}
              className="tw-object-cover tw-bg-center tw-grayscale tw-brightness-50"
              sizes="100vw"
            />
          </StyledBanner>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
