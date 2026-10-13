import React, { useState } from 'react';
import { Play, RotateCcw, CheckCircle2, Cpu, ShieldCheck, Database, Sparkles, Activity } from 'lucide-react';

interface PipelineStep {
  id: string;
  name: string;
  type: string;
  icon: React.ReactNode;
  detail: string;
}

const PRESETS = [
  {
    title: 'LangGraph Financial Screener',
    prompt: 'Query yFinance API for NVDA technicals, synthesize via Ollama, and verify 20+ CI/CD unit guardrails.',
    system: 'LangGraph State Machine',
  },
  {
    title: 'MYRA iOS Multimodal Vision',
    prompt: 'Evaluate PCOS meal photo using Gemini Vision API with <1.5s latency and log to Apple HealthKit.',
    system: 'Multimodal AI & HealthKit',
  },
  {
    title: 'Infosys RBAC & Concurrency Check',
    prompt: 'Validate 3-tier user token in PostgreSQL on Supabase and mitigate concurrent write race conditions.',
    system: 'Platform Security & DB Concurrency',
  },
];

export const AgentVisualizer: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const steps: PipelineStep[] = [
    {
      id: 'input',
      name: 'Agent Input & Intent',
      type: 'Supervisor',
      icon: <Sparkles size={15} />,
      detail: 'Context parsing & token validation',
    },
    {
      id: 'router',
      name: 'LangGraph State Graph',
      type: 'Orchestrator',
      icon: <Cpu size={15} />,
      detail: 'Deterministic graph branch execution',
    },
    {
      id: 'tool',
      name: 'Tool Invocation',
      type: 'External Service',
      icon: <Activity size={15} />,
      detail: 'yFinance REST / Gemini Vision / Supabase',
    },
    {
      id: 'rag',
      name: 'Context & Vector RAG',
      type: 'Memory',
      icon: <Database size={15} />,
      detail: 'Inject domain embeddings & prompt context',
    },
    {
      id: 'guardrails',
      name: 'CI/CD & Safety Guardrails',
      type: 'Evaluation',
      icon: <ShieldCheck size={15} />,
      detail: '20+ automated unit tests & AI safety filter',
    },
    {
      id: 'stream',
      name: 'Synthesized Stream',
      type: 'Output',
      icon: <CheckCircle2 size={15} />,
      detail: 'Structured inference returned in <1.5s',
    },
  ];

  const runPipeline = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);
    setLogs([`[0.00s] Initializing ${PRESETS[selectedPreset].system}...`]);

    const stepIntervals = [
      { step: 0, delay: 350, log: `[0.12s] Parsing query: "${PRESETS[selectedPreset].prompt.substring(0, 36)}..."` },
      { step: 1, delay: 800, log: '[0.28s] LangGraph Node: Router dispatching to specialized worker.' },
      { step: 2, delay: 1350, log: '[0.55s] Tool Executed: Payload retrieved with 0 packet drops.' },
      { step: 3, delay: 1900, log: '[0.84s] RAG Ingestion: Vector cosine similarity 0.942. Context preserved.' },
      { step: 4, delay: 2450, log: '[1.15s] Evaluation: 20+ CI/CD unit assertions passed. AI Safety OK.' },
      { step: 5, delay: 3000, log: '[1.38s] Pipeline Finished: Stream completed in 1.38s within SLA threshold.' },
    ];

    stepIntervals.forEach(({ step, delay, log }) => {
      setTimeout(() => {
        setActiveStep(step);
        setLogs((prev) => [...prev, log]);
        if (step === 5) {
          setIsRunning(false);
        }
      }, delay);
    });
  };

  const resetPipeline = () => {
    setActiveStep(-1);
    setIsRunning(false);
    setLogs([]);
  };

  return (
    <div
      id="agent-simulator"
      className="glass-card"
      style={{
        padding: 'clamp(1.2rem, 3.5vw, 2.5rem)',
        background: 'linear-gradient(180deg, rgba(16, 20, 32, 0.75) 0%, rgba(10, 12, 19, 0.9) 100%)',
        border: '1px solid rgba(99, 102, 241, 0.25)',
        boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.7), 0 0 30px -10px rgba(99, 102, 241, 0.15)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
            <span className="badge badge-indigo">
              <Sparkles size={11} />
              Interactive SDE Simulation
            </span>
            <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              LangGraph State Machine
            </span>
          </div>
          <h3 style={{ fontSize: 'clamp(1.15rem, 3vw, 1.6rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Agentic Pipeline & Guardrail Visualizer
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', marginTop: '0.2rem' }}>
            Test the architectural pipeline driving my LangGraph, Ollama, and multimodal AI systems in real-time.
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '0.5rem', width: 'auto' }}>
          <button
            onClick={resetPipeline}
            disabled={isRunning || activeStep === -1}
            className="btn-secondary"
            style={{
              padding: '0.4rem 0.8rem',
              fontSize: '0.8rem',
              opacity: isRunning || activeStep === -1 ? 0.4 : 1,
              cursor: isRunning || activeStep === -1 ? 'not-allowed' : 'pointer',
            }}
          >
            <RotateCcw size={12} />
            <span>Reset</span>
          </button>
          <button
            onClick={runPipeline}
            disabled={isRunning}
            className="btn-primary"
            style={{
              padding: '0.4rem 1rem',
              fontSize: '0.82rem',
              opacity: isRunning ? 0.7 : 1,
              cursor: isRunning ? 'wait' : 'pointer',
            }}
          >
            <Play size={12} />
            <span>{isRunning ? 'Running...' : 'Run Simulation'}</span>
          </button>
        </div>
      </div>

      {/* Preset Query Selector */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 600 }}>
          SELECT A PIPELINE PRESET TO RUN:
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.65rem' }}>
          {PRESETS.map((preset, idx) => (
            <button
              key={preset.title}
              onClick={() => {
                if (!isRunning) {
                  setSelectedPreset(idx);
                  resetPipeline();
                }
              }}
              style={{
                textAlign: 'left',
                padding: '0.75rem 0.9rem',
                borderRadius: '12px',
                background:
                  selectedPreset === idx
                    ? 'rgba(99, 102, 241, 0.15)'
                    : 'rgba(255, 255, 255, 0.03)',
                border:
                  selectedPreset === idx
                    ? '1px solid rgba(99, 102, 241, 0.6)'
                    : '1px solid rgba(255, 255, 255, 0.06)',
                color: 'var(--text-primary)',
                cursor: isRunning ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                <span style={{ fontWeight: 600, fontSize: '0.84rem', color: selectedPreset === idx ? '#a5b4fc' : '#ffffff' }}>
                  {preset.title}
                </span>
                <span
                  style={{
                    fontSize: '0.64rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '0.12rem 0.35rem',
                    borderRadius: '4px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    color: 'var(--text-muted)',
                  }}
                >
                  {preset.system.split(' ')[0]}
                </span>
              </div>
              <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: 1.35 }}>
                {preset.prompt}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Visual Pipeline Nodes */}
      <div
        className="pipeline-nodes-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '0.65rem',
          marginBottom: '1.5rem',
          position: 'relative',
        }}
      >
        {steps.map((s, idx) => {
          const isDone = activeStep > idx;
          const isCurrent = activeStep === idx;
          const isPending = activeStep < idx;

          return (
            <div
              key={s.id}
              style={{
                padding: '0.85rem 0.75rem',
                borderRadius: '12px',
                background: isCurrent
                  ? 'rgba(99, 102, 241, 0.22)'
                  : isDone
                  ? 'rgba(16, 185, 129, 0.12)'
                  : 'rgba(255, 255, 255, 0.02)',
                border: isCurrent
                  ? '1px solid #818cf8'
                  : isDone
                  ? '1px solid rgba(16, 185, 129, 0.4)'
                  : '1px solid rgba(255, 255, 255, 0.06)',
                boxShadow: isCurrent
                  ? '0 0 16px rgba(99, 102, 241, 0.4)'
                  : isDone
                  ? '0 0 10px rgba(16, 185, 129, 0.2)'
                  : 'none',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  style={{
                    fontSize: '0.64rem',
                    fontFamily: 'var(--font-mono)',
                    color: isCurrent ? '#a5b4fc' : isDone ? '#6ee7b7' : 'var(--text-muted)',
                    fontWeight: 600,
                  }}
                >
                  NODE 0{idx + 1}
                </span>
                <span
                  style={{
                    color: isCurrent ? '#a5b4fc' : isDone ? '#34d399' : 'var(--text-muted)',
                  }}
                >
                  {isDone ? <CheckCircle2 size={14} /> : s.icon}
                </span>
              </div>

              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: isCurrent ? '#ffffff' : isDone ? '#f1f5f9' : 'var(--text-secondary)',
                  lineHeight: 1.25,
                }}
              >
                {s.name}
              </div>

              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>
                {s.detail}
              </div>

              {/* Status Indicator */}
              <div style={{ marginTop: 'auto', paddingTop: '0.3rem' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    fontSize: '0.64rem',
                    fontFamily: 'var(--font-mono)',
                    color: isCurrent ? '#818cf8' : isDone ? '#34d399' : 'var(--text-muted)',
                  }}
                >
                  <span
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: isCurrent ? '#818cf8' : isDone ? '#10b981' : '#475569',
                      boxShadow: isCurrent ? '0 0 6px #818cf8' : 'none',
                    }}
                  />
                  {isCurrent ? 'ACTIVE' : isDone ? 'PASSED' : isPending ? 'QUEUED' : 'READY'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Execution Telemetry Terminal */}
      <div
        style={{
          borderRadius: '10px',
          background: '#04060a',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '0.85rem 1rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.74rem',
          color: '#cbd5e1',
          overflowX: 'auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            paddingBottom: '0.35rem',
          }}
        >
          <span style={{ color: 'var(--text-muted)', fontSize: '0.68rem' }}>
            TELEMETRY LOG STREAM
          </span>
          <span style={{ color: '#34d399', fontSize: '0.68rem' }}>
            {activeStep === 5 ? 'Status: 200 OK' : isRunning ? 'Processing...' : 'Idle'}
          </span>
        </div>

        <div style={{ minHeight: '65px', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {logs.length === 0 ? (
            <span style={{ color: '#64748b' }}>
              &gt; Tap "Run Simulation" above to observe the real-time agent execution pipeline.
            </span>
          ) : (
            logs.map((log, i) => (
              <div key={i} style={{ color: i === logs.length - 1 ? '#a5b4fc' : '#94a3b8' }}>
                {log}
              </div>
            ))
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .pipeline-nodes-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};
