"use client";

import { motion } from "framer-motion";
import { highlights } from "./data";

export default function Highlights() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {highlights.map(({ title, description, icon: Icon }, index) => (
        <motion.article
          key={title}
          className="group rounded-3xl border border-slate-900/10 bg-white/55 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/75 hover:shadow-xl hover:shadow-sky-950/10 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15 dark:hover:shadow-black/20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
        >
          <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-teal-500 text-white shadow-lg shadow-sky-900/15 transition group-hover:scale-105 dark:from-cyan-300 dark:to-sky-500 dark:text-slate-950">
            <Icon className="size-5" aria-hidden="true" />
          </div>
          <h3 className="mt-5 text-lg font-semibold text-slate-950 dark:text-white">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>
        </motion.article>
      ))}
    </div>
  );
}
