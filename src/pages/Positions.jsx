import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Plus,
  Search,
  MoreVertical,
  Bot,
  Users,
  Pencil,
  Upload,
  Trash2,
} from 'lucide-react';
import AppLayout from '../components/layout/AppLayout';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Dropdown from '../components/ui/Dropdown';
import { positions } from '../data/mockData';
import './Positions.css';

export default function Positions() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const filtered = positions
    .filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.department.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === 'all' || p.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') return b.id - a.id;
      if (sortBy === 'oldest') return a.id - b.id;
      if (sortBy === 'resumes') return b.resumes - a.resumes;
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <AppLayout>
      <div className="page-header">
        <div className="page-header-left">
          <h1 className="page-title">Positions</h1>
          <p className="page-subtitle">
            Manage your open positions and resume banks
          </p>
        </div>
        <Button
          variant="primary"
          icon={<Plus size={18} />}
          onClick={() => navigate('/positions/create')}
        >
          Create Position
        </Button>
      </div>

      <div className="table-container">
        <div className="table-toolbar">
          <div className="table-search">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search positions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="table-filters">
            <Dropdown
              options={[
                { value: 'all', label: 'All Status' },
                { value: 'active', label: 'Active' },
                { value: 'draft', label: 'Draft' },
                { value: 'closed', label: 'Closed' },
              ]}
              value={statusFilter}
              onChange={setStatusFilter}
              size="sm"
              className="filter-dropdown"
            />
            <Dropdown
              options={[
                { value: 'newest', label: 'Newest First' },
                { value: 'oldest', label: 'Oldest First' },
                { value: 'resumes', label: 'Most Resumes' },
                { value: 'name', label: 'Name A-Z' },
              ]}
              value={sortBy}
              onChange={setSortBy}
              size="sm"
              className="filter-dropdown"
            />
          </div>
        </div>

        <table className="positions-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Status</th>
              <th>Resumes</th>
              <th>Shortlisted</th>
              <th>Created</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((pos) => (
              <tr key={pos.id}>
                <td>
                  <div className="position-name">{pos.title}</div>
                  <div className="position-meta">
                    {pos.department} &middot; {pos.location}
                  </div>
                </td>
                <td>
                  <Badge variant={pos.status}>
                    {pos.status.charAt(0).toUpperCase() + pos.status.slice(1)}
                  </Badge>
                </td>
                <td>
                  <div className="resume-count">
                    <span>{pos.resumes}</span>
                    <div className="resume-bar">
                      <div
                        className="resume-bar-fill"
                        style={{ width: `${pos.barWidth}%` }}
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <span className="shortlist-count">{pos.shortlisted}</span>
                </td>
                <td>
                  <span className="created-date">{pos.created}</span>
                </td>
                <td className="actions-cell" ref={openMenu === pos.id ? menuRef : null}>
                  <button
                    className="action-dots"
                    onClick={() =>
                      setOpenMenu(openMenu === pos.id ? null : pos.id)
                    }
                  >
                    <MoreVertical size={16} />
                  </button>
                  {openMenu === pos.id && (
                    <div className="action-menu">
                      <div
                        className="action-menu-item"
                        onClick={() => {
                          setOpenMenu(null);
                          navigate('/chat');
                        }}
                      >
                        <Bot size={14} /> Open AI Chat
                      </div>
                      <div
                        className="action-menu-item"
                        onClick={() => {
                          setOpenMenu(null);
                          navigate(`/positions/${pos.id}/candidates`);
                        }}
                      >
                        <Users size={14} /> View Candidates
                      </div>
                      <div className="action-menu-item" onClick={() => setOpenMenu(null)}>
                        <Pencil size={14} /> Edit Position
                      </div>
                      <div className="action-menu-item" onClick={() => setOpenMenu(null)}>
                        <Upload size={14} /> Upload Resumes
                      </div>
                      <div
                        className="action-menu-item danger"
                        onClick={() => setOpenMenu(null)}
                      >
                        <Trash2 size={14} /> Delete
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppLayout>
  );
}
