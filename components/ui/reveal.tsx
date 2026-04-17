"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  distance?: number;
};

export function Reveal({ children, delay = 0, className, distance = 24 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance, scale: 0.985, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
