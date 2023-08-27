import { Routes, Route } from 'react-router-dom';
import FutureForecast from 'components/FutureForecast';
import LanguageProvider from 'components/SettingsProvider';
import Layout from 'components/Layout';
import TabPanel from 'components/TabPanel/TabPanel';
import ROUTES from 'constants/routes';
import Tabs from 'constants/tabs';

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route
          path={ROUTES.home}
          element={<Layout />}
        />
        <Route
          path={ROUTES.future}
          element={
            <TabPanel
              value={Tabs.FUTURE_FORECAST}
              index={Tabs.FUTURE_FORECAST}>
              <FutureForecast />
            </TabPanel>
          }
        />
        <Route
          path={ROUTES.historical}
          element={
            <TabPanel
              value={Tabs.HISTORICAL_FORECAST}
              index={Tabs.HISTORICAL_FORECAST}>
              Historical Forecast
            </TabPanel>
          }
        />
      </Routes>
    </LanguageProvider>
  );
}
