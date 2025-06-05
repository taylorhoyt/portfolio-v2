import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "theme-preference";
const DEFAULT_THEME: Theme = "dark";

const isValidTheme = (theme: string): theme is Theme => {
  return theme === "light" || theme === "dark";
};

const getStoredTheme = (): Theme => {
  if (typeof window === "undefined") return DEFAULT_THEME;
  // yoink
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored && isValidTheme(stored) ? stored : DEFAULT_THEME;
  } catch (error) {
    console.warn("Could not access localStorage:", error);
    return DEFAULT_THEME;
  }
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

  // init theme
  useEffect(() => {
    setTheme(getStoredTheme());
  }, []);

  // update HTML class & storage when update
  useEffect(() => {
    document.documentElement.className = theme;

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
      // silently fail shhh
      console.warn("Could not save theme preference:", error);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // if you're here, hello! let me know if you got my message!
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
