"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-md transition ${
          theme === "light"
            ? "bg-white dark:bg-gray-700 shadow-sm"
            : "hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
        aria-label="Light mode"
      >
        <Sun className="w-4 h-4 text-gray-700 dark:text-gray-300" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-md transition ${
          theme === "dark"
            ? "bg-white dark:bg-gray-700 shadow-sm"
            : "hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
        aria-label="Dark mode"
      >
        <Moon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded-md transition ${
          theme === "system"
            ? "bg-white dark:bg-gray-700 shadow-sm"
            : "hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
        aria-label="System mode"
      >
        <Monitor className="w-4 h-4 text-gray-700 dark:text-gray-300" />
      </button>
    </div>
  );
}
