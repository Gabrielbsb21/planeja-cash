"use client";

import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

import colorSchemes from "./colorSchemas";
import typography from "./typography";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const theme = createTheme({
  cssVariables: true,
  palette: colorSchemes(),
  typography: typography(inter.style.fontFamily),
});

export default theme;
