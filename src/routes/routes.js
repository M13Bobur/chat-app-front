import Layout from "containers/Home";
import Auth from "containers/Auth";
import Login from "views/Auth";
import { Navigate } from "react-router-dom";

import NewAppeals from "views/Supervisor/NewAppeals";
import SentAppeals from "views/Supervisor/SentAppeals";

import Category from "views/Admin/Category";
import Object from "views/Admin/Object";
import Sections from "views/Admin/Sections";
import Users from "views/Admin/Users";
import FormCreator from "components/FormCreator";
import Sectors from "../views/Admin/Sectors";
import CompletedAppeals from "views/Supervisor/CompletedAppeals";
import CanceledAppeals from "views/Supervisor/CanceledAppeals";
import HigherOrganization from "views/Supervisor/HigherOrganization";
import TGroups from "views/Admin/TGroups";
import Dashboard from "views/Supervisor/Dashboard";

export const adminRoutes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Sections /> },
      { path: "/category", element: <Category /> },
      { key: 1, title: "Бўлимлар", href: "/" },
      { path: "/object", element: <Object /> },
      { path: "/sectors", element: <Sectors /> },
      { path: "/add", element: <FormCreator /> },
      { path: "/users", element: <Users /> },
      { path: "/tgroups", element: <TGroups /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
  { path: "/login", index: true, element: <Login /> },
];
export const supervisorRoutes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/new-appeals", element: <NewAppeals /> },
      { path: "/sent-appeals", element: <SentAppeals /> },
      { path: "/completed-appeals", element: <CompletedAppeals /> },
      { path: "/canceled-appeals", element: <CanceledAppeals /> },
      { path: "/higherOrganization-appeals", element: <HigherOrganization /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
  { path: "/login", index: true, element: <Login /> },
];

export const publicRoutes = [
  {
    element: <Auth />,
    children: [
      { path: "/login", index: true, element: <Login /> },
      { path: "*", element: <Navigate to="/login" /> },
    ],
  },
];
