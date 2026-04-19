import ThemeToggle from '../ui/ThemeToggle';
import './AuthLayout.css';

export default function AuthLayout({ children, tagline, description, features }) {
  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <div className="auth-left-content">
          <div className="auth-brand">
            Talent<span>lyn</span>
          </div>
          <h1 className="auth-tagline">{tagline}</h1>
          <p className="auth-desc">{description}</p>
          <div className="auth-features">
            {features.map((f, i) => (
              <div className="auth-feature" key={i}>
                <div className="auth-feature-icon">{f.icon}</div>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="auth-right">
        <div className="auth-theme-toggle">
          <ThemeToggle />
        </div>
        {children}
      </div>
    </div>
  );
}
