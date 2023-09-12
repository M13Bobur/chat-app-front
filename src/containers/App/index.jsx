import React from 'react';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import {
  adminRoutes,
  publicRoutes,
} from '../../routes/routes';

const App = () => {
  const { token } = useSelector((state) => state.authReducer);
  const content = useRoutes(token ? adminRoutes : publicRoutes);
  return <>{content}</>;
};

export default React.memo(App);
