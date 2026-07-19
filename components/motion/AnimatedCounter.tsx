"use client";

import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type AnimatedCounterProps = {
  value: string;
};

export default function AnimatedCounter({ value }: AnimatedCounterProps) {
  const element = useRef<HTMLSpanElement>(null);
  const isInView = useInView(element, { once: true, amount: 0.8 });
  const reduceMotion = useReducedMotion();
  const number = Number.parseInt(value, 10) || 0;
  const suffix = value.replace(/^\d+/, "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toString());

  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) {
      count.set(number);
      return;
    }
    const controls = animate(count, number, { duration: 1.2, ease: [0.16, 1, 0.3, 1] });
    return controls.stop;
  }, [count, isInView, number, reduceMotion]);

  return (
    <span ref={element}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
