import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, ChevronDown, Sparkles, TrendingUp, Zap, Shield } from 'lucide-react';

const floatingBadges = [
  { icon: Zap, label: '12ms Latency', color: '#4F8CFF', delay: 0 },
  { icon: TrendingUp, label: '4.8x ROI Boost', color: '#10B981', delay: 0.4 },
  { icon: Shield, label: 'SOC2 Certified', color: '#7C3AED', delay: 0.8 },
  { icon: Sparkles, label: 'AI-Native', color: '#22D3EE', delay: 1.2 },
];

const liveMetrics = [
  { value: '2.4B+', label: 'Executions/Day' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '$280M+', label: 'Cost Saved' },
  { value: '4,200+', label: 'Enterprise Teams' },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section
      id="main-content"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Radial glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[600px] bg-gradient-radial from-[#4F8CFF]/10 via-[#7C3AED]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="show">
          {/* Top Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-[#4F8CFF]/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4F8CFF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4F8CFF]"></span>
              </span>
              <span className="text-xs font-semibold text-[#4F8CFF] uppercase tracking-wider">FlowSync 2.0 — Now Live</span>
              <ArrowRight className="w-3 h-3 text-[#4F8CFF]" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            id="hero-headline"
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-black leading-[1.02] tracking-tight mb-8"
          >
            <span className="text-white block">Automate Every</span>
            <span className="block mt-1" style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #4F8CFF 40%, #7C3AED 70%, #22D3EE 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Workflow.
            </span>
            <span className="text-white block mt-1">Scale Every Team.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed mb-12"
          >
            AI-powered automation built for ambitious companies. Deploy autonomous agents, eliminate manual toil, and 10x your engineering velocity — in&nbsp;minutes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/pricing"
              className="shimmer-btn group relative flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white shadow-[0_0_30px_rgba(79,140,255,0.3)] hover:shadow-[0_0_50px_rgba(79,140,255,0.5)] transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #4F8CFF, #7C3AED)' }}
            >
              <Zap className="w-4 h-4" />
              Start Building Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/product"
              className="flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-semibold text-white glass-card border border-white/[0.1] hover:border-[#4F8CFF]/30 transition-all duration-300"
            >
              <Play className="w-4 h-4 text-[#4F8CFF]" fill="currentColor" />
              Watch Demo
            </Link>
          </motion.div>

          {/* Floating Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {floatingBadges.map(({ icon: Icon, label, color, delay }) => (
              <motion.div
                key={label}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card border border-white/[0.08]"
              >
                <Icon className="w-4 h-4" style={{ color }} />
                <span className="text-sm font-medium text-white">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glow behind card */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#4F8CFF]/20 to-[#7C3AED]/10 blur-3xl rounded-3xl scale-90 translate-y-4" />

          <div className="relative glass-panel rounded-3xl border border-white/[0.1] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
            {/* Dashboard Chrome Bar */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-white/[0.06] bg-[#0F172A]/50">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              <div className="flex-1 mx-4">
                <div className="bg-white/[0.05] rounded-md px-3 py-1 text-xs text-[#64748B] font-mono text-center">
                  app.flowsync.ai/dashboard
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-xs text-[#10B981]">Live</span>
              </div>
            </div>

            {/* Dashboard Interior */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[320px]">
              {/* Left column - Workflow nodes */}
              <div className="md:col-span-2 space-y-3">
                <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-3">Active Workflows</p>
                {[
                  { name: 'Lead Qualification Agent', status: 'running', runs: '2,847', badge: 'primary' },
                  { name: 'Support Ticket Router', status: 'running', runs: '18,392', badge: 'success' },
                  { name: 'Invoice Processing AI', status: 'idle', runs: '4,211', badge: 'secondary' },
                ].map((wf) => (
                  <div key={wf.name} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-[#4F8CFF]/20 transition-colors">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${wf.status === 'running' ? 'bg-[#10B981] animate-pulse' : 'bg-[#64748B]'}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{wf.name}</p>
                      <p className="text-xs text-[#64748B]">{wf.runs} executions today</p>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${
                      wf.badge === 'primary' ? 'bg-[#4F8CFF]/15 text-[#4F8CFF]' :
                      wf.badge === 'success' ? 'bg-[#10B981]/15 text-[#10B981]' :
                      'bg-[#7C3AED]/15 text-[#7C3AED]'
                    }`}>
                      {wf.status === 'running' ? 'LIVE' : 'IDLE'}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right column - Live metrics */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-3">Live Metrics</p>
                {liveMetrics.map(({ value, label }) => (
                  <div key={label} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-center">
                    <p className="text-xl font-black text-white mb-0.5">{value}</p>
                    <p className="text-xs text-[#64748B]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex flex-col items-center gap-2 mt-12 text-[#64748B]"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
