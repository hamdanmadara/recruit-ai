export const stats = [
  {
    label: 'Total Positions',
    value: '5',
    change: '+2 this month',
    icon: 'Briefcase',
    iconBg: 'var(--primary-soft)',
    iconColor: 'var(--primary-light)',
  },
  {
    label: 'Total Resumes',
    value: '342',
    change: '+48 this week',
    icon: 'FileText',
    iconBg: 'var(--accent-soft)',
    iconColor: 'var(--accent)',
  },
  {
    label: 'AI Queries',
    value: '127',
    change: '38 remaining',
    icon: 'Bot',
    iconBg: 'var(--success-soft)',
    iconColor: 'var(--accent-green)',
  },
  {
    label: 'Shortlisted',
    value: '23',
    change: '8 this week',
    icon: 'Star',
    iconBg: 'var(--warning-soft)',
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
    status: 'closed',
    resumes: 124,
    barWidth: 82,
    shortlisted: 8,
    created: 'Jan 15, 2026',
    skills: [
      'React',
      'TypeScript',
      'Angular',
      'CSS',
      'Redux',
      'Next.js',
      'JavaScript',
      'HTML',
      'Git',
      'Webpack',
    ],
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
    skills: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'Docker',
      'AWS',
      'Kafka',
      'REST APIs',
      'Microservices',
      'Git',
      'Maven',
    ],
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
    skills: [
      'Roadmapping',
      'Analytics',
      'User Research',
      'Agile',
      'SQL',
      'A/B Testing',
      'Figma',
      'Jira',
      'Stakeholder Management',
      'Go-to-Market',
    ],
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
    skills: [
      'AWS',
      'Kubernetes',
      'Docker',
      'Terraform',
      'CI/CD',
      'Linux',
      'Ansible',
      'Python',
      'Jenkins',
      'Prometheus',
    ],
  },
  {
    id: 5,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Austin',
    status: 'active',
    resumes: 36,
    barWidth: 24,
    shortlisted: 2,
    created: 'Dec 5, 2025',
    skills: [
      'Figma',
      'Prototyping',
      'User Research',
      'Design Systems',
      'Adobe XD',
      'Wireframing',
      'Sketch',
      'Usability Testing',
      'HTML',
      'CSS',
    ],
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
  // --- Position 1: Senior Frontend Developer ---
  { id: 'james-carter', positionId: 1, name: 'James Carter', initials: 'JC', title: 'Senior Frontend Developer', location: 'San Francisco, US', experience: '6 years', matchScore: 94, skills: ['React', 'TypeScript', 'Angular', 'CSS', 'Redux', 'Next.js', 'JavaScript', 'HTML', 'Git', 'Docker'], status: 'shortlisted' },
  { id: 'sarah-mitchell', positionId: 1, name: 'Sarah Mitchell', initials: 'SM', title: 'Lead Frontend Engineer', location: 'New York, US', experience: '7 years', matchScore: 87, skills: ['React', 'TypeScript', 'Angular', 'CSS', 'Redux', 'Next.js', 'JavaScript', 'HTML', 'Node.js', 'GraphQL'], status: 'shortlisted' },
  { id: 'alex-rivera', positionId: 1, name: 'Alex Rivera', initials: 'AR', title: 'Full Stack Developer', location: 'Austin, US', experience: '8 years', matchScore: 78, skills: ['React', 'TypeScript', 'Angular', 'CSS', 'Redux', 'Next.js', 'JavaScript', 'Java', 'Python', 'AWS'], status: 'reviewed' },
  { id: 'laura-williams', positionId: 1, name: 'Laura Williams', initials: 'LW', title: 'Frontend Engineer', location: 'Chicago, US', experience: '4 years', matchScore: 89, skills: ['React', 'TypeScript', 'Angular', 'CSS', 'Redux', 'Next.js', 'JavaScript', 'HTML', 'Git', 'GraphQL'], status: 'shortlisted' },
  { id: 'daniel-brooks', positionId: 1, name: 'Daniel Brooks', initials: 'DB', title: 'Software Engineer', location: 'Seattle, US', experience: '5 years', matchScore: 75, skills: ['React', 'TypeScript', 'Angular', 'CSS', 'Redux', 'Next.js', 'JavaScript', 'Java', 'Spring Boot', 'PostgreSQL'], status: 'reviewed' },
  { id: 'emma-davis', positionId: 1, name: 'Emma Davis', initials: 'ED', title: 'UI Developer', location: 'Remote', experience: '3 years', matchScore: 81, skills: ['React', 'TypeScript', 'Angular', 'CSS', 'Redux', 'Next.js', 'JavaScript', 'HTML', 'Vue.js', 'Figma'], status: 'new' },
  { id: 'michael-turner', positionId: 1, name: 'Michael Turner', initials: 'MT', title: 'Frontend Architect', location: 'Boston, US', experience: '9 years', matchScore: 91, skills: ['React', 'TypeScript', 'Angular', 'CSS', 'Redux', 'Next.js', 'JavaScript', 'HTML', 'Webpack', 'Jest'], status: 'shortlisted' },
  { id: 'olivia-scott', positionId: 1, name: 'Olivia Scott', initials: 'OS', title: 'Software Developer', location: 'Denver, US', experience: '4 years', matchScore: 65, skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Git', 'Webpack', 'Node.js', 'MongoDB'], status: 'new' },
  { id: 'ryan-collins', positionId: 1, name: 'Ryan Collins', initials: 'RC', title: 'Senior Developer', location: 'Portland, US', experience: '6 years', matchScore: 84, skills: ['Angular', 'TypeScript', 'React', 'CSS', 'Git', 'Webpack', 'JavaScript', 'HTML', 'Docker', 'CI/CD'], status: 'reviewed' },
  { id: 'isabella-white', positionId: 1, name: 'Isabella White', initials: 'IW', title: 'React Developer', location: 'Los Angeles, US', experience: '4 years', matchScore: 76, skills: ['React', 'Redux', 'TypeScript', 'HTML', 'CSS', 'JavaScript', 'Git', 'Jest', 'Cypress'], status: 'reviewed' },
  { id: 'jessica-bell', positionId: 1, name: 'Jessica Bell', initials: 'JB', title: 'Frontend Architect', location: 'Milwaukee, US', experience: '9 years', matchScore: 90, skills: ['React', 'Angular', 'TypeScript', 'Redux', 'Next.js', 'CSS', 'JavaScript', 'HTML', 'Git', 'GraphQL'], status: 'shortlisted' },
  { id: 'amanda-foster', positionId: 1, name: 'Amanda Foster', initials: 'AF', title: 'Senior Frontend Dev', location: 'Honolulu, US', experience: '6 years', matchScore: 83, skills: ['React', 'TypeScript', 'CSS', 'Redux', 'Next.js', 'JavaScript', 'HTML', 'Git', 'Node.js', 'PostgreSQL'], status: 'reviewed' },

  // --- Position 2: Backend Engineer (Java) ---
  { id: 'carlos-reyes', positionId: 2, name: 'Carlos Reyes', initials: 'CR', title: 'Senior Backend Engineer', location: 'Austin, US', experience: '7 years', matchScore: 92, skills: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS', 'Kafka', 'REST APIs', 'Microservices', 'Git', 'Python'], status: 'shortlisted' },
  { id: 'priya-shah', positionId: 2, name: 'Priya Shah', initials: 'PS', title: 'Backend Engineer', location: 'Seattle, US', experience: '5 years', matchScore: 84, skills: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS', 'REST APIs', 'Microservices', 'Git', 'Redis', 'Kotlin'], status: 'shortlisted' },
  { id: 'marcus-chen', positionId: 2, name: 'Marcus Chen', initials: 'MC', title: 'Software Engineer', location: 'San Jose, US', experience: '6 years', matchScore: 77, skills: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'REST APIs', 'Microservices', 'Git', 'MongoDB', 'Scala'], status: 'reviewed' },
  { id: 'hannah-lee', positionId: 2, name: 'Hannah Lee', initials: 'HL', title: 'Senior Java Engineer', location: 'Remote', experience: '8 years', matchScore: 90, skills: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS', 'Kafka', 'REST APIs', 'Git', 'Maven', 'RabbitMQ'], status: 'shortlisted' },
  { id: 'dev-patel', positionId: 2, name: 'Dev Patel', initials: 'DP', title: 'Backend Developer', location: 'New York, US', experience: '4 years', matchScore: 82, skills: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS', 'Kafka', 'Microservices', 'Maven', 'Redis', 'GraphQL'], status: 'reviewed' },
  { id: 'grace-ortiz', positionId: 2, name: 'Grace Ortiz', initials: 'GO', title: 'Backend Engineer', location: 'Chicago, US', experience: '3 years', matchScore: 66, skills: ['Java', 'Spring Boot', 'Docker', 'REST APIs', 'Git', 'Maven', 'Python', 'MongoDB'], status: 'new' },
  { id: 'omar-haddad', positionId: 2, name: 'Omar Haddad', initials: 'OH', title: 'Software Developer', location: 'Dallas, US', experience: '5 years', matchScore: 74, skills: ['Java', 'PostgreSQL', 'Docker', 'AWS', 'REST APIs', 'Microservices', 'Git', 'Python', 'Scala'], status: 'reviewed' },
  { id: 'nina-petrova', positionId: 2, name: 'Nina Petrova', initials: 'NP', title: 'Java Developer', location: 'Boston, US', experience: '3 years', matchScore: 58, skills: ['Java', 'Spring Boot', 'REST APIs', 'Git', 'MySQL', 'Kotlin', 'Node.js'], status: 'new' },
  { id: 'brandon-walker', positionId: 2, name: 'Brandon Walker', initials: 'BW', title: 'Software Engineer', location: 'Atlanta, US', experience: '5 years', matchScore: 70, skills: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS', 'REST APIs', 'Hibernate', 'MySQL'], status: 'reviewed' },
  { id: 'matt-peterson', positionId: 2, name: 'Matt Peterson', initials: 'MP', title: 'Senior Engineer', location: 'San Antonio, US', experience: '7 years', matchScore: 79, skills: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS', 'Microservices', 'REST APIs', 'Jenkins'], status: 'shortlisted' },

  // --- Position 3: Product Manager ---
  { id: 'nina-carter', positionId: 3, name: 'Nina Carter', initials: 'NC', title: 'Senior Product Manager', location: 'San Francisco, US', experience: '8 years', matchScore: 93, skills: ['Roadmapping', 'Analytics', 'User Research', 'Agile', 'SQL', 'A/B Testing', 'Jira', 'Stakeholder Management', 'Go-to-Market', 'Tableau'], status: 'shortlisted' },
  { id: 'tom-walsh', positionId: 3, name: 'Tom Walsh', initials: 'TW', title: 'Product Manager', location: 'New York, US', experience: '5 years', matchScore: 82, skills: ['Roadmapping', 'Analytics', 'User Research', 'Agile', 'SQL', 'A/B Testing', 'Jira', 'Stakeholder Management', 'Salesforce', 'Excel'], status: 'shortlisted' },
  { id: 'priyanka-roy', positionId: 3, name: 'Priyanka Roy', initials: 'PR', title: 'Associate PM', location: 'Remote', experience: '4 years', matchScore: 74, skills: ['Roadmapping', 'Analytics', 'Agile', 'SQL', 'Figma', 'Jira', 'Stakeholder Management', 'Excel', 'Trello'], status: 'reviewed' },
  { id: 'kevin-zhou', positionId: 3, name: 'Kevin Zhou', initials: 'KZ', title: 'Senior PM', location: 'Seattle, US', experience: '9 years', matchScore: 91, skills: ['Roadmapping', 'Analytics', 'User Research', 'Agile', 'A/B Testing', 'Figma', 'Jira', 'Stakeholder Management', 'Go-to-Market', 'Python'], status: 'shortlisted' },
  { id: 'rachel-kim', positionId: 3, name: 'Rachel Kim', initials: 'RK', title: 'Product Manager', location: 'Austin, US', experience: '6 years', matchScore: 84, skills: ['Roadmapping', 'User Research', 'Agile', 'SQL', 'A/B Testing', 'Figma', 'Jira', 'Go-to-Market', 'Mixpanel', 'Amplitude'], status: 'reviewed' },
  { id: 'sophia-anderson', positionId: 3, name: 'Sophia Anderson', initials: 'SA', title: 'Growth PM', location: 'Miami, US', experience: '5 years', matchScore: 68, skills: ['Roadmapping', 'Analytics', 'User Research', 'Agile', 'Jira', 'Go-to-Market', 'Excel', 'Asana'], status: 'reviewed' },
  { id: 'ashley-green', positionId: 3, name: 'Ashley Green', initials: 'AG', title: 'Product Lead', location: 'Raleigh, US', experience: '5 years', matchScore: 76, skills: ['Roadmapping', 'Analytics', 'Agile', 'SQL', 'A/B Testing', 'Jira', 'Stakeholder Management', 'Excel', 'HubSpot'], status: 'reviewed' },
  { id: 'ben-price', positionId: 3, name: 'Ben Price', initials: 'BP', title: 'Junior PM', location: 'Denver, US', experience: '2 years', matchScore: 55, skills: ['Agile', 'SQL', 'Jira', 'Stakeholder Management', 'Excel', 'PowerPoint', 'Trello'], status: 'new' },

  // --- Position 4: DevOps Engineer ---
  { id: 'raj-kapoor', positionId: 4, name: 'Raj Kapoor', initials: 'RK', title: 'Senior DevOps Engineer', location: 'Remote', experience: '7 years', matchScore: 92, skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD', 'Linux', 'Ansible', 'Python', 'Jenkins', 'Grafana'], status: 'shortlisted' },
  { id: 'anna-petrov', positionId: 4, name: 'Anna Petrov', initials: 'AP', title: 'DevOps Engineer', location: 'Austin, US', experience: '5 years', matchScore: 83, skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD', 'Linux', 'Python', 'Jenkins', 'Bash', 'Nginx'], status: 'reviewed' },
  { id: 'tyler-mercer', positionId: 4, name: 'Tyler Mercer', initials: 'TM', title: 'Site Reliability Engineer', location: 'Seattle, US', experience: '4 years', matchScore: 75, skills: ['AWS', 'Docker', 'Terraform', 'CI/CD', 'Linux', 'Python', 'Jenkins', 'GitLab', 'Go'], status: 'reviewed' },
  { id: 'jin-park', positionId: 4, name: 'Jin Park', initials: 'JP', title: 'Cloud Platform Engineer', location: 'San Francisco, US', experience: '8 years', matchScore: 91, skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD', 'Linux', 'Ansible', 'Python', 'Prometheus', 'Helm'], status: 'shortlisted' },
  { id: 'carlos-mendes', positionId: 4, name: 'Carlos Mendes', initials: 'CM', title: 'Platform Engineer', location: 'Remote', experience: '6 years', matchScore: 82, skills: ['AWS', 'Kubernetes', 'Docker', 'CI/CD', 'Linux', 'Ansible', 'Python', 'Prometheus', 'Grafana', 'ELK'], status: 'shortlisted' },
  { id: 'jake-stewart', positionId: 4, name: 'Jake Stewart', initials: 'JS', title: 'DevOps Engineer', location: 'Remote', experience: '4 years', matchScore: 73, skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD', 'Linux', 'Jenkins', 'Bash'], status: 'reviewed' },
  { id: 'lisa-novak', positionId: 4, name: 'Lisa Novak', initials: 'LN', title: 'Junior DevOps', location: 'Phoenix, US', experience: '3 years', matchScore: 63, skills: ['AWS', 'Docker', 'CI/CD', 'Linux', 'Ansible', 'Python', 'Nginx', 'PowerShell'], status: 'new' },

  // --- Position 5: UI/UX Designer ---
  { id: 'maya-torres', positionId: 5, name: 'Maya Torres', initials: 'MT', title: 'Senior UX Designer', location: 'San Francisco, US', experience: '7 years', matchScore: 91, skills: ['Figma', 'Prototyping', 'User Research', 'Design Systems', 'Adobe XD', 'Wireframing', 'Sketch', 'Usability Testing', 'HTML', 'InVision'], status: 'shortlisted' },
  { id: 'ethan-liu', positionId: 5, name: 'Ethan Liu', initials: 'EL', title: 'Product Designer', location: 'Los Angeles, US', experience: '5 years', matchScore: 84, skills: ['Figma', 'Prototyping', 'User Research', 'Adobe XD', 'Wireframing', 'Usability Testing', 'HTML', 'CSS', 'Illustrator', 'Photoshop'], status: 'shortlisted' },
  { id: 'sofia-castillo', positionId: 5, name: 'Sofia Castillo', initials: 'SC', title: 'UX Designer', location: 'Austin, US', experience: '4 years', matchScore: 74, skills: ['Figma', 'Prototyping', 'User Research', 'Design Systems', 'Wireframing', 'HTML', 'CSS', 'After Effects', 'Zeplin'], status: 'reviewed' },
  { id: 'jaden-clarke', positionId: 5, name: 'Jaden Clarke', initials: 'JC', title: 'Senior Product Designer', location: 'Remote', experience: '8 years', matchScore: 90, skills: ['Figma', 'Prototyping', 'User Research', 'Design Systems', 'Adobe XD', 'Wireframing', 'Usability Testing', 'HTML', 'CSS', 'Principle'], status: 'shortlisted' },
  { id: 'lila-wong', positionId: 5, name: 'Lila Wong', initials: 'LW', title: 'UI Designer', location: 'Seattle, US', experience: '5 years', matchScore: 82, skills: ['Figma', 'Prototyping', 'User Research', 'Design Systems', 'Adobe XD', 'Sketch', 'Usability Testing', 'HTML', 'Illustrator', 'Zeplin'], status: 'reviewed' },
  { id: 'nora-fields', positionId: 5, name: 'Nora Fields', initials: 'NF', title: 'UX Researcher', location: 'Boston, US', experience: '6 years', matchScore: 88, skills: ['Figma', 'User Research', 'Prototyping', 'Usability Testing', 'Design Systems', 'Wireframing', 'HTML', 'CSS', 'Sketch', 'Miro'], status: 'shortlisted' },
  { id: 'kai-nguyen', positionId: 5, name: 'Kai Nguyen', initials: 'KN', title: 'Product Designer', location: 'Denver, US', experience: '4 years', matchScore: 79, skills: ['Figma', 'Prototyping', 'User Research', 'Adobe XD', 'Wireframing', 'HTML', 'CSS', 'Illustrator', 'Photoshop', 'Principle'], status: 'reviewed' },
  { id: 'tessa-romero', positionId: 5, name: 'Tessa Romero', initials: 'TR', title: 'Senior UI Designer', location: 'Miami, US', experience: '6 years', matchScore: 85, skills: ['Figma', 'Design Systems', 'Prototyping', 'User Research', 'Adobe XD', 'Sketch', 'Usability Testing', 'HTML', 'CSS', 'Zeplin'], status: 'shortlisted' },
  { id: 'owen-hart', positionId: 5, name: 'Owen Hart', initials: 'OH', title: 'UX Designer', location: 'Portland, US', experience: '3 years', matchScore: 72, skills: ['Figma', 'Prototyping', 'Wireframing', 'User Research', 'HTML', 'CSS', 'Adobe XD', 'Illustrator', 'InVision', 'Miro'], status: 'new' },
  { id: 'yuki-tanaka', positionId: 5, name: 'Yuki Tanaka', initials: 'YT', title: 'Design Lead', location: 'Remote', experience: '9 years', matchScore: 93, skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping', 'Adobe XD', 'Wireframing', 'Usability Testing', 'HTML', 'CSS', 'Sketch'], status: 'shortlisted' },
  { id: 'marcus-vega', positionId: 5, name: 'Marcus Vega', initials: 'MV', title: 'Interaction Designer', location: 'Chicago, US', experience: '5 years', matchScore: 80, skills: ['Figma', 'Prototyping', 'User Research', 'Wireframing', 'Adobe XD', 'HTML', 'CSS', 'Principle', 'Framer', 'Sketch'], status: 'reviewed' },
  { id: 'elena-voss', positionId: 5, name: 'Elena Voss', initials: 'EV', title: 'UX Designer', location: 'Austin, US', experience: '4 years', matchScore: 77, skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'Usability Testing', 'Wireframing', 'HTML', 'CSS', 'Adobe XD', 'Zeplin'], status: 'reviewed' },
  { id: 'derek-choi', positionId: 5, name: 'Derek Choi', initials: 'DC', title: 'Product Designer', location: 'San Diego, US', experience: '5 years', matchScore: 83, skills: ['Figma', 'Prototyping', 'User Research', 'Adobe XD', 'Wireframing', 'Usability Testing', 'HTML', 'CSS', 'Illustrator', 'Sketch'], status: 'shortlisted' },
  { id: 'fiona-adebayo', positionId: 5, name: 'Fiona Adebayo', initials: 'FA', title: 'UI Designer', location: 'Atlanta, US', experience: '4 years', matchScore: 75, skills: ['Figma', 'Design Systems', 'Prototyping', 'HTML', 'CSS', 'User Research', 'Wireframing', 'Adobe XD', 'Photoshop', 'InVision'], status: 'new' },
  { id: 'noah-park', positionId: 5, name: 'Noah Park', initials: 'NP', title: 'Senior UX Designer', location: 'Philadelphia, US', experience: '8 years', matchScore: 89, skills: ['Figma', 'User Research', 'Design Systems', 'Prototyping', 'Usability Testing', 'Adobe XD', 'Wireframing', 'Sketch', 'HTML', 'CSS'], status: 'shortlisted' },
  { id: 'iris-molina', positionId: 5, name: 'Iris Molina', initials: 'IM', title: 'Visual Designer', location: 'Phoenix, US', experience: '3 years', matchScore: 71, skills: ['Figma', 'Adobe XD', 'Illustrator', 'Photoshop', 'Prototyping', 'HTML', 'CSS', 'Wireframing', 'User Research', 'Sketch'], status: 'reviewed' },
  { id: 'vikram-singh', positionId: 5, name: 'Vikram Singh', initials: 'VS', title: 'UX Engineer', location: 'Remote', experience: '6 years', matchScore: 86, skills: ['Figma', 'HTML', 'CSS', 'Prototyping', 'Design Systems', 'User Research', 'Wireframing', 'Adobe XD', 'JavaScript', 'Usability Testing'], status: 'shortlisted' },
  { id: 'chloe-meyer', positionId: 5, name: 'Chloe Meyer', initials: 'CM', title: 'Product Designer', location: 'Minneapolis, US', experience: '5 years', matchScore: 81, skills: ['Figma', 'Prototyping', 'User Research', 'Wireframing', 'Adobe XD', 'Usability Testing', 'HTML', 'CSS', 'Sketch', 'Zeplin'], status: 'reviewed' },
  { id: 'julian-reed', positionId: 5, name: 'Julian Reed', initials: 'JR', title: 'UX Designer', location: 'Nashville, US', experience: '4 years', matchScore: 73, skills: ['Figma', 'User Research', 'Prototyping', 'Wireframing', 'HTML', 'CSS', 'Adobe XD', 'Illustrator', 'Miro', 'InVision'], status: 'new' },
  { id: 'amina-hassan', positionId: 5, name: 'Amina Hassan', initials: 'AH', title: 'Senior Product Designer', location: 'Detroit, US', experience: '7 years', matchScore: 87, skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping', 'Usability Testing', 'Adobe XD', 'Wireframing', 'Sketch', 'HTML', 'CSS'], status: 'shortlisted' },
  { id: 'gavin-obrien', positionId: 5, name: 'Gavin O\'Brien', initials: 'GO', title: 'UI Designer', location: 'Charlotte, US', experience: '3 years', matchScore: 69, skills: ['Figma', 'Prototyping', 'Wireframing', 'HTML', 'CSS', 'Adobe XD', 'User Research', 'Illustrator', 'Photoshop', 'Zeplin'], status: 'reviewed' },
  { id: 'ruby-chen', positionId: 5, name: 'Ruby Chen', initials: 'RC', title: 'UX Researcher', location: 'San Jose, US', experience: '5 years', matchScore: 84, skills: ['User Research', 'Figma', 'Prototyping', 'Usability Testing', 'Wireframing', 'Design Systems', 'Miro', 'Adobe XD', 'HTML', 'CSS'], status: 'shortlisted' },
  { id: 'felix-brandt', positionId: 5, name: 'Felix Brandt', initials: 'FB', title: 'Product Designer', location: 'Remote', experience: '4 years', matchScore: 78, skills: ['Figma', 'Prototyping', 'User Research', 'Adobe XD', 'Wireframing', 'HTML', 'CSS', 'Sketch', 'Principle', 'Usability Testing'], status: 'reviewed' },
  { id: 'sasha-ivanov', positionId: 5, name: 'Sasha Ivanov', initials: 'SI', title: 'Interaction Designer', location: 'Las Vegas, US', experience: '6 years', matchScore: 82, skills: ['Figma', 'Prototyping', 'User Research', 'Wireframing', 'Adobe XD', 'HTML', 'CSS', 'Framer', 'Design Systems', 'Sketch'], status: 'reviewed' },
  { id: 'mia-oconnor', positionId: 5, name: 'Mia O\'Connor', initials: 'MO', title: 'UX Designer', location: 'Columbus, US', experience: '4 years', matchScore: 76, skills: ['Figma', 'User Research', 'Prototyping', 'Wireframing', 'Usability Testing', 'Adobe XD', 'HTML', 'CSS', 'Illustrator', 'InVision'], status: 'new' },
  { id: 'theo-walters', positionId: 5, name: 'Theo Walters', initials: 'TW', title: 'Senior UI Designer', location: 'Salt Lake City, US', experience: '7 years', matchScore: 88, skills: ['Figma', 'Design Systems', 'Prototyping', 'User Research', 'Adobe XD', 'Sketch', 'Usability Testing', 'HTML', 'CSS', 'Zeplin'], status: 'shortlisted' },
  { id: 'zara-mensah', positionId: 5, name: 'Zara Mensah', initials: 'ZM', title: 'Product Designer', location: 'Houston, US', experience: '5 years', matchScore: 80, skills: ['Figma', 'Prototyping', 'User Research', 'Wireframing', 'Adobe XD', 'HTML', 'CSS', 'Photoshop', 'Illustrator', 'Sketch'], status: 'reviewed' },
  { id: 'elliot-brooks', positionId: 5, name: 'Elliot Brooks', initials: 'EB', title: 'UX Designer', location: 'Remote', experience: '3 years', matchScore: 70, skills: ['Figma', 'Prototyping', 'Wireframing', 'User Research', 'HTML', 'CSS', 'Adobe XD', 'Miro', 'Usability Testing', 'Principle'], status: 'new' },
  { id: 'priya-nair', positionId: 5, name: 'Priya Nair', initials: 'PN', title: 'Design Lead', location: 'Dallas, US', experience: '8 years', matchScore: 91, skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping', 'Usability Testing', 'Adobe XD', 'Wireframing', 'Sketch', 'HTML', 'CSS'], status: 'shortlisted' },
  { id: 'lucas-grant', positionId: 5, name: 'Lucas Grant', initials: 'LG', title: 'UI Designer', location: 'Orlando, US', experience: '4 years', matchScore: 74, skills: ['Figma', 'Prototyping', 'HTML', 'CSS', 'Adobe XD', 'Wireframing', 'User Research', 'Illustrator', 'Photoshop', 'Zeplin'], status: 'reviewed' },
  { id: 'hazel-kim', positionId: 5, name: 'Hazel Kim', initials: 'HK', title: 'Senior UX Designer', location: 'Sacramento, US', experience: '6 years', matchScore: 85, skills: ['Figma', 'User Research', 'Design Systems', 'Prototyping', 'Usability Testing', 'Adobe XD', 'Wireframing', 'HTML', 'CSS', 'Sketch'], status: 'shortlisted' },
  { id: 'carter-james', positionId: 5, name: 'Carter James', initials: 'CJ', title: 'Product Designer', location: 'Kansas City, US', experience: '5 years', matchScore: 79, skills: ['Figma', 'Prototyping', 'User Research', 'Adobe XD', 'Wireframing', 'HTML', 'CSS', 'InVision', 'Principle', 'Usability Testing'], status: 'reviewed' },
  { id: 'vivian-lopez', positionId: 5, name: 'Vivian Lopez', initials: 'VL', title: 'UX Designer', location: 'Tampa, US', experience: '4 years', matchScore: 77, skills: ['Figma', 'User Research', 'Prototyping', 'Wireframing', 'Adobe XD', 'HTML', 'CSS', 'Design Systems', 'Sketch', 'Miro'], status: 'reviewed' },
  { id: 'aiden-frost', positionId: 5, name: 'Aiden Frost', initials: 'AF', title: 'Visual Designer', location: 'Remote', experience: '3 years', matchScore: 72, skills: ['Figma', 'Adobe XD', 'Illustrator', 'Photoshop', 'Prototyping', 'HTML', 'CSS', 'Wireframing', 'User Research', 'Sketch'], status: 'new' },
  { id: 'naomi-wright', positionId: 5, name: 'Naomi Wright', initials: 'NW', title: 'Interaction Designer', location: 'Raleigh, US', experience: '6 years', matchScore: 83, skills: ['Figma', 'Prototyping', 'User Research', 'Wireframing', 'Adobe XD', 'HTML', 'CSS', 'Framer', 'Usability Testing', 'Design Systems'], status: 'shortlisted' },
  { id: 'blake-morris', positionId: 5, name: 'Blake Morris', initials: 'BM', title: 'UX Researcher', location: 'Indianapolis, US', experience: '5 years', matchScore: 81, skills: ['User Research', 'Figma', 'Prototyping', 'Usability Testing', 'Wireframing', 'Adobe XD', 'Miro', 'HTML', 'CSS', 'Sketch'], status: 'reviewed' },
];

/** Shortlisted candidates with position (for Shortlisted page) */
export const shortlistedList = candidates
  .filter((c) => c.status === 'shortlisted')
  .map((c) => {
    const pos = positions.find((p) => p.id === c.positionId);
    return {
      ...c,
      positionTitle: pos?.title ?? 'Unknown Position',
    };
  });

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
