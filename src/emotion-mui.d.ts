import { Theme as MuiTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    width: {
      table: number;
      desktopWidth: number;
      mobileWidth: number;
    };
  }

  interface ThemeOptions {
    width?: {
      table?: number;
      desktop?: number;
      mobile?: number;
    };
  }
}