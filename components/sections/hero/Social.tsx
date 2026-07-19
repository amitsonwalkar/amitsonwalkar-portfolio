import { siteConfig } from "@/config/site";
import { FaGithub, FaLinkedin, FaUpwork } from "react-icons/fa6";

export default function Social() {
  const links = [
    { href: siteConfig.github, label: "GitHub", icon: FaGithub },
    { href: siteConfig.linkedin || "https://www.linkedin.com/", label: "LinkedIn", icon: FaLinkedin },
    { href: siteConfig.upwork || "https://www.upwork.com/", label: "Upwork", icon: FaUpwork },
  ];

  return (
    <div className="mt-8 flex gap-3">
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noreferrer"
          className="flex size-11 items-center justify-center border border-slate-900/10 bg-white/45 text-lg text-slate-700 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/75 hover:text-sky-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/15 dark:hover:text-cyan-200"
        >
          <Icon aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
