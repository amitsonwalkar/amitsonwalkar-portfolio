import { ExperienceCard } from "@/components/cards";
import { SectionEyebrow } from "@/components/common";
import { experiences } from "@/data/experience";
import { Reveal } from "@/components/motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1fr] lg:gap-16">
          <Reveal>
            <SectionEyebrow className="text-cyan-300">Experience</SectionEyebrow>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
              Built through long-running ownership, not just feature tickets.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
              Amit brings senior engineering judgment across delivery, production support,
              stakeholder coordination, and hands-on implementation.
            </p>
          </Reveal>

          <div className="space-y-5">
            {experiences.map((item, index) => (
              <Reveal key={`${item.role}-${item.company}`} delay={index * 0.1}>
                <ExperienceCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
