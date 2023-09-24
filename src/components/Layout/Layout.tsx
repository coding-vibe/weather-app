/* eslint-disable react/jsx-props-no-spreading */
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MUITabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ROUTES from 'constants/routes';
import Tabs from 'constants/tabs';

function Layout() {
  const location = useLocation();
  const a11yProps = (index: number) => ({
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  });
  const { t } = useTranslation();

  const activeTab = () => {
    switch (location.pathname) {
      case ROUTES.home:
        return Tabs.FORECAST;
      case ROUTES.forecast:
        return Tabs.FORECAST;
      case ROUTES.historical:
        return Tabs.HISTORICAL_FORECAST;
      default:
        throw new Error('Invalid route for determining active tab');
    }
  };
  return (
    <>
      <MUITabs
        value={activeTab()}
        aria-label={t('labels.layoutTabs')}>
        <Tab
          label={t('labels.forecastTab')}
          to={ROUTES.forecast}
          component={Link}
          {...a11yProps(Tabs.FORECAST)}
        />
        <Tab
          label={t('labels.historicalForecastTab')}
          to={ROUTES.historical}
          component={Link}
          {...a11yProps(Tabs.HISTORICAL_FORECAST)}
        />
      </MUITabs>
      <Outlet />
    </>
  );
}

export default Layout;
