"use client";

import { motion } from "framer-motion";
import { navItems } from "./data";
import NavItem from "./NavItem";

interface DesktopMenuProps {
  activeSection: string;
  onNavigate: (href: string) => void;
}

export default function DesktopMenu({
  activeSection,
  onNavigate,
}: DesktopMenuProps) {
  return (
    <motion.nav
      aria-label="Primary navigation"
      className="hidden items-center lg:flex"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08, duration: 0.45, ease: "easeOut" }}
    >
      {navItems.map((item) => (
        <NavItem
          key={item.href}
          item={item}
          isActive={activeSection === item.href.slice(1)}
          onNavigate={onNavigate}
        />
      ))}
    </motion.nav>
  );
}
