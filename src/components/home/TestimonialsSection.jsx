import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/testimonialsData';

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill mb-6 text-xs font-semibold text-[#F59E0B] uppercase tracking-wider border border-[#F59E0B]/20">
            <Star className="w-3.5 h-3.5" fill="currentColor" />
            Wall of Love
          </div>
          <h2 id="testimonials-heading" className="text-4xl sm:text-5xl font-black text-white mb-4">
            Loved by engineering teams
          </h2>
          <p className="text-[#64748B] max-w-xl mx-auto text-lg">
            Hear from the engineers, CTOs, and product leaders who run their businesses on FlowSync AI.
          </p>
        </motion.div>

        {/* Main featured testimonial */}
        <div className="relative max-w-3xl mx-auto mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel rounded-3xl p-8 border border-white/[0.08] relative overflow-hidden"
            >
              {/* Quote glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#F59E0B]/10 blur-2xl rounded-full" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#F59E0B]" fill="currentColor" />
                ))}
              </div>

              <blockquote className="text-xl text-white leading-relaxed font-medium mb-8 relative z-10">
                "{testimonials[active].quote}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[active].avatar}
                    alt={testimonials[active].name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#4F8CFF]/30"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-bold text-white">{testimonials[active].name}</p>
                    <p className="text-sm text-[#64748B]">{testimonials[active].role}, {testimonials[active].company}</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20">
                  <span className="text-sm font-bold text-[#10B981]">↑ {testimonials[active].metrics}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass-card border border-white/[0.1] flex items-center justify-center text-[#64748B] hover:text-white hover:border-[#4F8CFF]/30 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-[#4F8CFF]' : 'w-1.5 bg-white/20'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass-card border border-white/[0.1] flex items-center justify-center text-[#64748B] hover:text-white hover:border-[#4F8CFF]/30 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Compact cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`text-left p-4 rounded-2xl transition-all duration-300 border ${
                i === active
                  ? 'border-[#4F8CFF]/30 glass-panel shadow-[0_0_20px_rgba(79,140,255,0.12)]'
                  : 'glass-card border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <img src={t.avatar} alt={t.name} className="w-8 h-8 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="text-xs font-bold text-white">{t.name}</p>
                  <p className="text-[10px] text-[#64748B]">{t.company}</p>
                </div>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-3">"{t.quote}"</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
