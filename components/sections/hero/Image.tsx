"use client";

import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import Image from "next/image";

export default function HeroImage() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[390px] lg:ml-auto"
      initial={{ opacity: 0, x: 40, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
    >
      <div className="absolute inset-6 -z-10 rotate-6 border border-sky-500/20 bg-sky-400/20 blur-sm dark:border-cyan-300/20 dark:bg-cyan-300/10" />
      <motion.div
        className="border border-white/70 bg-white/55 p-4 shadow-2xl shadow-sky-950/10 backdrop-blur-2xl dark:border-white/15 dark:bg-white/10 dark:shadow-black/30"
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
      >
        <div className="relative aspect-[4/5] overflow-hidden border border-slate-900/10 bg-slate-200 dark:border-white/10 dark:bg-slate-900">
          <Image
            src={siteConfig.profileImage}
            fill
            priority
            sizes="(min-width: 1024px) 390px, 88vw"
            alt="Amit Sonwalkar"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-5 text-white">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-100">
              Available for impact
            </p>
            <p className="mt-1 text-2xl font-semibold">{siteConfig.designation}</p>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="border border-slate-900/10 bg-white/55 p-4 dark:border-white/10 dark:bg-white/10">
            <Sparkles className="size-4 text-sky-600 dark:text-cyan-200" aria-hidden="true" />
            <p className="mt-3 text-sm font-semibold text-slate-950 dark:text-white">
              Enterprise Product Engineering
            </p>
          </div>
          <div className="border border-slate-900/10 bg-white/55 p-4 dark:border-white/10 dark:bg-white/10">
            <MapPin className="size-4 text-sky-600 dark:text-cyan-200" aria-hidden="true" />
            <p className="mt-3 text-sm font-semibold text-slate-950 dark:text-white">
              {siteConfig.location}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
