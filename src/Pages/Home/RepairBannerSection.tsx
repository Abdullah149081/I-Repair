import mac from '@/assets/images/macbook-exposed.png';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const intro = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};
const introChild = {
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

const RepairBannerSection = () => {
  return (
    <motion.div
      variants={intro}
      initial="hidden"
      animate="visible"
      className="grid  xl:h-[calc(100vh-64px)] xl:grid-cols-2 xl:place-content-center"
    >
      <div className=" space-y-5">
        <motion.h1
          variants={introChild}
          className="flex flex-col text-nowrap text-5xl font-bold xl:text-8xl"
        >
          <span className="text-gray">Don't worry.</span>
          <span className="text-primary-foreground">We'll fix it.</span>
        </motion.h1>
        <motion.p
          variants={introChild}
          className="max-w-[50ch] text-lg text-dark-gray"
        >
          Welcome to{' '}
          <span className="font-semibold text-primary-foreground">iRepair</span>
          , your one-stop place for all kinds of
          <span className="font-semibold text-primary-foreground">
            {' '}
            Macbook repairs
          </span>{' '}
          and diagnostics.
        </motion.p>
        <motion.div variants={introChild}>
          {' '}
          <Button>Book a service </Button>
        </motion.div>
      </div>
      <div className="mt-16  xl:mt-0">
        <figure className=" mx-auto w-3/4 xl:w-[500px]">
          <img className="rotate-[-30deg] object-contain" src={mac} alt="mac" />
        </figure>
      </div>
    </motion.div>
  );
};

export default RepairBannerSection;
