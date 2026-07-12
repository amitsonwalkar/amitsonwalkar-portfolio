"use client";

import { motion } from "framer-motion";

interface ScrollProgressProps {
  progress: number;
}

export default function ScrollProgress({ progress }: ScrollProgressProps) {
  return (
    <div className="absolute inset-x-0 bottom-0 h-px bg-slate-900/5 dark:bg-white/10">
      <motion.div
        className="h-full origin-left bg-sky-500 dark:bg-cyan-300"
        style={{ scaleX: progress / 100 }}
        aria-hidden="true"
      />
      <span className="sr-only">Page scrolled {Math.round(progress)} percent</span>
    </div>
  );
}
