"use client";

import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { navItems } from "./data";
import type { ThemeMode } from "./types";

const THEME_KEY = "portfolio-theme";
const THEME_EVENT = "portfolio-theme-change";

export function useScrollState() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollState = () => {
      const scrollTop = window.scrollY;
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setIsScrolled(scrollTop > 16);
      setProgress(
        scrollableHeight > 0
          ? Math.min((scrollTop / scrollableHeight) * 100, 100)
          : 0
      );
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return { isScrolled, progress };
}

export function useActiveSection(offset = 120) {
  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.replace("#", "")),
    []
  );
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const updateActiveSection = () => {
      const currentSection = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .reverse()
        .find((section) => section!.getBoundingClientRect().top <= offset);

      if (currentSection?.id) {
        setActiveSection(currentSection.id);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [offset, sectionIds]);

  return activeSection;
}

export function useSmoothScroll(onNavigate?: () => void) {
  return useCallback(
    (href: string) => {
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", href);
      }

      onNavigate?.();
    },
    [onNavigate]
  );
}

export function useTheme() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  const toggleTheme = useCallback(() => {
    const nextTheme = getThemeSnapshot() === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem(THEME_KEY, nextTheme);
    window.dispatchEvent(new Event(THEME_EVENT));
  }, []);

  return { theme, toggleTheme };
}

function getServerThemeSnapshot(): ThemeMode {
  return "light";
}

function getThemeSnapshot(): ThemeMode {
  if (typeof window === "undefined") {
    return getServerThemeSnapshot();
  }

  const savedTheme = window.localStorage.getItem(THEME_KEY);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

function subscribeToTheme(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const syncTheme = () => {
    document.documentElement.classList.toggle(
      "dark",
      getThemeSnapshot() === "dark"
    );
    onStoreChange();
  };

  syncTheme();
  window.addEventListener("storage", syncTheme);
  window.addEventListener(THEME_EVENT, syncTheme);
  mediaQuery.addEventListener("change", syncTheme);

  return () => {
    window.removeEventListener("storage", syncTheme);
    window.removeEventListener(THEME_EVENT, syncTheme);
    mediaQuery.removeEventListener("change", syncTheme);
  };
}
