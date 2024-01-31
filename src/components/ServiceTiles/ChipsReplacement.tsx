import { motion } from 'framer-motion';
import useScrollGrow from '@/hooks/ScrollGrowHook';

const ChipsReplacement = () => {
  const { style, componentRef } = useScrollGrow();

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="col-span-6 h-[415px] rounded-2xl bg-dark-gray/70 lg:col-span-5"
    />
  );
};

export default ChipsReplacement;
