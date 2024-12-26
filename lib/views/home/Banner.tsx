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
    image:
      "https://imagedelivery.net/ywtNy772PWwXecPtq2-tAQ/8365ccb7-e082-41b6-d1cb-b082c3673000/quality=100",
    brand: "The Paris Salon",
    title: "PREMIUM HAIR",
    subtitle: "SERVICE FOR MEN",
    description: "",
  },
  {
    id: 2,
    image:
      "https://imagedelivery.net/ywtNy772PWwXecPtq2-tAQ/b331fa9a-a9d8-4f33-155a-7ca76b468f00/quality=100",
    brand: "The Paris Salon",
    title: "PREMIUM HAIR",
    subtitle: "SERVICE FOR WOMEN",
    description: "",
  },
  {
    id: 3,
    image:
      "https://imagedelivery.net/ywtNy772PWwXecPtq2-tAQ/3a8723cc-cb47-4030-5bc0-76321024d600/quality=100",
    brand: "The Paris Salon",
    title: "PREMIUM HAIR",
    subtitle: "MAKEUP SERVICE",
    description: "",
  },

  {
    id: 4,
    image:
      "https://imagedelivery.net/ywtNy772PWwXecPtq2-tAQ/9bbbe59c-4b8a-4014-7685-7cd00618be00/quality=100",
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
              quality={75}
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
