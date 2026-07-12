"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { NavItemData } from "./types";

interface NavItemProps {
  item: NavItemData;
  isActive: boolean;
  onNavigate: (href: string) => void;
  className?: string;
}

export default function NavItem({
  item,
  isActive,
  onNavigate,
  className,
}: NavItemProps) {
  return (
    <button
      type="button"
      onClick={() => onNavigate(item.href)}
      className={cn(
        "relative h-10 px-3 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 dark:text-slate-300 dark:hover:text-white",
        isActive && "text-slate-950 dark:text-white",
        className
      )}
    >
      <span className="relative z-10">{item.title}</span>
      {isActive ? (
        <motion.span
          layoutId="active-nav-item"
          className="absolute inset-x-1 bottom-1 h-0.5 bg-sky-500 dark:bg-cyan-300"
          transition={{ type: "spring", stiffness: 420, damping: 32 }}
        />
      ) : null}
    </button>
  );
}
