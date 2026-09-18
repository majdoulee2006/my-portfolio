import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-sky-400 via-indigo-500 to-emerald-400 origin-left shadow-[0_0_12px_rgba(56,189,248,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
};
