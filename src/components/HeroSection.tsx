import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  ArrowDown, 
  Sparkles, 
  ExternalLink,
  Smartphone,
  Database,
  Terminal,
  GraduationCap,
  MessageSquare,
  Award,
  Zap,
  Download,
  FileText,
  Trophy,
  Code2,
  User,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onContactClick }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [cardView, setCardView] = useState<'profile' | 'code'>('profile');
  const { t, isRtl } = useLanguage();

  const rolesList = t('hero.roles');

  const { scrollY } = useScroll();
  const blobY1 = useTransform(scrollY, [0, 800], [0, 180]);
  const blobY2 = useTransform(scrollY, [0, 800], [0, -120]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.96]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rolesList.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [rolesList.length]);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-radial-gradient">
      
      {/* Background ambient glowing gradients - GPU Optimized */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[64px] pointer-events-none transform-gpu" 
      />
      <div 
        className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-500/15 rounded-full blur-[56px] pointer-events-none transform-gpu" 
      />
      <div 
        className="absolute bottom-10 left-10 w-[380px] h-[380px] bg-emerald-500/10 rounded-full blur-[56px] pointer-events-none transform-gpu" 
      />

      {/* Subtle Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-7 flex flex-col gap-6 ${isRtl ? 'text-right' : 'text-left'}`}
          >
            
            {/* Live Availability Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-emerald-500/30 bg-emerald-50/80 text-emerald-700 text-xs font-semibold tracking-wide w-fit shadow-md shadow-emerald-200/60">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-mono">{t('hero.status')}</span>
            </div>

            {/* Name & Dynamic Role */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-display">
                {t('hero.greetingHi')} <span className="gradient-text-accent">{t('hero.name')}</span>
              </h1>
              
              {/* Dynamic Rotating Role Switcher */}
              <div className="h-10 sm:h-12 flex items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-lg sm:text-2xl font-bold text-sky-400 flex items-center gap-2 font-display"
                  >
                    <Zap size={20} className="text-amber-400 shrink-0" />
                    <span>{rolesList[roleIndex]}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Location & Graduation Info Pills */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-500 font-mono">
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/90 border border-slate-200 text-slate-700 shadow-sm">
                <MapPin size={14} className="text-sky-500" />
                <span>{t('hero.location')}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/90 border border-slate-200 text-slate-700 shadow-sm">
                <GraduationCap size={14} className="text-indigo-500" />
                <span>{t('hero.institution')}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold shadow-sm">
                <Trophy size={14} className="text-amber-400" />
                <span>{t('hero.scoreBadge')}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 font-bold shadow-sm">
                <Award size={14} className="text-sky-400" />
                <span>{t('hero.diplomaBadge')}</span>
              </div>
            </div>

            {/* Biography */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-sans font-normal">
              {t('hero.bio')}
            </p>

            {/* Specializations Tag Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs text-slate-400 font-mono uppercase tracking-wider mr-1">{t('hero.coreTech')}</span>
              {[
                { name: 'Flutter', color: 'bg-sky-500/10 text-sky-400 border-sky-500/25' },
                { name: 'Dart', color: 'bg-blue-500/10 text-blue-400 border-blue-500/25' },
                { name: 'Laravel', color: 'bg-red-500/10 text-red-400 border-red-500/25' },
                { name: 'REST APIs', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25' },
                { name: 'MySQL', color: 'bg-amber-500/10 text-amber-400 border-amber-500/25' },
                { name: 'C# .NET', color: 'bg-purple-500/10 text-purple-400 border-purple-500/25' },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className={`px-3.5 py-1 rounded-full border text-xs font-mono font-medium transition-all hover:scale-105 shadow-sm ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Call to Actions & Direct WhatsApp */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              
              {/* Primary Contact CTA */}
              <button
                onClick={onContactClick}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white font-semibold text-sm shadow-xl shadow-sky-500/20 hover:shadow-sky-500/35 transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center gap-2"
              >
                <Sparkles size={16} />
                <span>{t('hero.contactMe')}</span>
              </button>

              {/* WhatsApp Quick Chat */}
              <a
                href={`https://wa.me/963959031594?text=${encodeURIComponent(isRtl ? 'مرحباً مجدولين، لقد زرت محفظتك البرمجية وأود التواصل معك.' : 'Hi Majdouleen, I reviewed your portfolio and would like to connect.')}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-semibold text-sm transition-all duration-300 flex items-center gap-2 hover:scale-[1.03]"
              >
                <MessageSquare size={16} className="text-emerald-400" />
                <span>{t('hero.whatsappChat')}</span>
              </a>

              {/* Download Resume / CV Button */}
              {personalInfo.resumeUrl && (
                <a
                  href={personalInfo.resumeUrl}
                  download="Majdouleen_Mahmoud_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 hover:text-white font-semibold text-sm transition-all duration-300 flex items-center gap-2 hover:scale-[1.03]"
                >
                  <FileText size={16} className="text-sky-400" />
                  <span>{t('hero.downloadCv')}</span>
                  <Download size={14} className="opacity-70 ml-0.5" />
                </a>
              )}

              {/* View Projects CTA */}
              <a
                href="#projects"
                className="px-5 py-3.5 rounded-xl bg-white/90 border border-slate-200 hover:border-sky-300 text-slate-600 hover:text-sky-700 font-semibold text-sm transition-all duration-300 hover:bg-sky-50/80 shadow-sm flex items-center gap-2"
              >
                <span>{t('hero.viewProjects')}</span>
                <ArrowDown size={16} className="text-zinc-400" />
              </a>

            </div>

            {/* Direct Quick Info Action Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 border-t border-slate-200/80">
              
              {/* Email Copy Card */}
              <div 
                onClick={handleCopyEmail}
                className="flex items-center gap-3 p-3 rounded-2xl glass-card glass-card-hover cursor-pointer transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 group-hover:scale-110 transition-transform">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">{t('contact.emailLabel')}</span>
                  <span className="text-xs font-semibold text-slate-700 truncate group-hover:text-sky-600 transition-colors">
                    {copiedEmail ? t('hero.emailCopied') : personalInfo.email}
                  </span>
                </div>
              </div>

              {/* GitHub Card */}
              <a 
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl glass-card glass-card-hover transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                  <Github size={18} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">GitHub</span>
                  <span className="text-xs font-semibold text-slate-700 truncate group-hover:text-indigo-600 transition-colors">
                    {personalInfo.github}
                  </span>
                </div>
              </a>

              {/* Phone Card */}
              <a 
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 p-3 rounded-2xl glass-card glass-card-hover transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">{t('contact.phoneLabel')}</span>
                  <span className="text-xs font-semibold text-slate-700 truncate group-hover:text-emerald-600 transition-colors">
                    {personalInfo.phone}
                  </span>
                </div>
              </a>

            </div>

          </motion.div>

          {/* Developer Visual Profile / Interactive Hero Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            
            {/* Glowing border card wrapper */}
            <div className="relative rounded-[32px] p-[1.5px] bg-gradient-to-br from-sky-400/50 via-indigo-400/30 to-purple-400/40 shadow-2xl shadow-sky-200/40">
              
              <div className="rounded-[28px] bg-white/95 backdrop-blur-xl p-6 border border-slate-100 space-y-5 overflow-hidden relative">
                
                {/* Visual Card Header with Tab Switcher */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400/90 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400/90 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400/90 inline-block"></span>
                    <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline-block">
                      {cardView === 'profile' ? (isRtl ? 'ملف_المطور.dart' : 'developer_profile.dart') : t('hero.terminalTitle')}
                    </span>
                  </div>

                  {/* Dual Mode Switcher Tabs */}
                  <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200 text-[11px] font-mono">
                    <button
                      type="button"
                      onClick={() => setCardView('profile')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                        cardView === 'profile'
                          ? 'bg-sky-500/15 text-sky-700 font-semibold border border-sky-400/40 shadow-sm'
                          : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      <User size={13} />
                      <span>{t('hero.cardTabProfile')}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCardView('code')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                        cardView === 'code'
                          ? 'bg-purple-500/10 text-purple-700 font-semibold border border-purple-400/35 shadow-sm'
                          : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      <Code2 size={13} />
                      <span>{t('hero.cardTabCode')}</span>
                    </button>
                  </div>
                </div>

                {/* Card Content: Profile View (Default) vs Code View */}
                {cardView === 'profile' ? (
                  <motion.div 
                    key="profile-view"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {/* Profile ID Card Header */}
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-sky-50 via-indigo-50/60 to-purple-50/50 border border-sky-200/60">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-sky-400 via-indigo-500 to-purple-600 p-0.5 shadow-lg shadow-sky-300/30 shrink-0">
                        <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center font-display font-extrabold text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
                          MM
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm sm:text-base font-bold text-slate-800 font-display truncate">
                            {t('hero.name')}
                          </h3>
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" title="Ready to Work" />
                        </div>
                        <p className="text-xs text-sky-600 font-mono truncate">
                          Flutter & Mobile Specialist
                        </p>
                        <p className="text-[11px] text-slate-400 font-sans truncate">
                          {t('hero.institution')}
                        </p>
                      </div>
                    </div>

                    {/* Academic Credentials - Explicit Distinction between Project (96%) and GPA (83.84%) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      
                      {/* 1. Graduation Project Distinction Card (96%) */}
                      <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col justify-between space-y-2 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono text-amber-300 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                            <Trophy size={13} className="text-amber-400" />
                            {isRtl ? 'مشروع التخرج' : 'Grad Project'}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold">
                            EduBridge
                          </span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-black text-amber-300 font-display">96%</span>
                          <span className="text-[11px] text-amber-200/90 font-medium">
                            {isRtl ? 'امتياز عالي' : 'High Honors'}
                          </span>
                        </div>
                        <p className="text-[10px] text-zinc-400 leading-tight">
                          {isRtl ? 'علامة مشروع التخرج الأكاديمي' : 'Graduation project final score'}
                        </p>
                      </div>

                      {/* 2. Cumulative Diploma Grade (83.84%) */}
                      <div className="p-3.5 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex flex-col justify-between space-y-2 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-sky-500/10 rounded-full blur-xl pointer-events-none" />
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono text-sky-300 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                            <Award size={13} className="text-sky-400" />
                            {isRtl ? 'معدل الدبلوم' : 'Diploma GPA'}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-sky-500/20 text-sky-300 text-[10px] font-mono font-bold">
                            DTC
                          </span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-black text-sky-300 font-display">83.84%</span>
                          <span className="text-[11px] text-sky-200/90 font-medium">
                            {isRtl ? 'معدل الدبلوم' : 'IT Diploma Grade'}
                          </span>
                        </div>
                        <p className="text-[10px] text-zinc-400 leading-tight">
                          {isRtl ? 'معدل التخرج العام للدبلوم' : 'Cumulative graduation diploma GPA'}
                        </p>
                      </div>

                    </div>

                    {/* Core Technical Highlights Chips */}
                    <div className="p-3 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-2">
                      <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">
                        {isRtl ? 'المعمارية البرمجية الأساسية' : 'Core Architecture Stack'}
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                        <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-100 text-slate-600 shadow-xs">
                          <Smartphone size={13} className="text-sky-500 shrink-0" />
                          <span className="truncate">Flutter (BLoC)</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-100 text-slate-600 shadow-xs">
                          <Terminal size={13} className="text-red-500 shrink-0" />
                          <span className="truncate">Laravel REST</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-100 text-slate-600 shadow-xs">
                          <Database size={13} className="text-amber-500 shrink-0" />
                          <span className="truncate">MySQL Relational</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-100 text-slate-600 shadow-xs">
                          <Zap size={13} className="text-purple-500 shrink-0" />
                          <span className="truncate">C# .NET Desktop</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="code-view"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-mono text-xs space-y-2 text-slate-600 leading-relaxed overflow-x-auto"
                  >
                    <p className="text-purple-400">class <span className="text-sky-300">SoftwareEngineer</span> &#123;</p>
                    <p className="pl-4 text-zinc-400">// Core Stack Architecture</p>
                    <p className="pl-4">
                      <span className="text-indigo-400">final</span> <span className="text-amber-300">mobile</span> = <span className="text-emerald-400">'Flutter (BLoC + Clean)'</span>;
                    </p>
                    <p className="pl-4">
                      <span className="text-indigo-400">final</span> <span className="text-amber-300">backend</span> = <span className="text-emerald-400">'Laravel REST API'</span>;
                    </p>
                    <p className="pl-4">
                      <span className="text-indigo-400">final</span> <span className="text-amber-300">database</span> = <span className="text-emerald-400">'MySQL Relational'</span>;
                    </p>
                    <p className="pl-4">
                      <span className="text-indigo-400">final</span> <span className="text-amber-300">desktop</span> = <span className="text-emerald-400">'C# .NET Enterprise'</span>;
                    </p>
                    <p className="pl-4 text-zinc-400 mt-2">// Academic Excellence</p>
                    <p className="pl-4">
                      <span className="text-indigo-400">final</span> <span className="text-amber-300">graduationProject</span> = <span className="text-sky-400">96.0</span>; <span className="text-emerald-300">// EduBridge System (High Honors)</span>
                    </p>
                    <p className="pl-4">
                      <span className="text-indigo-400">final</span> <span className="text-amber-300">diplomaGPA</span> = <span className="text-sky-400">83.84</span>; <span className="text-zinc-500">// DTC Cumulative GPA (83%)</span>
                    </p>
                    <p className="text-purple-400">&#125;</p>
                  </motion.div>
                )}

                {/* Highlights Summary Pills */}
                <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
                  <div className={`p-3 rounded-2xl bg-amber-50/80 border border-amber-200/60 ${isRtl ? 'text-right' : 'text-left'}`}>
                    <span className="text-[10px] text-slate-400 font-mono block">{t('hero.gradPillLabel')}</span>
                    <span className="text-lg font-bold text-amber-600 font-display">{t('hero.gradPillVal')}</span>
                  </div>
                  <div className={`p-3 rounded-2xl bg-sky-50/80 border border-sky-200/60 ${isRtl ? 'text-right' : 'text-left'}`}>
                    <span className="text-[10px] text-slate-400 font-mono block">{t('hero.specPillLabel')}</span>
                    <span className="text-lg font-bold text-sky-600 font-display">{t('hero.specPillVal')}</span>
                  </div>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};
