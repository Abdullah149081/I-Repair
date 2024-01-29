import useScrollGrow from '@/hooks/ScrollGrowHook';
import { motion } from 'framer-motion';

const BatteryReplacement = () => {
  const { style, componentRef } = useScrollGrow();

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="col-span-12 h-[415px] rounded-2xl bg-dark-gray/70"
    />
  );
};

export default BatteryReplacement;
