// src/context/MobileMenuContext.jsx
import { createContext, useContext, useState, useCallback } from 'react';

const MobileMenuContext = createContext();

export function MobileMenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = useCallback(() => setIsOpen(true), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <MobileMenuContext.Provider value={{ isOpen, openMenu, closeMenu, toggleMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export function useMobileMenu() {
  const context = useContext(MobileMenuContext);
  if (!context) {
    throw new Error('useMobileMenu deve ser usado dentro de <MobileMenuProvider>');
  }
  return context;
}
