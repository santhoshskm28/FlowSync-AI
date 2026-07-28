import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import useCountUp from '../../hooks/useCountUp';

const metrics = [
  { num: 2400000000, suffix: 'B+', display: '2.4', label: 'Autonomous Executions', sublabel: 'per day across all customers', color: '#4F8CFF' },
  { num: 9999, suffix: '%', display: '99.99', label: 'Platform Uptime SLA', sublabel: 'across 6 global regions', color: '#10B981' },
  { num: 280, suffix: 'M+', display: '280', label: 'Cost Saved', sublabel: 'in AI model spend saved', color: '#7C3AED' },
  { num: 4200, suffix: '+', display: '4,200', label: 'Enterprise Teams', sublabel: 'scaling with FlowSync AI', color: '#22D3EE' },
];

function AnimatedMetric({ num, display, suffix, label, sublabel, color }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const count = useCountUp(num > 10000 ? parseInt(display.replace(/,/g, '')) : num, 2400, isInView);

  return (
    <div ref={ref} className="text-center px-8 py-8 glass-card rounded-3xl relative overflow-hidden group">
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        style={{ background: `radial-gradient(ellipse at center, ${color}10 0%, transparent 70%)` }}
      />

      <div
        className="text-5xl sm:text-6xl font-black mb-2 tabular-nums"
        style={{
          background: `linear-gradient(135deg, #FFFFFF, ${color})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {isInView ? (
          num > 9999
            ? `${display.includes('.') ? display : count.toLocaleString()}${suffix}`
            : `${count.toLocaleString()}${suffix}`
        ) : '0'}
      </div>

      <p className="text-sm font-semibold text-white mb-1">{label}</p>
      <p className="text-xs text-[#64748B]">{sublabel}</p>
    </div>
  );
}

export default function MetricsSection() {
  return (
    <section className="py-24 relative" aria-labelledby="metrics-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="metrics-heading" className="text-4xl sm:text-5xl font-black text-white mb-4">
            Numbers that speak
          </h2>
          <p className="text-[#64748B] text-lg max-w-xl mx-auto">
            Real performance metrics from production deployments across thousands of enterprise teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <AnimatedMetric {...m} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
