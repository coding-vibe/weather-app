import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StyledEngineProvider } from '@mui/material/styles';
import SettingsProvider from 'components/SettingsProvider';
import ThemeProvider from 'components/ThemeProvider';
import { globalStyles } from './globalStyles';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider>
          <CssBaseline />
          <GlobalStyles styles={globalStyles} />
          <SnackbarProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <SettingsProvider>
                <App />
              </SettingsProvider>
            </LocalizationProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </StrictMode>,
);
