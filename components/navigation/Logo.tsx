"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

interface LogoProps {
  onNavigate: (href: string) => void;
}

export default function Logo({ onNavigate }: LogoProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onNavigate("#home")}
      className="group flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40"
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      aria-label="Go to home"
    >
      <span className="flex size-10 items-center justify-center bg-slate-950 text-sm font-black text-white shadow-lg shadow-sky-900/10 transition-colors group-hover:bg-sky-700 dark:bg-white dark:text-slate-950 dark:group-hover:bg-cyan-200">
        AS
      </span>
      <span className="hidden leading-tight sm:block">
        <span className="block text-sm font-bold text-slate-950 dark:text-white">
          {siteConfig.name}
        </span>
        <span className="block text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Portfolio
        </span>
      </span>
    </motion.button>
  );
}
