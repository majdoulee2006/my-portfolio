import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Github, Phone, Copy, Check, MessageSquare, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactDockProps {
  onContactClick: () => void;
}

export const ContactDock: React.FC<ContactDockProps> = ({ onContactClick }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 px-4 w-full max-w-fit">
      
      {/* Toast Notification when Copied */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-mono font-semibold shadow-lg flex items-center gap-1.5 whitespace-nowrap pointer-events-none"
          >
            <Check size={14} />
            <span>Email copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Glass Dock */}
      <div className="glass-dock rounded-full px-4 py-2.5 flex items-center gap-2 sm:gap-3 border border-zinc-700/60 shadow-2xl">
        
        {/* Copy Email Button */}
        <button
          onClick={handleCopyEmail}
          className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-zinc-800/80 text-zinc-300 hover:text-white transition-all text-xs font-medium group"
          title="Copy Email Address"
        >
          <div className="p-1.5 rounded-full bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
            {copied ? <Check size={14} /> : <Mail size={14} />}
          </div>
          <span className="hidden sm:inline font-mono">Copy Email</span>
        </button>

        <div className="w-[1px] h-6 bg-zinc-800" />

        {/* GitHub Link */}
        <a
          href={personalInfo.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-zinc-800/80 text-zinc-300 hover:text-white transition-all text-xs font-medium group"
          title="Open GitHub Profile"
        >
          <div className="p-1.5 rounded-full bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
            <Github size={14} />
          </div>
          <span className="hidden sm:inline font-mono">GitHub</span>
        </a>

        <div className="w-[1px] h-6 bg-zinc-800" />

        {/* Direct Call Link */}
        <a
          href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
          className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-zinc-800/80 text-zinc-300 hover:text-white transition-all text-xs font-medium group"
          title="Call Phone"
        >
          <div className="p-1.5 rounded-full bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
            <Phone size={14} />
          </div>
          <span className="hidden sm:inline font-mono">Call</span>
        </a>

        <div className="w-[1px] h-6 bg-zinc-800" />

        {/* Open Contact Modal Button */}
        <button
          onClick={onContactClick}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white transition-all text-xs font-semibold shadow-md hover:scale-105 active:scale-95"
        >
          <MessageSquare size={14} />
          <span>Hire Me</span>
        </button>

        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors ml-1"
          title="Back to top"
        >
          <ArrowUp size={16} />
        </button>

      </div>
    </div>
  );
};
