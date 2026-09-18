import React, { useState } from 'react';
import { getSkillCategories } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Smartphone, Server, Cpu, Code2, Sparkles, Zap, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const TechStackSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { language, t } = useLanguage();

  const categories = getSkillCategories(language);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone className="text-sky-400" size={22} />;
      case 'Server': return <Server className="text-indigo-400" size={22} />;
      case 'Cpu': return <Cpu className="text-emerald-400" size={22} />;
      default: return <Code2 className="text-sky-400" size={22} />;
    }
  };

  const getProgressPercentage = (level: string) => {
    switch (level) {
      case 'Advanced': return '92%';
      case 'Intermediate': return '78%';
      default: return '85%';
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-semibold">
          <Zap size={14} />
          <span>{t('tech.badge')}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
          {t('tech.titlePrefix')} <span className="gradient-text-accent">{t('tech.titleAccent')}</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-sans">
          {t('tech.description')}
        </p>
      </div>

      {/* Category Tab Selector */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat, idx) => (
          <button
            key={cat.title}
            onClick={() => setActiveTab(idx)}
            className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl border text-sm font-bold font-display transition-all duration-300 ${
              activeTab === idx
                ? 'bg-zinc-900 border-sky-500/60 text-white shadow-xl shadow-sky-500/15 scale-[1.03]'
                : 'glass-card border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-700'
            }`}
          >
            {getCategoryIcon(cat.iconName)}
            <span>{cat.title}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid for Active Category */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {categories[activeTab]?.skills.map((skill) => {
          const pct = getProgressPercentage(skill.level);
          const levelText = skill.level === 'Advanced' ? t('tech.levelAdvanced') : t('tech.levelIntermediate');

          return (
            <div
              key={skill.name}
              className={`glass-card rounded-3xl p-6 border glass-card-hover flex flex-col justify-between ${
                skill.highlight 
                  ? 'border-sky-500/35 bg-gradient-to-b from-sky-950/25 to-zinc-900/70 shadow-lg shadow-sky-950/30' 
                  : 'border-zinc-800/80'
              }`}
            >
              <div className="space-y-4">
                
                {/* Title and Level Pill */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-extrabold text-white flex items-center gap-2 font-display">
                    <span>{skill.name}</span>
                    {skill.highlight && (
                      <span className="p-1.5 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30" title="Core Specialty">
                        <Sparkles size={13} />
                      </span>
                    )}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${
                    skill.level === 'Advanced' 
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' 
                      : 'bg-sky-500/15 text-sky-400 border border-sky-500/30'
                  }`}>
                    {levelText}
                  </span>
                </div>

                {/* Skill Description */}
                {skill.description && (
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans font-normal">
                    {skill.description}
                  </p>
                )}

              </div>

              {/* Progress Indicator Bar */}
              <div className="pt-5 mt-5 border-t border-zinc-800/70 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-zinc-500 uppercase tracking-wider">Proficiency</span>
                  <span className="text-sky-400 font-bold">{pct}</span>
                </div>
                <div className="h-2 w-full rounded-full bg-zinc-950 border border-zinc-800/80 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 transition-all duration-1000"
                    style={{ width: pct }}
                  />
                </div>
              </div>

            </div>
          );
        })}
      </motion.div>

      {/* Complete Skill Matrix Grid */}
      <div className="mt-16 p-8 rounded-3xl glass-card border border-zinc-800/80 text-center space-y-6 shadow-2xl">
        <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase text-zinc-400 tracking-wider">
          <Star size={14} className="text-amber-400" />
          <span>Complete Technical Matrix & Frameworks</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {[
            { name: 'Flutter', cat: 'Mobile', color: 'border-sky-500/40 text-sky-300' },
            { name: 'Dart', cat: 'Language', color: 'border-blue-500/40 text-blue-300' },
            { name: 'Laravel', cat: 'Backend', color: 'border-red-500/40 text-red-300' },
            { name: 'PHP', cat: 'Language', color: 'border-purple-500/40 text-purple-300' },
            { name: 'REST APIs', cat: 'Architecture', color: 'border-emerald-500/40 text-emerald-300' },
            { name: 'MySQL', cat: 'Database', color: 'border-amber-500/40 text-amber-300' },
            { name: 'C#', cat: 'Language', color: 'border-cyan-500/40 text-cyan-300' },
            { name: '.NET Framework', cat: 'Desktop', color: 'border-indigo-500/40 text-indigo-300' },
            { name: 'HTML5 & CSS3', cat: 'Web', color: 'border-orange-500/40 text-orange-300' },
            { name: 'JavaScript', cat: 'Web', color: 'border-yellow-500/40 text-yellow-300' },
            { name: 'Git & GitHub', cat: 'VCS', color: 'border-zinc-500/40 text-zinc-300' },
            { name: 'Postman', cat: 'API Testing', color: 'border-orange-400/40 text-orange-200' },
            { name: 'OOP Principles', cat: 'Core', color: 'border-teal-500/40 text-teal-300' }
          ].map((item) => (
            <span
              key={item.name}
              className={`px-4 py-2 rounded-xl bg-zinc-900/90 border ${item.color} text-xs font-mono font-medium hover:scale-105 transition-transform cursor-default shadow-sm`}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};
