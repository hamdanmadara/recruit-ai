import { createContext, useContext, useState, useCallback } from 'react';

const SidebarContext = createContext();
const PIN_KEY = 'sidebar-pinned';

export function SidebarProvider({ children }) {
  const [pinned, setPinned] = useState(() => {
    try {
      return localStorage.getItem(PIN_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const togglePinned = useCallback(() => {
    setPinned((p) => {
      const next = !p;
      try { localStorage.setItem(PIN_KEY, String(next)); } catch { /* noop */ }
      return next;
    });
  }, []);

  // Backward-compat: some callers still read `collapsed` / `toggleCollapsed`.
  const collapsed = !pinned;
  const setCollapsed = (v) => setPinned(!v);
  const toggleCollapsed = togglePinned;

  return (
    <SidebarContext.Provider
      value={{ collapsed, setCollapsed, toggleCollapsed, pinned, togglePinned }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error('useSidebar must be used within SidebarProvider');
  return ctx;
}
