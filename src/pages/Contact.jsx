import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Mail, MessageSquare, Phone, MapPin, Check } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name is required'),
  role: z.string().min(2, 'Your role is required'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  budget: z.string().min(1, 'Please select a budget range'),
});

const offices = [
  { city: 'San Francisco', address: '2 Harrison St, Suite 900, CA 94105', role: 'HQ & Engineering' },
  { city: 'Tokyo', address: '1-1 Marunouchi, Chiyoda City, Tokyo 100-0005', role: 'Asia-Pacific Hub' },
  { city: 'London', address: '21 Great Winchester St, London EC2N 2JA', role: 'European Operations' },
];

const contactOptions = [
  { icon: Mail, label: 'Email Us', value: 'team@flowsync.ai', color: '#4F8CFF' },
  { icon: MessageSquare, label: 'Live Chat', value: 'In-app chat for all plans', color: '#22D3EE' },
  { icon: Phone, label: 'Enterprise Sales', value: '+1 (415) 555-0192', color: '#7C3AED' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1200));
    console.log('Form data:', data);
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead
        title="Contact FlowSync AI — Talk to our Enterprise Team"
        description="Reach out to the FlowSync AI team. Schedule a demo, get pricing, or connect with our enterprise solutions team."
        canonical="https://flowsync.ai/contact"
      />
      <main className="pt-28 pb-24 relative">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill mb-6 text-xs font-semibold text-[#7C3AED] uppercase tracking-wider border border-[#7C3AED]/20">
              Contact
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6">
              Let's build the future
              <span className="block mt-1" style={{ background: 'linear-gradient(135deg, #7C3AED, #4F8CFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                together
              </span>
            </h1>
            <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
              Whether you're ready to deploy or exploring options — our team will get back to you within one business hour.
            </p>
          </motion.div>
        </div>

        {/* Contact options */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {contactOptions.map(({ icon: Icon, label, value, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-5 border border-white/[0.07] flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#64748B] mb-0.5">{label}</p>
                <p className="text-sm font-medium text-white">{value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 glass-panel rounded-3xl p-8 border border-white/[0.08]"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <div className="w-20 h-20 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center mb-6">
                  <Check className="w-10 h-10 text-[#10B981]" />
                </div>
                <h2 className="text-2xl font-black text-white mb-3">Message Received!</h2>
                <p className="text-[#64748B] max-w-sm">Our enterprise team will get back to you within one business hour. Check your inbox for a confirmation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Contact form">
                <h2 className="text-2xl font-black text-white mb-8">Send us a message</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {[
                    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Elena Rostova' },
                    { id: 'email', label: 'Work Email', type: 'email', placeholder: 'elena@company.com' },
                    { id: 'company', label: 'Company Name', type: 'text', placeholder: 'HyperScale Systems' },
                    { id: 'role', label: 'Your Role', type: 'text', placeholder: 'VP of Engineering' },
                  ].map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-xs font-semibold text-[#94A3B8] mb-2 uppercase tracking-wider">
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        {...register(field.id)}
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white placeholder-[#475569] text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[#4F8CFF]/30 focus:border-[#4F8CFF]/40 ${
                          errors[field.id] ? 'border-red-500/50' : 'border-white/[0.08]'
                        }`}
                      />
                      {errors[field.id] && (
                        <p className="text-xs text-red-400 mt-1">{errors[field.id].message}</p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <label htmlFor="budget" className="block text-xs font-semibold text-[#94A3B8] mb-2 uppercase tracking-wider">
                    Annual Budget Range
                  </label>
                  <select
                    id="budget"
                    {...register('budget')}
                    className={`w-full px-4 py-3 rounded-xl bg-[#0A0F1E] border text-white text-sm outline-none transition-all focus:ring-2 focus:ring-[#4F8CFF]/30 focus:border-[#4F8CFF]/40 ${
                      errors.budget ? 'border-red-500/50' : 'border-white/[0.08]'
                    }`}
                  >
                    <option value="" disabled selected>Select budget range</option>
                    <option value="under-5k">Under $5,000/yr</option>
                    <option value="5k-25k">$5,000 — $25,000/yr</option>
                    <option value="25k-100k">$25,000 — $100,000/yr</option>
                    <option value="100k-plus">$100,000+/yr</option>
                  </select>
                  {errors.budget && <p className="text-xs text-red-400 mt-1">{errors.budget.message}</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-xs font-semibold text-[#94A3B8] mb-2 uppercase tracking-wider">
                    Tell us about your use case
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="We're trying to automate our lead qualification pipeline across Salesforce, Slack, and our internal data warehouse..."
                    {...register('message')}
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white placeholder-[#475569] text-sm outline-none resize-none transition-all focus:ring-2 focus:ring-[#4F8CFF]/30 focus:border-[#4F8CFF]/40 ${
                      errors.message ? 'border-red-500/50' : 'border-white/[0.08]'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="shimmer-btn w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-base font-bold text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(79,140,255,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: 'linear-gradient(135deg, #4F8CFF, #7C3AED)' }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Offices + Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass-panel rounded-3xl p-6 border border-white/[0.08]">
              <h3 className="text-lg font-bold text-white mb-5">Global Offices</h3>
              <div className="space-y-4">
                {offices.map((office) => (
                  <div key={office.city} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-[#4F8CFF]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{office.city}</p>
                      <p className="text-xs text-[#64748B] leading-relaxed">{office.address}</p>
                      <p className="text-xs font-medium text-[#7C3AED] mt-0.5">{office.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-6 border border-white/[0.08]">
              <h3 className="text-base font-bold text-white mb-4">Response time guarantee</h3>
              <div className="space-y-3">
                {[
                  { plan: 'Enterprise', sla: '< 15 minutes', color: '#4F8CFF' },
                  { plan: 'Growth Pro', sla: '< 4 hours', color: '#7C3AED' },
                  { plan: 'Starter', sla: '< 24 hours', color: '#10B981' },
                ].map(({ plan, sla, color }) => (
                  <div key={plan} className="flex items-center justify-between py-2 border-b border-white/[0.04] last:border-0">
                    <span className="text-sm text-[#94A3B8]">{plan}</span>
                    <span className="text-sm font-bold" style={{ color }}>{sla}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
