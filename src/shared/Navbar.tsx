import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
  ];

  return (
    <Container>
      <header className="mt-4 h-16">
        <nav className="flex items-center justify-between">
          <h2 className="text-3xl font-medium">IRepair</h2>
          <div className="flex gap-5 ">
            <ul className="flex items-center justify-center gap-5">
              {navLinks.map((link) => (
                <li key={link.title} className="font-medium">
                  <NavLink to={link.path}>{link.title}</NavLink>
                </li>
              ))}
            </ul>
            <Button>Login</Button>
          </div>
        </nav>
      </header>
    </Container>
  );
}

export default Navbar;
