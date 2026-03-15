export const stats = [
  {
    label: 'Total Positions',
    value: '5',
    change: '+2 this month',
    icon: 'Briefcase',
    iconBg: 'rgba(108, 92, 231, 0.12)',
    iconColor: 'var(--primary-light)',
  },
  {
    label: 'Total Resumes',
    value: '342',
    change: '+48 this week',
    icon: 'FileText',
    iconBg: 'rgba(0, 210, 211, 0.12)',
    iconColor: 'var(--accent)',
  },
  {
    label: 'AI Queries',
    value: '127',
    change: '38 remaining',
    icon: 'Bot',
    iconBg: 'rgba(46, 213, 115, 0.12)',
    iconColor: 'var(--accent-green)',
  },
  {
    label: 'Shortlisted',
    value: '23',
    change: '8 this week',
    icon: 'Star',
    iconBg: 'rgba(255, 165, 2, 0.12)',
    iconColor: 'var(--accent-orange)',
  },
];

export const activities = [
  {
    color: 'var(--primary)',
    text: '<strong>45 resumes</strong> parsed for \'Senior Frontend Developer\'',
    time: '2 hours ago',
  },
  {
    color: 'var(--accent-green)',
    text: '<strong>James Carter</strong> shortlisted for \'Backend Engineer\'',
    time: '5 hours ago',
  },
  {
    color: 'var(--accent)',
    text: 'New position <strong>\'DevOps Engineer\'</strong> created',
    time: '1 day ago',
  },
  {
    color: 'var(--primary)',
    text: '<strong>82 resumes</strong> parsed for \'Product Manager\'',
    time: '2 days ago',
  },
  {
    color: 'var(--accent-green)',
    text: 'AI found <strong>3 matches</strong> for \'Java + AWS + 5yr experience\'',
    time: '3 days ago',
  },
];

export const positions = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    status: 'active',
    resumes: 124,
    barWidth: 82,
    shortlisted: 8,
    created: 'Jan 15, 2026',
  },
  {
    id: 2,
    title: 'Backend Engineer (Java)',
    department: 'Engineering',
    location: 'New York',
    status: 'active',
    resumes: 89,
    barWidth: 59,
    shortlisted: 5,
    created: 'Jan 22, 2026',
  },
  {
    id: 3,
    title: 'Product Manager',
    department: 'Product',
    location: 'San Francisco',
    status: 'active',
    resumes: 82,
    barWidth: 54,
    shortlisted: 6,
    created: 'Feb 3, 2026',
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    status: 'draft',
    resumes: 47,
    barWidth: 31,
    shortlisted: 2,
    created: 'Feb 18, 2026',
  },
  {
    id: 5,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Austin',
    status: 'closed',
    resumes: 36,
    barWidth: 24,
    shortlisted: 2,
    created: 'Dec 5, 2025',
  },
];

export const chatMessages = [
  {
    id: 1,
    sender: 'bot',
    content:
      'Hi Emily! 👋 I have access to <strong>124 resumes</strong> for the Senior Frontend Developer position. Ask me anything — like \'Find candidates with 5+ years Angular experience\' or \'Who has both React and TypeScript skills?\'',
  },
  {
    id: 2,
    sender: 'user',
    content:
      'Find candidates with at least 5 years of Angular experience who also know Java and have a bachelor\'s degree',
  },
  {
    id: 3,
    sender: 'bot',
    content: 'I found <strong>8 matching candidates</strong> from your resume bank. Here are the top 3 based on relevance:',
    candidates: [
      {
        name: 'James Carter',
        rank: 1,
        matchScore: 94,
        matchLevel: 'high',
        skills: ['Angular · 6yr', 'Java · 3yr', 'Docker · 2yr', 'BS CS'],
        meta: 'Senior Dev at Google · 6 years total exp · Stanford University',
      },
      {
        name: 'Sarah Mitchell',
        rank: 2,
        matchScore: 87,
        matchLevel: 'high',
        skills: ['Angular · 5yr', 'React · 3yr', 'Java · 1yr', 'MS CS'],
        meta: 'Lead Frontend at Stripe · 7 years total exp · MIT',
      },
      {
        name: 'Alex Rivera',
        rank: 3,
        matchScore: 78,
        matchLevel: 'medium',
        skills: ['Angular · 7yr', 'Java · 4yr', 'BS IT'],
        meta: 'Full Stack at Microsoft · 8 years total exp · UC Berkeley',
      },
    ],
    followUp:
      'Would you like to see full profiles, or narrow down further? You can also say \'shortlist James Carter\' to save him.',
  },
  {
    id: 4,
    sender: 'user',
    content: 'From these, who also has Docker experience?',
  },
  {
    id: 5,
    sender: 'bot',
    content:
      'From your previous results, <strong>2 candidates</strong> have Docker experience:',
    bullets: [
      { color: 'var(--accent-green)', text: '<strong>James Carter</strong> — Docker (2 years), used in CI/CD pipelines at Google' },
      { color: 'var(--accent-orange)', text: '<strong>Alex Rivera</strong> — Docker (1 year), basic containerization experience' },
    ],
    followUp:
      'Sarah Mitchell doesn\'t have Docker listed on her resume. Would you like me to shortlist James?',
  },
];

export const shortlistedCandidates = [
  { initials: 'JC', name: 'James Carter', role: 'Sr. Frontend Dev', score: 94 },
  { initials: 'SM', name: 'Sarah Mitchell', role: 'Lead Frontend', score: 87 },
  { initials: 'LW', name: 'Laura Williams', role: 'Frontend Engineer', score: 82 },
];

export const quickPrompts = [
  'Show top 5 candidates',
  'Who has AWS experience?',
  'Compare top 3 candidates',
  'Find remote-friendly candidates',
];

export const candidateProfile = {
  initials: 'JC',
  name: 'James Carter',
  title: 'Senior Frontend Developer',
  location: 'San Francisco, US',
  matchScore: 94,
  email: 'james.carter@email.com',
  phone: '+1 (415) 555-0192',
  skills: [
    { name: 'Angular', years: '6yr' },
    { name: 'Java', years: '3yr' },
    { name: 'TypeScript', years: '5yr' },
    { name: 'Docker', years: '2yr' },
    { name: 'PostgreSQL', years: '3yr' },
    { name: 'Node.js', years: '2yr' },
    { name: 'Git', years: '6yr' },
    { name: 'AWS', years: '1yr' },
  ],
  education: {
    degree: 'BS Computer Science',
    institution: 'Stanford University',
    period: '2014 - 2018',
  },
  experience: [
    {
      title: 'Senior Frontend Developer',
      company: 'Google',
      type: 'Full-time',
      period: 'Jan 2022 - Present',
      duration: '4 years',
      description:
        'Led a team of 5 developers building Angular-based internal tools. Migrated legacy jQuery codebase to Angular 15 serving 10K+ daily users. Implemented CI/CD pipelines with Docker.',
    },
    {
      title: 'Frontend Developer',
      company: 'Shopify',
      type: 'Full-time',
      period: 'Jun 2019 - Dec 2021',
      duration: '2.5 years',
      description:
        'Built enterprise dashboards using Angular and Java Spring Boot. Developed RESTful APIs and integrated with PostgreSQL databases.',
    },
    {
      title: 'Junior Developer',
      company: 'Accenture',
      type: 'Full-time',
      period: 'Jul 2018 - May 2019',
      duration: '11 months',
      description:
        'Worked on Angular-based web applications for banking clients. Participated in code reviews and agile sprints.',
    },
  ],
  aiSummary:
    'James Carter is a strong match for the Senior Frontend Developer role. He brings 6 years of dedicated Angular experience across three companies, with progressively senior roles. His Java backend experience (3 years) and Docker proficiency make him well-rounded for full-stack collaboration. He holds a BS in Computer Science from Stanford University. Primary strength is leading frontend teams and migrating legacy systems.',
  assessments: [
    { label: 'Strong Angular', status: 'active' },
    { label: 'Java Backend', status: 'active' },
    { label: 'BS Degree', status: 'active' },
    { label: 'Limited AWS', status: 'draft' },
  ],
};

export const candidates = [
  { id: 'james-carter', name: 'James Carter', initials: 'JC', title: 'Senior Frontend Developer', location: 'San Francisco, US', experience: '6 years', matchScore: 94, skills: ['Angular', 'Java', 'Docker', 'TypeScript'], status: 'shortlisted' },
  { id: 'sarah-mitchell', name: 'Sarah Mitchell', initials: 'SM', title: 'Lead Frontend Engineer', location: 'New York, US', experience: '7 years', matchScore: 87, skills: ['Angular', 'React', 'Java', 'Node.js'], status: 'shortlisted' },
  { id: 'alex-rivera', name: 'Alex Rivera', initials: 'AR', title: 'Full Stack Developer', location: 'Austin, US', experience: '8 years', matchScore: 78, skills: ['Angular', 'Java', 'Python', 'AWS'], status: 'reviewed' },
  { id: 'laura-williams', name: 'Laura Williams', initials: 'LW', title: 'Frontend Engineer', location: 'Chicago, US', experience: '4 years', matchScore: 82, skills: ['React', 'TypeScript', 'Node.js', 'GraphQL'], status: 'shortlisted' },
  { id: 'daniel-brooks', name: 'Daniel Brooks', initials: 'DB', title: 'Software Engineer', location: 'Seattle, US', experience: '5 years', matchScore: 75, skills: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL'], status: 'reviewed' },
  { id: 'emma-davis', name: 'Emma Davis', initials: 'ED', title: 'UI Developer', location: 'Remote', experience: '3 years', matchScore: 71, skills: ['React', 'Vue.js', 'CSS', 'Figma'], status: 'new' },
  { id: 'michael-turner', name: 'Michael Turner', initials: 'MT', title: 'Frontend Architect', location: 'Boston, US', experience: '9 years', matchScore: 91, skills: ['Angular', 'React', 'TypeScript', 'AWS'], status: 'shortlisted' },
  { id: 'olivia-scott', name: 'Olivia Scott', initials: 'OS', title: 'Software Developer', location: 'Denver, US', experience: '4 years', matchScore: 68, skills: ['React', 'JavaScript', 'Node.js', 'MongoDB'], status: 'new' },
  { id: 'ryan-collins', name: 'Ryan Collins', initials: 'RC', title: 'Senior Developer', location: 'Portland, US', experience: '6 years', matchScore: 84, skills: ['Angular', 'TypeScript', 'Docker', 'CI/CD'], status: 'reviewed' },
  { id: 'sophia-anderson', name: 'Sophia Anderson', initials: 'SA', title: 'Full Stack Engineer', location: 'Miami, US', experience: '5 years', matchScore: 79, skills: ['React', 'Node.js', 'Python', 'AWS'], status: 'reviewed' },
  { id: 'ethan-clark', name: 'Ethan Clark', initials: 'EC', title: 'Frontend Developer', location: 'Remote', experience: '3 years', matchScore: 66, skills: ['Vue.js', 'JavaScript', 'CSS', 'Webpack'], status: 'new' },
  { id: 'isabella-white', name: 'Isabella White', initials: 'IW', title: 'React Developer', location: 'Los Angeles, US', experience: '4 years', matchScore: 73, skills: ['React', 'Redux', 'TypeScript', 'Jest'], status: 'reviewed' },
  { id: 'nathan-harris', name: 'Nathan Harris', initials: 'NH', title: 'Senior Frontend Engineer', location: 'San Diego, US', experience: '7 years', matchScore: 88, skills: ['Angular', 'React', 'Java', 'Docker'], status: 'shortlisted' },
  { id: 'charlotte-lewis', name: 'Charlotte Lewis', initials: 'CL', title: 'Web Developer', location: 'Phoenix, US', experience: '2 years', matchScore: 58, skills: ['HTML', 'CSS', 'JavaScript', 'React'], status: 'new' },
  { id: 'brandon-walker', name: 'Brandon Walker', initials: 'BW', title: 'Software Engineer', location: 'Atlanta, US', experience: '5 years', matchScore: 76, skills: ['Angular', 'Java', 'Spring', 'MySQL'], status: 'reviewed' },
  { id: 'madison-hall', name: 'Madison Hall', initials: 'MH', title: 'Frontend Lead', location: 'Dallas, US', experience: '8 years', matchScore: 85, skills: ['React', 'TypeScript', 'GraphQL', 'AWS'], status: 'shortlisted' },
  { id: 'tyler-young', name: 'Tyler Young', initials: 'TY', title: 'JavaScript Developer', location: 'Remote', experience: '4 years', matchScore: 70, skills: ['React', 'Node.js', 'Express', 'MongoDB'], status: 'new' },
  { id: 'grace-king', name: 'Grace King', initials: 'GK', title: 'UI/UX Developer', location: 'Minneapolis, US', experience: '3 years', matchScore: 64, skills: ['React', 'Figma', 'CSS', 'Tailwind'], status: 'new' },
  { id: 'justin-wright', name: 'Justin Wright', initials: 'JW', title: 'Senior Software Engineer', location: 'Washington, US', experience: '6 years', matchScore: 81, skills: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL'], status: 'reviewed' },
  { id: 'ashley-green', name: 'Ashley Green', initials: 'AG', title: 'Full Stack Developer', location: 'Raleigh, US', experience: '5 years', matchScore: 77, skills: ['React', 'Python', 'Django', 'PostgreSQL'], status: 'reviewed' },
  { id: 'kevin-baker', name: 'Kevin Baker', initials: 'KB', title: 'Frontend Engineer', location: 'Nashville, US', experience: '4 years', matchScore: 72, skills: ['Vue.js', 'TypeScript', 'Node.js', 'Firebase'], status: 'new' },
  { id: 'rachel-adams', name: 'Rachel Adams', initials: 'RA', title: 'React Engineer', location: 'Remote', experience: '5 years', matchScore: 83, skills: ['React', 'Redux', 'TypeScript', 'AWS'], status: 'shortlisted' },
  { id: 'chris-nelson', name: 'Chris Nelson', initials: 'CN', title: 'Software Developer', location: 'Charlotte, US', experience: '3 years', matchScore: 65, skills: ['JavaScript', 'React', 'CSS', 'HTML'], status: 'new' },
  { id: 'megan-campbell', name: 'Megan Campbell', initials: 'MC', title: 'Angular Developer', location: 'Columbus, US', experience: '4 years', matchScore: 74, skills: ['Angular', 'TypeScript', 'RxJS', 'Jest'], status: 'reviewed' },
  { id: 'david-mitchell', name: 'David Mitchell', initials: 'DM', title: 'Tech Lead', location: 'San Jose, US', experience: '10 years', matchScore: 92, skills: ['Angular', 'React', 'Java', 'AWS'], status: 'shortlisted' },
  { id: 'hannah-parker', name: 'Hannah Parker', initials: 'HP', title: 'Junior Developer', location: 'Orlando, US', experience: '1 year', matchScore: 52, skills: ['HTML', 'CSS', 'JavaScript', 'React'], status: 'new' },
  { id: 'andrew-edwards', name: 'Andrew Edwards', initials: 'AE', title: 'Frontend Developer', location: 'Detroit, US', experience: '3 years', matchScore: 69, skills: ['React', 'JavaScript', 'Sass', 'Webpack'], status: 'new' },
  { id: 'victoria-ross', name: 'Victoria Ross', initials: 'VR', title: 'Senior React Developer', location: 'Philadelphia, US', experience: '6 years', matchScore: 86, skills: ['React', 'TypeScript', 'Node.js', 'Docker'], status: 'shortlisted' },
  { id: 'jake-stewart', name: 'Jake Stewart', initials: 'JS', title: 'Software Engineer', location: 'Remote', experience: '4 years', matchScore: 71, skills: ['Angular', 'Java', 'Docker', 'Kubernetes'], status: 'reviewed' },
  { id: 'emily-cooper', name: 'Emily Cooper', initials: 'EC', title: 'Frontend Engineer', location: 'Salt Lake City, US', experience: '5 years', matchScore: 80, skills: ['React', 'Vue.js', 'TypeScript', 'GraphQL'], status: 'reviewed' },
  { id: 'ben-morris', name: 'Ben Morris', initials: 'BM', title: 'Web Developer', location: 'Tampa, US', experience: '2 years', matchScore: 56, skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'], status: 'new' },
  { id: 'samantha-reed', name: 'Samantha Reed', initials: 'SR', title: 'Angular Engineer', location: 'Pittsburgh, US', experience: '5 years', matchScore: 79, skills: ['Angular', 'RxJS', 'TypeScript', 'NgRx'], status: 'reviewed' },
  { id: 'jason-howard', name: 'Jason Howard', initials: 'JH', title: 'Full Stack Developer', location: 'Kansas City, US', experience: '6 years', matchScore: 82, skills: ['React', 'Node.js', 'Python', 'AWS'], status: 'shortlisted' },
  { id: 'nicole-ward', name: 'Nicole Ward', initials: 'NW', title: 'Frontend Developer', location: 'Remote', experience: '3 years', matchScore: 67, skills: ['React', 'CSS', 'JavaScript', 'Figma'], status: 'new' },
  { id: 'matt-peterson', name: 'Matt Peterson', initials: 'MP', title: 'Senior Engineer', location: 'San Antonio, US', experience: '7 years', matchScore: 85, skills: ['Angular', 'Java', 'Spring Boot', 'AWS'], status: 'reviewed' },
  { id: 'kate-hughes', name: 'Kate Hughes', initials: 'KH', title: 'React Developer', location: 'Indianapolis, US', experience: '4 years', matchScore: 73, skills: ['React', 'Redux', 'Node.js', 'MongoDB'], status: 'reviewed' },
  { id: 'steve-rogers', name: 'Steve Rogers', initials: 'SR', title: 'Software Engineer', location: 'Cincinnati, US', experience: '5 years', matchScore: 76, skills: ['Angular', 'TypeScript', 'Docker', 'CI/CD'], status: 'new' },
  { id: 'jessica-bell', name: 'Jessica Bell', initials: 'JB', title: 'Frontend Architect', location: 'Milwaukee, US', experience: '9 years', matchScore: 90, skills: ['React', 'Angular', 'TypeScript', 'GraphQL'], status: 'shortlisted' },
  { id: 'paul-murphy', name: 'Paul Murphy', initials: 'PM', title: 'Web Developer', location: 'Remote', experience: '2 years', matchScore: 55, skills: ['HTML', 'CSS', 'React', 'Tailwind'], status: 'new' },
  { id: 'amanda-foster', name: 'Amanda Foster', initials: 'AF', title: 'Senior Frontend Dev', location: 'Honolulu, US', experience: '6 years', matchScore: 83, skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'], status: 'reviewed' },
];

/** Shortlisted candidates with position (for Shortlisted page) */
export const shortlistedList = (() => {
  const shortlisted = candidates.filter((c) => c.status === 'shortlisted');
  return shortlisted.map((c, i) => ({
    ...c,
    positionTitle: positions[i % positions.length]?.title ?? positions[0].title,
    positionId: positions[i % positions.length]?.id ?? positions[0].id,
  }));
})();

export const sidebarNavItems = {
  main: [
    { label: 'Dashboard', icon: 'BarChart3', path: '/dashboard' },
    { label: 'Positions', icon: 'Briefcase', path: '/positions', badge: '5' },
    { label: 'AI Chat', icon: 'Bot', path: '/chat' },
    { label: 'Shortlisted', icon: 'Star', path: '/shortlisted' },
  ],
  settings: [
    { label: 'Settings', icon: 'Settings', path: '/settings' },
    { label: 'Billing', icon: 'CreditCard', path: '/billing' },
  ],
};

export const departments = ['Engineering', 'Product', 'Design', 'Marketing', 'Infrastructure', 'Sales'];
