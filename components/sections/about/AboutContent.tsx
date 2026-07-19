"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";
import { aboutIntro } from "./data";

export default function AboutContent() {
  return (
    <motion.div
      className="max-w-3xl"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <p className="inline-flex rounded-full border border-sky-500/20 bg-white/55 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-sky-700 shadow-sm backdrop-blur-xl dark:border-cyan-300/20 dark:bg-white/10 dark:text-cyan-200">
        {aboutIntro.eyebrow}
      </p>

      <h2 className="mt-5 font-heading text-4xl font-semibold leading-tight tracking-normal text-slate-950 dark:text-white sm:text-5xl">
        {aboutIntro.heading}
      </h2>

      <div className="mt-6 space-y-5 text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
        {aboutIntro.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-7 rounded-2xl border border-sky-500/15 bg-white/55 p-5 shadow-sm backdrop-blur-xl dark:border-cyan-300/15 dark:bg-white/10">
        <div className="flex gap-3">
          <Sparkles className="mt-1 size-5 shrink-0 text-sky-600 dark:text-cyan-200" aria-hidden="true" />
          <p className="text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-base">
            {aboutIntro.passion}
          </p>
        </div>
      </div>

      <Button
        asChild
        size="lg"
        className="mt-8 rounded-full bg-slate-950 text-white shadow-lg shadow-sky-900/10 hover:-translate-y-0.5 hover:bg-sky-700 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200"
      >
        <a href={siteConfig.resume} target="_blank" rel="noreferrer">
          Download Resume
          <Download aria-hidden="true" data-icon="inline-end" />
        </a>
      </Button>
    </motion.div>
  );
}
