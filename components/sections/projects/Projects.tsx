import { ProjectCard } from "@/components/cards";
import { SectionEyebrow } from "@/components/common";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[linear-gradient(135deg,#f8fafc_0%,#ecfeff_48%,#fff7ed_100%)] px-4 py-24 text-slate-950 dark:bg-[linear-gradient(135deg,#020617_0%,#111827_52%,#172554_100%)] dark:text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionEyebrow className="text-orange-700 dark:text-orange-300">
              Projects
            </SectionEyebrow>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
              Domain-heavy systems with maintainable engineering at the core.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Selected work themes from enterprise platforms across fintech, healthcare,
            education, operations, inventory, and media workflows.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) * 0.08}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
