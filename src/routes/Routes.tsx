import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import About from '@/Pages/About';
import Home from '@/Pages/Home';
import Services from '@/Pages/Services';
import DashBoard from '@/Pages/admin/DashBoard';
import ServicesAdd from '@/Pages/admin/ServicesAdd';
import ServicesList from '@/Pages/admin/ServicesList';
import DashBoardLayout from '@/components/layout/DashBoardLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/services',
        element: <Services />,
      },
    ],
  },
  {
    path: '/admin',
    element: <DashBoardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashBoard" />,
      },
      {
        path: 'dashBoard',
        element: <DashBoard />,
      },
      {
        path: 'services-list',
        element: <ServicesList />,
      },
      {
        path: 'services-add',
        element: <ServicesAdd />,
      },
    ],
  },
]);

export default router;
