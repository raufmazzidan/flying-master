import { createTheme } from "@mantine/core";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const theme = createTheme({
  primaryColor: "primary",
  colors: {
    primary: [
      "#ffe8e8",
      "#ffcfcf",
      "#ff9c9d",
      "#fd6666",
      "#fc3939",
      "#fb1e1c",
      "#fc0c0c",
      "#e10002",
      "#c90000",
      "#af0000",
    ],
  },
  shadows: {},
  headings: {
    fontFamily: roboto.style.fontFamily,
  },
  fontFamily: roboto.style.fontFamily,
});

export default theme;
