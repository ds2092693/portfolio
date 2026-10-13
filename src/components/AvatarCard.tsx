import React, { useState, useRef } from 'react';
import { Terminal, Award, ShieldCheck, Sparkles } from 'lucide-react';

export const AvatarCard: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -8;
    const rotY = ((x - centerX) / centerX) * 8;
    setRotation({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '360px',
        margin: '0 auto',
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.15s ease-out',
        willChange: 'transform',
      }}
    >
      {/* Outer Hologram Glow Card */}
      <div
        className="glass-card"
        style={{
          borderRadius: '24px',
          padding: 'clamp(1.4rem, 3.5vw, 1.8rem)',
          background: 'linear-gradient(145deg, rgba(20, 24, 38, 0.88) 0%, rgba(10, 12, 18, 0.96) 100%)',
          border: '1px solid rgba(99, 102, 241, 0.35)',
          boxShadow: '0 24px 60px -15px rgba(0, 0, 0, 0.8), 0 0 30px -5px rgba(99, 102, 241, 0.25)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated Cyber Scanline */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, transparent 0%, rgba(6, 182, 212, 0.08) 50%, transparent 100%)',
            height: '200%',
            animation: 'scanlineMove 6s linear infinite',
            pointerEvents: 'none',
          }}
        />

        {/* Permanent Profile Photo Frame */}
        <div
          style={{
            position: 'relative',
            width: 'clamp(135px, 35vw, 175px)',
            height: 'clamp(135px, 35vw, 175px)',
            margin: '0 auto 1.2rem auto',
          }}
        >
          {/* Glowing Animated Outer Ring */}
          <div
            style={{
              position: 'absolute',
              inset: '-5px',
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #6366f1, #06b6d4, #10b981, #a855f7, #6366f1)',
              animation: 'spinConic 8s linear infinite',
              filter: 'blur(3px)',
              opacity: 0.85,
            }}
          />

          {/* Avatar Container Inner */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: '#090c14',
              border: '3px solid #0f172a',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 25px rgba(0, 0, 0, 0.7)',
            }}
          >
            {!imgError ? (
              <img
                src="/profile.jpg"
                alt="Divyanshu Sharma"
                onError={() => setImgError(true)}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                }}
              />
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                  background: 'radial-gradient(circle at 50% 30%, #1e1b4b 0%, #090c14 80%)',
                  color: '#ffffff',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.7rem',
                    fontWeight: 900,
                    boxShadow: '0 0 20px rgba(99, 102, 241, 0.6)',
                  }}
                >
                  DS
                </div>
              </div>
            )}
          </div>

          {/* Live Verified SDE Badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '2px',
              right: '2px',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: '#10b981',
              border: '2px solid #090c14',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 12px rgba(16, 185, 129, 0.7)',
            }}
            title="Verified Engineer"
          >
            <ShieldCheck size={16} />
          </div>
        </div>

        {/* Identity & Subtext */}
        <h3 style={{ fontSize: 'clamp(1.15rem, 3.5vw, 1.3rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.15rem' }}>
          Divyanshu Sharma
        </h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)', fontWeight: 600, marginBottom: '0.35rem' }}>
          Software Development Engineer (SDE)
        </p>
        <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.35 }}>
          Graphic Era University • B.Tech (AI & ML) • 8.5 CGPA
        </p>

        {/* Interactive Micro-Badges */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', textAlign: 'left' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.55rem',
              padding: '0.45rem 0.75rem',
              borderRadius: '9px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              fontSize: '0.76rem',
            }}
          >
            <Award size={14} style={{ color: '#f59e0b', flexShrink: 0 }} />
            <div>
              <strong style={{ color: '#ffffff' }}>AIR 844</strong> in AINCAT 2025
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.55rem',
              padding: '0.45rem 0.75rem',
              borderRadius: '9px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              fontSize: '0.76rem',
            }}
          >
            <ShieldCheck size={14} style={{ color: '#10b981', flexShrink: 0 }} />
            <div>
              <strong style={{ color: '#ffffff' }}>Top 100 / 5k+</strong> Apple & Infosys Cohort
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.55rem',
              padding: '0.45rem 0.75rem',
              borderRadius: '9px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              fontSize: '0.76rem',
            }}
          >
            <Terminal size={14} style={{ color: '#6366f1', flexShrink: 0 }} />
            <div>
              <strong style={{ color: '#ffffff' }}>400+ Problems</strong> Solved (LeetCode / TUF+)
            </div>
          </div>
        </div>

        {/* Verified Profile Status */}
        <div
          style={{
            marginTop: '0.85rem',
            fontSize: '0.68rem',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.35rem',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <Sparkles size={11} color="#10b981" />
          <span>Profile Verified • ds2092693</span>
        </div>
      </div>

      <style>{`
        @keyframes spinConic {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes scanlineMove {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(50%); }
        }
      `}</style>
    </div>
  );
};
