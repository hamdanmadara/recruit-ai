import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './Sidebar';
import './MobileHeader.css';

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mobile-header">
        <button className="mobile-menu-btn" onClick={() => setOpen(true)}>
          <Menu size={22} />
        </button>
        <span className="mobile-brand">Talent<span>lyn</span></span>
      </div>

      {open && (
        <>
          <div className="mobile-overlay" onClick={() => setOpen(false)} />
          <div className="mobile-drawer">
            <button className="mobile-close-btn" onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
            <Sidebar inDrawer onNavigate={() => setOpen(false)} />
          </div>
        </>
      )}
    </>
  );
}
