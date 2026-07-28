import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Share2, ExternalLink, Link2, ArrowUpRight, Heart } from 'lucide-react';

const footerLinks = {
  Product: [
    { label: 'AI Workflow Engine', href: '/product' },
    { label: 'Node Builder Studio', href: '/product' },
    { label: 'Real-time Analytics', href: '/product' },
    { label: 'Integrations', href: '/product' },
    { label: 'Security & Compliance', href: '/product' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/about' },
    { label: 'Blog', href: '/about' },
    { label: 'Press Kit', href: '/about' },
  ],
  Developers: [
    { label: 'Documentation', href: '/product' },
    { label: 'API Reference', href: '/product' },
    { label: 'Status Page', href: '/contact' },
    { label: 'Changelog', href: '/product' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/contact' },
    { label: 'Terms of Service', href: '/contact' },
    { label: 'Cookie Policy', href: '/contact' },
  ],
};

const socials = [
  { icon: Share2, href: '#', label: 'GitHub' },
  { icon: ExternalLink, href: '#', label: 'Twitter / X' },
  { icon: Link2, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/[0.06]" role="contentinfo">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-[#4F8CFF]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#4F8CFF] to-[#7C3AED] opacity-80 blur-sm group-hover:blur-md transition-all" />
                <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#4F8CFF] to-[#7C3AED] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold text-white">FlowSync <span className="text-[#4F8CFF]">AI</span></span>
            </Link>
            <p className="text-sm text-[#64748B] leading-relaxed max-w-xs mb-6">
              The future of intelligent workflow automation. Build, deploy, and scale autonomous AI agents across every business tool.
            </p>

            {/* Status Pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill w-fit mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
              </span>
              <span className="text-xs text-[#10B981] font-medium">All Systems Operational</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-[#64748B] hover:text-white hover:border-[#4F8CFF]/40 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">{category}</h3>
                <ul className="space-y-2.5">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        to={href}
                        className="text-sm text-[#64748B] hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                      >
                        {label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-0.5 group-hover:translate-y-0 transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#64748B]">
            © {new Date().getFullYear()} FlowSync AI, Inc. All rights reserved.
          </p>

          {/* Mandatory Footer Text */}
          <div className="flex items-center gap-1.5 text-sm text-[#64748B]">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-[#F59E0B]" fill="currentColor" />
            <span>for</span>
            <a
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4F8CFF] hover:text-white font-medium transition-colors duration-200 hover:underline underline-offset-2 flex items-center gap-1"
            >
              Digital Heroes Training Task
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
