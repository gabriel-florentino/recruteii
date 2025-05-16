// src/context/AppProviders.jsx
import React from 'react';
import { ThemeDarkProvider } from './ThemeDarkContext';
import { MobileMenuProvider } from './MobileMenuContext';

export function AppProviders({ children }) {
  return (
    <ThemeDarkProvider>
      <MobileMenuProvider>
        {children}
      </MobileMenuProvider>
    </ThemeDarkProvider>
  );
}
