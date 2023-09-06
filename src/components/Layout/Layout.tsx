/* eslint-disable react/jsx-props-no-spreading */
import { Link, Outlet, useLocation } from 'react-router-dom';
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
        aria-label='forecast tabs'>
        <Tab
          label='Forecast'
          to={ROUTES.forecast}
          component={Link}
          {...a11yProps(Tabs.FORECAST)}
        />
        <Tab
          label='Historical forecast'
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
