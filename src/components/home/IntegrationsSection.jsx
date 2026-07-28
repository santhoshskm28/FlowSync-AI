import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { integrations, integrationCategories } from '../../data/integrationsData';
import { GitBranch, MessageSquare, Sparkles, Bot, Cpu, Database, CheckSquare, FileText, TrendingUp, Users, HardDrive, BarChart, Activity, CreditCard, Layers, Search } from 'lucide-react';

const iconMap = { GitBranch, MessageSquare, Sparkles, Bot, Cpu, Database, CheckSquare, FileText, TrendingUp, Users, HardDrive, BarChart, Activity, CreditCard, Layers, Search };

export default function IntegrationsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? integrations
    : integrations.filter((i) => i.category === activeCategory);

  return (
    <section className="py-24 relative" aria-labelledby="integrations-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill mb-6 text-xs font-semibold text-[#22D3EE] uppercase tracking-wider border border-[#22D3EE]/20">
            Ecosystem
          </div>
          <h2 id="integrations-heading" className="text-4xl sm:text-5xl font-black text-white mb-4">
            Connect everything you use
          </h2>
          <p className="text-[#64748B] max-w-xl mx-auto text-lg">
            500+ native integrations. CRMs, databases, AI models, cloud storage, and developer tools — all in one mesh.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {integrationCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#4F8CFF] text-white shadow-[0_0_20px_rgba(79,140,255,0.3)]'
                  : 'glass-card border border-white/[0.08] text-[#64748B] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Integration Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((integration) => {
              const Icon = iconMap[integration.icon] || Sparkles;
              return (
                <motion.div
                  key={integration.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group glass-card rounded-2xl p-4 border border-white/[0.06] hover:border-[#4F8CFF]/30 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4F8CFF]/15 to-[#7C3AED]/15 flex items-center justify-center mb-3 group-hover:from-[#4F8CFF]/25 group-hover:to-[#7C3AED]/25 transition-all duration-300">
                    <Icon className="w-5 h-5 text-[#4F8CFF] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-[#4F8CFF] transition-colors">{integration.name}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">{integration.desc}</p>
                  <div className="mt-2 text-[10px] font-medium text-[#7C3AED]">{integration.category}</div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-[#64748B] text-sm">
            + 484 more integrations available.{' '}
            <a href="#" className="text-[#4F8CFF] hover:underline underline-offset-2">
              Browse the full ecosystem →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
