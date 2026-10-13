import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface IntroPortalProps {
  onEnter: () => void;
}

export const IntroPortal: React.FC<IntroPortalProps> = ({ onEnter }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 700);
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
        padding: '1.5rem',
        background: 'rgba(5, 7, 12, 0.88)',
        backdropFilter: 'blur(35px)',
        WebkitBackdropFilter: 'blur(35px)',
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? 'scale(1.12)' : 'scale(1)',
        transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: isExiting ? 'none' : 'auto',
      }}
      onClick={handleEnter}
    >
      {/* Shockwave expanding circle when exiting */}
      {isExiting && (
        <div
          style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            border: '2px solid #06b6d4',
            boxShadow: '0 0 80px 40px rgba(6, 182, 212, 0.6), 0 0 140px 80px rgba(99, 102, 241, 0.5)',
            animation: 'portalShockwave 0.7s ease-out forwards',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Cyberpunk HUD Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '560px',
          background: 'linear-gradient(160deg, rgba(17, 22, 35, 0.95) 0%, rgba(9, 11, 18, 0.98) 100%)',
          border: '1px solid rgba(99, 102, 241, 0.4)',
          borderRadius: '24px',
          padding: 'clamp(1.8rem, 4vw, 2.6rem)',
          boxShadow: '0 25px 70px -15px rgba(0, 0, 0, 0.9), 0 0 45px -10px rgba(99, 102, 241, 0.35)',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
          animation: 'portalCardFloat 4s ease-in-out infinite alternate',
        }}
      >
        {/* Animated Corner Brackets */}
        <div style={{ position: 'absolute', top: 12, left: 14, color: '#6366f1', fontFamily: 'monospace', fontSize: '0.8rem' }}>┌</div>
        <div style={{ position: 'absolute', top: 12, right: 14, color: '#6366f1', fontFamily: 'monospace', fontSize: '0.8rem' }}>┐</div>
        <div style={{ position: 'absolute', bottom: 12, left: 14, color: '#6366f1', fontFamily: 'monospace', fontSize: '0.8rem' }}>└</div>
        <div style={{ position: 'absolute', bottom: 12, right: 14, color: '#6366f1', fontFamily: 'monospace', fontSize: '0.8rem' }}>┘</div>

        {/* Ambient Top Glow Beacon */}
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '260px',
            height: '100px',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
            filter: 'blur(30px)',
            pointerEvents: 'none',
          }}
        />

        {/* Core Animated Emblem */}
        <div
          style={{
            width: '78px',
            height: '78px',
            margin: '0 auto 1.4rem auto',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Rotating Neon Ring */}
          <div
            style={{
              position: 'absolute',
              inset: '-5px',
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
              fontSize: '1.4rem',
              letterSpacing: '-0.02em',
              boxShadow: '0 0 20px rgba(99, 102, 241, 0.6)',
            }}
          >
            DS
          </div>
        </div>

        {/* System Header & Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.3rem 0.8rem',
            borderRadius: '9999px',
            background: 'rgba(99, 102, 241, 0.12)',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            color: '#a5b4fc',
            fontSize: '0.74rem',
            fontFamily: 'var(--font-mono)',
            marginBottom: '1rem',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#10b981',
              boxShadow: '0 0 8px #10b981',
            }}
          />
          SYSTEM READY • SECURE SDE WORKSPACE
        </div>

        {/* Powerful Quote */}
        <h2
          style={{
            fontSize: 'clamp(1.25rem, 3.2vw, 1.7rem)',
            fontWeight: 800,
            lineHeight: 1.3,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            marginBottom: '0.9rem',
          }}
        >
          "Building fault-tolerant concurrency, scalable systems, and intelligent platforms."
        </h2>

        <p
          style={{
            fontSize: '0.88rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '1.6rem',
            maxWidth: '460px',
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
        >
          <strong style={{ color: '#ffffff' }}>Divyanshu Sharma</strong> — Software Development Engineer (SDE)
          <br />
          <span style={{ color: 'var(--accent-secondary)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>
            AIR 844 AINCAT • 400+ DSA • Infosys & Apple Cohort
          </span>
        </p>

        {/* Telemetry Readiness Chips */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0.5rem',
            marginBottom: '1.8rem',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              padding: '0.6rem 0.4rem',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#f59e0b', fontFamily: 'var(--font-mono)' }}>
              AIR 844
            </div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>AINCAT 2025</div>
          </div>

          <div
            style={{
              padding: '0.6rem 0.4rem',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#10b981', fontFamily: 'var(--font-mono)' }}>
              400+
            </div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>DSA Solved</div>
          </div>

          <div
            style={{
              padding: '0.6rem 0.4rem',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#06b6d4', fontFamily: 'var(--font-mono)' }}>
              8.5 CGPA
            </div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Graphic Era</div>
          </div>
        </div>

        {/* Enter Trigger Button */}
        <button
          onClick={handleEnter}
          className="btn-primary"
          style={{
            width: '100%',
            padding: '0.9rem 1.6rem',
            fontSize: '0.98rem',
            fontWeight: 700,
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
            boxShadow: '0 8px 30px rgba(99, 102, 241, 0.45)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 12px 36px rgba(6, 182, 212, 0.55)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(99, 102, 241, 0.45)';
          }}
        >
          <span>ENTER PORTFOLIO EXPERIENCE</span>
          <ArrowRight size={17} />
        </button>

        <div style={{ marginTop: '0.9rem', fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          Click anywhere or press <strong style={{ color: '#cbd5e1' }}>ENTER / SPACE</strong> to initialize
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
        @keyframes portalCardFloat {
          0% { transform: translateY(0); }
          100% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
};
