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
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600 text-xs font-mono font-semibold">
          <Zap size={14} />
          <span>{t('tech.badge')}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
          {t('tech.titlePrefix')} <span className="gradient-text-accent">{t('tech.titleAccent')}</span>
        </h2>
        <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto font-sans">
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
                ? 'bg-white border-sky-400/60 text-sky-700 shadow-lg shadow-sky-200/40 scale-[1.03]'
                : 'glass-card border-slate-200/80 text-slate-500 hover:text-sky-700 hover:border-sky-300'
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
                  ? 'border-sky-400/40 bg-gradient-to-b from-sky-50/60 to-white shadow-lg shadow-sky-100/60' 
                  : 'border-slate-200/80'
              }`}
            >
              <div className="space-y-4">
                
                {/* Title and Level Pill */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2 font-display">
                    <span>{skill.name}</span>
                    {skill.highlight && (
                      <span className="p-1.5 rounded-lg bg-sky-100 text-sky-600 border border-sky-200" title="Core Specialty">
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
                  <p className="text-xs text-slate-500 leading-relaxed font-sans font-normal">
                    {skill.description}
                  </p>
                )}

              </div>

              {/* Progress Indicator Bar */}
              <div className="pt-5 mt-5 border-t border-slate-200/70 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400 uppercase tracking-wider">Proficiency</span>
                  <span className="text-sky-600 font-bold">{pct}</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100 border border-slate-200/80 overflow-hidden">
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
      <div className="mt-16 p-8 rounded-3xl glass-card border border-slate-200/80 text-center space-y-6 shadow-md">
        <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase text-slate-400 tracking-wider">
          <Star size={14} className="text-amber-400" />
          <span>Complete Technical Matrix & Frameworks</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {[
            { name: 'Flutter', cat: 'Mobile', color: 'border-sky-400/50 text-sky-600 bg-sky-50/60' },
            { name: 'Dart', cat: 'Language', color: 'border-blue-400/50 text-blue-600 bg-blue-50/60' },
            { name: 'Laravel', cat: 'Backend', color: 'border-red-400/50 text-red-600 bg-red-50/60' },
            { name: 'PHP', cat: 'Language', color: 'border-purple-400/50 text-purple-600 bg-purple-50/60' },
            { name: 'REST APIs', cat: 'Architecture', color: 'border-emerald-400/50 text-emerald-600 bg-emerald-50/60' },
            { name: 'MySQL', cat: 'Database', color: 'border-amber-400/50 text-amber-600 bg-amber-50/60' },
            { name: 'C#', cat: 'Language', color: 'border-cyan-400/50 text-cyan-700 bg-cyan-50/60' },
            { name: '.NET Framework', cat: 'Desktop', color: 'border-indigo-400/50 text-indigo-600 bg-indigo-50/60' },
            { name: 'HTML5 & CSS3', cat: 'Web', color: 'border-orange-400/50 text-orange-600 bg-orange-50/60' },
            { name: 'JavaScript', cat: 'Web', color: 'border-yellow-400/50 text-yellow-700 bg-yellow-50/60' },
            { name: 'Git & GitHub', cat: 'VCS', color: 'border-slate-400/50 text-slate-600 bg-slate-50/60' },
            { name: 'Postman', cat: 'API Testing', color: 'border-orange-300/50 text-orange-500 bg-orange-50/60' },
            { name: 'OOP Principles', cat: 'Core', color: 'border-teal-400/50 text-teal-600 bg-teal-50/60' }
          ].map((item) => (
            <span
              key={item.name}
              className={`px-4 py-2 rounded-xl ${item.color} border text-xs font-mono font-medium hover:scale-105 transition-transform cursor-default shadow-sm`}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};
