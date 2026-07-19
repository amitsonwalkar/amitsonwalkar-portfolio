"use client";

import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import Highlights from "./Highlights";
import QuickFacts from "./QuickFacts";
import { Reveal } from "@/components/motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#e0f2fe_36%,#f1f5f9_70%,#ecfeff_100%)] px-4 py-24 text-slate-950 dark:bg-[linear-gradient(135deg,#020617_0%,#111827_38%,#082f49_68%,#0f172a_100%)] dark:text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.13)_1px,transparent_1px)] [background-size:28px_28px] opacity-60 dark:opacity-25" />
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-white/55 to-transparent dark:from-slate-950/70" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-white/45 to-transparent dark:from-slate-950/60" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.78fr)] lg:gap-16">
          <Reveal><AboutContent /></Reveal>
          <Reveal delay={0.12}><AboutImage /></Reveal>
        </div>

        <div className="mt-14 space-y-6">
          <Reveal><Highlights /></Reveal>
          <Reveal delay={0.1}><QuickFacts /></Reveal>
        </div>
      </div>
    </section>
  );
}
