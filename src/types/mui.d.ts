import { Theme as MuiTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface ThemeOptions {
    width: {
      desktop: string;
      tablet: string;
    };
  }

  interface Theme extends ThemeOptions {}
}
