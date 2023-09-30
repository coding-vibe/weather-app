import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StyledEngineProvider } from '@mui/material/styles';
import SettingsProvider from 'components/SettingsProvider';
import theme from 'constants/theme';
import i18n from './i18n';
import App from './App';
import { globalStyles } from './globalStyles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles styles={globalStyles} />
          <SnackbarProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <I18nextProvider i18n={i18n}>
                <SettingsProvider>
                  <App />
                </SettingsProvider>
              </I18nextProvider>
            </LocalizationProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </StrictMode>,
);
