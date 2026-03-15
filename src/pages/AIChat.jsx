import { useState } from 'react';
import { SendHorizontal, MapPin } from 'lucide-react';
import Sidebar from '../components/layout/Sidebar';
import MobileHeader from '../components/layout/MobileHeader';
import Avatar from '../components/ui/Avatar';
import Badge from '../components/ui/Badge';
import Dropdown from '../components/ui/Dropdown';
import {
  chatMessages,
  shortlistedCandidates,
  quickPrompts,
} from '../data/mockData';
import './AIChat.css';

function CandidateCard({ candidate }) {
  return (
    <div className="chat-candidate-card">
      <div className="chat-candidate-top">
        <span className="chat-candidate-name">
          {candidate.rank}. {candidate.name}
        </span>
        <Badge variant={`match-${candidate.matchLevel}`}>
          {candidate.matchScore}% match
        </Badge>
      </div>
      <div className="chat-candidate-skills">
        {candidate.skills.map((skill, i) => (
          <Badge key={i} variant="skill">
            {skill}
          </Badge>
        ))}
      </div>
      <p className="chat-candidate-meta">{candidate.meta}</p>
    </div>
  );
}

function ChatMessage({ message }) {
  const isBot = message.sender === 'bot';

  return (
    <div className={`chat-message ${isBot ? 'bot' : 'user'}`}>
      <Avatar
        initials={isBot ? 'AI' : 'EM'}
        size="sm"
        variant={isBot ? 'bot' : 'muted'}
      />
      <div className="chat-bubble">
        <p dangerouslySetInnerHTML={{ __html: message.content }} />

        {message.candidates?.map((c, i) => (
          <CandidateCard key={i} candidate={c} />
        ))}

        {message.bullets && (
          <div className="chat-bullets">
            {message.bullets.map((b, i) => (
              <div key={i} className="chat-bullet">
                <span
                  className="chat-bullet-dot"
                  style={{ background: b.color }}
                />
                <span dangerouslySetInnerHTML={{ __html: b.text }} />
              </div>
            ))}
          </div>
        )}

        {message.followUp && (
          <p
            className="chat-followup"
            dangerouslySetInnerHTML={{ __html: message.followUp }}
          />
        )}
      </div>
    </div>
  );
}

function ShortlistPanel() {
  return (
    <div className="chat-right-panel">
      <div className="chat-right-panel-header">
        <h4 className="section-label" style={{ margin: 0 }}>
          Shortlisted ({shortlistedCandidates.length})
        </h4>
      </div>
      <div className="chat-right-panel-body">
        <div className="shortlist-list">
          {shortlistedCandidates.map((c, i) => (
            <div key={i} className="shortlist-item">
              <Avatar initials={c.initials} size="sm" variant="muted" />
              <div className="shortlist-info">
                <div className="shortlist-name">{c.name}</div>
                <div className="shortlist-role">{c.role}</div>
              </div>
              <span className="shortlist-score">{c.score}%</span>
            </div>
          ))}
        </div>

        <h4 className="section-label" style={{ marginTop: 24 }}>
          Quick Prompts
        </h4>
        <div className="quick-prompts">
          {quickPrompts.map((p, i) => (
            <button key={i} className="quick-prompt-btn">
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const positionOptions = [
  { value: 'frontend', label: 'Senior Frontend Developer (124 resumes)' },
  { value: 'backend', label: 'Backend Engineer - Java (89 resumes)' },
  { value: 'all', label: 'All Positions (342 resumes)' },
];

export default function AIChat() {
  const [input, setInput] = useState('');
  const [position, setPosition] = useState('frontend');

  return (
    <div className="chat-layout">
      <Sidebar />

      <div className="chat-main">
        <MobileHeader />
        <div className="chat-header">
          <h3 className="chat-header-title">AI Recruiting Assistant</h3>
          <Dropdown
            options={positionOptions}
            value={position}
            onChange={setPosition}
            icon={<MapPin size={14} />}
            size="sm"
            className="chat-position-dropdown"
          />
          <span className="chat-query-count">38 queries remaining</span>
        </div>

        <div className="chat-messages">
          {chatMessages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
        </div>

        <div className="chat-input-bar">
          <input
            type="text"
            placeholder="Ask about candidates... e.g. 'Who has AWS certification?'"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chat-input"
          />
          <button className="chat-send-btn">
            <SendHorizontal size={20} />
          </button>
        </div>
      </div>

      <ShortlistPanel />
    </div>
  );
}
