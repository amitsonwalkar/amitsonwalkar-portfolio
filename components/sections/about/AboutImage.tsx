"use client";

import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { profileHighlights } from "./data";

export default function AboutImage() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[430px] lg:ml-auto"
      initial={{ opacity: 0, x: 34, scale: 0.97 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="absolute inset-6 -z-10 rotate-3 rounded-[2rem] border border-sky-500/20 bg-sky-400/20 blur-sm dark:border-cyan-300/20 dark:bg-cyan-300/10" />
      <motion.div
        className="rounded-[2rem] border border-white/70 bg-white/55 p-4 shadow-2xl shadow-sky-950/10 backdrop-blur-2xl dark:border-white/15 dark:bg-white/10 dark:shadow-black/30"
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
      >
        <div className="relative aspect-[4/4.6] overflow-hidden rounded-[1.5rem] border border-slate-900/10 bg-slate-200 dark:border-white/10 dark:bg-slate-900">
          <Image
            src={siteConfig.profileImage}
            fill
            sizes="(min-width: 1024px) 430px, 88vw"
            alt={siteConfig.name}
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-5 text-white">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-100">
              {siteConfig.yearsOfExperience} years of experience
            </p>
            <p className="mt-1 text-2xl font-semibold">{siteConfig.title}</p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-slate-900/10 bg-white/55 p-4 dark:border-white/10 dark:bg-white/10">
          <MapPin className="size-4 text-sky-600 dark:text-cyan-200" aria-hidden="true" />
          <p className="mt-3 text-sm font-semibold text-slate-950 dark:text-white">
            {siteConfig.location}
          </p>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {profileHighlights.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-900/10 bg-white/55 p-4 dark:border-white/10 dark:bg-white/10"
            >
              <Icon className="size-4 text-sky-600 dark:text-cyan-200" aria-hidden="true" />
              <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                {label}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-950 dark:text-white">{value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
