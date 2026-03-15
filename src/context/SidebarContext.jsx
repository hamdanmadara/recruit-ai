import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const SidebarContext = createContext();

const TABLET_BP = 1024;

export function SidebarProvider({ children }) {
  const [collapsed, setCollapsed] = useState(() => window.innerWidth <= TABLET_BP);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth <= TABLET_BP) setCollapsed(true);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const toggleCollapsed = useCallback(() => setCollapsed((p) => !p), []);

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed, toggleCollapsed }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error('useSidebar must be used within SidebarProvider');
  return ctx;
}
