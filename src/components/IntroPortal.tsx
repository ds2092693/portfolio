import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

interface IntroPortalProps {
  onEnter: () => void;
}

export const IntroPortal: React.FC<IntroPortalProps> = ({ onEnter }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 650);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        handleEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        background: 'rgba(5, 7, 12, 0.92)',
        backdropFilter: 'blur(35px)',
        WebkitBackdropFilter: 'blur(35px)',
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? 'scale(1.1)' : 'scale(1)',
        transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: isExiting ? 'none' : 'auto',
      }}
      onClick={handleEnter}
    >
      {/* Shockwave expanding circle when exiting */}
      {isExiting && (
        <div
          style={{
            position: 'absolute',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            border: '2px solid #06b6d4',
            boxShadow: '0 0 80px 40px rgba(6, 182, 212, 0.6), 0 0 140px 80px rgba(99, 102, 241, 0.5)',
            animation: 'portalShockwave 0.65s ease-out forwards',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Cyberpunk HUD Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '540px',
          background: 'linear-gradient(160deg, rgba(17, 22, 35, 0.97) 0%, rgba(9, 11, 18, 0.99) 100%)',
          border: '1px solid rgba(99, 102, 241, 0.4)',
          borderRadius: '22px',
          padding: 'clamp(1.4rem, 4vw, 2.4rem)',
          boxShadow: '0 25px 70px -15px rgba(0, 0, 0, 0.9), 0 0 45px -10px rgba(99, 102, 241, 0.35)',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        {/* Animated Corner Brackets */}
        <div style={{ position: 'absolute', top: 10, left: 12, color: '#6366f1', fontFamily: 'monospace', fontSize: '0.8rem' }}>┌</div>
        <div style={{ position: 'absolute', top: 10, right: 12, color: '#6366f1', fontFamily: 'monospace', fontSize: '0.8rem' }}>┐</div>
        <div style={{ position: 'absolute', bottom: 10, left: 12, color: '#6366f1', fontFamily: 'monospace', fontSize: '0.8rem' }}>└</div>
        <div style={{ position: 'absolute', bottom: 10, right: 12, color: '#6366f1', fontFamily: 'monospace', fontSize: '0.8rem' }}>┘</div>

        {/* Core Animated Emblem */}
        <div
          style={{
            width: '64px',
            height: '64px',
            margin: '0 auto 1.1rem auto',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: '-4px',
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #6366f1, #06b6d4, #10b981, #6366f1)',
              animation: 'spinRing 5s linear infinite',
              filter: 'blur(2px)',
              opacity: 0.9,
            }}
          />
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: '#090c14',
              border: '2px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 900,
              fontSize: '1.25rem',
              letterSpacing: '-0.02em',
              boxShadow: '0 0 16px rgba(99, 102, 241, 0.6)',
            }}
          >
            DS
          </div>
        </div>

        {/* System Header Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.28rem 0.75rem',
            borderRadius: '9999px',
            background: 'rgba(99, 102, 241, 0.12)',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            color: '#a5b4fc',
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
            marginBottom: '1rem',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#10b981',
              boxShadow: '0 0 8px #10b981',
            }}
          />
          SYSTEM READY • SECURE SDE WORKSPACE
        </div>

        {/* Software Engineering Quote Box */}
        <div
          style={{
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '14px',
            padding: '1rem 1.1rem',
            marginBottom: '1.2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.35rem',
              color: 'var(--text-muted)',
              fontSize: '0.68rem',
              fontFamily: 'var(--font-mono)',
              marginBottom: '0.4rem',
            }}
          >
            <Terminal size={11} color="#06b6d4" />
            <span>ENGINEERING MANIFESTO</span>
          </div>

          <blockquote
            style={{
              fontSize: 'clamp(1.05rem, 3.8vw, 1.35rem)',
              fontWeight: 700,
              lineHeight: 1.35,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: '0.4rem',
              fontStyle: 'italic',
            }}
          >
            “Talk is cheap. Show me the code.”
          </blockquote>

          <div
            style={{
              fontSize: '0.76rem',
              color: 'var(--accent-secondary)',
              fontWeight: 600,
              fontFamily: 'var(--font-mono)',
            }}
          >
            — Linus Torvalds, Creator of Linux & Git
          </div>
        </div>

        <p
          style={{
            fontSize: '0.82rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
            marginBottom: '1.2rem',
            maxWidth: '440px',
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
        >
          <strong style={{ color: '#ffffff' }}>Divyanshu Sharma</strong> — Software Development Engineer (SDE)
          <br />
          <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>
            Building fault-tolerant concurrency, distributed sync & AI platforms.
          </span>
        </p>

        {/* Telemetry Readiness Chips */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0.4rem',
            marginBottom: '1.4rem',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              padding: '0.5rem 0.2rem',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#f59e0b', fontFamily: 'var(--font-mono)' }}>
              AIR 844
            </div>
            <div style={{ fontSize: '0.64rem', color: 'var(--text-muted)' }}>AINCAT 2025</div>
          </div>

          <div
            style={{
              padding: '0.5rem 0.2rem',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#10b981', fontFamily: 'var(--font-mono)' }}>
              400+
            </div>
            <div style={{ fontSize: '0.64rem', color: 'var(--text-muted)' }}>DSA Solved</div>
          </div>

          <div
            style={{
              padding: '0.5rem 0.2rem',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#06b6d4', fontFamily: 'var(--font-mono)' }}>
              8.5 CGPA
            </div>
            <div style={{ fontSize: '0.64rem', color: 'var(--text-muted)' }}>Graphic Era</div>
          </div>
        </div>

        {/* Enter Trigger Button */}
        <button
          onClick={handleEnter}
          className="btn-primary"
          style={{
            width: '100%',
            padding: '0.82rem 1.2rem',
            fontSize: '0.9rem',
            fontWeight: 700,
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
            boxShadow: '0 8px 25px rgba(99, 102, 241, 0.45)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s ease',
          }}
        >
          <span>ENTER PORTFOLIO EXPERIENCE</span>
          <ArrowRight size={16} />
        </button>

        <div style={{ marginTop: '0.75rem', fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          Tap anywhere or press <strong style={{ color: '#cbd5e1' }}>ENTER</strong> to launch
        </div>
      </div>

      <style>{`
        @keyframes spinRing {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes portalShockwave {
          0% {
            transform: scale(0.2);
            opacity: 1;
          }
          100% {
            transform: scale(35);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
