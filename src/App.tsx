import { Navigate, Routes, Route } from 'react-router-dom';
import Forecast from 'components/Forecast';
import HistoricalForecast from 'components/HistoricalForecast';
import Layout from 'components/Layout';
import TabPanel from 'components/TabPanel/TabPanel';
import ROUTES from 'constants/routes';
import Tabs from 'constants/tabs';

// TODO: rename me to routes
export default function App() {
  return (
    <Routes>
      <Route
        path={ROUTES.home}
        element={<Layout />}>
        {/* TODO: make wildcard route */}
        <Route
          index
          element={
            <Navigate
              to={ROUTES.forecast}
              replace
            />
          }
        />
        <Route
          path={ROUTES.forecast}
          element={
            <TabPanel
              value={Tabs.FORECAST}
              index={Tabs.FORECAST}>
              <Forecast />
            </TabPanel>
          }
        />
        <Route
          path={ROUTES.historical}
          element={
            <TabPanel
              value={Tabs.HISTORICAL_FORECAST}
              index={Tabs.HISTORICAL_FORECAST}>
              <HistoricalForecast />
            </TabPanel>
          }
        />
      </Route>
    </Routes>
  );
}
