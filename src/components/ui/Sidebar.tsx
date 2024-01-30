import { cn } from '@/lib/utils';
import { BadgePlus, Home, LayoutDashboard, ListOrdered } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navAdmin = [
    {
      name: 'Home',
      path: '/',
      icon: Home,
    },
    {
      name: 'Dashboard',
      path: '/admin/dashBoard',
      icon: LayoutDashboard,
    },
    {
      name: 'ServicesList',
      path: '/admin/services-list',
      icon: ListOrdered,
    },
    {
      name: 'ServicesAdd',
      path: '/admin/services-add',
      icon: BadgePlus,
    },
  ];

  return (
    <aside className="sticky left-0 top-0 col-span-2 h-screen overflow-y-scroll bg-dark-gray/30 text-white shadow-inner">
      <nav>
        <ul className="mt-4">
          {navAdmin.map((item) => (
            <li className="p-3" key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'flex items-center rounded-md bg-primary p-2 text-lg font-bold uppercase text-primary-foreground transition-all hover:bg-primary/20 hover:text-white',
                    {
                      'bg-dark-gray text-white': isActive,
                    }
                  )
                }
              >
                {item.icon && (
                  <span>
                    <item.icon />
                  </span>
                )}
                <span className="ml-3 truncate">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
