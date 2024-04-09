import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import DashboardHome from '../pages/DashboardHome/DashboardHome';
import Settings from '../pages/Settings/Settings';
import User from '../pages/User/User';

const LayoutRouter = () => {
  return (
    <Router>
  <DefaultLayout headerTitle="Dashboard">
        <Routes>
          <Route path="/" Component={DashboardHome}  />
          <Route path="/users" Component={User} />
          <Route path="/settings" Component={Settings} />
          <Route path="/dashboard" Component={DashboardHome} />
        </Routes>
      </DefaultLayout>
    </Router>
  );
};

export default LayoutRouter;
