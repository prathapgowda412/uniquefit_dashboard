import NotFound from './components/notFound';
import Product from './views/product';
import { Redirect } from 'react-router-dom';
import MainCompo from './components/mainCompo';
import Login from './layouts/login/login';
import Overview from './views/overview';
import DashboardLayout from './layouts/DashboardLayout';
const routes = () => [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'overview', element: <Overview /> },
      { path: 'products', element: <Product /> },
      { path: '*', element: <Redirect to='/404' /> },
    ],
  },
  {
    path: '/',
    element: <MainCompo />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Redirect to='/app/overview' /> },
      { path: '*', element: <Redirect to='/404' /> },
    ],
  },
];

export default routes;
