import Layout from '../containers/Home';
import Auth from '../containers/Auth';
import Login from '../views/Auth';
import { Navigate } from 'react-router-dom';
import Home from '../views/Home';
import Users from '../views/Users';

export const adminRoutes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        exact: true,
      },
      {
        path: '/user/:id',
        element: <Users />,
        exact: true,
      },
      { path: '*', element: <Navigate to='/' /> },
    ],
  },
];

export const publicRoutes = [
  {
    element: <Auth />,
    children: [
      { path: '/login', index: true, element: <Login /> },
      { path: '*', element: <Navigate to='/login' /> },
    ],
  },
];
