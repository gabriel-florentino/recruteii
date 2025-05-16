// src/context/DarkThemeContext.jsx
import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const DarkThemeContext = createContext();

export function ThemeDarkProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <DarkThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
}

export function useDarkTheme() {
  const context = useContext(DarkThemeContext);
  if (!context) {
    throw new Error('useDarkTheme deve ser usado dentro de <DarkThemeProvider>');
  }
  return context;
}
