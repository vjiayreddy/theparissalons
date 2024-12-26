"use client";
import {
  Box,
  Button,
  Container,
  Grid2,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import NextImage from "next/image";

const StyledAboutUsContainer = styled(Container)(({ theme }) => ({
  "& .left-side": {
    minHeight: 500,
    width: "100%",
    position: "relative",
    overflow: "hidden",
  },
  " .right-side": {
    minHeight: 500,
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const AboutUs = () => {
  return (
    <StyledAboutUsContainer maxWidth="xl" disableGutters>
      <Grid2 container alignItems="stretch">
        <Grid2 size={6}>
          <Box component="div" className="left-side">
            <NextImage
              fill={true}
              alt="studio"
              className="tw-size-full tw-object-cover"
              src="https://imagedelivery.net/ywtNy772PWwXecPtq2-tAQ/600ae406-f0d4-49a8-27f7-a18286125b00/quality=100"
            />
          </Box>
        </Grid2>
        <Grid2 size={6}>
          <Box component="div" className="right-side">
            <Grid2 container direction="column">
              <Grid2 size={12}>
                <div className="tw-pl-16 tw-pr-6 tw-md:ml-auto tw-md:w-2/3 tw-md:pl-16 tw-lg:w-1/2 tw-lg:pl-24 tw-lg:pr-0 tw-xl:pl-32">
                  <h2 className="tw-text-base/7 tw-font-semibold tw-text-gray-300">
                    About Us
                  </h2>
                  <Typography
                    variant="h1"
                    className="tw-mt-2 tw-text-4xl tw-font-medium tw-tracking-tight  tw-text-primary tw-sm:text-5xl"
                  >
                    We Tell Amazing Stories With The Paris Salon
                  </Typography>
                  <p className="tw-mt-6 tw-text-base/7 tw-text-gray-300">
                    Step into The Paris Salon, where exceptional style meets
                    inclusive beauty. Our master stylists excel in creating
                    perfect looks for everyone, blending classic elegance with
                    modern trends. In our sophisticated space, we deliver
                    premium cuts, colors, and styling services that celebrate
                    your unique identity.
                  </p>
                  <div className="tw-mt-8">
                    <Button size="large" variant="outlined" color="primary">
                      KNOW MORE
                    </Button>
                  </div>
                </div>
              </Grid2>
            </Grid2>
          </Box>
        </Grid2>
      </Grid2>
    </StyledAboutUsContainer>
  );
};

export default AboutUs;
