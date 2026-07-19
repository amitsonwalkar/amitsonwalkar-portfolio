type ExperienceCardProps = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

export default function ExperienceCard({
  role,
  company,
  period,
  summary,
  highlights,
}: ExperienceCardProps) {
  return (
    <article className="group border border-white/10 bg-white/[0.06] p-6 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.09] hover:shadow-cyan-950/20">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold">{role}</h3>
          <p className="mt-1 text-sm font-semibold text-cyan-200">{company}</p>
        </div>
        <span className="w-fit border border-cyan-300/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-200">
          {period}
        </span>
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-300">{summary}</p>

      <ul className="mt-5 space-y-3">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3 text-sm leading-7 text-slate-300">
            <span className="mt-2 size-1.5 shrink-0 bg-cyan-300" aria-hidden="true" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
