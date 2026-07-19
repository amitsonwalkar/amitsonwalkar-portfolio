"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import ResumeButton from "./ResumeButton";
import ScrollProgress from "./ScrollProgress";
import ThemeToggle from "./ThemeToggle";
import { useActiveSection, useScrollState, useSmoothScroll } from "./hooks";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled, progress } = useScrollState();
  const activeSection = useActiveSection();
  const navigate = useSmoothScroll(() => setIsMenuOpen(false));

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-slate-900/10 bg-white/82 shadow-lg shadow-slate-950/5 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/82"
          : "border-b border-transparent bg-transparent"
      )}
      initial={{ y: -96, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo onNavigate={navigate} />

        <div className="flex items-center gap-2 lg:gap-5">
          <DesktopMenu activeSection={activeSection} onNavigate={navigate} />
          <div className="flex items-center gap-2">
            <ResumeButton className="hidden sm:block" />
            <ThemeToggle />
            <MobileMenu
              activeSection={activeSection}
              isOpen={isMenuOpen}
              onOpenChange={setIsMenuOpen}
              onNavigate={navigate}
            />
          </div>
        </div>
      </div>
      <ScrollProgress progress={progress} />
    </motion.header>
  );
}
