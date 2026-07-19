"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "./data";
import NavItem from "./NavItem";
import ResumeButton from "./ResumeButton";

interface MobileMenuProps {
  activeSection: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate: (href: string) => void;
}

export default function MobileMenu({
  activeSection,
  isOpen,
  onOpenChange,
  onNavigate,
}: MobileMenuProps) {
  return (
    <div className="lg:hidden">
      <Button
        type="button"
        variant="outline"
        size="icon-sm"
        onClick={() => onOpenChange(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="border-slate-900/10 bg-white/55 text-slate-700 backdrop-blur-xl hover:bg-white/80 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
      >
        {isOpen ? (
          <X aria-hidden="true" className="size-4" />
        ) : (
          <Menu aria-hidden="true" className="size-4" />
        )}
      </Button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute inset-x-4 top-[calc(100%+0.75rem)] border border-slate-900/10 bg-white/95 p-2 shadow-2xl shadow-slate-950/10 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/95"
          >
            <nav aria-label="Mobile navigation" className="grid gap-1">
              {navItems.map((item) => (
                <NavItem
                  key={item.href}
                  item={item}
                  isActive={activeSection === item.href.slice(1)}
                  onNavigate={onNavigate}
                  className="h-12 justify-start px-4 text-left"
                />
              ))}
            </nav>
            <div className="mt-2 border-t border-slate-900/10 pt-2 dark:border-white/10 sm:hidden">
              <ResumeButton />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
