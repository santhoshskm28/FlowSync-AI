import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import CTASection from '../components/home/CTASection';
import { Cpu, Zap, Workflow, BarChart2, Shield, Database, Play, Terminal, CheckCircle } from 'lucide-react';

const productFeatures = [
  {
    id: 'orchestration',
    icon: Cpu,
    title: 'Autonomous Agent Orchestration',
    desc: 'Build self-healing multi-agent pipelines that reason, plan, and act across any data source or API.',
    color: '#4F8CFF',
    details: [
      'Conditional branching with LLM reasoning',
      'Parallel execution & merge patterns',
      'Human-in-the-loop approval gates',
      'Auto-retry with exponential backoff',
      'Agent-to-agent delegation chains',
    ],
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Smart Automation Nodes',
    desc: '500+ pre-built integration nodes across CRM, databases, communication tools, and AI models.',
    color: '#22D3EE',
    details: [
      '500+ pre-built connector nodes',
      'Custom code nodes (Python & JavaScript)',
      'Webhook ingress with payload validation',
      'Scheduled and event-driven triggers',
      'Real-time streaming event support',
    ],
  },
  {
    id: 'analytics',
    icon: BarChart2,
    title: 'Real-time Execution Analytics',
    desc: 'Sub-millisecond distributed tracing, token cost tracking, and performance profiling for every run.',
    color: '#7C3AED',
    details: [
      'Distributed trace waterfall view',
      'Token cost breakdown per node',
      'Error clustering & root cause AI',
      'P50/P90/P99 latency histograms',
      'Long-term trend dashboards',
    ],
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Enterprise Security',
    desc: 'Zero-trust data isolation, AES-256 encryption, and full compliance for HIPAA, SOC2, and GDPR.',
    color: '#10B981',
    details: [
      'AES-256 payload encryption at rest',
      'TLS 1.3 in-transit encryption',
      'Customer-managed keys (BYOK)',
      'Private VPC deployment options',
      'Full SOC2 Type II audit trail',
    ],
  },
];

const agentLogs = [
  { time: '12:31:04.201', level: 'INFO', msg: 'Workflow "Lead Qualification Agent" triggered via webhook' },
  { time: '12:31:04.342', level: 'INFO', msg: 'Ingesting payload: lead_id=7821, source=hubspot_form' },
  { time: '12:31:04.601', level: 'AGENT', msg: 'Querying vector context: lead industry = "FinTech SaaS"' },
  { time: '12:31:05.190', level: 'AGENT', msg: 'Reasoning: High-intent signals detected. Score: 94/100' },
  { time: '12:31:05.412', level: 'ACTION', msg: 'Creating Salesforce opportunity: stage=Discovery, value=$42,000' },
  { time: '12:31:05.601', level: 'ACTION', msg: 'Posting Slack notification to #sales-enterprise-alerts' },
  { time: '12:31:05.780', level: 'SUCCESS', msg: 'Execution complete. Duration: 1579ms | Tokens: 2,840 | Cost: $0.0043' },
];

const levelColors = { INFO: '#64748B', AGENT: '#4F8CFF', ACTION: '#22D3EE', SUCCESS: '#10B981', ERROR: '#EF4444' };

export default function Product() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [shownLogs, setShownLogs] = useState([]);

  const runDemo = () => {
    setIsRunning(true);
    setShownLogs([]);
    agentLogs.forEach((log, i) => {
      setTimeout(() => {
        setShownLogs((prev) => [...prev, log]);
        if (i === agentLogs.length - 1) setIsRunning(false);
      }, i * 420);
    });
  };

  const activeF = productFeatures[activeFeature];

  return (
    <>
      <SEOHead
        title="FlowSync AI Product — AI Workflow Engine & Agent Platform"
        description="Explore FlowSync AI's autonomous agent orchestration, smart automation nodes, real-time telemetry, and enterprise security architecture."
        canonical="https://flowsync.ai/product"
      />
      <main className="pt-28 pb-0 relative">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill mb-6 text-xs font-semibold text-[#22D3EE] uppercase tracking-wider border border-[#22D3EE]/20">
              <Cpu className="w-3.5 h-3.5" />
              Product Platform
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
              The AI engine that
              <span className="block mt-1" style={{ background: 'linear-gradient(135deg, #22D3EE, #4F8CFF, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                runs your business
              </span>
            </h1>
            <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
              An intelligent orchestration layer that sits above every SaaS tool you use and connects them with autonomous AI reasoning.
            </p>
          </motion.div>
        </div>

        {/* Feature Explorer */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Tabs */}
            <div className="space-y-3">
              {productFeatures.map((f, i) => {
                const Icon = f.icon;
                const isActive = activeFeature === i;
                return (
                  <motion.button
                    key={f.id}
                    onClick={() => setActiveFeature(i)}
                    whileHover={{ x: 4 }}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                      isActive ? 'glass-panel border-[#4F8CFF]/30 shadow-[0_0_30px_rgba(79,140,255,0.12)]' : 'glass-card border-white/[0.06]'
                    }`}
                    aria-pressed={isActive}
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${f.color}15`, border: `1px solid ${f.color}30` }}>
                        <Icon className="w-4 h-4" style={{ color: f.color }} />
                      </div>
                      <span className={`text-sm font-bold ${isActive ? 'text-white' : 'text-[#CBD5E1]'}`}>{f.title}</span>
                    </div>
                    {isActive && <p className="text-xs text-[#64748B] mt-2 leading-relaxed">{f.desc}</p>}
                  </motion.button>
                );
              })}
            </div>

            {/* Feature detail */}
            <div className="lg:col-span-2">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="glass-panel rounded-3xl p-8 border border-white/[0.08] h-full"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${activeF.color}15`, border: `1px solid ${activeF.color}30` }}>
                    <activeF.icon className="w-6 h-6" style={{ color: activeF.color }} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{activeF.title}</h2>
                    <p className="text-sm text-[#64748B]">{activeF.desc}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {activeF.details.map((d, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: activeF.color }} />
                      <span className="text-sm text-[#CBD5E1]">{d}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Live Agent Demo Terminal */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-black text-white mb-4">Watch an AI agent execute in real-time</h2>
            <p className="text-[#64748B] text-lg">Click Run Demo to watch a live lead qualification agent process a new lead end-to-end.</p>
          </motion.div>

          <div className="glass-panel rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
            {/* Terminal bar */}
            <div className="flex items-center justify-between px-5 py-3 bg-[#0A0F1E]/70 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                <div className="flex items-center gap-2 ml-4">
                  <Terminal className="w-3.5 h-3.5 text-[#64748B]" />
                  <span className="text-xs text-[#64748B] font-mono">flowsync-agent — lead_qualification_v2</span>
                </div>
              </div>
              <button
                onClick={runDemo}
                disabled={isRunning}
                className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold text-white transition-all disabled:opacity-60"
                style={{ background: isRunning ? '#475569' : 'linear-gradient(135deg, #4F8CFF, #7C3AED)' }}
              >
                {isRunning ? (
                  <>
                    <div className="w-3 h-3 rounded-full border border-white/30 border-t-white animate-spin" />
                    Running...
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3" fill="currentColor" />
                    Run Demo
                  </>
                )}
              </button>
            </div>

            {/* Log output */}
            <div className="p-6 font-mono text-xs leading-7 min-h-[300px] space-y-1 overflow-y-auto max-h-80">
              {shownLogs.length === 0 && !isRunning && (
                <p className="text-[#475569]">$ Click "Run Demo" to execute a live lead qualification workflow...</p>
              )}
              {shownLogs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-[#334155] flex-shrink-0">{log.time}</span>
                  <span className="font-bold flex-shrink-0 w-16" style={{ color: levelColors[log.level] }}>[{log.level}]</span>
                  <span className="text-[#CBD5E1]">{log.msg}</span>
                </motion.div>
              ))}
              {isRunning && <div className="text-[#4F8CFF] animate-pulse">▊</div>}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
    </>
  );
}
