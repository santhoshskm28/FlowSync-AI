import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  'Linear', 'Vercel', 'Stripe', 'Notion', 'Raycast', 'OpenAI', 'Framer',
  'Figma', 'GitHub', 'Slack', 'HubSpot', 'Snowflake', 'Datadog', 'Anthropic',
];

export default function LogoCloud() {
  return (
    <section className="py-20 relative overflow-hidden" aria-label="Trusted by leading companies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <p className="text-sm text-[#64748B] uppercase tracking-widest font-semibold">
          Trusted by ambitious teams at world-class companies
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#050816] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#050816] to-transparent" />

        <div className="flex overflow-hidden gap-0">
          {/* Track 1 */}
          <motion.div
            className="flex gap-10 items-center flex-shrink-0"
            animate={{ x: [0, '-50%'] }}
            transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`logo-a-${i}`}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl glass-card border border-white/[0.06] hover:border-white/[0.12] transition-all duration-200 flex-shrink-0 group"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#4F8CFF] to-[#7C3AED] group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-[#64748B] group-hover:text-white transition-colors whitespace-nowrap">
                  {logo}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
