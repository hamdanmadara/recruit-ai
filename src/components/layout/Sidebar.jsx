import { useLocation, useNavigate } from 'react-router-dom';
import {
  BarChart3,
  Briefcase,
  Bot,
  Star,
  Settings,
  CreditCard,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react';
import { sidebarNavItems } from '../../data/mockData';
import { useSidebar } from '../../context/SidebarContext';
import ProfilePopover from './ProfilePopover';
import './Sidebar.css';

const iconMap = {
  BarChart3: BarChart3,
  Briefcase: Briefcase,
  Bot: Bot,
  Star: Star,
  Settings: Settings,
  CreditCard: CreditCard,
};

export default function Sidebar({ inDrawer = false }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { collapsed, toggleCollapsed } = useSidebar();

  const isCollapsed = inDrawer ? false : collapsed;

  const isActive = (path) => {
    if (path === '/dashboard') return location.pathname === '/dashboard';
    if (path === '/positions')
      return (
        location.pathname === '/positions' ||
        location.pathname === '/positions/create' ||
        location.pathname.startsWith('/positions/') ||
        location.pathname.startsWith('/resume/')
      );
    return location.pathname.startsWith(path);
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-brand">
        {isCollapsed ? (
          <span className="sidebar-brand-icon">
            R<span>AI</span>
          </span>
        ) : (
          <>
            Recruit<span>AI</span>
          </>
        )}
        {!inDrawer && (
          <button
            className="sidebar-collapse-btn"
            onClick={toggleCollapsed}
            title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? (
              <PanelLeftOpen size={16} />
            ) : (
              <PanelLeftClose size={16} />
            )}
          </button>
        )}
      </div>

      {!isCollapsed && <div className="sidebar-section">Main</div>}
      <nav className="sidebar-nav">
        {sidebarNavItems.main.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <div
              key={item.path}
              className={`sidebar-item ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
              title={isCollapsed ? item.label : undefined}
            >
              <span className="sidebar-item-icon">
                <Icon size={18} />
              </span>
              {!isCollapsed && <span className="sidebar-item-label">{item.label}</span>}
              {!isCollapsed && item.badge && (
                <span className="sidebar-badge">{item.badge}</span>
              )}
            </div>
          );
        })}
      </nav>

      {!isCollapsed && <div className="sidebar-section">Settings</div>}
      <nav className="sidebar-nav">
        {sidebarNavItems.settings.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <div
              key={item.path}
              className={`sidebar-item sidebar-item--disabled ${isActive(item.path) ? 'active' : ''}`}
              title={isCollapsed ? item.label : undefined}
            >
              <span className="sidebar-item-icon">
                <Icon size={18} />
              </span>
              {!isCollapsed && <span className="sidebar-item-label">{item.label}</span>}
            </div>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <ProfilePopover collapsed={isCollapsed} />
      </div>
    </aside>
  );
}
