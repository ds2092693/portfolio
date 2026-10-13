import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { IntroPortal } from './components/IntroPortal';
import { NeuralCanvas } from './components/NeuralCanvas';
import { AvatarCard } from './components/AvatarCard';
import { AgentVisualizer } from './components/AgentVisualizer';
import { ProjectCard } from './components/ProjectCard';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { portfolioData } from './data/portfolioData';
import {
  Mail,
  Check,
  Layers,
  ArrowRight,
  Zap,
  Terminal,
  Briefcase,
  Cpu,
  CheckCircle2,
  Phone,
  Sparkles,
  Code2,
} from 'lucide-react';

const GithubIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedinIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export function App() {
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    showToast('Copied email (ds2092693@gmail.com) to clipboard!');
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(portfolioData.personal.phone);
    showToast('Copied phone (+91 6398232031) to clipboard!');
  };

  const categories = ['All', 'AI & Agentic', 'Mobile & iOS', 'Web & Real-Time', 'Security'];

  const filteredProjects =
    activeCategory === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Interactive Cinematic Portal Overlay (Active until User Taps/Enters) */}
      {!hasEntered && <IntroPortal onEnter={() => setHasEntered(true)} />}

      {/* Main Portfolio Wrapper with Smooth De-blur Reveal Transition */}
      <div
        style={{
          filter: hasEntered ? 'none' : 'blur(28px)',
          opacity: hasEntered ? 1 : 0.4,
          transform: hasEntered ? 'scale(1)' : 'scale(0.985)',
          transition:
            'filter 0.85s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: hasEntered ? 'auto' : 'none',
          paddingBottom: '4rem',
        }}
      >
        {/* Interactive Neural Canvas with Mouse Particle Reactions */}
        <NeuralCanvas />

        {/* Ambient Gradient Glow Orbs & Subtle Mesh Grid */}
        <div className="ambient-glow-container">
          <div className="ambient-orb orb-1" />
          <div className="ambient-orb orb-2" />
          <div className="ambient-orb orb-3" />
        </div>
        <div className="mesh-grid" />

        {/* Floating Glass Navbar */}
        <Navbar onCopyEmail={copyEmail} />

        {/* Hero Section */}
        <section
          style={{
            paddingTop: 'clamp(6rem, 12vw, 8.5rem)',
            paddingBottom: 'clamp(2.5rem, 6vw, 4.5rem)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div className="container">
            <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', alignItems: 'flex-start', gap: '3rem' }}>
              {/* Left Column: SDE Bio & Credentials */}
              <div>
                {/* SDE Availability Status Pill */}
                <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span className="badge badge-emerald" style={{ padding: '0.35rem 0.8rem', fontSize: '0.78rem' }}>
                    <span className="pulse-dot" />
                    <span>SDE • Available for 2026 Roles</span>
                  </span>
                </div>

                {/* SDE-Focused Headline */}
                <h1
                  style={{
                    fontSize: 'clamp(2rem, 5.2vw, 3.6rem)',
                    fontWeight: 800,
                    lineHeight: 1.12,
                    letterSpacing: '-0.03em',
                    marginBottom: '1rem',
                  }}
                >
                  Building <span className="gradient-text">Distributed Systems</span>, Concurrency &{' '}
                  <span className="gradient-accent">AI Platforms.</span>
                </h1>

                {/* Bio explicitly tailored for SDE & Systems */}
                <p
                  style={{
                    fontSize: 'clamp(0.92rem, 1.8vw, 1.08rem)',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.8rem',
                  }}
                >
                  Hi, I'm <strong style={{ color: '#ffffff' }}>Divyanshu Sharma</strong> — an SDE with strong foundations in{' '}
                  <span style={{ color: '#a5b4fc' }}>Distributed Concurrency</span> (Infosys Intern, 12+ database race conditions mitigated),{' '}
                  <span style={{ color: '#67e8f9' }}>Algorithmic Problem Solving</span> (AIR 844 AINCAT, 400+ DSA solved),{' '}
                  <span style={{ color: '#34d399' }}>Native iOS</span> (Swift, Apple & Infosys Training Cohort), and{' '}
                  <span style={{ color: '#f59e0b' }}>Agentic State Machines</span> (LangGraph, RAG, CI/CD Guardrails).
                </p>

                {/* Action Buttons */}
                <div className="hero-cta-wrapper" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', marginBottom: '2.2rem' }}>
                  <a href="#projects" className="btn-primary">
                    <Code2 size={15} />
                    <span>Explore SDE Projects</span>
                    <ArrowRight size={14} />
                  </a>

                  <a href="#agent-simulator" className="btn-secondary">
                    <Sparkles size={13} color="#818cf8" />
                    <span>Agent Simulator</span>
                  </a>

                  <button onClick={copyEmail} className="btn-secondary">
                    <Mail size={13} />
                    <span>ds2092693@gmail.com</span>
                  </button>
                </div>

                {/* Verified Achievements Grid */}
                <div
                  className="hero-stats-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '0.6rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f59e0b', fontFamily: 'var(--font-mono)' }}>
                      AIR 844
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>AINCAT 2025</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#10b981', fontFamily: 'var(--font-mono)' }}>
                      400+
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>DSA Solved</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#6366f1', fontFamily: 'var(--font-mono)' }}>
                      Top 100
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>/ 5k+ Apple Cohort</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#06b6d4', fontFamily: 'var(--font-mono)' }}>
                      8.5 CGPA
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Graphic Era Univ</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive 3D Avatar Card */}
              <div className="hero-avatar-wrapper">
                <AvatarCard />
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Agentic Visualizer Section */}
        <section style={{ padding: 'clamp(2.5rem, 5vw, 3.5rem) 0', position: 'relative', zIndex: 1 }}>
          <div className="container">
            <AgentVisualizer />
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" style={{ padding: 'clamp(3rem, 6vw, 4.5rem) 0', position: 'relative', zIndex: 1 }}>
          <div className="container">
            {/* Header */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
                marginBottom: '1.8rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span className="badge badge-indigo">
                  <Layers size={12} />
                  SDE Project Portfolio
                </span>
                <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Production Systems
                </span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                }}
              >
                Featured Engineering Projects
              </h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', fontSize: '0.92rem' }}>
                Real-world implementations spanning distributed real-time CRDT engines, autonomous LangGraph state machines, native Swift iOS applications, and platform security.
              </p>
            </div>

            {/* Filter Pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.45rem',
                marginBottom: '2rem',
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    background: activeCategory === cat ? '#6366f1' : 'rgba(255, 255, 255, 0.04)',
                    color: activeCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                    border:
                      activeCategory === cat
                        ? '1px solid rgba(255, 255, 255, 0.3)'
                        : '1px solid var(--border-subtle)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(285px, 1fr))',
                gap: '1.4rem',
              }}
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Technical Skills Matrix */}
        <section id="skills" style={{ padding: 'clamp(3rem, 6vw, 4.5rem) 0', position: 'relative', zIndex: 1 }}>
          <div className="container">
            <div style={{ marginBottom: '2rem' }}>
              <span className="badge badge-cyan" style={{ marginBottom: '0.5rem' }}>
                <Cpu size={12} />
                Core SDE Competencies
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                }}
              >
                Technical Expertise & Frameworks
              </h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', fontSize: '0.92rem' }}>
                Comprehensive software engineering toolkit spanning Data Structures, Systems, Concurrency, Native iOS, and Agentic AI.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {portfolioData.skills.map((skillGroup) => (
                <div
                  key={skillGroup.category}
                  className="glass-card"
                  style={{
                    padding: '1.4rem',
                    borderTop: `3px solid ${skillGroup.color}`,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.55rem',
                      marginBottom: '1rem',
                    }}
                  >
                    <div
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '8px',
                        background: `${skillGroup.color}1a`,
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        color: skillGroup.color,
                      }}
                    >
                      <Zap size={15} />
                    </div>
                    <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#ffffff' }}>
                      {skillGroup.category}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {skillGroup.items.map((item) => (
                      <span
                        key={item}
                        style={{
                          fontSize: '0.76rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.25rem 0.55rem',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          color: '#cbd5e1',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          transition: 'all 0.15s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#ffffff';
                          e.currentTarget.style.borderColor = `${skillGroup.color}60`;
                          e.currentTarget.style.background = `${skillGroup.color}15`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#cbd5e1';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Education Section */}
        <section id="experience" style={{ padding: 'clamp(3rem, 6vw, 4.5rem) 0', position: 'relative', zIndex: 1 }}>
          <div className="container">
            <div style={{ marginBottom: '2rem' }}>
              <span className="badge badge-emerald" style={{ marginBottom: '0.5rem' }}>
                <Briefcase size={12} />
                Engineering Track Record
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                }}
              >
                Experience & Education
              </h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', fontSize: '0.92rem' }}>
                Track record at Infosys, Apple & Infosys Engineering Cohort, and Graphic Era University.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {portfolioData.experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: 'clamp(1.25rem, 3vw, 1.8rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.9rem',
                  }}
                >
                  <div
                    className="exp-card-header"
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '0.5rem',
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                        {exp.role}
                      </h3>
                      <div style={{ color: 'var(--accent-secondary)', fontWeight: 600, fontSize: '0.9rem' }}>
                        {exp.company}
                      </div>
                    </div>

                    <div className="exp-card-meta" style={{ textAlign: 'right' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.78rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {exp.period}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{exp.location}</div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.45rem',
                    }}
                  >
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.55rem',
                          fontSize: '0.84rem',
                          color: '#cbd5e1',
                          lineHeight: '1.5',
                        }}
                      >
                        <CheckCircle2
                          size={14}
                          color="#10b981"
                          style={{ marginTop: '3px', flexShrink: 0 }}
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.35rem',
                      paddingTop: '0.5rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    }}
                  >
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '4px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        #{s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive CLI Terminal Section */}
        <section id="terminal" style={{ padding: 'clamp(3rem, 6vw, 4.5rem) 0', position: 'relative', zIndex: 1 }}>
          <div className="container">
            <div style={{ marginBottom: '1.6rem' }}>
              <span className="badge badge-orange" style={{ marginBottom: '0.5rem' }}>
                <Terminal size={12} />
                Developer CLI
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                }}
              >
                Interactive SDE Command Console
              </h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', fontSize: '0.92rem' }}>
                Query my background, run simulated agent pipelines, and inspect project architecture straight from the terminal.
              </p>
            </div>

            <InteractiveTerminal />
          </div>
        </section>

        {/* Footer & Direct Contact */}
        <footer
          style={{
            padding: '3rem 0 1.5rem 0',
            position: 'relative',
            zIndex: 1,
            borderTop: '1px solid var(--border-subtle)',
            marginTop: '3.5rem',
          }}
        >
          <div className="container">
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '1.25rem',
                marginBottom: '2rem',
              }}
            >
              <div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.2rem' }}>
                  Divyanshu Sharma
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                  Software Development Engineer (SDE) • AIR 844 AINCAT • Dehradun, India
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                <button onClick={copyEmail} className="btn-secondary" style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem' }}>
                  <Mail size={13} />
                  <span>Email</span>
                </button>

                <button onClick={copyPhone} className="btn-secondary" style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem' }}>
                  <Phone size={13} />
                  <span>Call</span>
                </button>

                <a
                  href="https://github.com/ds2092693"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem' }}
                >
                  <GithubIcon size={13} />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/divyanshu-sharma-899267297/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.8rem', padding: '0.45rem 0.85rem' }}
                >
                  <LinkedinIcon size={13} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div
              style={{
                textAlign: 'center',
                fontSize: '0.76rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              © 2026 Divyanshu Sharma. Built with React 19, TypeScript, & Vite. Deployed on Vercel.
            </div>
          </div>
        </footer>

        {/* Toast Notification Container */}
        {toastMessage && (
          <div
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              left: '20px',
              maxWidth: '360px',
              margin: '0 auto',
              background: 'rgba(15, 23, 42, 0.95)',
              backdropFilter: 'blur(16px)',
              border: '1px solid var(--accent-primary)',
              color: '#ffffff',
              padding: '0.75rem 1.2rem',
              borderRadius: 'var(--radius-full)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px var(--accent-primary-glow)',
              fontSize: '0.84rem',
              fontWeight: 500,
              zIndex: 100,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              gap: '0.5rem',
              animation: 'fadeIn 0.2s ease',
            }}
          >
            <Check size={15} color="#34d399" />
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
