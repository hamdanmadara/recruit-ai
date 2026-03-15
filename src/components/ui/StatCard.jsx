import './StatCard.css';

export default function StatCard({ label, value, change, icon, iconBg, iconColor }) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <span className="stat-card-label">{label}</span>
        <div className="stat-card-icon" style={{ background: iconBg, color: iconColor }}>
          {icon}
        </div>
      </div>
      <div className="stat-card-value">{value}</div>
      <div className="stat-card-change">{change}</div>
    </div>
  );
}
