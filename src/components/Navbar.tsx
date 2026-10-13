import React, { useState, useEffect } from 'react';
import { Layers, Briefcase, Terminal, Sparkles, Mail, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onCopyEmail: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCopyEmail }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects', icon: <Layers size={14} /> },
    { label: 'Agent Playground', href: '#agent-simulator', icon: <Sparkles size={14} /> },
    { label: 'Skills', href: '#skills', icon: <Briefcase size={14} /> },
    { label: 'Experience', href: '#experience', icon: <Briefcase size={14} /> },
    { label: 'CLI Terminal', href: '#terminal', icon: <Terminal size={14} /> },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled ? '0.65rem 0' : '1.1rem 0',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div className="container">
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: scrolled ? 'rgba(8, 10, 16, 0.82)' : 'rgba(12, 15, 24, 0.55)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '9999px',
            padding: '0.5rem 1.25rem',
            boxShadow: scrolled ? '0 12px 36px -10px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(255,255,255,0.06)' : 'none',
          }}
        >
          {/* Logo / Brand */}
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              textDecoration: 'none',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.88rem',
                boxShadow: '0 0 14px rgba(99, 102, 241, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              DS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ lineHeight: 1.1, fontWeight: 700, fontSize: '0.95rem' }} className="gradient-text">
                Divyanshu Sharma
              </span>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                AIR 844 • Agentic & Systems
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  textDecoration: 'none',
                  color: 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  transition: 'color 0.2s ease',
                  padding: '0.3rem 0.6rem',
                  borderRadius: '6px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          {/* Right Action Tools */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Direct GitHub Profile Link */}
            <a
              href="https://github.com/ds2092693"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{
                padding: '0.4rem 0.85rem',
                fontSize: '0.8rem',
                gap: '0.35rem',
                textDecoration: 'none',
              }}
              title="GitHub: ds2092693"
            >
              <span>GitHub</span>
              <ArrowUpRight size={13} />
            </a>

            {/* Contact Button */}
            <button
              onClick={onCopyEmail}
              className="btn-primary"
              style={{
                padding: '0.42rem 1rem',
                fontSize: '0.82rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <Mail size={13} />
              <span>Contact</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
              style={{
                display: 'none',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                padding: '0.4rem',
                borderRadius: '8px',
              }}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            className="glass-card"
            style={{
              marginTop: '0.6rem',
              padding: '1.2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              borderRadius: '16px',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  fontSize: '0.92rem',
                  padding: '0.5rem 0.6rem',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.02)',
                }}
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};
