import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { Menu, X, ArrowUpRight, Download, FileText } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.education'), href: '#education' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-xl backdrop-blur-md' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-600 text-white font-bold text-lg shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
              <span className="font-mono">MM</span>
              <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-800 tracking-wide text-base group-hover:text-sky-600 transition-colors">
                {t('nav.name')}
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
                {t('nav.devTitle')}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 rounded-full glass-card px-4 py-1.5 border border-sky-100/80 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-600 hover:text-sky-700 hover:bg-sky-50/80 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Status & CV Download & Language Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            <LanguageToggle />

            {personalInfo.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                download="Majdouleen_Mahmoud_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 hover:bg-sky-500/20 border border-sky-400/40 text-sky-700 hover:text-sky-800 text-xs font-semibold transition-all duration-200"
              >
                <FileText size={14} className="text-sky-600" />
                <span>{t('nav.cvBtn')}</span>
                <Download size={12} className="opacity-70" />
              </a>
            )}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="hidden lg:inline">{t('nav.availableForHire')}</span>
            </div>
          </div>

          {/* Mobile menu button & Language switch */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/90 border border-slate-200 text-slate-600 hover:text-sky-700 shadow-sm"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl glass-card border border-slate-200/60 shadow-2xl shadow-sky-100/50 flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm text-slate-600 hover:text-sky-700 hover:bg-sky-50/80 rounded-xl font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-200/80 flex flex-col gap-2">
              {personalInfo.resumeUrl && (
                <a
                  href={personalInfo.resumeUrl}
                  download="Majdouleen_Mahmoud_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100/80 border border-sky-200 text-sky-700 font-medium text-sm transition-colors"
                >
                  <FileText size={16} />
                  <span>{t('nav.downloadCv')}</span>
                  <Download size={14} />
                </a>
              )}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium text-sm shadow-md"
              >
                <span>{t('nav.contactBtn')}</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
