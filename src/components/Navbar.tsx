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
    { label: 'Projects', href: '#projects', icon: <Layers size={15} /> },
    { label: 'Agent Simulator', href: '#agent-simulator', icon: <Sparkles size={15} /> },
    { label: 'Skills', href: '#skills', icon: <Briefcase size={15} /> },
    { label: 'Experience', href: '#experience', icon: <Briefcase size={15} /> },
    { label: 'CLI Terminal', href: '#terminal', icon: <Terminal size={15} /> },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled ? '0.5rem 0' : '0.9rem 0',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div className="container">
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: scrolled ? 'rgba(8, 10, 16, 0.88)' : 'rgba(12, 15, 24, 0.65)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '9999px',
            padding: '0.45rem 1rem',
            boxShadow: scrolled ? '0 12px 36px -10px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255,255,255,0.06)' : 'none',
          }}
        >
          {/* Logo / Brand */}
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.55rem',
              textDecoration: 'none',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.95rem',
              letterSpacing: '-0.02em',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.82rem',
                boxShadow: '0 0 12px rgba(99, 102, 241, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              DS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ lineHeight: 1.1, fontWeight: 700, fontSize: '0.92rem' }} className="gradient-text">
                Divyanshu
              </span>
              <span
                className="desktop-only-sub"
                style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
              >
                SDE • AIR 844
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.1rem',
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
                  fontSize: '0.84rem',
                  fontWeight: 500,
                  transition: 'color 0.2s ease',
                  padding: '0.3rem 0.55rem',
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Desktop GitHub Link */}
            <a
              href="https://github.com/ds2092693"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary desktop-git-btn"
              style={{
                padding: '0.38rem 0.75rem',
                fontSize: '0.78rem',
                gap: '0.3rem',
                textDecoration: 'none',
              }}
              title="GitHub: ds2092693"
            >
              <span>GitHub</span>
              <ArrowUpRight size={12} />
            </a>

            {/* Contact Button */}
            <button
              onClick={onCopyEmail}
              className="btn-primary"
              style={{
                padding: '0.38rem 0.85rem',
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <Mail size={12} />
              <span>Contact</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
              style={{
                display: 'none',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                padding: '0.38rem 0.45rem',
                borderRadius: '8px',
              }}
            >
              {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Sheet */}
        {mobileMenuOpen && (
          <div
            className="glass-card"
            style={{
              marginTop: '0.5rem',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
              borderRadius: '18px',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              background: 'rgba(10, 13, 22, 0.95)',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.8)',
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
                  gap: '0.65rem',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  padding: '0.65rem 0.8rem',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  transition: 'background 0.15s ease',
                }}
              >
                <span style={{ color: '#818cf8' }}>{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}

            <a
              href="https://github.com/ds2092693"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textDecoration: 'none',
                color: '#38bdf8',
                fontSize: '0.88rem',
                fontWeight: 600,
                padding: '0.65rem 0.8rem',
                borderRadius: '10px',
                background: 'rgba(6, 182, 212, 0.1)',
                border: '1px solid rgba(6, 182, 212, 0.25)',
                marginTop: '0.4rem',
              }}
            >
              <span>View GitHub (@ds2092693)</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-git-btn {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        @media (max-width: 480px) {
          .desktop-only-sub {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
