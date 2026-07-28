import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[90] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #4F8CFF, #7C3AED, #22D3EE)',
        boxShadow: '0 0 10px rgba(79, 140, 255, 0.7)',
      }}
    />
  );
}
