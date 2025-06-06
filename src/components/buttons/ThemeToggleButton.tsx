import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import BasicButton from "./BasicButton";

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <BasicButton
      onClick={toggleTheme}
      className="text-primary-text bg-transparent"
      tooltipLabel={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? <Moon size={28} /> : <Sun size={28} />}
    </BasicButton>
  );
};

export default ThemeToggleButton;
