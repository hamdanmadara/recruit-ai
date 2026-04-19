# RecruitAI — Product Overview

## The Idea

RecruitAI is a recruitment platform for teams that receive large volumes of resumes and need to find the right candidates fast. Instead of manually reading every CV, recruiters upload resumes in bulk against a specific job position, and the platform parses, indexes, and ranks them automatically. On top of that sits an AI chatbot that lets recruiters *talk to their resume bank* in plain English — ask anything like "who has 5 years of Angular and knows AWS" and get ranked, explained answers.

The north star: **hire smarter, not harder** — cut resume screening time by ~70% and surface the strongest candidates through conversation rather than keyword search.

---

## User & Context

The primary user is a recruiter or hiring manager (e.g. "Emily") at a company that opens several roles at a time and accumulates hundreds of applications per role. They juggle multiple positions, need to compare candidates across roles, and want a single place where every uploaded CV becomes searchable, rankable intelligence.

The product is marketed as a freemium tool: a free tier with capped resumes and monthly AI queries, a fast onboarding flow ("set up in under 2 minutes"), and enterprise-grade security messaging.

---

## High-Level Flow

1. Recruiter signs up → lands on dashboard.
2. Creates a **position** (title + job description).
3. Uploads resumes in bulk for that position (PDF / DOCX / DOC / ZIP).
4. The platform parses each resume, extracts structured data (skills with years, education, experience, contact), and computes a **match score** against the position's JD.
5. Recruiter reviews the ranked candidate list, opens individual profiles, and shortlists the strongest.
6. For deeper exploration, they open the **AI Chat** scoped to a position (or all positions) and converse with the data — filtering, comparing, following up, and shortlisting directly from the conversation.
7. Shortlisted candidates roll up into a cross-position **Shortlisted** view for final decision-making.

---

## Pages & Features

### 1. Authentication — Sign In / Sign Up

A split-screen auth experience. The left side is a product pitch with tagline, description, and three quick value bullets (bulk upload, AI chatbot, reduced screening time on login; free-tier limits, security, fast setup on register). The right side is the form.

- **Sign Up** collects first/last name, company name, work email, and password, plus a Terms/Privacy consent check.
- **Sign In** takes email + password with "remember me" and a forgot-password link.
- Both pages offer **Continue with Google** as an alternative.
- Successful auth drops the user on the Dashboard.

### 2. Dashboard

The home screen after login. Its job is to give the recruiter an immediate pulse of their hiring pipeline and a fast path back into work.

- **Welcome banner** with a personalized greeting, a contextual hint ("You have 3 new candidates parsed since yesterday"), and a prominent CTA to jump straight into the AI Chat.
- **Stats grid** with four KPIs at a glance:
  - Total Positions (plus month-over-month change)
  - Total Resumes (plus week delta)
  - AI Queries used this cycle (and how many remain on the plan)
  - Shortlisted candidates (plus week delta)
- **Recent Activity feed** — a chronological stream of system-generated events: resumes parsed for a position, candidates shortlisted, positions created, AI match results, etc. Each item has a colored dot, a short sentence with bolded entities, and a relative timestamp ("2 hours ago").

### 3. Positions — List & Management

The core hub where every open role lives. Each position is essentially a container that holds a job description, a resume bank, and a shortlist.

- **Header** with page title, subtitle, and a primary "Create Position" CTA.
- **Toolbar** with:
  - A search box (filters by title or department).
  - A status filter (All / Active / Draft / Closed).
  - A sort control (Newest, Oldest, Most Resumes, Name A–Z).
- **Table** with columns for Position (title + department · location), Status badge, Resumes count (with a mini progress bar so the eye can compare volumes), Shortlisted count, Created date, and a row action menu.
- **Row action menu** (three-dot button) gives quick access to: Open AI Chat for that position, View Candidates, Edit Position, Upload more resumes, or Delete. This keeps the most common workflows one click away from any row.

### 4. Create Position

A two-card form for adding a new role and immediately populating it with resumes.

- **Position Details card** — collects the job title and a free-form job description (role, responsibilities, requirements). The JD is what the AI will later match candidates against.
- **Upload Resumes card** — a drag-and-drop zone (with click-to-browse fallback) that accepts `.pdf`, `.docx`, `.doc`, and `.zip` archives. The messaging makes the promise explicit: "Our AI will parse and index them automatically."
- **Actions** — Cancel returns to the positions list; the primary button is "Create Position & Start Parsing," framing creation and ingestion as one unified step rather than two.

### 5. Candidates — Per-Position List

Reached by clicking into a specific position. Shows every resume uploaded for that role, ranked and filterable.

- **Contextual header** with a back arrow to Positions, the page title, and a subtitle that names the position and total candidate count.
- **Toolbar** with search (by name, title, or skill) and a status filter (All / Shortlisted / Reviewed / New).
- **Candidate table** with columns:
  - Candidate (avatar initials + name + current title · location)
  - Experience (years)
  - Skills (first three as chip badges, with a "+N" overflow indicator)
  - Match score (colored by tier — high ≥80%, medium 65–79%, low <65%)
  - Status badge (New / Reviewed / Shortlisted)
  - A view button that opens the full candidate profile.
- If filters return nothing, an empty state explains why.

### 6. Candidate Profile (Resume Detail)

A deep-dive view of one candidate. Laid out as a two-column grid so the recruiter can read the parsed data and the raw resume side by side.

- **Header** with a back arrow, the candidate's name as the page title, the position context in the subtitle, and two actions: "Open in Chat" (drop the candidate into an AI conversation) and a primary "Shortlist" button.
- **Left column — Profile Card:**
  - Avatar + name + title · location, with the match score shown as a prominent percentage on the right.
  - **Skills** rendered as richer badges showing skill name and years of experience (e.g. "Angular 6yr").
  - **Education** with degree, institution, and period.
  - **Contact** with email and phone.
- **Left column — Work Experience Card:** a chronological list of roles, each with title, company · employment type, period and duration, and a narrative description of what they did there.
- **Right column — Original Resume Preview:** a rendered preview of the source document with a Download PDF button, so the recruiter can still read the original if the parsed summary misses nuance.
- **Right column — AI Summary Card:** a paragraph-length summary generated from the resume (what makes this candidate a strong fit, where they shine), followed by a row of assessment badges that quickly tag strengths and gaps (e.g. ✓ Strong Angular, ✓ Java Backend, ⚠ Limited AWS).

### 7. AI Chat — the Conversational Recruiter

The distinguishing feature. A full-screen three-panel chat where the recruiter can interrogate their resume bank in natural language.

- **Left panel** — the same app sidebar for navigation.
- **Main chat column:**
  - **Header** with the assistant title, a **position scope dropdown** (pick a single position's resume bank, e.g. "Senior Frontend Developer (124 resumes)", or "All Positions"), and a live counter showing how many AI queries remain on the user's plan.
  - **Message stream** — mixed bubbles from the AI and the user. The AI can reply with:
    - Plain prose (with bolded entities).
    - **Ranked candidate cards** — each showing rank, name, a colored match-percentage badge, a row of skill-with-years chips, and a one-line meta summary (current role · total experience · education).
    - **Bullet lists** — e.g. narrowing-down results, each bullet colored to signal confidence (green = strong, orange = partial).
    - **Follow-up prompts** suggesting next actions ("Would you like to see full profiles, or narrow down further? You can also say 'shortlist James Carter' to save him").
  - **Input bar** — a text field with hint text ("Ask about candidates… e.g. 'Who has AWS certification?'") and a send button.
- **Right panel — Shortlist & Quick Prompts:**
  - Live list of candidates currently shortlisted (avatar, name, role, match %) so the user can see their working set while chatting.
  - **Quick Prompts** — one-tap suggestion chips like "Show top 5 candidates", "Who has AWS experience?", "Compare top 3 candidates", "Find remote-friendly candidates". These lower the blank-page cost and teach the user what the AI can do.

The chat supports multi-turn refinement: the AI remembers the last result set, so follow-ups like "From these, who also has Docker experience?" work against the previous answer rather than starting over. Shortlisting can happen directly through the conversation.

### 8. Shortlisted — Cross-Position Roll-Up

A global view of every shortlisted candidate across every position, for when the recruiter is ready to make decisions.

- **Header** with a live count ("N shortlisted candidates across positions").
- **Toolbar** with search (by name, title, position, or skill) and a filter to narrow to a specific position.
- **Table** similar to the Candidates page but with an added **Position** column showing which role each shortlist entry belongs to. The position is a clickable link that jumps back into that position's candidate list.
- Each row has a view button to open the full candidate profile.

---

## Shared UI & Navigation

- **Sidebar** (present on every in-app page except the auth and chat layouts which style it slightly differently): branded "RecruitAI" logo, a collapsible control, a Main section with Dashboard / Positions (badged with count) / AI Chat / Shortlisted, and a Settings section with Settings and Billing entries (shown as placeholders). A profile popover sits at the bottom.
- **Mobile header** — a compact top bar used on narrow viewports to expose the sidebar through a drawer.
- **Theme** — the app supports light/dark theming through a global theme context, with a toggle available to the user.
- **Badges, avatars, match-score coloring, and status chips** are used consistently across the app so the recruiter builds a quick visual vocabulary: purple = primary action, green = strong match / positive event, orange = partial / warning, neutral grey = informational.

---

## Product Principles Visible in the UI

1. **Speed over manual reading.** Every screen optimizes for ranking, filtering, and jumping into the next action — counts, progress bars, match-score colors, quick-prompt chips.
2. **Conversation as a first-class interface.** The AI Chat isn't a sidebar toy; it's a full workspace with scoped context, memory across turns, and the ability to act (shortlist) from the conversation.
3. **Position-centric organization.** Every resume lives inside a position. The JD defines what "match" means, so uploading into a specific position is the only way data enters the system.
4. **Transparency of AI decisions.** Match scores are always visible and color-coded. AI Summary cards explain *why* a candidate is a fit, and assessment badges flag gaps as well as strengths — the recruiter is never asked to trust a black-box number.
5. **Usage awareness.** Query-remaining counters on the chat and AI-query stats on the dashboard keep plan limits front-of-mind without being punitive, supporting the freemium model.
