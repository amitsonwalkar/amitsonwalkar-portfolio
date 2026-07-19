import type { ElementType } from "react";

export type NavItemData = {
  title: string;
  href: `#${string}`;
};

export type ThemeMode = "light" | "dark";

export type IconComponent = ElementType;
