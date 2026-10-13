import React, { useState, useRef, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: string;
}

export const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'welcome',
      output:
        '⚡ Divyanshu Sharma Interactive Systems Shell v2.4\nType "help" to see available commands or click quick action pills below.',
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const commandMap = portfolioData.terminalCommands as Record<string, string>;
    const output =
      commandMap[trimmed] ||
      `command not found: "${trimmed}". Type "help" to view recognized commands.`;

    setHistory((prev) => [...prev, { command: trimmed, output }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const quickCommands = ['whoami', 'projects', 'skills', 'testflight', 'liveapp', 'contact'];

  return (
    <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
      {/* Terminal Titlebar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1.2rem',
          background: 'rgba(0, 0, 0, 0.45)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              marginLeft: '0.5rem',
            }}
          >
            divyanshu@systems:~ (zsh)
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'var(--text-muted)',
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <Sparkles size={12} color="#818cf8" />
          <span>interactive shell</span>
        </div>
      </div>

      {/* Quick Command Pills */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.4rem',
          padding: '0.6rem 1.2rem',
          background: 'rgba(0, 0, 0, 0.25)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
        }}
      >
        <span
          style={{
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
            alignSelf: 'center',
            marginRight: '0.2rem',
          }}
        >
          Quick commands:
        </span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            style={{
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              color: '#a5b4fc',
              padding: '0.2rem 0.6rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.72rem',
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(99, 102, 241, 0.25)';
              e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.25)';
            }}
          >
            ${cmd}
          </button>
        ))}
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalBodyRef}
        style={{
          padding: '1.2rem',
          maxHeight: '260px',
          overflowY: 'auto',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.84rem',
          color: '#cbd5e1',
          lineHeight: '1.6',
        }}
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, idx) => (
          <div key={idx} style={{ marginBottom: '0.8rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#818cf8' }}>
              <span style={{ color: '#10b981' }}>➜</span>
              <span style={{ color: '#38bdf8' }}>~</span>
              <span style={{ color: '#f8fafc', fontWeight: 600 }}>{item.command}</span>
            </div>
            <div
              style={{
                whiteSpace: 'pre-wrap',
                color: '#94a3b8',
                marginTop: '0.2rem',
                paddingLeft: '1rem',
              }}
            >
              {item.output}
            </div>
          </div>
        ))}

        {/* Active Input Line */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ color: '#10b981' }}>➜</span>
          <span style={{ color: '#38bdf8' }}>~</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or any command..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.84rem',
              color: '#ffffff',
            }}
          />
        </div>
      </div>
    </div>
  );
};
