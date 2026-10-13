import React, { useState, useEffect } from 'react';
import { AmbientSoundscape } from './AmbientSoundscape';
import { Code, Terminal, Layers, Briefcase, Mail, Menu, X } from 'lucide-react';

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
    { label: 'Skills', href: '#skills', icon: <Code size={14} /> },
    { label: 'Experience', href: '#experience', icon: <Briefcase size={14} /> },
    { label: 'Terminal', href: '#terminal', icon: <Terminal size={14} /> },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled ? '0.75rem 0' : '1.2rem 0',
        transition: 'all var(--transition-smooth)',
      }}
    >
      <div className="container">
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: scrolled ? 'rgba(10, 12, 18, 0.75)' : 'rgba(14, 17, 26, 0.45)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-full)',
            padding: '0.5rem 1.2rem',
            boxShadow: scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.5)' : 'none',
          }}
        >
          {/* Logo / Name */}
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              textDecoration: 'none',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '1.05rem',
              letterSpacing: '-0.02em',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.9rem',
                boxShadow: '0 0 12px var(--accent-primary-glow)',
              }}
            >
              DS
            </div>
            <span className="gradient-text">Divyanshu</span>
          </a>

          {/* Desktop Nav Links */}
          <div
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.4rem',
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
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Tools */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            {/* Ambient Sound Generator */}
            <AmbientSoundscape />

            {/* Copy Email Button */}
            <button
              onClick={onCopyEmail}
              className="btn-primary"
              style={{
                padding: '0.45rem 1rem',
                fontSize: '0.84rem',
              }}
            >
              <Mail size={13} />
              <span>Contact</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                padding: '0.2rem',
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            className="glass-card"
            style={{
              marginTop: '0.5rem',
              padding: '1.2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem',
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
                  fontSize: '0.95rem',
                  padding: '0.5rem 0',
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
        @media (max-width: 768px) {
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
