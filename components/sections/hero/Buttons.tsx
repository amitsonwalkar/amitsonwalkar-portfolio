import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ArrowRight, Download } from "lucide-react";

export default function Buttons() {
  return (
    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
      <Button
        asChild
        size="lg"
        className="bg-slate-950 text-white shadow-lg shadow-sky-900/10 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
      >
        <a href="#projects">
          View Projects
          <ArrowRight aria-hidden="true" data-icon="inline-end" />
        </a>
      </Button>

      <Button
        asChild
        variant="outline"
        size="lg"
        className="border-slate-900/15 bg-white/35 text-slate-900 backdrop-blur-xl hover:bg-white/70 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
      >
        <a href={siteConfig.resume} target="_blank" rel="noreferrer">
          Download Resume
          <Download aria-hidden="true" data-icon="inline-end" />
        </a>
      </Button>
    </div>
  );
}
