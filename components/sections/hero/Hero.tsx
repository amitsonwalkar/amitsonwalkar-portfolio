"use client";

import { motion } from "framer-motion";
import HeroContent from "./Content";
import HeroImage from "./Image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#e0f2fe_34%,#f1f5f9_66%,#ecfeff_100%)] px-4 py-24 text-slate-950 dark:bg-[linear-gradient(135deg,#020617_0%,#111827_38%,#082f49_68%,#0f172a_100%)] dark:text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.14)_1px,transparent_1px)] [background-size:28px_28px] opacity-70 dark:opacity-30" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-white/70 to-transparent dark:from-slate-950/80" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.75fr)] lg:gap-16">
        <HeroContent />
        <HeroImage />
      </div>

      <motion.a
        href="#projects"
        aria-label="Scroll to projects"
        className="absolute bottom-6 left-1/2 hidden size-11 -translate-x-1/2 items-center justify-center border border-slate-900/10 bg-white/50 text-slate-700 shadow-sm backdrop-blur-xl transition hover:bg-white/80 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 md:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="h-4 w-px rounded-full bg-current" />
      </motion.a>
    </section>
  );
}
