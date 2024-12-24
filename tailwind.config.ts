import { APP_COLORS } from "./lib/mui/colors";

const {
  default: flattenColorPalette,
  // eslint-disable-next-line @typescript-eslint/no-require-imports
} = require("tailwindcss/lib/util/flattenColorPalette");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const colors = require("tailwindcss/colors");

const config = {
  prefix: "tw-",
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // This ensures Tailwind styles take precedence
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        quicksand: ["var(--font-quicksand)"],
        playfair: ["var(--font-playfair)"],
      },
      colors: {
        primary: APP_COLORS.primary,
        secondary: colors.zinc,
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [
    addVariablesForColors,
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("@tailwindcss/aspect-ratio"),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("@tailwindcss/forms"),
  ],
};

function addVariablesForColors({
  addBase,
  theme,
}: {
  addBase: any;
  theme: any;
}) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ":root": newVars,
  });
}

export default config;
