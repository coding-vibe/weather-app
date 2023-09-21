import { Theme as MuiTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface ThemeOptions {
    width: {
      table: string;
      desktop: string;
      mobile: string;
    };
  }

  interface Theme extends ThemeOptions {}
}

declare module '@emotion/react' {
  interface Theme extends MuiTheme {}
}