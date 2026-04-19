import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Upload,
  Bot,
  Star,
  Zap,
  MessageSquareText,
  Users,
  Check,
} from 'lucide-react';
import './Landing.css';

function LandingNav() {
  const navigate = useNavigate();
  return (
    <header className="landing-nav">
      <div className="landing-nav-inner">
        <Link to="/" className="landing-brand">
          Talent<span>lyn</span>
        </Link>
        <nav className="landing-nav-links">
          <a href="#how">How it works</a>
          <a href="#parsing">Parsing</a>
          <a href="#listing">Ranking</a>
          <a href="#showcase">AI Chat</a>
        </nav>
        <div className="landing-nav-ctas">
          <button
            className="landing-btn-ghost"
            onClick={() => navigate('/login')}
          >
            Sign in
          </button>
          <button
            className="landing-btn-primary"
            onClick={() => navigate('/dashboard')}
          >
            Try the demo <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </header>
  );
}

function ChatMockHero() {
  return (
    <div className="chat-mock">
      <div className="chat-mock-header">
        <div className="chat-mock-dot" />
        <span>Senior Frontend Developer · 124 resumes</span>
      </div>
      <div className="chat-mock-body">
        <div className="chat-mock-msg user">
          Find candidates with 5+ years Angular who also know Java.
        </div>
        <div className="chat-mock-msg bot">
          Found <strong>8 matches</strong>. Here are the top 3:
          <div className="chat-mock-candidate">
            <span className="rank">01</span>
            <div className="cand-info">
              <div className="name">Alex Rivera</div>
              <div className="meta">Angular · 7yr &nbsp;·&nbsp; Java · 4yr</div>
              <div className="cand-reason">
                Highest raw experience on both axes: 7 years Angular, 4
                years Java.
              </div>
            </div>
            <span className="score">94%</span>
          </div>
          <div className="chat-mock-candidate">
            <span className="rank">02</span>
            <div className="cand-info">
              <div className="name">James Carter</div>
              <div className="meta">Angular · 6yr &nbsp;·&nbsp; Java · 3yr &nbsp;·&nbsp; TypeScript · 5yr</div>
              <div className="cand-reason">
                Just below Alex on years, but adds 5 years of TypeScript. A
                well-rounded all-round fit.
              </div>
            </div>
            <span className="score">88%</span>
          </div>
          <div className="chat-mock-candidate">
            <span className="rank">03</span>
            <div className="cand-info">
              <div className="name">Sarah Mitchell</div>
              <div className="meta">Angular · 5yr &nbsp;·&nbsp; Java · 1yr &nbsp;·&nbsp; React · 3yr</div>
              <div className="cand-reason">
                Meets the 5-year Angular bar exactly; Java is light, present
                only on two recent roles.
              </div>
            </div>
            <span className="score">76%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="landing-hero">
      <div className="landing-container">
        <span className="eyebrow">For recruiters drowning in PDFs</span>
        <h1 className="display">
          Stop reading resumes.
          <br />
          Start asking questions.
        </h1>
        <p className="hero-sub">
          Talentlyn turns your bulk resume pile into a conversation. Drop in
          your applications, browse every candidate ranked with match scores,
          matched &amp; missing skill breakdowns, and full parsed profiles.
          Then open one chat and ask in plain English, with reasoning attached
          to every answer.
        </p>
        <div className="hero-ctas">
          <button
            className="landing-btn-primary-lg"
            onClick={() => navigate('/dashboard')}
          >
            Try the live demo <ArrowRight size={18} />
          </button>
          <button
            className="landing-btn-ghost-lg"
            onClick={() => navigate('/login')}
          >
            or sign in
          </button>
        </div>
        <p className="hero-meta">
          No signup. No credit card. The full app, loaded with demo data.
        </p>
        <div className="hero-visual">
          <ChatMockHero />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: '01',
      title: 'Create a position',
      desc: 'Paste the job description for the role. Required skills are extracted automatically and become the target every candidate is scored against.',
    },
    {
      n: '02',
      title: 'Upload resumes for that role',
      desc: 'Drop every candidate resume you have for this position: PDFs, Word docs, or a zip. Each one is parsed and indexed against that specific JD.',
    },
    {
      n: '03',
      title: 'Review the ranked list',
      desc: 'Every candidate is scored, ranked, and tagged with matched & missing skills. Open any profile for the full extracted details and AI summary.',
    },
    {
      n: '04',
      title: 'Ask anything',
      desc: 'Query your resume bank in plain English, like "5+ years Angular with AWS", and shortlist directly from the conversation.',
    },
  ];
  return (
    <section id="how" className="landing-section">
      <div className="landing-container">
        <span className="eyebrow">How it works</span>
        <h2 className="section-heading">
          Four steps. That's the whole thing.
        </h2>
        <div className="steps-grid steps-grid-4">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <span className="step-num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: <Upload size={20} />,
      title: 'Bulk upload & parse',
      desc: 'Drop 200 resumes at once. Skills, experience, education, and contact details get extracted and indexed automatically.',
    },
    {
      icon: <Star size={20} />,
      title: 'Match scores per role',
      desc: "Every candidate is scored against the position's JD. See who fits and what they're missing at a glance.",
    },
    {
      icon: <Bot size={20} />,
      title: 'Chat with your data',
      desc: 'Ask "who has 5+ years of Angular and knows AWS" and get ranked results in seconds with reasoning, not opaque scores.',
    },
    {
      icon: <MessageSquareText size={20} />,
      title: 'Multi-turn refinement',
      desc: 'Follow up without losing context. "From these, who also has Docker experience?" narrows down your last answer.',
    },
    {
      icon: <Users size={20} />,
      title: 'Cross-position shortlist',
      desc: 'Pull your strongest picks from every role into one decision-ready view. Compare, share, hire.',
    },
    {
      icon: <Zap size={20} />,
      title: 'Transparent ranking',
      desc: 'Skill match %, matched & missing tags, AI-written summaries. You always see why a candidate ranks where they do.',
    },
  ];
  return (
    <section id="features" className="landing-section">
      <div className="landing-container">
        <span className="eyebrow">Features</span>
        <h2 className="section-heading">
          Built for the recruiter who reads too many PDFs.
        </h2>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfileMock() {
  const matched = [
    ['React', '6yr'],
    ['TypeScript', '5yr'],
    ['Angular', '6yr'],
    ['CSS', '4yr'],
    ['Redux', '4yr'],
    ['JavaScript', '7yr'],
  ];
  const missing = ['Next.js', 'Webpack'];
  return (
    <div className="profile-mock">
      <div className="profile-mock-top">
        <div className="profile-mock-avatar">JC</div>
        <div className="profile-mock-info">
          <div className="profile-mock-name">James Carter</div>
          <div className="profile-mock-title">
            Senior Frontend Developer · San Francisco
          </div>
        </div>
        <div className="profile-mock-score">
          <div className="score-num">94%</div>
          <div className="score-label">Match</div>
        </div>
      </div>

      <div className="profile-mock-section">
        <div className="mock-section-label">Matched skills · {matched.length}</div>
        <div className="skill-pills">
          {matched.map(([name, yrs]) => (
            <span className="skill-pill" key={name}>
              <strong>{name}</strong>
              <span className="skill-years">{yrs}</span>
            </span>
          ))}
        </div>

        <div className="mock-section-label mock-section-label-sub">
          Missing skills · {missing.length}
        </div>
        <div className="skill-pills">
          {missing.map((name) => (
            <span className="skill-pill missing" key={name}>
              <strong>{name}</strong>
            </span>
          ))}
        </div>
      </div>

      <div className="profile-mock-section">
        <div className="mock-section-label">Experience</div>
        <div className="exp-row">
          <div className="exp-title">Senior Frontend Developer · Google</div>
          <div className="exp-period">Jan 2022 - Present · 4 years</div>
        </div>
        <div className="exp-row">
          <div className="exp-title">Frontend Developer · Shopify</div>
          <div className="exp-period">Jun 2019 - Dec 2021 · 2.5 years</div>
        </div>
      </div>

      <div className="profile-mock-section">
        <div className="mock-section-label">AI Summary</div>
        <p className="ai-summary-text">
          6 years of dedicated frontend experience across React and Angular,
          with progressively senior roles at Google and Shopify. Strong on
          Java backend collaboration. Limited AWS exposure.
        </p>
        <div className="assess-row">
          <span className="assess good">
            <Check size={12} /> Strong React
          </span>
          <span className="assess good">
            <Check size={12} /> Java Backend
          </span>
          <span className="assess warn">⚠ Limited AWS</span>
        </div>
      </div>
    </div>
  );
}

function ListingMock() {
  const rows = [
    {
      rank: '01',
      initials: 'JC',
      name: 'James Carter',
      title: 'Senior Frontend Developer',
      exp: '6 yrs',
      skills: ['React', 'TypeScript', 'Angular'],
      score: 94,
    },
    {
      rank: '02',
      initials: 'LW',
      name: 'Laura Williams',
      title: 'Frontend Engineer',
      exp: '4 yrs',
      skills: ['React', 'Redux', 'GraphQL'],
      score: 89,
    },
    {
      rank: '03',
      initials: 'SM',
      name: 'Sarah Mitchell',
      title: 'Lead Frontend Engineer',
      exp: '7 yrs',
      skills: ['React', 'TypeScript', 'Next.js'],
      score: 87,
    },
    {
      rank: '04',
      initials: 'AR',
      name: 'Alex Rivera',
      title: 'Full Stack Developer',
      exp: '8 yrs',
      skills: ['Angular', 'Java', 'AWS'],
      score: 78,
    },
  ];
  const tier = (s) => (s >= 85 ? 'high' : s >= 70 ? 'mid' : 'low');
  return (
    <div className="listing-mock">
      <div className="listing-mock-toolbar">
        <span>Senior Frontend Developer · 124 candidates</span>
        <span className="listing-mock-filter">Sorted by match</span>
      </div>
      <div className="listing-mock-header">
        <div>Candidate</div>
        <div>Experience</div>
        <div>Matched skills</div>
        <div className="right">Match</div>
      </div>
      {rows.map((r) => (
        <div className="listing-row" key={r.rank}>
          <div className="candidate-cell">
            <span className="rank-badge">{r.rank}</span>
            <div className="listing-avatar">{r.initials}</div>
            <div className="candidate-text">
              <div className="listing-name">{r.name}</div>
              <div className="listing-title">{r.title}</div>
            </div>
          </div>
          <div className="exp-cell">{r.exp}</div>
          <div className="skills-cell">
            {r.skills.map((s) => (
              <span className="mini-skill" key={s}>
                {s}
              </span>
            ))}
          </div>
          <div className="match-cell">
            <span className={`match-score-pill ${tier(r.score)}`}>
              {r.score}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ParsingShowcase() {
  return (
    <section id="parsing" className="landing-section">
      <div className="landing-container landing-showcase-inner">
        <div className="landing-showcase-copy">
          <span className="eyebrow">Resume parsing</span>
          <h2 className="section-heading">
            Every resume. Parsed into structure.
          </h2>
          <p className="section-sub">
            Skills with years, work history, education, contact details: all
            extracted automatically. An AI summary highlights fit and flags
            gaps, alongside a match score you can actually trust.
          </p>
          <ul className="checklist">
            <li>
              <Check size={16} /> Skills with years of experience
            </li>
            <li>
              <Check size={16} /> Work history with dates and duration
            </li>
            <li>
              <Check size={16} /> AI summary highlighting strengths & gaps
            </li>
            <li>
              <Check size={16} /> Original PDF preserved for download
            </li>
          </ul>
        </div>
        <div className="landing-showcase-visual">
          <ProfileMock />
        </div>
      </div>
    </section>
  );
}

function ListingShowcase() {
  return (
    <section id="listing" className="landing-section">
      <div className="landing-container landing-showcase-inner reverse">
        <div className="landing-showcase-copy">
          <span className="eyebrow">Ranked listing</span>
          <h2 className="section-heading">
            Every candidate scored and ranked.
          </h2>
          <p className="section-sub">
            One row per resume. Match score, key skills, and years of
            experience at a glance. Click any row for the full parsed profile,
            or tap the skills cell to see matched vs. missing requirements.
          </p>
          <ul className="checklist">
            <li>
              <Check size={16} /> Color-coded match percentages
            </li>
            <li>
              <Check size={16} /> Matched vs. missing skills per candidate
            </li>
            <li>
              <Check size={16} /> Search by name, title, or skill
            </li>
            <li>
              <Check size={16} /> Filter by status: new, reviewed, shortlisted
            </li>
          </ul>
        </div>
        <div className="landing-showcase-visual">
          <ListingMock />
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section id="showcase" className="landing-section">
      <div className="landing-container landing-showcase-inner">
        <div className="landing-showcase-copy">
          <span className="eyebrow">AI Chat</span>
          <h2 className="section-heading">Ask anything. Get reasoning.</h2>
          <p className="section-sub">
            Not keyword search dressed up as AI. The chat understands context,
            narrows down across turns, and tells you why each candidate ranks
            where they do.
          </p>
          <ul className="checklist">
            <li>
              <Check size={16} /> Natural-language queries, multi-turn
            </li>
            <li>
              <Check size={16} /> Shortlist straight from the conversation
            </li>
            <li>
              <Check size={16} /> Reasoning attached to every answer
            </li>
            <li>
              <Check size={16} /> Scoped per position or across all roles
            </li>
          </ul>
        </div>
        <div className="landing-showcase-visual">
          <div className="chat-mock">
            <div className="chat-mock-body">
              <div className="chat-mock-msg user">
                From the shortlist, who has cloud certifications?
              </div>
              <div className="chat-mock-msg bot">
                <strong>2 candidates</strong> list cloud credentials, one
                doesn't:
                <div className="chat-mock-bullet with-reason">
                  <span className="dot green" />
                  <div className="bullet-content">
                    <span>
                      <strong>James Carter</strong>, AWS Solutions Architect
                      (2023)
                    </span>
                    <span className="bullet-reason">
                      Earned while at Google; backs up 2 years of EKS work on
                      his CI/CD team.
                    </span>
                  </div>
                </div>
                <div className="chat-mock-bullet with-reason">
                  <span className="dot green" />
                  <div className="bullet-content">
                    <span>
                      <strong>Laura Williams</strong>, AWS Developer Associate
                      (2024)
                    </span>
                    <span className="bullet-reason">
                      Most recent cert; she lists Lambda &amp; S3 as
                      day-to-day tools.
                    </span>
                  </div>
                </div>
                <div className="chat-mock-bullet with-reason">
                  <span className="dot warn" />
                  <div className="bullet-content">
                    <span>
                      <strong>Sarah Mitchell</strong>, no formal cert
                    </span>
                    <span className="bullet-reason">
                      Mentions AWS in a side project, but nothing credentialed
                      on the resume.
                    </span>
                  </div>
                </div>
                <div className="chat-mock-note">
                  Want me to compare James and Laura side by side?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  const navigate = useNavigate();
  return (
    <section className="landing-section landing-closing">
      <div className="landing-container closing-inner">
        <h2 className="closing-heading">See it with real data.</h2>
        <p className="closing-sub">
          The demo is the full application: five positions, dozens of
          candidates, and a live AI chat. No signup required.
        </p>
        <button
          className="landing-btn-primary-lg"
          onClick={() => navigate('/dashboard')}
        >
          Try the demo <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="landing-footer">
      <div className="landing-container footer-inner">
        <div>
          <Link to="/" className="landing-brand">
            Talent<span>lyn</span>
          </Link>
          <p className="footer-tag">Hire smarter. Not harder.</p>
        </div>
        <div className="footer-meta">
          <span>© 2026 Talentlyn</span>
          <span className="sep">·</span>
          <a href="#">Privacy</a>
          <span className="sep">·</span>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default function Landing() {
  return (
    <div className="landing" data-theme="light">
      <LandingNav />
      <Hero />
      <HowItWorks />
      <ParsingShowcase />
      <ListingShowcase />
      <Showcase />
      <Features />
      <ClosingCTA />
      <Footer />
    </div>
  );
}
