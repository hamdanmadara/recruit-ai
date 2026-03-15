import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Search, Eye } from 'lucide-react';
import AppLayout from '../components/layout/AppLayout';
import Avatar from '../components/ui/Avatar';
import Badge from '../components/ui/Badge';
import Dropdown from '../components/ui/Dropdown';
import { candidates, positions } from '../data/mockData';
import './Candidates.css';

export default function Candidates() {
  const navigate = useNavigate();
  const { positionId } = useParams();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const position = positions.find((p) => p.id === Number(positionId));

  const filtered = candidates.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusVariant = (status) => {
    if (status === 'shortlisted') return 'active';
    if (status === 'reviewed') return 'draft';
    return 'closed';
  };

  return (
    <AppLayout>
      <div className="page-header">
        <div className="page-header-left">
          <h1 className="page-title">
            <span className="back-arrow" onClick={() => navigate('/positions')}>
              <ArrowLeft size={20} />
            </span>
            Candidates
          </h1>
          <p className="page-subtitle">
            {position ? `${position.title} — ${filtered.length} candidates` : `${filtered.length} candidates`}
          </p>
        </div>
      </div>

      <div className="table-container">
        <div className="table-toolbar">
          <div className="table-search">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search by name, title, or skill..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="table-filters">
            <Dropdown
              options={[
                { value: 'all', label: 'All Status' },
                { value: 'shortlisted', label: 'Shortlisted' },
                { value: 'reviewed', label: 'Reviewed' },
                { value: 'new', label: 'New' },
              ]}
              value={statusFilter}
              onChange={setStatusFilter}
              size="sm"
              className="filter-dropdown"
            />
          </div>
        </div>

        <table className="positions-table candidates-table">
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Experience</th>
              <th>Skills</th>
              <th>Match</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id}>
                <td>
                  <div className="candidate-cell">
                    <Avatar initials={c.initials} size="sm" variant="gradient" />
                    <div>
                      <div className="position-name">{c.name}</div>
                      <div className="position-meta">
                        {c.title} &middot; {c.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="candidate-exp">{c.experience}</span>
                </td>
                <td>
                  <div className="candidate-skills">
                    {c.skills.slice(0, 3).map((s, i) => (
                      <Badge key={i} variant="skill">{s}</Badge>
                    ))}
                    {c.skills.length > 3 && (
                      <span className="skills-more">+{c.skills.length - 3}</span>
                    )}
                  </div>
                </td>
                <td>
                  <span
                    className={`match-score ${
                      c.matchScore >= 80
                        ? 'high'
                        : c.matchScore >= 65
                        ? 'medium'
                        : 'low'
                    }`}
                  >
                    {c.matchScore}%
                  </span>
                </td>
                <td>
                  <Badge variant={getStatusVariant(c.status)}>
                    {c.status.charAt(0).toUpperCase() + c.status.slice(1)}
                  </Badge>
                </td>
                <td>
                  <button
                    className="view-btn"
                    onClick={() => navigate(`/resume/${c.id}`)}
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
          <div className="empty-state">No candidates match your search.</div>
        )}
      </div>
    </AppLayout>
  );
}
