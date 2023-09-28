import { Navigate, Routes as ReactRoutes, Route } from 'react-router-dom';
import Forecast from 'components/Forecast';
import HistoricalForecast from 'components/HistoricalForecast';
import Layout from 'components/Layout';
import TabPanel from 'components/TabPanel';
import ROUTES from 'constants/routes';
import Tabs from 'constants/tabs';

// TODO: rename me to routes
export default function Routes() {
  return (
    <ReactRoutes>
      <Route
        path={ROUTES.home}
        element={<Layout />}>
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
      {/* TODO: make wildcard route */}
      <Route
        path='*'
        element={
          <Navigate
            to={ROUTES.forecast}
            replace
          />
        }
      />
    </ReactRoutes>
  );
}
