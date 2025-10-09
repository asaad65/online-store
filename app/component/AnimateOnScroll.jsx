'use client';
import { motion } from 'framer-motion';
import { View } from './View'

export default function AnimateOnScroll({ children, direction = 'up', delay = 0 }) {
  const [ref, inView] = View();

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.6, delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      style={{ overflow: 'hidden' }}
    >
      {children}
    </motion.div>
  );
}