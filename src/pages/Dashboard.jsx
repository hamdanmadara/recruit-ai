import { useNavigate } from 'react-router-dom';
import { Bot, Briefcase, FileText, Star } from 'lucide-react';
import AppLayout from '../components/layout/AppLayout';
import StatCard from '../components/ui/StatCard';
import Button from '../components/ui/Button';
import { stats, activities } from '../data/mockData';
import './Dashboard.css';

const iconMap = {
  Briefcase: <Briefcase size={18} />,
  FileText: <FileText size={18} />,
  Bot: <Bot size={18} />,
  Star: <Star size={18} />,
};

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <AppLayout>
      {/* Welcome Banner */}
      <div className="welcome-banner">
        <div className="welcome-text">
          <h2 className="heading-md">
            <span className="wave-icon">👋</span> Welcome back, Emily!
          </h2>
          <p className="welcome-sub">
            You have 3 new candidates parsed since yesterday. Your AI assistant is ready.
          </p>
        </div>
        <Button
          variant="primary"
          icon={<Bot size={18} />}
          onClick={() => navigate('/chat')}
        >
          Open AI Chat
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            change={stat.change}
            icon={iconMap[stat.icon]}
            iconBg={stat.iconBg}
            iconColor={stat.iconColor}
          />
        ))}
      </div>

      {/* Recent Activity */}
      <div className="activity-card">
        <h3 className="heading-sm">Recent Activity</h3>
        <div className="activity-list">
          {activities.map((item, i) => (
            <div
              key={i}
              className={`activity-item ${i === activities.length - 1 ? 'last' : ''}`}
            >
              <div className="activity-dot" style={{ background: item.color }} />
              <p
                className="activity-text"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
              <span className="activity-time">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
