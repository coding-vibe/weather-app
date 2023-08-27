/* eslint-disable react/jsx-props-no-spreading */
import { Link, Outlet, useLocation } from 'react-router-dom';
import MUITabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Pathnames from 'constants/pathnames';
import Tabs from 'constants/tabs';

function Layout() {
  const location = useLocation();

  const a11yProps = (index: number) => ({
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  });

  return (
    <>
      <MUITabs
        value={
          location.pathname === (Pathnames.HISTORICAL as string)
            ? Tabs.HISTORICAL_FORECAST
            : Tabs.FUTURE_FORECAST
        }
        aria-label='forecast tabs'>
        <Tab
          label='Future forecast'
          to={Pathnames.FUTURE}
          component={Link}
          {...a11yProps(Tabs.FUTURE_FORECAST)}
        />
        <Tab
          label='Historical forecast'
          to={Pathnames.HISTORICAL}
          component={Link}
          {...a11yProps(Tabs.HISTORICAL_FORECAST)}
        />
      </MUITabs>
      <Outlet />
    </>
  );
}

export default Layout;
