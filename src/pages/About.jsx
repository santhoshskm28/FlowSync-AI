import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import CTASection from '../components/home/CTASection';
import { teamMembers, timelineMilestones } from '../data/teamData';
import { Linkedin, Twitter, Shield, Zap, Heart, Globe } from 'lucide-react';

const values = [
  { icon: Zap, title: 'Speed is a Feature', desc: 'We optimize for execution velocity at every layer — infrastructure, product, and team.', color: '#4F8CFF' },
  { icon: Shield, title: 'Security Without Compromise', desc: 'Every architectural decision prioritizes data isolation and enterprise-grade security.', color: '#10B981' },
  { icon: Heart, title: 'Craft Obsession', desc: 'We sweat the details others ignore. Every pixel, interaction, and API surface is intentional.', color: '#F59E0B' },
  { icon: Globe, title: 'Open by Default', desc: 'We build publicly, share our learnings, and contribute back to the open-source community.', color: '#7C3AED' },
];

export default function About() {
  const [activeTimeline, setActiveTimeline] = useState(null);

  return (
    <>
      <SEOHead
        title="About FlowSync AI — Our Story, Mission & Team"
        description="Meet the team behind FlowSync AI — MIT and DeepMind alumni on a mission to eliminate manual toil and build the future of autonomous business operations."
        canonical="https://flowsync.ai/about"
      />
      <main className="pt-28 pb-0 relative">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill mb-8 text-xs font-semibold text-[#22D3EE] uppercase tracking-wider border border-[#22D3EE]/20">
              Our Story
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
              Built by engineers,
              <span className="block mt-2" style={{ background: 'linear-gradient(135deg, #22D3EE, #4F8CFF, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                for engineers.
              </span>
            </h1>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
              We saw brilliant engineers wasting hours every day gluing SaaS tools together with fragile integrations. FlowSync AI exists to give that time back — by making intelligent automation as easy as writing a thought.
            </p>
          </motion.div>
        </section>

        {/* Mission + Vision */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 mb-28">
          {[
            { label: 'Our Mission', text: 'Eliminate manual digital toil for every ambitious engineering and operations team on earth by making autonomous AI agents as accessible as a Slack message.', color: '#4F8CFF' },
            { label: 'Our Vision', text: 'A world where every SaaS tool, data stream, and business process orchestrates itself — guided by AI agents that reason, adapt, and improve continuously without human micromanagement.', color: '#7C3AED' },
          ].map(({ label, text, color }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative glass-card rounded-3xl p-10 border border-white/[0.07] overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"
                style={{ background: `radial-gradient(circle, ${color}, transparent)` }} />
              <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color }}>
                {label}
              </div>
              <p className="text-xl text-white leading-relaxed font-medium">{text}</p>
            </motion.div>
          ))}
        </section>

        {/* Company Values */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white text-center mb-12"
          >
            What we believe
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 border border-white/[0.07] hover:border-opacity-50 transition-all"
                style={{ '--hover-color': color }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white text-center mb-16"
          >
            Our journey
          </motion.h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#4F8CFF]/30 to-transparent" />

            <div className="space-y-12">
              {timelineMilestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#4F8CFF] bg-[#050816] z-10" />

                  <div className={`pl-16 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="inline-block text-xs font-black text-[#4F8CFF] bg-[#4F8CFF]/10 px-3 py-1 rounded-full mb-2">
                      {m.year}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{m.title}</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">{m.desc}</p>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white text-center mb-12"
          >
            Leadership team
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-3xl p-6 border border-white/[0.07] text-center hover:border-[#4F8CFF]/25 transition-all duration-300 group"
              >
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4F8CFF] to-[#7C3AED] opacity-50 blur-sm group-hover:opacity-70 transition-opacity" />
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="relative w-20 h-20 rounded-full object-cover border-2 border-[#4F8CFF]/30"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-base font-bold text-white mb-0.5">{member.name}</h3>
                <p className="text-xs font-medium text-[#4F8CFF] mb-2">{member.role}</p>
                <p className="text-xs text-[#64748B] leading-relaxed mb-4">{member.bio}</p>
                <div className="flex justify-center gap-2">
                  <a href={member.linkedin} aria-label={`${member.name} LinkedIn`} className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-[#64748B] hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={member.twitter} aria-label={`${member.name} Twitter`} className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-[#64748B] hover:text-white transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
    </>
  );
}
