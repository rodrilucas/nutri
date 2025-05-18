import { Sun, Moon } from "lucide-react";
import useFoodsContext from "../hooks/useFoodsContext";

const ThemeToggle = () => {
  const { isDark, setIsDark } = useFoodsContext();

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition-colors"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
};

export default ThemeToggle;
