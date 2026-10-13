import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AmbientSoundscape: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [frequency, setFrequency] = useState<432 | 528>(432);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const startTone = () => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 1.2);
      gain.connect(ctx.destination);
      gainNodeRef.current = gain;

      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(frequency, ctx.currentTime);
      osc1.connect(gain);
      osc1.start();
      osc1Ref.current = osc1;

      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(frequency + 4, ctx.currentTime);
      osc2.connect(gain);
      osc2.start();
      osc2Ref.current = osc2;

      setIsPlaying(true);
    } catch (e) {
      console.warn('Audio Context init error', e);
    }
  };

  const stopTone = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.exponentialRampToValueAtTime(
        0.001,
        audioCtxRef.current.currentTime + 0.6
      );
      setTimeout(() => {
        try {
          osc1Ref.current?.stop();
          osc2Ref.current?.stop();
          audioCtxRef.current?.close();
        } catch {
          /* ignore */
        }
        audioCtxRef.current = null;
        setIsPlaying(false);
      }, 700);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopTone();
    } else {
      startTone();
    }
  };

  const switchFreq = (newFreq: 432 | 528) => {
    setFrequency(newFreq);
    if (isPlaying && osc1Ref.current && osc2Ref.current && audioCtxRef.current) {
      osc1Ref.current.frequency.setTargetAtTime(newFreq, audioCtxRef.current.currentTime, 0.2);
      osc2Ref.current.frequency.setTargetAtTime(newFreq + 4, audioCtxRef.current.currentTime, 0.2);
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
      <button
        onClick={toggleSound}
        className="glass-card"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.35rem 0.75rem',
          fontSize: '0.78rem',
          color: isPlaying ? '#a5b4fc' : 'var(--text-muted)',
          borderColor: isPlaying ? 'rgba(99, 102, 241, 0.5)' : 'var(--border-subtle)',
          cursor: 'pointer',
          borderRadius: 'var(--radius-full)',
          background: isPlaying ? 'rgba(99, 102, 241, 0.12)' : 'rgba(255, 255, 255, 0.03)',
        }}
        title={isPlaying ? 'Pause Ambient Acoustics' : 'Play 432Hz/528Hz Deep Focus Acoustics'}
      >
        {isPlaying ? <Volume2 size={14} /> : <VolumeX size={14} />}
        <span>{isPlaying ? `${frequency}Hz Focus` : 'Ambient Audio'}</span>
        {isPlaying && (
          <span style={{ display: 'flex', alignItems: 'center', gap: '2px', height: '10px' }}>
            <span className="eq-bar eq-1" />
            <span className="eq-bar eq-2" />
            <span className="eq-bar eq-3" />
          </span>
        )}
      </button>

      {isPlaying && (
        <button
          onClick={() => switchFreq(frequency === 432 ? 528 : 432)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-secondary)',
            fontSize: '0.72rem',
            cursor: 'pointer',
            padding: '0.2rem 0.4rem',
            borderRadius: '4px',
            fontFamily: 'var(--font-mono)',
          }}
          title="Switch frequency"
        >
          {frequency === 432 ? 'Switch to 528Hz' : 'Switch to 432Hz'}
        </button>
      )}

      <style>{`
        .eq-bar {
          width: 2px;
          height: 100%;
          background: #818cf8;
          border-radius: 1px;
          animation: eqAnim 1s ease-in-out infinite alternate;
        }
        .eq-2 { animation-delay: 0.2s; }
        .eq-3 { animation-delay: 0.4s; }
        @keyframes eqAnim {
          0% { height: 20%; }
          100% { height: 100%; }
        }
      `}</style>
    </div>
  );
};
