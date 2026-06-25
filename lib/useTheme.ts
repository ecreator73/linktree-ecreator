"use client";

import { useEffect, useState } from "react";

/** Reactive current theme ("light" | "dark"), synced with the html class. */
export function useTheme(): "light" | "dark" {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const read = () =>
      document.documentElement.classList.contains("light") ? "light" : "dark";
    setTheme(read());
    const obs = new MutationObserver(() => setTheme(read()));
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => obs.disconnect();
  }, []);

  return theme;
}
