import { useState, type ReactNode } from "react";
import { ThemeContext, type ThemeMode } from "./themeContextDefinition";

type ThemeProviderProps = {
  children: ReactNode;
};

export function AppThemeProvider({ children }: ThemeProviderProps) {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem("fintrack-theme");

    return savedTheme === "dark" ? "dark" : "light";
  });

  function toggleTheme() {
    setThemeMode((currentTheme) => {
      const newTheme = currentTheme === "light" ? "dark" : "light";

      localStorage.setItem("fintrack-theme", newTheme);

      return newTheme;
    });
  }

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
