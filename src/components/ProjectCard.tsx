import React, { useRef, useState } from 'react';
import type { Project } from '../data/portfolioData';
import { ExternalLink, Smartphone, CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="glass-card"
      style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        background: 'rgba(15, 17, 24, 0.7)',
      }}
    >
      {/* Radial Hover Spotlight Follower */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.25s ease',
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${project.accentColor}18, transparent 80%)`,
        }}
      />

      {/* Card Header */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <span
            className="badge"
            style={{
              background: `${project.accentColor}18`,
              color: project.accentColor,
              borderColor: `${project.accentColor}40`,
            }}
          >
            {project.badgeText}
          </span>
          <span
            style={{
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {project.category}
          </span>
        </div>

        <h3
          style={{
            fontSize: '1.45rem',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            marginBottom: '0.4rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: '0.92rem',
            fontWeight: 600,
            color: '#94a3b8',
            marginBottom: '0.9rem',
          }}
        >
          {project.tagline}
        </p>

        <p
          style={{
            fontSize: '0.88rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.65',
            marginBottom: '1.2rem',
          }}
        >
          {project.description}
        </p>

        {/* Key Architectural Highlights */}
        <div style={{ marginBottom: '1.4rem' }}>
          <div
            style={{
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.6rem',
            }}
          >
            Key Highlights
          </div>
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
            {project.highlights.map((h, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  fontSize: '0.82rem',
                  color: '#cbd5e1',
                  lineHeight: '1.5',
                }}
              >
                <CheckCircle2
                  size={13}
                  color={project.accentColor}
                  style={{ marginTop: '3px', flexShrink: 0 }}
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech Tags & CTA Links */}
      <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto' }}>
        {/* Technologies */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.4rem',
            marginBottom: '1.4rem',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          {project.technologies.map((t) => (
            <span
              key={t}
              style={{
                fontSize: '0.74rem',
                fontFamily: 'var(--font-mono)',
                padding: '0.2rem 0.55rem',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.04)',
                color: '#cbd5e1',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.82rem',
                background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
              }}
            >
              <ExternalLink size={13} />
              <span>Open Live App</span>
            </a>
          )}

          {project.testFlightUrl && (
            <a
              href={project.testFlightUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.82rem',
                background: 'linear-gradient(135deg, #007aff, #0051d5)',
                boxShadow: '0 4px 18px rgba(0, 122, 255, 0.35)',
              }}
            >
              <Smartphone size={13} />
              <span>TestFlight Beta</span>
            </a>
          )}

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.82rem',
              }}
            >
              <GithubIcon size={13} />
              <span>{project.id === 'myra' ? 'Docs & Architecture' : 'Source Code'}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
