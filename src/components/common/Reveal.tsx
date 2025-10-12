"use client";

import { motion, type MotionProps } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
} & MotionProps;

export function Reveal({ children, delay = 0, y = 24, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}