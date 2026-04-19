import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  BarChart3,
  Briefcase,
  Bot,
  Star,
  Settings,
  CreditCard,
  Pin,
  PinOff,
} from 'lucide-react';
import { sidebarNavItems } from '../../data/mockData';
import { useSidebar } from '../../context/SidebarContext';
import ProfilePopover from './ProfilePopover';
import './Sidebar.css';

const iconMap = {
  BarChart3,
  Briefcase,
  Bot,
  Star,
  Settings,
  CreditCard,
};

export default function Sidebar({ inDrawer = false, onNavigate }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { pinned, togglePinned } = useSidebar();
  const [hovered, setHovered] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // Keep sidebar expanded while profile popover is open so it doesn't
  // collapse out from under the user.
  const expandedByHover = hovered || profileOpen;

  // Desktop: collapsed unless pinned, hovered, or profile popover is open.
  const isCollapsed = inDrawer ? false : !pinned && !expandedByHover;

  const handleNavigate = (path) => {
    navigate(path);
    onNavigate?.();
  };

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

  const sidebar = (
    <aside
      className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${expandedByHover && !pinned ? 'hover-expanded' : ''}`}
      onMouseEnter={() => !inDrawer && setHovered(true)}
      onMouseLeave={() => !inDrawer && setHovered(false)}
    >
      <div className="sidebar-brand">
        {isCollapsed ? (
          <span className="sidebar-brand-icon">
            R<span>AI</span>
          </span>
        ) : (
          <>
            <span className="sidebar-brand-text">
              Recruit<span>AI</span>
            </span>
            {!inDrawer && (
              <button
                className={`sidebar-pin-btn ${pinned ? 'pinned' : ''}`}
                onClick={togglePinned}
                title={pinned ? 'Unpin sidebar' : 'Pin sidebar open'}
              >
                {pinned ? <PinOff size={15} /> : <Pin size={15} />}
              </button>
            )}
          </>
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
              onClick={() => handleNavigate(item.path)}
            >
              <span className="sidebar-item-icon">
                <Icon size={18} />
              </span>
              <span className="sidebar-item-label">{item.label}</span>
              {item.badge && !isCollapsed && (
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
            >
              <span className="sidebar-item-icon">
                <Icon size={18} />
              </span>
              <span className="sidebar-item-label">{item.label}</span>
            </div>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <ProfilePopover collapsed={isCollapsed} onOpenChange={setProfileOpen} />
      </div>
    </aside>
  );

  if (inDrawer) return sidebar;

  // Desktop: host reserves the layout slot (88px collapsed, 260px pinned).
  // The sidebar itself is position:fixed so hover-expand overlays content
  // instead of pushing it.
  return (
    <div
      className={`sidebar-host ${pinned ? 'pinned' : ''} ${expandedByHover ? 'hovered' : ''}`}
    >
      {sidebar}
    </div>
  );
}
