import { FiMoon, FiSun } from "react-icons/fi";
import { useDarkTheme } from '../context/ThemeDarkContext';

export default function DarkModeToggle() {
  const { isDark, toggleTheme } = useDarkTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        flex items-center gap-2 px-2 py-2 rounded-full border 
        transition-colors duration-300
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        ${isDark
          ? "bg-black border-white text-white focus-visible:ring-white"
          : "bg-white border-black text-black focus-visible:ring-black"
        }
      `}
      aria-label="Alternar entre modo claro e escuro"
    >
      {isDark ? <FiMoon className="w-4 h-4" /> : <FiSun className="w-4 h-4" />}
      <span className="text-xs">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
