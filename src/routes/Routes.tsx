import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Home from '@/Pages/Home';
import About from '@/Pages/About';
import Services from '@/Pages/Services';

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
]);

export default router;
