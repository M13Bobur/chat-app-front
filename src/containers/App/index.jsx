import React from "react";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import {
  adminRoutes,
  publicRoutes,
  supervisorRoutes,
} from "../../routes/routes";

const routes = {
  moderator: supervisorRoutes,

  admin: adminRoutes,
};

const App = () => {
  const { role, token } = useSelector((state) => state.authReducer);
  const content = useRoutes(token ? routes[role] : publicRoutes);
  return <>{content}</>;
};

export default React.memo(App);
