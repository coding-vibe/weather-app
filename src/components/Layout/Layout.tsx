import { Link, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MUITabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import routes from 'constants/routes';
import Tabs from 'constants/tabs';
import * as classes from './styles';

function Layout() {
  const location = useLocation();
  const a11yProps = (index: number) => ({
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  });
  const { t } = useTranslation();

  const getActiveTab = () => {
    switch (location.pathname) {
      case routes.HOME:
        return Tabs.WEATHER_FORECAST;
      case routes.WEATHER_FORECAST:
        return Tabs.WEATHER_FORECAST;
      case routes.HISTORICAL_WEATHER:
        return Tabs.HISTORICAL_WEATHER_DATA;
      default:
        throw new Error('Invalid route for determining active tab');
    }
  };

  return (
    <div css={classes.wrap}>
      <MUITabs
        aria-label={t('labels.layoutTabs')}
        value={getActiveTab()}
        variant='fullWidth'>
        <Tab
          label={t('labels.weatherForecastTab')}
          to={routes.WEATHER_FORECAST}
          component={Link}
          {...a11yProps(Tabs.WEATHER_FORECAST)}
        />
        <Tab
          label={t('labels.historicalWeatherDataTab')}
          to={routes.HISTORICAL_WEATHER}
          component={Link}
          {...a11yProps(Tabs.HISTORICAL_WEATHER_DATA)}
        />
      </MUITabs>
      <Outlet />
    </div>
  );
}

export default Layout;
