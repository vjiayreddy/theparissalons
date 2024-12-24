import { createTheme } from "@mui/material/styles";
import { APP_COLORS } from "./colors";
import {
  Poppins,
  Playfair_Display_SC,
  Merriweather,
} from "next/font/google";

const playfair = Playfair_Display_SC({
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const defaultTheme = createTheme();
const theme = createTheme({
  typography: {
    fontFamily: [
      poppins.style.fontFamily,
      playfair.style.fontFamily,
      merriweather.style.fontFamily,
    ].join(","),
    h1: {
      fontFamily: merriweather.style.fontFamily,
      fontWeight: 900,
    },
    h2: {
      fontFamily: poppins.style.fontFamily,
    },
    h3: {
      fontFamily: poppins.style.fontFamily,
    },
    h4: {
      fontFamily: poppins.style.fontFamily,
    },
    h5: {
      fontFamily: poppins.style.fontFamily,
    },
    h6: {
      fontFamily: poppins.style.fontFamily,
    },
    body1: {
      fontFamily: poppins.style.fontFamily,
    },
    body2: {
      fontFamily: poppins.style.fontFamily,
    },
    subtitle1: {
      fontFamily: poppins.style.fontFamily,
    },
    subtitle2: {
      fontFamily: poppins.style.fontFamily,
    },
  },
  palette: {
    primary: {
      main: APP_COLORS.primary,
    },
    secondary: {
      main: APP_COLORS.secondary,
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        color: "inherit",
        position: "fixed",
      },
      styleOverrides: {
        colorInherit: {
          borderBottom: `1px solid ${defaultTheme.palette.divider}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      defaultProps: {
        disableElevation: true,
        color: "secondary",
        variant: "contained",
        size: "medium",
      },
    },
  },
});

export default theme;
