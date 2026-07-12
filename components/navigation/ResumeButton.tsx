"use client";

import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface ResumeButtonProps {
  compact?: boolean;
  className?: string;
}

export default function ResumeButton({
  compact = false,
  className,
}: ResumeButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.14, duration: 0.4, ease: "easeOut" }}
      className={className}
    >
      <Button
        asChild
        size={compact ? "icon-sm" : "sm"}
        className={cn(
          "bg-slate-950 text-white shadow-lg shadow-sky-900/10 hover:bg-sky-700 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200",
          compact ? "px-0" : "px-4"
        )}
      >
        <a
          href={siteConfig.resume}
          target="_blank"
          rel="noreferrer"
          aria-label="Download resume"
        >
          <span className={compact ? "sr-only" : ""}>Resume</span>
          <Download aria-hidden="true" data-icon="inline-end" />
        </a>
      </Button>
    </motion.div>
  );
}
