import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import CTASection from '../components/home/CTASection';
import { Check, Zap } from 'lucide-react';
import { pricingPlans, featureComparison } from '../data/pricingData';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  const groupedComparison = featureComparison.reduce((acc, row) => {
    if (!acc[row.category]) acc[row.category] = [];
    acc[row.category].push(row);
    return acc;
  }, {});

  return (
    <>
      <SEOHead
        title="Pricing — FlowSync AI | Start Free, Scale Forever"
        description="Transparent pricing for every stage of growth. Start free with our Starter plan, scale with Growth Pro, or deploy a custom Enterprise mesh."
        canonical="https://flowsync.ai/pricing"
      />
      <main className="pt-28 pb-0 relative">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill mb-6 text-xs font-semibold text-[#4F8CFF] uppercase tracking-wider border border-[#4F8CFF]/20">
              <Zap className="w-3.5 h-3.5" />
              Pricing
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6">
              Simple, transparent
              <span className="block mt-1" style={{ background: 'linear-gradient(135deg, #4F8CFF, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                pricing
              </span>
            </h1>
            <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10">
              Start free. Scale without friction. No hidden fees, no vendor lock-in.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-3">
              <span className={`text-sm font-medium ${!annual ? 'text-white' : 'text-[#64748B]'}`}>Monthly</span>
              <button
                onClick={() => setAnnual(!annual)}
                className="relative w-14 h-7 rounded-full transition-colors duration-300"
                style={{ background: annual ? 'linear-gradient(135deg, #4F8CFF, #7C3AED)' : 'rgba(255,255,255,0.1)' }}
                aria-pressed={annual}
                aria-label="Toggle annual billing"
              >
                <span
                  className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300"
                  style={{ transform: annual ? 'translateX(28px)' : 'translateX(0)' }}
                />
              </button>
              <span className={`text-sm font-medium ${annual ? 'text-white' : 'text-[#64748B]'}`}>Annual</span>
              {annual && (
                <span className="text-xs font-bold text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/20 px-2.5 py-1 rounded-full">
                  Save 20%
                </span>
              )}
            </div>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'border border-[#4F8CFF]/40 shadow-[0_0_60px_rgba(79,140,255,0.2)]'
                  : 'glass-card border border-white/[0.07]'
              }`}
              style={plan.popular ? {
                background: 'linear-gradient(145deg, rgba(79,140,255,0.08), rgba(124,58,237,0.06))',
                backdropFilter: 'blur(20px)',
              } : {}}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white shadow-[0_0_20px_rgba(79,140,255,0.4)]"
                  style={{ background: 'linear-gradient(135deg, #4F8CFF, #7C3AED)' }}>
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-3">{plan.name}</div>
                <div className="flex items-end gap-1.5 mb-3">
                  <span className="text-5xl font-black text-white">${annual ? plan.annualPrice : plan.monthlyPrice}</span>
                  <span className="text-[#64748B] mb-2">/mo</span>
                </div>
                {annual && <p className="text-xs text-[#10B981]">Billed annually (${plan.annualPrice * 12}/yr)</p>}
                <p className="text-sm text-[#64748B] mt-2 leading-relaxed">{plan.tagline}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#4F8CFF] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#CBD5E1]">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`block w-full text-center py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'text-white shadow-[0_0_25px_rgba(79,140,255,0.3)] hover:shadow-[0_0_40px_rgba(79,140,255,0.5)]'
                    : 'glass-card border border-white/[0.1] text-white hover:border-[#4F8CFF]/30'
                }`}
                style={plan.popular ? { background: 'linear-gradient(135deg, #4F8CFF, #7C3AED)' } : {}}
              >
                {plan.ctaText}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <h2 className="text-3xl font-black text-white text-center mb-12">Full Feature Comparison</h2>
          <div className="glass-panel rounded-3xl overflow-hidden border border-white/[0.08]">
            {/* Table header */}
            <div className="grid grid-cols-4 gap-0 border-b border-white/[0.08]">
              <div className="p-4" />
              {['Starter', 'Growth Pro', 'Enterprise'].map((p) => (
                <div key={p} className="p-4 text-center">
                  <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">{p}</span>
                </div>
              ))}
            </div>

            {Object.entries(groupedComparison).map(([category, rows]) => (
              <div key={category}>
                <div className="px-4 py-2 bg-white/[0.02] border-b border-white/[0.05]">
                  <span className="text-xs font-bold text-[#4F8CFF] uppercase tracking-wider">{category}</span>
                </div>
                {rows.map((row, i) => (
                  <div key={i} className="grid grid-cols-4 border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                    <div className="p-4 text-sm text-[#CBD5E1]">{row.feature}</div>
                    <div className="p-4 text-sm text-center text-[#94A3B8]">{row.starter}</div>
                    <div className="p-4 text-sm text-center text-[#94A3B8]">{row.growth}</div>
                    <div className="p-4 text-sm text-center text-[#94A3B8]">{row.enterprise}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <CTASection />
      </main>
    </>
  );
}
