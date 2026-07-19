type ProjectCardProps = {
  title: string;
  domain: string;
  description: string;
  impact: string;
  stack: string[];
};

export default function ProjectCard({
  title,
  domain,
  description,
  impact,
  stack,
}: ProjectCardProps) {
  return (
    <article className="group relative flex min-h-[320px] flex-col overflow-hidden border border-slate-900/10 bg-white/70 p-6 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-sky-500/30 hover:shadow-2xl hover:shadow-sky-950/10 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/[0.14]">
      <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-sky-500 via-teal-400 to-orange-400 transition duration-500 group-hover:scale-x-100" />
      <div className="flex items-start justify-between gap-4">
        <span className="border border-orange-500/25 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-orange-700 dark:border-orange-300/25 dark:bg-orange-300/10 dark:text-orange-200">
          {domain}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{description}</p>
      <p className="mt-4 border-l-2 border-teal-500 pl-4 text-sm font-semibold leading-7 text-slate-800 dark:text-slate-100">
        {impact}
      </p>
      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {stack.map((tech) => (
          <span
            key={tech}
            className="border border-slate-900/10 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-700 transition-colors group-hover:border-sky-500/20 dark:border-white/10 dark:bg-slate-950/55 dark:text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
