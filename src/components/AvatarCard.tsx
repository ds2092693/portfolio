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

    const rotX = ((y - centerY) / centerY) * -10;
    const rotY = ((x - centerX) / centerX) * 10;
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
        maxWidth: '380px',
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
          borderRadius: '28px',
          padding: '1.8rem',
          background: 'linear-gradient(145deg, rgba(20, 24, 38, 0.85) 0%, rgba(10, 12, 18, 0.95) 100%)',
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
            width: '180px',
            height: '180px',
            margin: '0 auto 1.4rem auto',
          }}
        >
          {/* Glowing Animated Outer Ring */}
          <div
            style={{
              position: 'absolute',
              inset: '-6px',
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
                    width: '74px',
                    height: '74px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
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
              bottom: '4px',
              right: '4px',
              width: '32px',
              height: '32px',
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
            <ShieldCheck size={18} />
          </div>
        </div>

        {/* Identity & Subtext */}
        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.2rem' }}>
          Divyanshu Sharma
        </h3>
        <p style={{ fontSize: '0.84rem', color: 'var(--accent-secondary)', fontWeight: 600, marginBottom: '0.4rem' }}>
          Software Development Engineer (SDE)
        </p>
        <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginBottom: '1.2rem', lineHeight: 1.4 }}>
          Graphic Era University • B.Tech (AI & ML) • 8.5 CGPA
        </p>

        {/* Interactive Floating Micro-Badges */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.55rem 0.8rem',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              fontSize: '0.78rem',
            }}
          >
            <Award size={15} style={{ color: '#f59e0b', flexShrink: 0 }} />
            <div>
              <strong style={{ color: '#ffffff' }}>AIR 844</strong> in AINCAT 2025
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.55rem 0.8rem',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              fontSize: '0.78rem',
            }}
          >
            <ShieldCheck size={15} style={{ color: '#10b981', flexShrink: 0 }} />
            <div>
              <strong style={{ color: '#ffffff' }}>Top 100 / 5,000+</strong> Apple & Infosys Cohort
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.55rem 0.8rem',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              fontSize: '0.78rem',
            }}
          >
            <Terminal size={15} style={{ color: '#6366f1', flexShrink: 0 }} />
            <div>
              <strong style={{ color: '#ffffff' }}>400+ Problems</strong> Solved (LeetCode / TUF+)
            </div>
          </div>
        </div>

        {/* Verified Profile Status */}
        <div
          style={{
            marginTop: '1rem',
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
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
