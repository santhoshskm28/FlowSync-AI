import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Star } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E1040] to-[#0F172A]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-[#4F8CFF]/20 via-[#7C3AED]/10 to-transparent rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 text-center py-24 px-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center mb-8"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-[#F59E0B]/20">
                <Star className="w-4 h-4 text-[#F59E0B]" fill="currentColor" />
                <span className="text-sm font-semibold text-[#F59E0B]">Join 4,200+ elite engineering teams</span>
              </div>
            </motion.div>

            <h2
              id="cta-heading"
              className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-6"
            >
              Ready to automate at
              <span className="block" style={{
                background: 'linear-gradient(135deg, #4F8CFF, #7C3AED, #22D3EE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                machine speed?
              </span>
            </h2>

            <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto mb-12 leading-relaxed">
              Deploy your first autonomous AI workflow in under 15 minutes. No engineers needed. No lock-in. 100% production-ready from day one.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/pricing"
                className="shimmer-btn group relative flex items-center gap-2.5 px-10 py-4 rounded-2xl text-base font-bold text-white shadow-[0_0_40px_rgba(79,140,255,0.35)] hover:shadow-[0_0_60px_rgba(79,140,255,0.5)] transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #4F8CFF, #7C3AED)' }}
              >
                <Zap className="w-5 h-5" />
                Start Building — It's Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-semibold text-white glass-card border border-white/[0.12] hover:border-[#4F8CFF]/30 transition-all duration-300"
              >
                Talk to Enterprise Sales
              </Link>
            </div>

            <p className="mt-6 text-sm text-[#475569]">
              No credit card required · 14-day free trial · Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
