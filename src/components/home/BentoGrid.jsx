import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Workflow, ShieldCheck, Check } from 'lucide-react';

const iconMap = { Cpu, Zap, Workflow, ShieldCheck };

const bentoFeatures = [
  {
    id: 'agentic-ai',
    title: 'Autonomous AI Orchestration',
    subtitle: 'Agents that reason, plan & execute across systems',
    description: 'Deploy self-healing AI agents that analyze real-time context, branch logic conditionally, and resolve complex edge cases without human intervention.',
    badge: 'CORE ENGINE',
    col: 'col-span-12 lg:col-span-8',
    gradient: 'from-[#4F8CFF]/20 via-[#7C3AED]/10',
    icon: 'Cpu',
    badgeColor: '#4F8CFF',
    metrics: { val: '99.94%', label: 'Autonomous Accuracy' },
    codeLines: [
      'const agent = FlowSync.createAgent({',
      '  model: "claude-3-5-sonnet",',
      '  memory: vectorVault,',
      '  tools: [jira, slack, github],',
      '});',
      '',
      'await agent.execute(trigger.payload);',
    ],
  },
  {
    id: 'live-telemetry',
    title: 'Sub-Millisecond Telemetry',
    subtitle: 'Real-time observability at scale',
    description: 'Instant event streaming with distributed tracing and dynamic token usage optimization.',
    badge: 'REAL-TIME',
    col: 'col-span-12 lg:col-span-4',
    gradient: 'from-[#22D3EE]/20 via-[#4F8CFF]/10',
    icon: 'Zap',
    badgeColor: '#22D3EE',
    metrics: { val: '<12ms', label: 'End-to-End Latency' },
    bars: [78, 92, 54, 88, 65, 98, 72, 84, 91, 67, 95, 80],
  },
  {
    id: 'visual-builder',
    title: 'Infinite Canvas Node Builder',
    subtitle: 'Drag, drop & connect complex agent graphs',
    description: 'Design multi-stage pipelines visually with modular nodes, parallel execution, and instant sandboxing.',
    badge: 'STUDIO',
    col: 'col-span-12 lg:col-span-4',
    gradient: 'from-[#7C3AED]/20 via-[#22D3EE]/10',
    icon: 'Workflow',
    badgeColor: '#7C3AED',
    metrics: { val: '500+', label: 'Pre-built Integrations' },
    nodes: [
      { x: 20, y: 45, label: 'Trigger', color: '#4F8CFF' },
      { x: 50, y: 25, label: 'AI Agent', color: '#7C3AED' },
      { x: 50, y: 65, label: 'Logic', color: '#22D3EE' },
      { x: 80, y: 45, label: 'Action', color: '#10B981' },
    ],
  },
  {
    id: 'enterprise-security',
    title: 'Zero-Trust Data Isolation',
    subtitle: 'SOC2 Type II, HIPAA & GDPR Compliant',
    description: 'AES-256 encrypted payloads, customer-managed keys (KMS), and local vector vault isolation ensure enterprise data compliance.',
    badge: 'SECURITY',
    col: 'col-span-12 lg:col-span-8',
    gradient: 'from-[#4F8CFF]/15 via-[#22D3EE]/15',
    icon: 'ShieldCheck',
    badgeColor: '#10B981',
    metrics: { val: '100%', label: 'Private VPC Sandboxing' },
    securityBadges: ['AES-256', 'HIPAA', 'SOC2 II', 'GDPR', 'BYOK KMS', 'TLS 1.3'],
  },
];

function BentoCard({ feature }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[feature.icon] || Cpu;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      className={`${feature.col} relative rounded-3xl overflow-hidden glass-card border border-white/[0.07] cursor-pointer group`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
    >
      {/* Spotlight */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(79,140,255,0.08), transparent 60%)`,
          }}
        />
      )}

      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} to-transparent opacity-60`} />

      <div className="relative z-20 p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div
              className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full mb-3"
              style={{ background: `${feature.badgeColor}20`, color: feature.badgeColor }}
            >
              {feature.badge}
            </div>
            <h3 className="text-lg font-bold text-white leading-snug">{feature.title}</h3>
            <p className="text-xs text-[#64748B] mt-1">{feature.subtitle}</p>
          </div>
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${feature.badgeColor}15`, border: `1px solid ${feature.badgeColor}30` }}
          >
            <Icon className="w-5 h-5" style={{ color: feature.badgeColor }} />
          </div>
        </div>

        <p className="text-sm text-[#94A3B8] leading-relaxed mb-4 flex-1">{feature.description}</p>

        {/* Feature-specific previews */}
        {feature.codeLines && (
          <div className="bg-[#0A0F1E] rounded-xl p-4 font-mono text-xs overflow-hidden">
            {feature.codeLines.map((line, i) => (
              <div key={i} className="leading-6">
                <span className="text-[#64748B] select-none mr-3">{i + 1}</span>
                <span className={line.startsWith('const') || line.startsWith('await') ? 'text-[#4F8CFF]' : line.startsWith('"') ? 'text-[#22D3EE]' : 'text-[#CBD5E1]'}>
                  {line || '\u00A0'}
                </span>
              </div>
            ))}
          </div>
        )}

        {feature.bars && (
          <div className="flex items-end gap-1 h-20 mt-auto">
            {feature.bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{ height: `${h}%`, background: `linear-gradient(to top, #4F8CFF, #22D3EE)`, opacity: 0.7 }}
                initial={{ scaleY: 0, originY: 1 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        )}

        {feature.nodes && (
          <div className="relative h-28 mt-2">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="20" y1="45" x2="50" y2="25" stroke="rgba(79,140,255,0.4)" strokeWidth="0.8" strokeDasharray="3,2" />
              <line x1="20" y1="45" x2="50" y2="65" stroke="rgba(124,58,237,0.4)" strokeWidth="0.8" strokeDasharray="3,2" />
              <line x1="50" y1="25" x2="80" y2="45" stroke="rgba(34,211,238,0.4)" strokeWidth="0.8" strokeDasharray="3,2" />
              <line x1="50" y1="65" x2="80" y2="45" stroke="rgba(16,185,129,0.4)" strokeWidth="0.8" strokeDasharray="3,2" />
            </svg>
            {feature.nodes.map((n) => (
              <div
                key={n.label}
                className="absolute flex items-center justify-center text-[9px] font-bold text-white rounded-lg px-2 py-1"
                style={{ left: `${n.x}%`, top: `${n.y}%`, transform: 'translate(-50%,-50%)', background: `${n.color}30`, border: `1px solid ${n.color}60` }}
              >
                {n.label}
              </div>
            ))}
          </div>
        )}

        {feature.securityBadges && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {feature.securityBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#10B981]/10 border border-[#10B981]/20">
                <Check className="w-3 h-3 text-[#10B981]" />
                <span className="text-xs text-[#10B981] font-semibold">{badge}</span>
              </div>
            ))}
          </div>
        )}

        {/* Metric badge */}
        <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center gap-2">
          <span
            className="text-xl font-black"
            style={{ color: feature.badgeColor }}
          >
            {feature.metrics.val}
          </span>
          <span className="text-xs text-[#64748B]">{feature.metrics.label}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function BentoGrid() {
  return (
    <section className="py-24 relative" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill mb-6 text-xs font-semibold text-[#4F8CFF] uppercase tracking-wider border border-[#4F8CFF]/20">
            <Cpu className="w-3.5 h-3.5" />
            Platform Features
          </div>
          <h2 id="features-heading" className="text-4xl sm:text-5xl font-black text-white mb-4">
            Everything you need to
            <span className="block mt-1" style={{ background: 'linear-gradient(135deg, #4F8CFF, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              move at machine speed
            </span>
          </h2>
          <p className="text-[#64748B] max-w-xl mx-auto text-lg">
            Purpose-built capabilities that make FlowSync AI the most powerful autonomous workflow engine on the market.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-4">
          {bentoFeatures.map((f) => <BentoCard key={f.id} feature={f} />)}
        </div>
      </div>
    </section>
  );
}
