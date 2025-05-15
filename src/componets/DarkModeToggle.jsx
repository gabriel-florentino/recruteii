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
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        ${darkMode
          ? "bg-black border-white text-white focus-visible:ring-white"
          : "bg-white border-black text-black focus-visible:ring-black"}
      `}
      aria-label="Alternar entre modo claro e escuro"
    >
      {darkMode ? <FiMoon className="w-4 h-4" /> : <FiSun className="w-4 h-4" />}
      <span className="text-xs">{darkMode ? "Dark" : "Light"}</span>
    </button>
  );
}
