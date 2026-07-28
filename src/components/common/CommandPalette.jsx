import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, Home, Package, DollarSign, Users, Mail, Zap, X, ArrowRight } from 'lucide-react';
import { useCommandBar } from '../../context/CommandBarContext';

const commands = [
  { id: 'home', label: 'Go to Home', icon: Home, href: '/', category: 'Navigation' },
  { id: 'product', label: 'Explore Product', icon: Package, href: '/product', category: 'Navigation' },
  { id: 'pricing', label: 'View Pricing', icon: DollarSign, href: '/pricing', category: 'Navigation' },
  { id: 'about', label: 'About FlowSync AI', icon: Users, href: '/about', category: 'Navigation' },
  { id: 'contact', label: 'Contact Sales', icon: Mail, href: '/contact', category: 'Navigation' },
  { id: 'docs', label: 'Read Documentation', icon: Zap, href: '/product', category: 'Resources' },
];

export default function CommandPalette() {
  const { isOpen, setIsOpen } = useCommandBar();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const filtered = commands.filter((c) =>
    query === '' || c.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelected((s) => Math.min(s + 1, filtered.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setSelected((s) => Math.max(s - 1, 0)); }
    if (e.key === 'Enter' && filtered[selected]) { execute(filtered[selected]); }
    if (e.key === 'Escape') setIsOpen(false);
  };

  const execute = (cmd) => {
    setIsOpen(false);
    navigate(cmd.href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <motion.div
            className="fixed z-[85] top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl px-4"
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-label="Command palette"
            aria-modal="true"
            onKeyDown={handleKeyDown}
          >
            <div className="glass-panel rounded-2xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.7)] border border-white/10">
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 py-4 border-b border-white/[0.06]">
                <Search className="w-5 h-5 text-[#4F8CFF] flex-shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setSelected(0); }}
                  placeholder="Search commands, pages, actions..."
                  className="flex-1 bg-transparent text-white placeholder-[#64748B] outline-none text-base"
                  aria-label="Command search"
                />
                <button onClick={() => setIsOpen(false)} className="text-[#64748B] hover:text-white transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Results */}
              <div className="py-2 max-h-80 overflow-y-auto">
                {filtered.length === 0 ? (
                  <p className="text-center text-[#64748B] text-sm py-8">No results found</p>
                ) : (
                  <>
                    {['Navigation', 'Resources'].map((category) => {
                      const items = filtered.filter((c) => c.category === category);
                      if (!items.length) return null;
                      return (
                        <div key={category}>
                          <p className="px-4 py-1.5 text-xs font-semibold text-[#64748B] uppercase tracking-wider">{category}</p>
                          {items.map((cmd) => {
                            const globalIdx = filtered.indexOf(cmd);
                            return (
                              <button
                                key={cmd.id}
                                onClick={() => execute(cmd)}
                                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-150 ${
                                  globalIdx === selected
                                    ? 'bg-[#4F8CFF]/10 text-white'
                                    : 'text-[#CBD5E1] hover:bg-white/[0.04] hover:text-white'
                                }`}
                                onMouseEnter={() => setSelected(globalIdx)}
                              >
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                  globalIdx === selected ? 'bg-[#4F8CFF]/20' : 'bg-white/[0.05]'
                                }`}>
                                  <cmd.icon className="w-4 h-4" />
                                </div>
                                <span className="flex-1 text-sm font-medium">{cmd.label}</span>
                                {globalIdx === selected && (
                                  <ArrowRight className="w-4 h-4 text-[#4F8CFF]" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      );
                    })}
                  </>
                )}
              </div>

              {/* Footer hints */}
              <div className="flex items-center gap-4 px-4 py-2.5 border-t border-white/[0.06] text-xs text-[#64748B]">
                <span><kbd className="px-1.5 py-0.5 bg-white/[0.06] rounded font-mono">↑↓</kbd> navigate</span>
                <span><kbd className="px-1.5 py-0.5 bg-white/[0.06] rounded font-mono">↵</kbd> select</span>
                <span><kbd className="px-1.5 py-0.5 bg-white/[0.06] rounded font-mono">Esc</kbd> close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
