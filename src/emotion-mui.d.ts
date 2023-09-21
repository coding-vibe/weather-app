import { Theme as MuiTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme extends MuiTheme {
    width: {
      table: string;
      desktop: string;
      mobile: string;
    };
  }

  interface ThemeOptions {
    width?: {
      table?: string;
      desktop?: string;
      mobile?: string;
    };
  }
}