import { useState, useRef, useEffect } from 'react';
import { LogOut, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';
import './ProfilePopover.css';

export default function ProfilePopover({ collapsed }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onEsc = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onOutside);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onOutside);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  const handleLogout = () => {
    setOpen(false);
    navigate('/login');
  };

  return (
    <div className="profile-popover-wrapper" ref={ref}>
      <div
        className={`profile-trigger ${collapsed ? 'collapsed' : ''} ${open ? 'active' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <div className="profile-trigger-avatar">EM</div>
        {!collapsed && (
          <>
            <div className="profile-trigger-info">
              <div className="profile-trigger-name">Emily Morgan</div>
              <div className="profile-trigger-email">emily@acme.com</div>
            </div>
            <ChevronUp
              size={14}
              className={`profile-trigger-chevron ${open ? 'open' : ''}`}
            />
          </>
        )}
      </div>

      {open && (
        <div className={`profile-popover ${collapsed ? 'popover-collapsed' : ''}`}>
          {collapsed && (
            <>
              <div className="profile-popover-header">
                <div className="profile-popover-avatar">EM</div>
                <div className="profile-popover-info">
                  <div className="profile-popover-name">Emily Morgan</div>
                  <div className="profile-popover-email">emily@acme.com</div>
                </div>
              </div>
              <div className="profile-popover-divider" />
            </>
          )}
          <div className="profile-popover-row">
            <span className="profile-popover-label">Dark mode</span>
            <ThemeToggle />
          </div>
          <div className="profile-popover-divider" />
          <button className="profile-popover-logout" onClick={handleLogout}>
            <LogOut size={16} />
            Log out
          </button>
        </div>
      )}
    </div>
  );
}
