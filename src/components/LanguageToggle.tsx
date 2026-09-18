import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-sky-500/30 hover:border-sky-400 bg-sky-950/20 text-sky-300 hover:text-white text-xs font-semibold font-mono transition-all duration-300 hover:scale-105 active:scale-95 shadow-md ${className}`}
      title={language === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}
      aria-label="Toggle language"
    >
      <Globe size={14} className="text-sky-400 animate-pulse" />
      <span>{language === 'en' ? '🇸🇾 العربية' : '🇬🇧 English'}</span>
    </button>
  );
};
