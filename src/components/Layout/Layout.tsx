import { Link, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MUITabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import routes from 'constants/routes';
import Tabs from 'constants/tabs';

function Layout() {
  const location = useLocation();
  const a11yProps = (index: number) => ({
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  });
  const { t } = useTranslation();

  const getActiveTab = () => {
    switch (location.pathname) {
      // TODO: remove HOME
      case routes.HOME:
        return Tabs.FORECAST;
      case routes.FORECAST:
        return Tabs.FORECAST;
      case routes.HISTORICAL:
        return Tabs.HISTORICAL_WEATHER_DATA;
      default:
        throw new Error('Invalid route for determining active tab');
    }
  };

  return (
    // TODO: limit max-width of content to 1000px. Remove this limitation from the table
    // Center this container
    <div>
      <MUITabs
        value={getActiveTab()}
        aria-label={t('labels.layoutTabs')}>
        <Tab
          label={t('labels.forecastTab')}
          to={routes.FORECAST}
          component={Link}
          {...a11yProps(Tabs.FORECAST)}
        />
        <Tab
          label={t('labels.historicalWeatherDataTab')}
          to={routes.HISTORICAL}
          component={Link}
          {...a11yProps(Tabs.HISTORICAL_WEATHER_DATA)}
        />
      </MUITabs>
      <Outlet />
    </div>
  );
}

export default Layout;
