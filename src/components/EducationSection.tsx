import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2, Star, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

export const EducationSection: React.FC = () => {
  const { t, isRtl } = useLanguage();

  const highlights = t('education.highlights') as string[];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
          <GraduationCap size={14} />
          <span>{t('education.badge')}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
          {t('education.titlePrefix')} <span className="gradient-text-gold">{t('education.titleAccent')}</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-sans">
          {t('education.description')}
        </p>
      </div>

      {/* Main Education Card */}
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative glass-card rounded-[32px] p-6 sm:p-10 border border-zinc-800/80 shadow-2xl overflow-hidden glass-card-hover"
        >
          
          {/* Background accent glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            
            {/* Header Info */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-zinc-800/80 pb-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/35 text-amber-300 text-xs font-mono font-bold shadow-sm">
                  <Award size={14} className="text-amber-400" />
                  <span>{t('education.gradeBadge')}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  {t('education.degree')}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-300 font-sans">
                  <span className="font-semibold text-sky-400">{t('education.institution')}</span>
                  <span className="text-zinc-600">•</span>
                  <span className="flex items-center gap-1 text-zinc-400">
                    <MapPin size={14} className="text-zinc-500" />
                    {t('education.location')}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 w-fit">
                <Calendar size={14} className="text-sky-400" />
                <span>{t('education.period')}</span>
              </div>
            </div>

            {/* Key Highlights Grid */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider flex items-center gap-2">
                <Star size={14} className="text-amber-400" />
                <span>{isRtl ? 'أبرز الإنجازات والمحاور الأكاديمية' : 'Academic Excellence & Key Highlights'}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Array.isArray(highlights) && highlights.map((highlight, hIdx) => (
                  <div
                    key={hIdx}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800/70 text-xs text-zinc-200 font-sans"
                  >
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Graduation Honor Distinction Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-sky-500/10 to-indigo-500/15 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
              <div className={`flex items-center gap-3 ${isRtl ? 'text-right' : 'text-left'}`}>
                <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400 shrink-0 border border-amber-500/30">
                  <Trophy size={22} />
                </div>
                <div>
                  <h5 className="text-base font-bold text-white font-display">
                    {isRtl ? 'امتياز عالي في مشروع التخرج' : 'Graduation Project Top Distinction'}
                  </h5>
                  <p className="text-xs text-zinc-300 font-sans">
                    {isRtl ? 'نظام EduBridge الأكاديمي حصل على درجة 96% ممتاز جـداً' : 'EduBridge Educational Platform awarded top 96% score.'}
                  </p>
                </div>
              </div>
              <div className="px-4 py-2 rounded-xl bg-zinc-900 text-amber-300 font-mono text-sm font-extrabold border border-amber-500/40 shadow-sm whitespace-nowrap">
                {isRtl ? 'الدرجة: 96%' : 'Grade: 96%'}
              </div>
            </div>

          </div>

        </motion.div>
      </div>

    </section>
  );
};
