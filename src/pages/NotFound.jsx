import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/common/SEOHead';
import { Home, Zap } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="404 — Page Not Found | FlowSync AI"
        description="The page you were looking for doesn't exist."
        canonical="https://flowsync.ai/404"
      />
      <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#4F8CFF]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-[#7C3AED]/10 blur-3xl rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <div
            className="text-[180px] sm:text-[240px] font-black leading-none mb-4 select-none"
            style={{
              background: 'linear-gradient(135deg, rgba(79,140,255,0.15), rgba(124,58,237,0.15))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            404
          </div>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4F8CFF] to-[#7C3AED] flex items-center justify-center shadow-[0_0_40px_rgba(79,140,255,0.4)]">
              <Zap className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">This page doesn't exist.</h1>
          <p className="text-[#64748B] text-lg max-w-md mx-auto mb-10">
            Maybe the AI agents rerouted it. Either way, let's get you back to a workflow that runs.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-white shadow-[0_0_30px_rgba(79,140,255,0.3)] hover:shadow-[0_0_50px_rgba(79,140,255,0.5)] transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #4F8CFF, #7C3AED)' }}
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>
      </main>
    </>
  );
}
