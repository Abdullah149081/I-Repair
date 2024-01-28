import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '@/shared/Navbar';

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}

export default MainLayout;
