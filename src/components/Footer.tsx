import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Github, Linkedin, Mail, Phone, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const year = new Date().getFullYear();

  const navLinks = [
    { label: t('nav.about'),     href: '#about' },
    { label: t('nav.projects'),  href: '#projects' },
    { label: t('nav.skills'),    href: '#skills' },
    { label: t('nav.education'), href: '#education' },
    { label: t('nav.contact'),   href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github,   href: personalInfo.githubUrl,     label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedinUrl,   label: 'LinkedIn' },
    { icon: Mail,     href: `mailto:${personalInfo.email}`, label: 'Email' },
    { icon: Phone,    href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`, label: 'Phone' },
  ];

  return (
    <footer className="relative border-t border-slate-200/80 bg-white/80 backdrop-blur-xl pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      {/* Subtle top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />

      <div className="max-w-6xl mx-auto">

        {/* ── Top Row ── */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-slate-200/70 ${isRtl ? 'text-right' : 'text-left'}`}>

          {/* Brand Column */}
          <div className="space-y-4">
            <a href="#" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-600 text-white font-bold text-base flex items-center justify-center shadow-md shadow-sky-300/30 group-hover:scale-105 transition-transform">
                <span className="font-mono">MM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-800 text-base tracking-wide group-hover:text-sky-600 transition-colors">
                  {t('footer.name')}
                </span>
                <span className="text-xs text-slate-400 font-mono">{t('footer.subtitle')}</span>
              </div>
            </a>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              {t('footer.bio')}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 flex-wrap">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-sky-50 border border-slate-200 hover:border-sky-300 text-slate-500 hover:text-sky-600 transition-all duration-200 hover:scale-105"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
              {isRtl ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-slate-600 hover:text-sky-600 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
              {isRtl ? 'تواصل معي' : 'Get In Touch'}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm text-slate-600 hover:text-sky-600 transition-colors flex items-center gap-2"
                >
                  <Mail size={14} className="text-sky-500 shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="text-sm text-slate-600 hover:text-sky-600 transition-colors flex items-center gap-2"
                >
                  <Phone size={14} className="text-emerald-500 shrink-0" />
                  <span>{personalInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-600 hover:text-sky-600 transition-colors flex items-center gap-2"
                >
                  <Github size={14} className="text-indigo-500 shrink-0" />
                  <span>{personalInfo.github}</span>
                </a>
              </li>
            </ul>
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {t('nav.availableForHire')}
            </div>
          </div>

        </div>

        {/* ── Bottom Row ── */}
        <div className={`pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 ${isRtl ? 'sm:flex-row-reverse' : ''}`}>
          <p className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
            © {year} {t('footer.name')} •&nbsp;
            <span className="flex items-center gap-1">
              {t('footer.credit')} <Heart size={11} className="text-rose-400 fill-rose-400 mx-0.5" />
            </span>
          </p>
          {/* Back to top */}
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-sky-600 transition-colors font-mono group"
          >
            <span>{isRtl ? 'العودة إلى الأعلى' : 'Back to top'}</span>
            <span className="p-1 rounded-lg bg-slate-100 group-hover:bg-sky-50 border border-slate-200 group-hover:border-sky-300 transition-all">
              <ArrowUp size={12} />
            </span>
          </a>
        </div>

      </div>
    </footer>
  );
};
