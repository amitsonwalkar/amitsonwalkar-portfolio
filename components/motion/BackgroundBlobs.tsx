"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function BackgroundBlobs() {
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 15, repeat: Infinity, repeatType: "mirror" as const, ease: "easeInOut" as const };

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -left-32 top-24 size-96 rounded-full bg-sky-400/15 blur-3xl dark:bg-cyan-400/10"
        animate={reduceMotion ? undefined : { x: [0, 100, 30], y: [0, 45, 90], scale: [1, 1.18, 0.96] }}
        transition={transition}
      />
      <motion.div
        className="absolute -right-32 top-[42%] size-[28rem] rounded-full bg-teal-300/15 blur-3xl dark:bg-blue-500/10"
        animate={reduceMotion ? undefined : { x: [0, -90, -25], y: [0, -65, 30], scale: [1, 0.9, 1.13] }}
        transition={{ ...transition, delay: 1.5 }}
      />
      <motion.div
        className="absolute bottom-[-10rem] left-[35%] size-80 rounded-full bg-orange-200/20 blur-3xl dark:bg-indigo-500/10"
        animate={reduceMotion ? undefined : { x: [0, 70, -45], y: [0, -60, -20] }}
        transition={{ ...transition, delay: 0.8 }}
      />
    </div>
  );
}
