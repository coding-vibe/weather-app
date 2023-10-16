import { Navigate, Routes as ReactRoutes, Route } from 'react-router-dom';
import WeatherForecastTab from 'components/WeatherForecastTab';
import HistoricalWeatherDataTab from 'components/HistoricalWeatherDataTab';
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
              to={routes.WEATHER_FORECAST}
              replace
            />
          }
        />
        <Route
          path={routes.WEATHER_FORECAST}
          element={
            <TabPanel
              value={Tabs.WEATHER_FORECAST}
              index={Tabs.WEATHER_FORECAST}>
              <WeatherForecastTab />
            </TabPanel>
          }
        />
        <Route
          path={routes.HISTORICAL_WEATHER}
          element={
            <TabPanel
              value={Tabs.HISTORICAL_WEATHER_DATA}
              index={Tabs.HISTORICAL_WEATHER_DATA}>
              <HistoricalWeatherDataTab />
            </TabPanel>
          }
        />
      </Route>
      <Route
        path='*'
        element={
          <Navigate
            to={routes.WEATHER_FORECAST}
            replace
          />
        }
      />
    </ReactRoutes>
  );
}
