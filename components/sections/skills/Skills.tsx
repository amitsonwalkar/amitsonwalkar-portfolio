import { SkillCard } from "@/components/cards";
import { SectionEyebrow } from "@/components/common";
import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white px-4 py-24 text-slate-950 dark:bg-slate-950 dark:text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="max-w-3xl">
          <SectionEyebrow className="text-teal-700 dark:text-teal-300">Skills</SectionEyebrow>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
            Practical engineering stack for enterprise delivery.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            A balanced toolkit across backend systems, UI work, databases, cloud delivery, observability,
            and team execution.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((skillGroup, index) => (
            <Reveal key={skillGroup.title} delay={index * 0.08}>
              <SkillCard {...skillGroup} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
