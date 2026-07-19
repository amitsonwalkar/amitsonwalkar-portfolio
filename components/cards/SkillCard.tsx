import type { LucideIcon } from "lucide-react";

type SkillCardProps = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export default function SkillCard({ title, icon: Icon, skills }: SkillCardProps) {
  return (
    <article className="group border border-slate-900/10 bg-slate-50 p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-teal-500/35 hover:bg-white hover:shadow-xl hover:shadow-teal-950/5 dark:border-white/10 dark:bg-white/5 dark:hover:border-teal-300/35 dark:hover:bg-white/10">
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center bg-teal-600 text-white transition duration-300 group-hover:scale-110 group-hover:rotate-3 dark:bg-teal-300 dark:text-slate-950">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="border border-slate-900/10 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-slate-950/65 dark:text-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
