"use client";
import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
  isDark: true,
});

export function useTheme() {
  return useContext(ThemeContext);
}

function applyTheme(t: Theme) {
  document.documentElement.setAttribute("data-theme", t);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  /**
   * Initial state is always "dark" to match the server render
   * (server always emits data-theme="dark").
   * On first client tick we read whatever the inline flash-prevention script
   * actually set, and update state — this is a single silent re-render
   * that only affects the toggle icon, not the visual theme
   * (the CSS is driven by the html[data-theme] attribute, not React state).
   */
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    // Sync React state to whatever the inline script decided
    const attr = document.documentElement.getAttribute("data-theme") as Theme | null;
    if (attr === "light" || attr === "dark") {
      setTheme(attr);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      applyTheme(next);          // update <html data-theme="…"> → CSS vars change instantly
      try {
        localStorage.setItem("jobboard-theme", next);
      } catch { /* storage unavailable */ }
      return next;
    });
  }, []);

  // Always render children — never hide them.
  // The CSS theme is driven by the html attribute (set before first paint
  // by the inline <script>), so there is no visual flash even without
  // holding back the render.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
}
