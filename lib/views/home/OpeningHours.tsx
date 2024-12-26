import React from "react";
import {
  Box,
  Button,
  Container,
  Grid2,
  styled,
  Typography,
} from "@mui/material";

const StyledOpeningHoursContainer = styled(Container)(() => ({
  paddingTop: 100,
  paddingBottom: 100,
}));

const OpeningHours = () => {
  return (
    <StyledOpeningHoursContainer maxWidth="xl" disableGutters>
      <Grid2 container alignItems="stretch" justifyContent="center">
        <Grid2
          component="div"
          size={6}
          container
          spacing={3}
          direction="column"
          className="tw-border-r-2"
        >
          <Grid2 size={12}>
            <Typography textAlign="center" variant="h6">
              You Are Welcome
            </Typography>
          </Grid2>
          <Grid2 size={12}>
            <Typography
              textAlign="center"
              variant="h1"
              className="tw-text-5xl tw-uppercase tw-font-medium tw-tracking-tight"
            >
              Opening Hours
            </Typography>
          </Grid2>
          <Grid2
            container
            size={12}
            alignItems="center"
            justifyContent="center"
          >
            <Grid2>
              <Button size="large">BOOK NOW</Button>
            </Grid2>
            <Grid2>
              <Button variant="outlined" size="large">
                Get A QUITE
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 size={6}>
          <Box component="div"  height="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Grid2 spacing={3} container direction="column" justifyContent="center">
              <Grid2 size={12}>
                <Typography variant="h6">
                  WORKING DAYS / 14:00 - 20:00
                </Typography>
              </Grid2>
              <Grid2 size={12}>
                <Typography variant="h6" className="tw-text-gray-500">SATURDAY / 09:00 - 17:00</Typography>
              </Grid2>
              <Grid2 size={12}>
                <Typography variant="h6" className="tw-text-gray-500">SUNDAY / CLOSED</Typography>
              </Grid2>
            </Grid2>
          </Box>
        </Grid2>
      </Grid2>
    </StyledOpeningHoursContainer>
  );
};

export default OpeningHours;
