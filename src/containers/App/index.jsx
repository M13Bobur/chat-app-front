import React from 'react';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import {
  adminRoutes,
  publicRoutes,
  // organizationRoutes,
  // zavhozRoutes,
} from '../../routes/routes';

const App = () => {
  const routes = {
    admin: adminRoutes,
    // organization: organizationRoutes,
    // manager: zavhozRoutes,
  };
  const { token, role } = useSelector((state) => state.authReducer);
  // !token ? routes[role] : publicRoutes
  const content = useRoutes(adminRoutes);
  return <>{content}</>;
};

export default React.memo(App);
