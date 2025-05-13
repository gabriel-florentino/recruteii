import useDarkMode from "../hooks/useDarkMode";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`${darkMode ? "flex-row" : "flex-row-reverse"} + p-2 rounded-full text-base
      border-2 border-black flex items-center gap-[8px] h-min w-22 dark:border-white dark:text-white dark:bg-black`}
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? "Dark" : "Light"}
      <span className="bg-black w-4 h-4 flex rounded-full dark:bg-white"></span>
    </button>
  );
}
