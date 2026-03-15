import Sidebar from './Sidebar';
import MobileHeader from './MobileHeader';
import './AppLayout.css';

export default function AppLayout({ children, className = '' }) {
  return (
    <div className={`app-layout ${className}`}>
      <Sidebar />
      <div className="app-main-wrapper">
        <MobileHeader />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}
