"use client";

import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import Buttons from "./Buttons";
import Social from "./Social";

const techStack = ["Java", "Spring Boot", "Angular", "Flutter", "Cloud", "Firebase"];

const stats = [
  { value: "13+", label: "Years" },
  { value: "40+", label: "Projects" },
  { value: "5", label: "Core Stacks" },
];

export default function Content() {
  return (
    <motion.div
      className="max-w-3xl"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.p
        className="mb-5 inline-flex border border-sky-500/20 bg-white/50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-sky-700 shadow-sm backdrop-blur-xl dark:border-cyan-300/20 dark:bg-white/10 dark:text-cyan-200"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.45 }}
      >
        Hello, I&apos;m
      </motion.p>

      <h1 className="font-heading text-5xl font-semibold leading-tight tracking-normal text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
        <motion.span
          className="block"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.65, ease: "easeOut" }}
        >
          {siteConfig.name}
        </motion.span>
        <motion.span
          className="mt-2 block bg-gradient-to-r from-sky-700 via-teal-600 to-slate-900 bg-clip-text text-transparent dark:from-cyan-200 dark:via-sky-300 dark:to-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.65, ease: "easeOut" }}
        >
          {siteConfig.title}
        </motion.span>
      </h1>

      <motion.p
        className="mt-7 max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.44, duration: 0.55 }}
      >
        {siteConfig.description}
      </motion.p>

      <motion.div
        className="mt-8 flex flex-wrap gap-2.5"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.54, duration: 0.5 }}
      >
        {techStack.map((tech) => (
          <span
            key={tech}
            className="border border-slate-900/10 bg-white/55 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      <Buttons />
      <Social />

      <motion.div
        className="mt-10 grid max-w-xl grid-cols-3 border border-slate-900/10 bg-white/45 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/10"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.72, duration: 0.55 }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="px-4 py-5 text-center [&:not(:last-child)]:border-r [&:not(:last-child)]:border-slate-900/10 dark:[&:not(:last-child)]:border-white/10"
          >
            <div className="text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">
              {stat.value}
            </div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
