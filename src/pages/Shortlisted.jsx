import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Eye } from 'lucide-react';
import AppLayout from '../components/layout/AppLayout';
import Avatar from '../components/ui/Avatar';
import Badge from '../components/ui/Badge';
import Dropdown from '../components/ui/Dropdown';
import { shortlistedList } from '../data/mockData';
import './Shortlisted.css';
import './Positions.css';

export default function Shortlisted() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [positionFilter, setPositionFilter] = useState('all');

  const positions = [...new Set(shortlistedList.map((s) => s.positionTitle))].sort();

  const filtered = shortlistedList.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.positionTitle.toLowerCase().includes(search.toLowerCase()) ||
      item.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    const matchesPosition =
      positionFilter === 'all' || item.positionTitle === positionFilter;
    return matchesSearch && matchesPosition;
  });

  return (
    <AppLayout>
      <div className="page-header">
        <div className="page-header-left">
          <h1 className="page-title">Shortlisted</h1>
          <p className="page-subtitle">
            {filtered.length} shortlisted candidate{filtered.length !== 1 ? 's' : ''} across positions
          </p>
        </div>
      </div>

      <div className="table-container">
        <div className="table-toolbar">
          <div className="table-search">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search by name, title, position, or skill..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="table-filters">
            <Dropdown
              options={[
                { value: 'all', label: 'All Positions' },
                ...positions.map((p) => ({ value: p, label: p })),
              ]}
              value={positionFilter}
              onChange={setPositionFilter}
              size="sm"
              className="filter-dropdown"
            />
          </div>
        </div>

        <table className="positions-table shortlisted-table">
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Position</th>
              <th>Experience</th>
              <th>Skills</th>
              <th>Match</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="candidate-cell">
                    <Avatar initials={item.initials} size="sm" variant="gradient" />
                    <div>
                      <div className="position-name">{item.name}</div>
                      <div className="position-meta">
                        {item.title} &middot; {item.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <button
                    type="button"
                    className="position-link"
                    onClick={() => navigate(`/positions/${item.positionId}/candidates`)}
                  >
                    {item.positionTitle}
                  </button>
                </td>
                <td>
                  <span className="candidate-exp">{item.experience}</span>
                </td>
                <td>
                  <div className="candidate-skills">
                    {item.skills.slice(0, 3).map((s, i) => (
                      <Badge key={i} variant="skill">
                        {s}
                      </Badge>
                    ))}
                    {item.skills.length > 3 && (
                      <span className="skills-more">+{item.skills.length - 3}</span>
                    )}
                  </div>
                </td>
                <td>
                  <span
                    className={`match-score ${
                      item.matchScore >= 80
                        ? 'high'
                        : item.matchScore >= 65
                        ? 'medium'
                        : 'low'
                    }`}
                  >
                    {item.matchScore}%
                  </span>
                </td>
                <td>
                  <button
                    className="view-btn"
                    onClick={() => navigate(`/resume/${item.id}`)}
                    title="View profile"
                  >
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="empty-state">No shortlisted candidates match your search.</div>
        )}
      </div>
    </AppLayout>
  );
}
