"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-4 right-4 p-2 rounded-full bg-white/80 dark:bg-black/80 border border-border/50 backdrop-blur-lg shadow-lg hover:bg-white dark:hover:bg-black transition-colors z-[100]"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-black dark:text-white" />
      ) : (
        <Moon className="h-5 w-5 text-black dark:text-white" />
      )}
    </button>
  );
} 