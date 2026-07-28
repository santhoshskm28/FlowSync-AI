import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { workflowSteps } from '../../data/workflowData';

const statusColors = {
  ACTIVE: { bg: 'bg-[#4F8CFF]/10', text: 'text-[#4F8CFF]', dot: 'bg-[#4F8CFF]' },
  PROCESSING: { bg: 'bg-[#F59E0B]/10', text: 'text-[#F59E0B]', dot: 'bg-[#F59E0B] animate-pulse' },
  COMPLETED: { bg: 'bg-[#10B981]/10', text: 'text-[#10B981]', dot: 'bg-[#10B981]' },
  VERIFIED: { bg: 'bg-[#7C3AED]/10', text: 'text-[#7C3AED]', dot: 'bg-[#7C3AED]' },
};

export default function WorkflowTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 relative" aria-labelledby="workflow-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill mb-6 text-xs font-semibold text-[#7C3AED] uppercase tracking-wider border border-[#7C3AED]/20">
            Execution Flow
          </div>
          <h2 id="workflow-heading" className="text-4xl sm:text-5xl font-black text-white mb-4">
            From trigger to outcome
            <span className="block mt-1" style={{ background: 'linear-gradient(135deg, #7C3AED, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              in milliseconds
            </span>
          </h2>
          <p className="text-[#64748B] max-w-xl mx-auto text-lg">
            Watch how FlowSync AI handles real-world automation from ingestion to verified execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Timeline steps */}
          <div className="lg:col-span-2 space-y-4">
            {workflowSteps.map((step, i) => {
              const sc = statusColors[step.status];
              const isActive = activeStep === i;
              return (
                <motion.button
                  key={step.step}
                  onClick={() => setActiveStep(i)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? 'glass-panel border-[#4F8CFF]/30 shadow-[0_0_30px_rgba(79,140,255,0.12)]'
                      : 'glass-card border-white/[0.06] hover:border-white/[0.12]'
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-black px-2.5 py-1 rounded-lg ${isActive ? 'bg-[#4F8CFF] text-white' : 'bg-white/[0.06] text-[#64748B]'}`}>
                      {step.step}
                    </span>
                    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold ${sc.bg} ${sc.text}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                      {step.status}
                    </div>
                  </div>
                  <h3 className={`font-bold text-sm ${isActive ? 'text-white' : 'text-[#CBD5E1]'}`}>{step.title}</h3>
                  {isActive && <p className="text-xs text-[#64748B] mt-1 leading-relaxed">{step.description}</p>}
                </motion.button>
              );
            })}
          </div>

          {/* Code preview panel */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel rounded-3xl overflow-hidden border border-white/[0.08]"
            >
              {/* Editor chrome */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-[#0A0F1E]/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${statusColors[workflowSteps[activeStep].status].bg} ${statusColors[workflowSteps[activeStep].status].text}`}
                  >
                    {workflowSteps[activeStep].badge}
                  </span>
                  <span className="text-xs text-[#64748B] font-mono">flowsync-execution.ts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${statusColors[workflowSteps[activeStep].status].dot}`} />
                  <span className="text-xs text-[#64748B]">{workflowSteps[activeStep].status}</span>
                </div>
              </div>

              {/* Code */}
              <div className="p-6 font-mono text-sm leading-7 overflow-x-auto min-h-[220px]">
                {workflowSteps[activeStep].codeSnippet.split('\n').map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-4"
                  >
                    <span className="text-[#334155] select-none w-4 text-right flex-shrink-0">{i + 1}</span>
                    <span className={
                      line.trim().startsWith('//') ? 'text-[#475569]' :
                      line.includes('"') ? 'text-[#22D3EE]' :
                      line.includes('await') || line.includes('const') || line.includes('async') ? 'text-[#4F8CFF]' :
                      'text-[#CBD5E1]'
                    }>
                      {line || '\u00A0'}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Step description */}
              <div className="px-6 pb-6">
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {workflowSteps[activeStep].description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
