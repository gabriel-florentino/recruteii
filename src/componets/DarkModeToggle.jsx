import { FiMoon, FiSun } from "react-icons/fi";
import useDarkMode from "../hooks/useDarkMode";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`
        flex items-center gap-2 px-2 py-2 rounded-full border 
        transition-colors duration-300 
        ${darkMode ? "bg-black border-white text-white" : "bg-white border-black text-black"}
      `}
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <FiMoon className="w-4 h-4" /> : <FiSun className="w-4 h-4 text-black" />}
      <span className="text-xs">{darkMode ? "Dark" : "Light"}</span>
    </button>
  );
}
