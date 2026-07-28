import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqData } from '../../data/faqData';

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 relative" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="faq-heading" className="text-4xl sm:text-5xl font-black text-white mb-4">
            Frequently asked
          </h2>
          <p className="text-[#64748B] text-lg">
            Everything you need to know before making FlowSync AI the backbone of your automation stack.
          </p>
        </motion.div>

        <div className="space-y-3" role="list">
          {faqData.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              role="listitem"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className={`w-full flex items-center justify-between gap-4 p-5 rounded-2xl text-left transition-all duration-300 ${
                  open === i
                    ? 'glass-panel border border-[#4F8CFF]/25 shadow-[0_0_25px_rgba(79,140,255,0.08)]'
                    : 'glass-card border border-white/[0.06] hover:border-white/[0.12]'
                }`}
                aria-expanded={open === i}
              >
                <div className="flex items-start gap-3">
                  <span className={`flex-shrink-0 mt-0.5 text-xs font-bold px-2 py-0.5 rounded-md ${
                    open === i ? 'bg-[#4F8CFF]/15 text-[#4F8CFF]' : 'bg-white/[0.06] text-[#64748B]'
                  }`}>{faq.category}</span>
                  <span className={`text-sm font-semibold ${open === i ? 'text-white' : 'text-[#CBD5E1]'}`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                  open === i ? 'bg-[#4F8CFF]/20 text-[#4F8CFF]' : 'bg-white/[0.05] text-[#64748B]'
                }`}>
                  {open === i ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                    role="region"
                  >
                    <div className="px-5 py-4 text-sm text-[#94A3B8] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
