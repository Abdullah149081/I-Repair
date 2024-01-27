import { Outlet, ScrollRestoration } from 'react-router-dom';

function MainLayout() {
  return (
    <div>
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}

export default MainLayout;
