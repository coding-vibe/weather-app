import { Navigate, Routes as ReactRoutes, Route } from 'react-router-dom';
import Forecast from 'components/Forecast';
import HistoricalWeatherData from 'components/HistoricalWeatherData';
import Layout from 'components/Layout';
import TabPanel from 'components/TabPanel';
import routes from 'constants/routes';
import Tabs from 'constants/tabs';

export default function Routes() {
  return (
    <ReactRoutes>
      <Route
        path={routes.HOME}
        element={<Layout />}>
        <Route
          index
          element={
            <Navigate
              to={routes.FORECAST}
              replace
            />
          }
        />
        <Route
          path={routes.FORECAST}
          element={
            <TabPanel
              value={Tabs.FORECAST}
              index={Tabs.FORECAST}>
              {/* TODO: ForecastTab */}
              <Forecast />
            </TabPanel>
          }
        />
        <Route
          path={routes.HISTORICAL}
          element={
            <TabPanel
              value={Tabs.HISTORICAL_WEATHER_DATA}
              index={Tabs.HISTORICAL_WEATHER_DATA}>
              <HistoricalWeatherData />
            </TabPanel>
          }
        />
      </Route>
      <Route
        path='*'
        element={
          <Navigate
            to={routes.FORECAST}
            replace
          />
        }
      />
    </ReactRoutes>
  );
}
