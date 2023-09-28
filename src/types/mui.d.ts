import { Theme as MuiTheme } from '@mui/material/styles';

// TODO: split declarations for each package to a separate files. Put all type definitions to types folder
declare module '@mui/material/styles' {
  interface ThemeOptions {
    width: {
      table: string;
      desktop: string;
      mobile: string;
    };
  }

  interface Theme extends ThemeOptions { }
}