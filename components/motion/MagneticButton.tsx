"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
};

export default function MagneticButton({ children, className }: MagneticButtonProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      onMouseMove={(event) => {
        if (reduceMotion) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - bounds.left - bounds.width / 2) * 0.16;
        const y = (event.clientY - bounds.top - bounds.height / 2) * 0.16;
        event.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.transform = "translate(0, 0)";
      }}
      transition={{ type: "spring", stiffness: 280, damping: 16, mass: 0.35 }}
    >
      {children}
    </motion.div>
  );
}
