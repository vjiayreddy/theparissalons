"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { Grid2, styled, Typography } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import NextLink from "next/link";

const StyledAppNavigation = styled(AppBar)(({ theme }) => ({
  "& .menu-icon": {
    display: "none",
    [theme.breakpoints.only("xs")]: {
      display: "block",
    },
  },
  "& .MuiLink-root": {
    textDecoration: "none",
  },
}));

const AppNavigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppNavigation position="static">
        <Toolbar>
          <Box width="100%">
            <Grid2 container spacing={2} alignItems="center">
              <Grid2 size="auto">
                <IconButton
                  className="menu-icon"
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              </Grid2>
              <Grid2 size="auto">
                <Grid2 size="auto">
                  <Typography variant="h1" className="tw-text-base/7 tw-font-semibold tw-tracking-tight tw-text-gray-900">Paris Salon</Typography>
                </Grid2>
              </Grid2>
              <Grid2
                size="grow"
                container
                alignItems="center"
                //flexDirection="column"
                justifyContent="center"
                spacing={3}
              >
                <Grid2 size="auto">
                  <MuiLink
                    href="#"
                    component={NextLink}
                    color="secondary"
                    variant="body1"
                  >
                    Home
                  </MuiLink>
                </Grid2>
                <Grid2 size="auto">
                  <MuiLink
                    href="#"
                    component={NextLink}
                    color="secondary"
                    variant="body1"
                  >
                    Services
                  </MuiLink>
                </Grid2>
                <Grid2 size="auto">
                  <MuiLink
                    href="#"
                    component={NextLink}
                    color="secondary"
                    variant="body1"
                  >
                    Blog
                  </MuiLink>
                </Grid2>
                <Grid2 size="auto">
                  <MuiLink
                    href="#"
                    component={NextLink}
                    color="secondary"
                    variant="body1"
                  >
                    About
                  </MuiLink>
                </Grid2>
                <Grid2 size="auto">
                  <MuiLink
                    href="#"
                    component={NextLink}
                    color="secondary"
                    variant="body1"
                  >
                    Contact
                  </MuiLink>
                </Grid2>
              </Grid2>
              <Grid2 size="auto">
                <Button>BOOK NOW</Button>
              </Grid2>
            </Grid2>
          </Box>
        </Toolbar>
      </StyledAppNavigation>
    </Box>
  );
};

export default AppNavigation;
