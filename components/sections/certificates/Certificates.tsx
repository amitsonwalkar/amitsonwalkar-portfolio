import { SectionEyebrow } from "@/components/common";
import { Reveal } from "@/components/motion";
import { certificates } from "@/data/certificates";
import { ImagePlus } from "lucide-react";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-slate-50 px-4 py-24 text-slate-950 dark:bg-slate-900 dark:text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="max-w-3xl">
          <SectionEyebrow className="text-violet-700 dark:text-violet-300">
            Certificates
          </SectionEyebrow>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
            Continued learning for dependable engineering.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            Credentials that support my work across cloud platforms, backend systems, and practical
            software development.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map(({ title, issuer, description, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <article className="group h-full overflow-hidden border border-slate-900/10 bg-white transition hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-xl hover:shadow-slate-950/5 dark:border-white/10 dark:bg-slate-950 dark:hover:border-violet-300/40 dark:hover:shadow-black/20">
                <div className="flex aspect-[16/9] items-center justify-center border-b border-slate-900/10 bg-[linear-gradient(135deg,#f5f3ff_0%,#ecfeff_100%)] text-violet-700 dark:border-white/10 dark:bg-[linear-gradient(135deg,#1e1b4b_0%,#082f49_100%)] dark:text-violet-200">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <span className="flex size-14 items-center justify-center border border-current/20 bg-white/65 dark:bg-slate-950/40">
                      <Icon className="size-7" aria-hidden="true" />
                    </span>
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest">
                      <ImagePlus className="size-3.5" aria-hidden="true" />
                      Certificate image coming soon
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-violet-700 dark:text-violet-300">
                    {issuer}
                  </p>
                  <h3 className="mt-3 font-heading text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
