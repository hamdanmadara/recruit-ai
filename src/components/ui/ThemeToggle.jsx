import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      className={`theme-switch ${isDark ? 'dark' : 'light'}`}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      type="button"
    >
      <Sun size={12} className="theme-switch-icon sun" />
      <Moon size={12} className="theme-switch-icon moon" />
      <span className="theme-switch-thumb" />
    </button>
  );
}
