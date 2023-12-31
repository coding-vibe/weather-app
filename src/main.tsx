import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { StyledEngineProvider } from '@mui/material/styles';
import LocalizationProvider from 'components/LocalizationProvider';
import Routes from 'components/Routes';
import SettingsProvider from 'components/SettingsProvider';
import globalStyles from 'constants/globalStyles';
import theme from 'constants/theme';
import i18n from './i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles styles={globalStyles} />
          <SnackbarProvider>
            <I18nextProvider i18n={i18n}>
              <SettingsProvider>
                <LocalizationProvider>
                  <Routes />
                </LocalizationProvider>
              </SettingsProvider>
            </I18nextProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </HashRouter>
  </StrictMode>,
);
