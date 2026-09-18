import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand / Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-base font-bold text-white tracking-wide">
            {personalInfo.name}
          </span>
          <p className="text-xs text-zinc-500 font-mono">
            {t('footer.subtitle')}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-mono text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">{t('nav.about')}</a>
          <span>•</span>
          <a href="#projects" className="hover:text-white transition-colors">{t('nav.projects')}</a>
          <span>•</span>
          <a href="#skills" className="hover:text-white transition-colors">{t('nav.skills')}</a>
          <span>•</span>
          <a href="#education" className="hover:text-white transition-colors">{t('nav.education')}</a>
          <span>•</span>
          <a href="#contact" className="hover:text-white transition-colors">{t('nav.contact')}</a>
        </div>

        {/* Footer Credit */}
        <div className="text-xs text-zinc-500 font-mono flex items-center gap-1">
          <span>{t('footer.credit')}</span>
        </div>

      </div>
    </footer>
  );
};
