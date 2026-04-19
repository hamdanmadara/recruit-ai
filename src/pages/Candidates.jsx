import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Search, Eye, Check, X } from 'lucide-react';
import AppLayout from '../components/layout/AppLayout';
import Avatar from '../components/ui/Avatar';
import Badge from '../components/ui/Badge';
import Dropdown from '../components/ui/Dropdown';
import Modal from '../components/ui/Modal';
import { candidates, positions } from '../data/mockData';
import './Candidates.css';

export default function Candidates() {
  const navigate = useNavigate();
  const { positionId } = useParams();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [skillsModalCandidate, setSkillsModalCandidate] = useState(null);

  const position = positions.find((p) => p.id === Number(positionId));
  const positionSkills = position?.skills ?? [];

  const computeSkillMatch = (candidate) => {
    const norm = (s) => s.toLowerCase().trim();
    const candSet = new Set((candidate.skills ?? []).map(norm));
    const matched = positionSkills.filter((s) => candSet.has(norm(s)));
    const missing = positionSkills.filter((s) => !candSet.has(norm(s)));
    const posSet = new Set(positionSkills.map(norm));
    const additional = (candidate.skills ?? []).filter((s) => !posSet.has(norm(s)));
    const percent = positionSkills.length
      ? Math.round((matched.length / positionSkills.length) * 100)
      : 0;
    return { matched, missing, additional, percent };
  };

  const filtered = candidates.filter((c) => {
    const matchesPosition = c.positionId === Number(positionId);
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || c.status === statusFilter;
    return matchesPosition && matchesSearch && matchesStatus;
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
              <th>Match Skills</th>
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
                  <button
                    type="button"
                    className="candidate-skills-btn"
                    onClick={() => setSkillsModalCandidate(c)}
                    title="View matched & missing skills"
                  >
                    <span className="candidate-skills">
                      {c.skills.slice(0, 3).map((s, i) => (
                        <Badge key={i} variant="skill">{s}</Badge>
                      ))}
                      {c.skills.length > 3 && (
                        <span className="skills-more">+{c.skills.length - 3}</span>
                      )}
                    </span>
                  </button>
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

      <Modal
        open={!!skillsModalCandidate}
        onClose={() => setSkillsModalCandidate(null)}
        title={skillsModalCandidate ? `${skillsModalCandidate.name} — Skill Match` : ''}
        subtitle={position ? `Against: ${position.title}` : ''}
      >
        {skillsModalCandidate && (() => {
          const { matched, missing, additional, percent } =
            computeSkillMatch(skillsModalCandidate);
          const tier = percent >= 70 ? 'high' : percent >= 40 ? 'medium' : 'low';
          return (
            <div className="skill-match-modal">
              <div className={`skill-match-hero tier-${tier}`}>
                <div className="skill-match-percent-lg">{percent}%</div>
                <div className="skill-match-caption">
                  {matched.length} of {positionSkills.length} required skills matched
                </div>
              </div>

              <div className="skill-match-section">
                <div className="skill-match-label">
                  <Check size={14} /> Matched ({matched.length})
                </div>
                <div className="skill-pill-row">
                  {matched.length ? (
                    matched.map((s, i) => (
                      <span key={i} className="skill-pill matched">{s}</span>
                    ))
                  ) : (
                    <span className="skill-empty">No matches</span>
                  )}
                </div>
              </div>

              <div className="skill-match-section">
                <div className="skill-match-label">
                  <X size={14} /> Missing ({missing.length})
                </div>
                <div className="skill-pill-row">
                  {missing.length ? (
                    missing.map((s, i) => (
                      <span key={i} className="skill-pill missing">{s}</span>
                    ))
                  ) : (
                    <span className="skill-empty">None — all required skills covered</span>
                  )}
                </div>
              </div>

              {additional.length > 0 && (
                <div className="skill-match-section">
                  <div className="skill-match-label">
                    Additional skills ({additional.length})
                  </div>
                  <div className="skill-pill-row">
                    {additional.map((s, i) => (
                      <span key={i} className="skill-pill additional">{s}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })()}
      </Modal>
    </AppLayout>
  );
}
