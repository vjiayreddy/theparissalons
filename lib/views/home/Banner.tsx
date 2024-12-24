"use client";

import { Box, styled, Typography } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import NextImage from "next/image";

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
    <StyledBanner className="tw-relative tw-w-full  tw-bg-gray-200">
      <Box component="div" className="content">
        <Typography
          variant="body1"
          className="tw-mt-2 tw-text-pretty tw-text-lg tw-font-medium tw-text-white  sm:tw-text-xl/8"
        >
          Luxury Hair Artistry
        </Typography>
        <Typography
          variant="h1"
          className="tw-text-balance  tw-uppercase tw-text-6xl  tw-tracking-tight tw-text-white tw-sm:text-6xl"
        >
          The Paris Salon
        </Typography>
      </Box>
      <NextImage
        quality={100}
        fill={true}
        src="/hero/1.jpeg"
        alt="home-banner"
        className="tw-object-cover tw-bg-center tw-grayscale tw-brightness-75"
        sizes="100vw"
      />
    </StyledBanner>
  );
};

export default Banner;
