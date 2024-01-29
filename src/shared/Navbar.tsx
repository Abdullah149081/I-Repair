import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/button';

const animatedNav = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const animatedNavChild = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
    },
  },
};

function Navbar() {
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
  ];

  return (
    <header className="z-10 h-16 w-full  bg-white xl:fixed">
      <Container className="mt-4">
        <motion.nav
          variants={animatedNav}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-between"
        >
          <h2 className="text-3xl">IRepair</h2>
          <div className="flex gap-5 ">
            <motion.ul className="flex items-center justify-center gap-5">
              {navLinks.map((link) => (
                <motion.li
                  variants={animatedNavChild}
                  key={link.title}
                  className="font-medium"
                >
                  <NavLink to={link.path}>{link.title}</NavLink>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={animatedNavChild}>
              {' '}
              <Button>Login</Button>
            </motion.div>
          </div>
        </motion.nav>
      </Container>
    </header>
  );
}

export default Navbar;
