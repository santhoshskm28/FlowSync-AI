import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Menu, X, ChevronDown, Terminal, Command } from 'lucide-react';
import { useCommandBar } from '../../context/CommandBarContext';

const navLinks = [
  {
    label: 'Product',
    href: '/product',
    mega: true,
    items: [
      { label: 'AI Workflow Engine', desc: 'Autonomous agent orchestration', icon: '⚡' },
      { label: 'Smart Node Builder', desc: 'Visual drag-and-drop canvas', icon: '🎨' },
      { label: 'Real-time Telemetry', desc: 'Live execution analytics', icon: '📊' },
      { label: 'Knowledge Base RAG', desc: 'Vector-powered memory layer', icon: '🧠' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const { toggleOpen } = useCommandBar();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMega(null);
  }, [location]);

  return (
    <>
      {/* Skip to content accessibility link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-[#4F8CFF] focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#050816]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#4F8CFF] to-[#7C3AED] opacity-80 blur-sm group-hover:blur-md transition-all duration-300" />
              <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F8CFF] to-[#7C3AED] flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              FlowSync <span className="text-[#4F8CFF]">AI</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.mega ? (
                  <button
                    onClick={() => setActiveMega(activeMega === link.label ? null : link.label)}
                    onBlur={() => setTimeout(() => setActiveMega(null), 150)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeMega === link.label
                        ? 'text-white bg-white/[0.06]'
                        : 'text-[#CBD5E1] hover:text-white hover:bg-white/[0.04]'
                    }`}
                    aria-expanded={activeMega === link.label}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeMega === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-white bg-white/[0.06]'
                          : 'text-[#CBD5E1] hover:text-white hover:bg-white/[0.04]'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )}

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {link.mega && activeMega === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-0 mt-2 w-72 glass-panel rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    >
                      {link.items.map((item) => (
                        <Link
                          key={item.label}
                          to={link.href}
                          className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.05] transition-colors duration-150 group"
                        >
                          <span className="text-xl mt-0.5 flex-shrink-0">{item.icon}</span>
                          <div>
                            <p className="text-sm font-medium text-white group-hover:text-[#4F8CFF] transition-colors">{item.label}</p>
                            <p className="text-xs text-[#64748B] mt-0.5">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-2">
            {/* Command Palette trigger */}
            <button
              onClick={toggleOpen}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[#64748B] hover:text-white hover:border-white/20 transition-all duration-200 text-sm"
              aria-label="Open command palette (Cmd+K)"
            >
              <Command className="w-3.5 h-3.5" />
              <span className="text-xs font-mono">⌘K</span>
            </button>

            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-medium text-[#CBD5E1] hover:text-white transition-colors duration-200"
            >
              Sign in
            </Link>
            <Link
              to="/pricing"
              className="shimmer-btn relative px-5 py-2 rounded-xl text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(79,140,255,0.4)]"
              style={{ background: 'linear-gradient(135deg, #4F8CFF, #7C3AED)' }}
            >
              Get Started Free
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-[#CBD5E1] hover:text-white hover:bg-white/[0.06] transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden glass-panel border-t border-white/[0.06]"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.href || '/'}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'text-white bg-[#4F8CFF]/10'
                          : 'text-[#CBD5E1] hover:text-white hover:bg-white/[0.04]'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="pt-3 space-y-2">
                  <Link
                    to="/pricing"
                    className="flex items-center justify-center w-full px-5 py-3 rounded-xl text-sm font-semibold text-white"
                    style={{ background: 'linear-gradient(135deg, #4F8CFF, #7C3AED)' }}
                  >
                    Get Started Free
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
