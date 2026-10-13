import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ProjectCard } from './components/ProjectCard';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { portfolioData } from './data/portfolioData';
import {
  Mail,
  Copy,
  Check,
  Smartphone,
  Layers,
  ArrowRight,
  Zap,
  Terminal,
  Briefcase,
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
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    showToast('Copied email (ds2092693@gmail.com) to clipboard!');
  };

  const filteredProjects =
    activeCategory === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeCategory);

  const categories = ['All', 'Web & Real-Time', 'Mobile & iOS', 'Security & Systems'];

  return (
    <div style={{ position: 'relative', minHeight: '100vh', paddingBottom: '4rem' }}>
      {/* Background Ambient Glow & Mesh */}
      <div className="ambient-glow-container">
        <div className="ambient-orb orb-1" />
        <div className="ambient-orb orb-2" />
        <div className="ambient-orb orb-3" />
      </div>
      <div className="mesh-grid" />

      {/* Floating Navbar */}
      <Navbar onCopyEmail={copyEmail} />

      {/* Hero Section */}
      <section
        style={{
          paddingTop: '8.5rem',
          paddingBottom: '5rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            {/* Status Pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <span className="badge badge-emerald" style={{ padding: '0.4rem 0.9rem', fontSize: '0.82rem' }}>
                <span className="pulse-dot" />
                <span>{portfolioData.personal.status}</span>
              </span>
            </div>

            {/* Name / Heading */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.4rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                marginBottom: '1.2rem',
              }}
            >
              Building <span className="gradient-text">distributed systems</span>, real-time sync &{' '}
              <span className="gradient-accent">iOS apps.</span>
            </h1>

            {/* Bio */}
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '2.2rem',
                maxWidth: '720px',
              }}
            >
              Hi, I'm <strong style={{ color: '#ffffff' }}>Divyanshu Sharma</strong> — an engineer focused on
              high-throughput backend data flows, CRDT-backed real-time web engines, and native Apple HealthKit/iOS
              architectures with on-device AI.
            </p>

            {/* CTA Actions */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.9rem', marginBottom: '3.5rem' }}>
              <a href="#projects" className="btn-primary">
                <span>Explore Projects</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="https://canvasflow-silk.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Zap size={15} color="#818cf8" />
                <span>CanvasFlow Live Demo</span>
              </a>

              <a
                href="https://testflight.apple.com/join/pyxj5HUd"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Smartphone size={15} color="#38bdf8" />
                <span>Myra TestFlight Beta</span>
              </a>

              <button onClick={copyEmail} className="btn-secondary" title="Copy email address">
                <Copy size={14} />
                <span>Copy Email</span>
              </button>
            </div>

            {/* Credibility Metric Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
              }}
            >
              {portfolioData.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '1.2rem 1.4rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.55rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '-0.02em',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {m.value}
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#94a3b8', marginBottom: '0.15rem' }}>
                    {m.label}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>{m.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" style={{ padding: '4.5rem 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginBottom: '2.5rem',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--accent-primary)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '0.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <Layers size={14} />
                <span>Featured Engineering</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
                Handcrafted Systems & Apps
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '0.35rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.4rem 0.9rem',
                    borderRadius: 'var(--radius-full)',
                    border: 'none',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    background: activeCategory === cat ? 'var(--accent-primary)' : 'transparent',
                    color: activeCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 520px), 1fr))',
              gap: '1.6rem',
            }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Shell / Terminal */}
      <section id="terminal" style={{ padding: '4.5rem 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--accent-secondary)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '0.4rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <Terminal size={14} />
                <span>Developer Sandbox</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
                Test the Interactive CLI
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginTop: '0.4rem' }}>
                Type commands or click quick action chips to inspect skills, run diagnostic probes, or fetch links.
              </p>
            </div>

            <InteractiveTerminal />
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="skills" style={{ padding: '4.5rem 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <div
              style={{
                fontSize: '0.82rem',
                color: 'var(--accent-emerald)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '0.4rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <Zap size={14} />
              <span>Technical Arsenal</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
              Technologies & Methodologies
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.2rem',
            }}
          >
            {portfolioData.skills.map((group, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.6rem',
                  background: 'rgba(16, 18, 25, 0.65)',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '1rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                    paddingBottom: '0.6rem',
                  }}
                >
                  {group.category}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.3rem 0.65rem',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        color: '#cbd5e1',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Cohort Section */}
      <section id="experience" style={{ padding: '4.5rem 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <div
                style={{
                  fontSize: '0.82rem',
                  color: '#a855f7',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '0.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <Briefcase size={14} />
                <span>Experience & Education</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
                Engineering Trajectory
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              {portfolioData.experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '1.8rem',
                    background: 'rgba(17, 19, 27, 0.7)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '0.4rem',
                    }}
                  >
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>{exp.role}</h3>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#38bdf8', marginBottom: '0.8rem' }}>
                    {exp.company}
                  </div>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1rem',
                    }}
                  >
                    {exp.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.74rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '4px',
                          background: 'rgba(99, 102, 241, 0.08)',
                          color: '#a5b4fc',
                          border: '1px solid rgba(99, 102, 241, 0.2)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact CTA */}
      <footer
        style={{
          paddingTop: '4rem',
          borderTop: '1px solid var(--border-subtle)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="container">
          <div
            className="glass-card"
            style={{
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              textAlign: 'center',
              background:
                'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(6, 182, 212, 0.04) 100%)',
              marginBottom: '3rem',
            }}
          >
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '0.8rem' }}>
              Let's Build Something Exceptional
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                maxWidth: '580px',
                margin: '0 auto 1.8rem auto',
                fontSize: '0.96rem',
              }}
            >
              Whether you need high-concurrency systems design, distributed data pipelines, or native Apple apps —
              let's connect.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.9rem' }}>
              <a href={`mailto:${portfolioData.personal.email}`} className="btn-primary">
                <Mail size={15} />
                <span>{portfolioData.personal.email}</span>
              </a>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn</span>
              </a>

              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              color: 'var(--text-muted)',
              fontSize: '0.82rem',
              paddingBottom: '2rem',
            }}
          >
            <div>© {new Date().getFullYear()} Divyanshu Sharma. All rights reserved.</div>
            <div>Built with React 19, TypeScript & Vanilla CSS.</div>
          </div>
        </div>
      </footer>

      {/* Floating Action Toast */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 100,
            background: 'rgba(15, 18, 28, 0.95)',
            border: '1px solid var(--accent-primary)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px var(--accent-primary-glow)',
            backdropFilter: 'blur(16px)',
            color: '#ffffff',
            padding: '0.75rem 1.2rem',
            borderRadius: 'var(--radius-full)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontSize: '0.86rem',
            fontWeight: 500,
            animation: 'slideUpToast 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <Check size={16} color="#10b981" />
          <span>{toastMessage}</span>
        </div>
      )}

      <style>{`
        @keyframes slideUpToast {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default App;
