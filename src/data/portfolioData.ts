export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'All' | 'AI & Agentic' | 'Mobile & iOS' | 'Real-Time & Systems' | 'Security';
  description: string;
  technologies: string[];
  liveUrl?: string;
  testFlightUrl?: string;
  repoUrl?: string;
  highlights: string[];
  featured: boolean;
  accentColor: string;
  badgeText: string;
  metrics?: string;
}

export const portfolioData = {
  personal: {
    name: 'Divyanshu Sharma',
    handle: 'ds2092693',
    role: 'Software Engineer',
    headline: 'Agentic Development · LLM Systems · Platform & iOS Engineering',
    subheadline:
      'Building agentic orchestration pipelines (LangGraph/LangChain), real-time distributed platforms, and high-performance native iOS applications with Apple Intelligence & Gemini Vision.',
    email: 'ds2092693@gmail.com',
    phone: '+91 6398232031',
    github: 'https://github.com/ds2092693',
    linkedin: 'https://www.linkedin.com/in/divyanshu-sharma',
    location: 'Dehradun, India',
    status: 'Available for Software & Agentic AI Roles',
    cgpa: '8.5 / 10.0 CGPA',
    college: 'Graphic Era University',
    degree: 'B.Tech in Computer Science (AI & ML)',
  },
  achievements: [
    {
      metric: 'AIR 844',
      title: 'AINCAT 2025',
      subtitle: 'All India Rank in National Technical Exam',
      color: '#f59e0b',
    },
    {
      metric: 'Top 100',
      title: 'Apple & Infosys Cohort',
      subtitle: 'Selected from 5,000+ applicants nationwide',
      color: '#38bdf8',
    },
    {
      metric: '400+',
      title: 'Algorithmic DSA Problems',
      subtitle: 'LeetCode, GeeksforGeeks, TUF+, Codeforces',
      color: '#10b981',
    },
    {
      metric: '5X',
      title: 'Hackathon Finalist',
      subtitle: 'Including Flipkart GRID 6.0',
      color: '#a855f7',
    },
  ],
  projects: [
    {
      id: 'canvasflow',
      title: 'CanvasFlow',
      tagline: 'AI-Powered Collaborative Multiplayer Whiteboard',
      category: 'Real-Time & Systems',
      description:
        'A high-performance real-time multiplayer whiteboard application featuring CRDT-based conflict-free synchronization (Yjs), peer-to-peer WebRTC networking, and an integrated generative AI assistant for diagram & mind map synthesis.',
      technologies: ['React 19', 'TypeScript', 'Yjs CRDTs', 'WebRTC', 'Rough.js', 'Vercel Serverless'],
      liveUrl: 'https://canvasflow-silk.vercel.app/',
      repoUrl: 'https://github.com/ds2092693/canvasflow',
      highlights: [
        'Multiplayer cursor awareness & peer-to-peer WebRTC state sync',
        'Built-in offline generative AI diagram synthesizer (100% uptime)',
        'Fluid infinite canvas with Rough.js hand-drawn vector rendering & undo/redo tree',
      ],
      featured: true,
      accentColor: '#6366f1',
      badgeText: 'Live Web App',
      metrics: 'Multi-user P2P Sync',
    },
    {
      id: 'stock-screener',
      title: 'AI-Powered Stock Screener',
      tagline: 'Autonomous Financial Intelligence with LangGraph & RAG',
      category: 'AI & Agentic',
      description:
        'Automated financial analysis and decision-support tool utilizing core agentic frameworks (LangGraph, LangChain) with local LLM inference (Ollama) and retrieval-augmented generation for real-time market data.',
      technologies: ['Python', 'LangGraph', 'LangChain', 'Prompt Engineering', 'Ollama', 'RAG', 'GitHub Actions'],
      repoUrl: 'https://github.com/ds2092693',
      highlights: [
        'Agentic orchestration via LangGraph state machines with local LLM inference',
        'RAG pipeline integrating yFinance REST APIs with strict context window protocols',
        'CI/CD automated deployment with GitHub Actions executing 20+ continuous unit tests',
      ],
      featured: true,
      accentColor: '#10b981',
      badgeText: 'Agentic LangGraph',
      metrics: '20+ CI/CD Guardrails',
    },
    {
      id: 'myra',
      title: 'MYRA — PCOS Health & Lifestyle Companion',
      tagline: "AI-Powered Women's Health & Multimodal Vision App (iOS)",
      category: 'Mobile & iOS',
      description:
        'Production iOS application spanning 8 screens, engineered for women managing PCOS. Features MyraLens (Gemini Vision API dietary tracker <1.5s latency), on-device Apple Intelligence companion, and strict AI Safety data standards.',
      technologies: [
        'Swift 5',
        'UIKit / SwiftUI',
        'Gemini Vision API',
        'Apple Intelligence',
        'HealthKit',
        'Firebase',
        'TestFlight',
      ],
      testFlightUrl: 'https://testflight.apple.com/join/pyxj5HUd',
      repoUrl: 'https://github.com/ds2092693/myra-ios',
      highlights: [
        'MyraLens: Gemini Vision API multimodal meal evaluation with latency under 1.5s',
        'Scalable 8-screen architecture with cloud backend and strict AI Safety governance',
        'Apple HealthKit synchronization, period cycle predictor, and printable doctor PDF export',
      ],
      featured: true,
      accentColor: '#007AFF',
      badgeText: 'Apple TestFlight Beta',
      metrics: '<1.5s Vision Latency',
    },
    {
      id: 'honeytoken',
      title: 'Automated Credential Honeypot',
      tagline: 'Cybersecurity Deception & Threat Interception Platform',
      category: 'Security',
      description:
        'Full-stack cybersecurity active defense platform featuring a Node.js backend to intercept attacker payloads, contributing directly to enterprise Security & Governance strategies.',
      technologies: ['Node.js', 'MongoDB', 'REST APIs', 'Cypress E2E', 'Observability', 'Security'],
      repoUrl: 'https://github.com/ds2092693/Credential_Honeytoken_System',
      highlights: [
        'Full-stack decoy credential deployment intercepting malicious payload probes',
        '12 Cypress E2E automated test scripts validating real-time queries & frontend alerts',
        'Observability dashboard tracking intruder telemetry and zero false-positive alerts',
      ],
      featured: true,
      accentColor: '#f43f5e',
      badgeText: 'Active Defense',
      metrics: '12 Cypress E2E Tests',
    },
  ] as Project[],
  skills: [
    {
      category: 'Agentic & AI Engineering',
      icon: 'Bot',
      color: '#6366f1',
      items: [
        'LangGraph',
        'LangChain',
        'RAG Pipelines',
        'Prompt Engineering',
        'LLMs (Ollama)',
        'Gemini Vision API',
        'AI Safety & Governance',
        'Model Context Protocol',
      ],
    },
    {
      category: 'Platform & DevOps',
      icon: 'GitBranch',
      color: '#06b6d4',
      items: [
        'CI/CD (GitHub Actions)',
        'Observability & Metrics',
        'Security & Governance',
        'macOS Instruments',
        'Postman API Testing',
        'Cypress (E2E)',
        'XCTest',
        'Agile (Jira)',
      ],
    },
    {
      category: 'Core Programming & Mobile',
      icon: 'Terminal',
      color: '#10b981',
      items: [
        'Python',
        'Swift (iOS)',
        'TypeScript',
        'JavaScript',
        'C / C++',
        'Java',
        'Node.js',
        'React.js',
        'SwiftUI & UIKit',
      ],
    },
    {
      category: 'Data & Databases',
      icon: 'Database',
      color: '#a855f7',
      items: [
        'PostgreSQL',
        'Supabase',
        'MongoDB',
        'SQL',
        'Firebase',
        'Redis',
        'Database Concurrency',
        'Race Condition Mitigation',
      ],
    },
  ],
  experience: [
    {
      role: 'iOS Developer Intern',
      company: 'Infosys',
      period: 'Jun 2026 – Jul 2026',
      location: 'Mysuru, India',
      highlights: [
        'Security & Governance: Architected a secure role-based access platform, implementing robust backend data flows across 3 user tiers using PostgreSQL on a Supabase backend.',
        'Platform Engineering: Drove sprint milestones in an Agile environment, resolving 15+ assigned Jira tickets and supporting internal tooling operations.',
        'Observability: Established real-time monitoring and stabilized the data layer under concurrent load, mitigating 12+ database race conditions during multi-role writes.',
      ],
      skills: ['Swift', 'PostgreSQL', 'Supabase', 'Jira', 'Agile', 'Concurrency'],
    },
    {
      role: 'iOS Development Trainee',
      company: 'iOS Development Centre (Apple & Infosys Training)',
      period: 'Aug 2025 – May 2026',
      location: 'Dehradun, India',
      highlights: [
        'Internal Tooling & Scripting: Refactored enterprise service components, eliminating duplicate code blocks by roughly 15% and enforcing modular boundaries via OOD principles.',
        'Debugging & Evaluation: Diagnosed performance bottlenecks, enhancing platform observability by tracing 10+ application memory leaks prior to production using macOS Instruments.',
      ],
      skills: ['Swift', 'macOS Instruments', 'Memory Profiling', 'OOD', 'Xcode'],
    },
    {
      role: 'B.Tech in Computer Science (AI & ML)',
      company: 'Graphic Era University',
      period: 'Aug 2023 – Present',
      location: 'Dehradun, India',
      highlights: [
        'Academic Standing: 8.5 / 10.0 CGPA.',
        'Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks.',
        'Ranked All India 844 in AINCAT 2025; Solved 400+ algorithmic problems across LeetCode, GeeksforGeeks, TUF+, and Codeforces.',
      ],
      skills: ['DSA', 'Operating Systems', 'DBMS', 'Algorithms', 'AI/ML'],
    },
  ],
  terminalCommands: {
    help: 'Available commands: whoami, projects, langgraph, myra, canvasflow, skills, achievements, experience, contact, clear',
    whoami: 'Divyanshu Sharma — Software Engineer (AI/ML & Systems). AIR 844 AINCAT. Ex-Infosys Intern. Apple Cohort.',
    skills: 'Agentic AI (LangGraph, LangChain, RAG, Ollama, Gemini API) | Swift (iOS) | Python | TypeScript | PostgreSQL | CI/CD',
    projects: '1. AI-Powered Stock Screener (LangGraph) | 2. MYRA (PCOS iOS, TestFlight) | 3. CanvasFlow (Real-time CRDT Whiteboard) | 4. Credential Honeypot',
    langgraph: 'AI Stock Screener: LangGraph multi-agent financial state machine with local Ollama inference & yFinance RAG pipeline.',
    myra: 'MYRA iOS: Multimodal Gemini Vision food scanner (<1.5s latency), Apple TestFlight public beta at https://testflight.apple.com/join/pyxj5HUd',
    canvasflow: 'CanvasFlow: Multiplayer collaborative whiteboard live at https://canvasflow-silk.vercel.app/ (Yjs CRDTs + WebRTC)',
    achievements: '• AIR 844 AINCAT 2025\n• Top 100 Selected from 5,000+ (Apple & Infosys Cohort)\n• 400+ DSA Problems Solved\n• 5X Hackathons (Flipkart GRID 6.0)',
    experience: '• Infosys (iOS Developer Intern, Mysuru)\n• Apple & Infosys Training (iOS Development Centre, Dehradun)\n• Graphic Era University (B.Tech AI/ML, 8.5 CGPA)',
    contact: 'Email: ds2092693@gmail.com | Phone: +91 6398232031 | LinkedIn: /in/divyanshu-sharma | GitHub: ds2092693',
  },
};
