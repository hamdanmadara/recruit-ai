import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  MessageSquare,
  Star,
  Download,
  FileText,
  Mail,
  Phone,
  Check,
  AlertTriangle,
} from 'lucide-react';
import AppLayout from '../components/layout/AppLayout';
import Card from '../components/ui/Card';
import Avatar from '../components/ui/Avatar';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { candidateProfile, candidates, positions } from '../data/mockData';
import './ResumeDetail.css';

function computePositionSkillMatch(candidate, position) {
  if (!candidate || !position) return null;
  const norm = (s) => s.toLowerCase().trim();
  const positionSkills = position.skills ?? [];
  const candSet = new Set((candidate.skills ?? []).map(norm));
  const matched = positionSkills.filter((s) => candSet.has(norm(s)));
  const missing = positionSkills.filter((s) => !candSet.has(norm(s)));
  return { matched, missing };
}

function ProfileCard({ profile, candidateRow, skillMatch }) {
  const name = candidateRow?.name ?? profile.name;
  const initials = candidateRow?.initials ?? profile.initials;
  const title = candidateRow?.title ?? profile.title;
  const location = candidateRow?.location ?? profile.location;
  const score = candidateRow?.matchScore ?? profile.matchScore;

  return (
    <Card className="profile-card">
      <div className="profile-top">
        <div className="profile-info">
          <Avatar initials={initials} size="lg" />
          <div>
            <h2 className="profile-name">{name}</h2>
            <p className="profile-title-loc">
              {title} &middot; {location}
            </p>
          </div>
        </div>
        <div className="profile-score">
          <span className="score-value">{score}%</span>
          <span className="score-label">Match Score</span>
        </div>
      </div>

      <div className="profile-section">
        <h4 className="section-label">Match Skills</h4>
        {skillMatch ? (
          <>
            <div className="skills-list">
              {skillMatch.matched.length > 0 ? (
                skillMatch.matched.map((s, i) => (
                  <Badge key={i} variant="skill-lg">
                    {s}
                  </Badge>
                ))
              ) : (
                <p className="skills-empty">No overlap with position requirements yet</p>
              )}
            </div>
            <h4 className="section-label section-label-sub">Missing skills</h4>
            <div className="skills-list skills-list-missing">
              {skillMatch.missing.length > 0 ? (
                skillMatch.missing.map((s, i) => (
                  <Badge key={i} variant="closed" className="skill-missing-badge">
                    {s}
                  </Badge>
                ))
              ) : (
                <p className="skills-empty">None — matches all listed position skills</p>
              )}
            </div>
          </>
        ) : (
          <div className="skills-list">
            {profile.skills.map((s, i) => (
              <Badge key={i} variant="skill-lg">
                {s.name} <span className="skill-years">{s.years}</span>
              </Badge>
            ))}
          </div>
        )}
      </div>

      <div className="profile-section">
        <h4 className="section-label">Education</h4>
        <p className="edu-degree">{profile.education.degree}</p>
        <p className="edu-institution">
          {profile.education.institution} &middot; {profile.education.period}
        </p>
      </div>

      <div className="profile-section">
        <h4 className="section-label">Contact</h4>
        <div className="contact-row">
          <span className="contact-item">
            <Mail size={14} /> {profile.email}
          </span>
          <span className="contact-item">
            <Phone size={14} /> {profile.phone}
          </span>
        </div>
      </div>
    </Card>
  );
}

function ExperienceCard({ experience }) {
  return (
    <Card className="experience-card">
      <h4 className="section-label">Work Experience</h4>
      <div className="exp-list">
        {experience.map((exp, i) => (
          <div
            key={i}
            className={`exp-item ${i === experience.length - 1 ? 'last' : ''}`}
          >
            <div className="exp-header">
              <h5 className="exp-title">{exp.title}</h5>
              <span className="exp-company">
                {exp.company} &middot; {exp.type}
              </span>
            </div>
            <p className="exp-duration">
              {exp.period} &middot; {exp.duration}
            </p>
            <p className="exp-desc">{exp.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

function ResumePreview() {
  return (
    <Card className="resume-preview-card">
      <div className="resume-preview-header">
        <span className="resume-preview-title">
          <FileText size={16} /> Original Resume
        </span>
        <Button variant="secondary" size="sm" icon={<Download size={14} />}>
          Download PDF
        </Button>
      </div>
      <div className="resume-placeholder">
        <div className="skel-line skel-title" style={{ width: '50%' }} />
        <div className="skel-line skel-text" style={{ width: '60%' }} />
        <div className="skel-line skel-text" style={{ width: '40%', marginBottom: 20 }} />
        {[40, 30, 35, 25, 28].map((w, si) => (
          <div key={si} className="skel-section">
            <div className="skel-line skel-heading" style={{ width: `${w}%` }} />
            {[90, 80, 70, 60].map((lw, li) => (
              <div
                key={li}
                className="skel-line skel-body"
                style={{ width: `${lw}%` }}
              />
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
}

function AISummaryCard({ summary, assessments }) {
  return (
    <Card className="ai-summary-card">
      <h4 className="section-label">AI Summary</h4>
      <p className="ai-summary-text">{summary}</p>
      <div className="assessment-badges">
        {assessments.map((a, i) => (
          <span key={i} className={`assessment-badge assessment-${a.status}`}>
            {a.status === 'active' ? (
              <Check size={14} />
            ) : (
              <AlertTriangle size={14} />
            )}
            {a.label}
          </span>
        ))}
      </div>
    </Card>
  );
}

export default function ResumeDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const profile = candidateProfile;
  const candidateRow = candidates.find((c) => c.id === id);
  const position =
    candidateRow != null
      ? positions.find((p) => p.id === candidateRow.positionId)
      : null;
  const skillMatch = computePositionSkillMatch(candidateRow, position);

  const goBack = () => {
    if (candidateRow?.positionId != null) {
      navigate(`/positions/${candidateRow.positionId}/candidates`);
    } else {
      navigate('/positions');
    }
  };

  return (
    <AppLayout>
      <div className="page-header">
        <div className="page-header-left">
          <h1 className="page-title">
            <span className="back-arrow" onClick={goBack}>
              <ArrowLeft size={20} />
            </span>
            Candidate Profile
          </h1>
          <p className="page-subtitle">
            {candidateRow
              ? `${candidateRow.title} · ${candidateRow.name}`
              : `${profile.title} · ${profile.name}`}
          </p>
        </div>
        <div className="page-header-actions">
          <Button
            variant="secondary"
            icon={<MessageSquare size={16} />}
            onClick={() => navigate('/chat')}
          >
            Open in Chat
          </Button>
          <Button variant="primary" icon={<Star size={16} />}>
            Shortlist
          </Button>
        </div>
      </div>

      <div className="resume-detail-grid">
        <div className="resume-left-col">
          <ProfileCard
            profile={profile}
            candidateRow={candidateRow}
            skillMatch={skillMatch}
          />
          <ExperienceCard experience={profile.experience} />
        </div>
        <div className="resume-right-col">
          <AISummaryCard
            summary={profile.aiSummary}
            assessments={profile.assessments}
          />
          <ResumePreview />
        </div>
      </div>
    </AppLayout>
  );
}
