"use client";

import { motion } from "framer-motion";
import { quickFacts } from "./data";

export default function QuickFacts() {
  return (
    <motion.div
      className="rounded-3xl border border-slate-900/10 bg-white/50 p-5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/10 sm:p-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {quickFacts.map((fact) => (
          <div
            key={fact.label}
            className="rounded-2xl border border-slate-900/10 bg-white/60 p-4 dark:border-white/10 dark:bg-white/10"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-700 dark:text-cyan-200">
              {fact.label}
            </p>
            <p className="mt-2 text-sm font-semibold leading-6 text-slate-950 dark:text-white">
              {fact.value}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
