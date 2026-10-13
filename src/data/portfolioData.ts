export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'All' | 'Web & Real-Time' | 'Mobile & iOS' | 'Security & Systems';
  description: string;
  technologies: string[];
  liveUrl?: string;
  testFlightUrl?: string;
  repoUrl?: string;
  highlights: string[];
  featured: boolean;
  accentColor: string;
  badgeText: string;
}

export const portfolioData = {
  personal: {
    name: 'Divyanshu Sharma',
    handle: 'ds2092693',
    headline: 'Systems Builder, Full Stack & iOS Engineer',
    subheadline:
      'Crafting resilient distributed backends, real-time multiplayer CRDT sync engines, and native iOS healthtech applications.',
    email: 'ds2092693@gmail.com',
    github: 'https://github.com/ds2092693',
    linkedin: 'https://www.linkedin.com/in/divyanshu-sharma-899267297/',
    location: 'India',
    status: 'Available for High-Impact Roles & Collaborations',
  },
  metrics: [
    { label: 'AINCAT 2025', value: 'AIR 844', detail: 'National Competitive Exam' },
    { label: 'Apple & Infosys Cohort', value: 'Top 100', detail: 'Out of 5,000+ nationwide' },
    { label: 'DSA Puzzles Solved', value: '350+', detail: 'Algorithmic Optimization' },
    { label: 'Infosys Internship', value: 'Distributed', detail: 'High-availability writes' },
  ],
  projects: [
    {
      id: 'canvasflow',
      title: 'CanvasFlow',
      tagline: 'AI-Powered Collaborative Whiteboard',
      category: 'Web & Real-Time',
      description:
        'A high-performance real-time multiplayer whiteboard application featuring CRDT-based conflict-free sync, peer-to-peer WebRTC networking, and an integrated generative AI assistant for diagram & mind map synthesis.',
      technologies: ['React 19', 'TypeScript', 'Yjs CRDTs', 'WebRTC', 'Rough.js', 'Vercel'],
      liveUrl: 'https://canvasflow-silk.vercel.app/',
      repoUrl: 'https://github.com/ds2092693/canvasflow',
      highlights: [
        'Multiplayer cursor awareness & peer-to-peer WebRTC sync',
        'Built-in offline generative AI diagram synthesizer (100% uptime)',
        'Infinite canvas with Rough.js hand-drawn vector aesthetics',
      ],
      featured: true,
      accentColor: '#6366f1',
      badgeText: 'Live Web App',
    },
    {
      id: 'myra',
      title: 'Myra (iOS)',
      tagline: "AI-Powered Women's Hormonal Health Companion",
      category: 'Mobile & iOS',
      description:
        'Native iOS healthtech app engineered for PCOS wellness. Integrates MyraLens (multimodal Gemini 2.5 Flash food scanner), on-device Apple Intelligence companion, hormonal cycle tracking, and clinical doctor PDF export.',
      technologies: [
        'Swift 5',
        'UIKit / SwiftUI',
        'Gemini 2.5 Flash',
        'Apple Intelligence',
        'HealthKit',
        'TestFlight',
      ],
      testFlightUrl: 'https://testflight.apple.com/join/pyxj5HUd',
      repoUrl: 'https://github.com/ds2092693/myra-ios',
      highlights: [
        'MyraLens: Multimodal AI meal scanner evaluating glycemic index',
        'On-device Apple Intelligence (FoundationModels) with intent routing',
        'Apple HealthKit synchronization & printable clinical PDF export',
      ],
      featured: true,
      accentColor: '#007AFF',
      badgeText: 'TestFlight Beta',
    },
    {
      id: 'honeytoken',
      title: 'Credential Honeytoken System',
      tagline: 'Cybersecurity Deception & Intrusion Detection',
      category: 'Security & Systems',
      description:
        'Active cyber-defense deception engine generating cryptographic decoy credentials (honeytokens) that trigger automated real-time alarms upon unauthorized access or lateral network movement.',
      technologies: ['Python', 'Cybersecurity', 'Threat Detection', 'Decoy Auditing', 'Crypto'],
      repoUrl: 'https://github.com/ds2092693/Credential_Honeytoken_System',
      highlights: [
        'Automated decoy credential generation and telemetry auditing',
        'Instant multi-channel intrusion alerts on breach attempt',
        'Zero false-positive threat alert mechanism',
      ],
      featured: true,
      accentColor: '#f43f5e',
      badgeText: 'Active Defense',
    },
    {
      id: 'fleetsaathi',
      title: 'Fleet Saathi',
      tagline: 'Fleet Logistics & Real-Time Telematics Engine',
      category: 'Security & Systems',
      description:
        'End-to-end logistics platform managing vehicle diagnostics, route optimization, driver assignments, and live telemetry tracking with high availability.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'WebSockets', 'IoT Telematics'],
      repoUrl: 'https://github.com/ds2092693/Fleet-Management-System',
      highlights: [
        'Real-time GPS telemetry websocket streams',
        'Driver load assignment & fuel diagnostic alerts',
        'Scalable concurrent telemetry database pipeline',
      ],
      featured: false,
      accentColor: '#10b981',
      badgeText: 'IoT Platform',
    },
    {
      id: 'medvault',
      title: 'MedVault',
      tagline: 'Secure Healthcare & Medical Records Vault',
      category: 'Security & Systems',
      description:
        'Encrypted health management system ensuring patient data privacy, role-based cryptographic access controls, and immutable audit logs.',
      technologies: ['Python', 'FastAPI / Flask', 'Cryptography', 'Role-Based Access'],
      repoUrl: 'https://github.com/ds2092693/medvault_project',
      highlights: [
        'End-to-end encrypted medical record storage',
        'Granular role-based doctor/patient access controls',
        'Tamper-evident audit logging for patient privacy',
      ],
      featured: false,
      accentColor: '#06b6d4',
      badgeText: 'Healthcare Security',
    },
  ] as Project[],
  skills: [
    {
      category: 'Languages',
      items: ['Swift', 'TypeScript', 'JavaScript', 'Python', 'C++', 'C', 'Java'],
    },
    {
      category: 'Mobile & Apple',
      items: ['SwiftUI', 'UIKit', 'Xcode', 'CoreData', 'Apple HealthKit', 'Apple Intelligence', 'TestFlight'],
    },
    {
      category: 'Frontend & Real-Time',
      items: ['React 19', 'Next.js', 'Vite', 'Yjs (CRDTs)', 'WebRTC', 'WebSockets', 'Rough.js'],
    },
    {
      category: 'Backend & Cloud',
      items: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Vercel', 'AWS'],
    },
    {
      category: 'AI & Data Engineering',
      items: ['Google Gemini Vision AI', 'OpenAI API', 'Groq', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Kafka'],
    },
  ],
  experience: [
    {
      role: 'Systems Engineering Intern',
      company: 'Infosys',
      period: '2025',
      description:
        'Architected distributed multi-tier backend data pipelines, stabilized concurrent database writes to guarantee high availability, and resolved critical backend data flow bottlenecks.',
      tags: ['Distributed Systems', 'Database Concurrency', 'High Availability'],
    },
    {
      role: 'Selected Engineer (Top 100 / 5,000+)',
      company: 'Apple & Infosys Engineering Cohort',
      period: '2025 - Present',
      description:
        'Selected among the top 100 engineers across India out of 5,000+ applicants for the prestigious Apple & Infosys advanced systems and iOS engineering program.',
      tags: ['Swift', 'Apple Architecture', 'Systems Engineering'],
    },
    {
      role: 'B.Tech in Computer Science & Engineering',
      company: 'Graphic Era University',
      period: '2022 - 2026',
      description:
        'Focus on Advanced Data Structures, Distributed Computing, Algorithm Design, and Operating Systems. Secured AIR 844 in AINCAT 2025.',
      tags: ['Algorithms', 'Data Structures', 'Operating Systems'],
    },
  ],
  terminalCommands: {
    help: 'Available commands: whoami, skills, projects, contact, resume, testflight, liveapp, clear',
    whoami: 'Divyanshu Sharma — Systems Builder, Full Stack & iOS Engineer. AIR 844 AINCAT. Ex-Infosys Intern.',
    skills: 'Swift, TypeScript, Python, C++, React 19, Yjs CRDTs, WebRTC, Gemini Vision, HealthKit, Redis, Docker',
    projects: '1. CanvasFlow (AI Whiteboard) | 2. Myra (PCOS iOS App) | 3. Credential Honeytoken System | 4. Fleet Saathi',
    contact: 'Email: ds2092693@gmail.com | LinkedIn: /in/divyanshu-sharma-899267297 | GitHub: ds2092693',
    resume: 'Resume available for download via the top header or contact button.',
    testflight: 'Apple TestFlight Public Beta: https://testflight.apple.com/join/pyxj5HUd',
    liveapp: 'CanvasFlow Live Web Application: https://canvasflow-silk.vercel.app/',
  },
};
