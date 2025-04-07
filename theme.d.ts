import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      white: string;
      credit: string;
      inputBorder: string;
      iconGray: string;
      lightGray: string;
      softWhite: string;
      black: string;
      darkText: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      white: string;
      credit: string;
      inputBorder: string;
      iconGray: string;
      lightGray: string;
      softWhite: string;
      black: string;
      darkText: string;
    };
  }
}
