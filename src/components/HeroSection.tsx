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
  FileText
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onContactClick }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
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
      
      {/* Background ambient glowing gradients with Parallax scroll */}
      <motion.div 
        style={{ y: blobY1 }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none animate-glow-pulse" 
      />
      <motion.div 
        style={{ y: blobY2 }}
        className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none" 
      />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Subtle Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <motion.div style={{ scale: heroScale }} className="max-w-6xl mx-auto w-full relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-7 flex flex-col gap-6 ${isRtl ? 'text-right' : 'text-left'}`}
          >
            
            {/* Live Availability Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-emerald-500/30 bg-emerald-950/30 text-emerald-300 text-xs font-semibold tracking-wide w-fit shadow-lg shadow-emerald-950/40">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-mono">{t('hero.status')}</span>
            </div>

            {/* Name & Dynamic Role */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] font-display">
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
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-zinc-400 font-mono">
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-200">
                <MapPin size={14} className="text-sky-400" />
                <span>{t('hero.location')}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-200">
                <GraduationCap size={14} className="text-indigo-400" />
                <span>{t('hero.institution')}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold">
                <Award size={14} className="text-amber-400" />
                <span>{t('hero.scoreBadge')}</span>
              </div>
            </div>

            {/* Biography */}
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans font-normal">
              {t('hero.bio')}
            </p>

            {/* Specializations Tag Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider mr-1">{t('hero.coreTech')}</span>
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
                className="px-5 py-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-semibold text-sm transition-all duration-300 hover:bg-zinc-800 flex items-center gap-2"
              >
                <span>{t('hero.viewProjects')}</span>
                <ArrowDown size={16} className="text-zinc-400" />
              </a>

            </div>

            {/* Direct Quick Info Action Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 border-t border-zinc-800/80">
              
              {/* Email Copy Card */}
              <div 
                onClick={handleCopyEmail}
                className="flex items-center gap-3 p-3 rounded-2xl glass-card glass-card-hover cursor-pointer transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 group-hover:scale-110 transition-transform">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">{t('contact.emailLabel')}</span>
                  <span className="text-xs font-semibold text-zinc-200 truncate group-hover:text-sky-400 transition-colors">
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
                  <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">GitHub</span>
                  <span className="text-xs font-semibold text-zinc-200 truncate group-hover:text-indigo-400 transition-colors">
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
                  <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">{t('contact.phoneLabel')}</span>
                  <span className="text-xs font-semibold text-zinc-200 truncate group-hover:text-emerald-400 transition-colors">
                    {personalInfo.phone}
                  </span>
                </div>
              </a>

            </div>

          </motion.div>

          {/* Developer Visual Code / Floating Hero Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            
            {/* Glowing border card wrapper */}
            <div className="relative rounded-[32px] p-1 bg-gradient-to-br from-sky-500/30 via-indigo-500/20 to-purple-500/30 shadow-2xl shadow-sky-500/10">
              
              <div className="rounded-[28px] bg-zinc-950/90 backdrop-blur-xl p-6 border border-zinc-800/80 space-y-6 overflow-hidden relative">
                
                {/* Visual Code Terminal Window Header */}
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="text-xs font-mono text-zinc-400 ml-2">{t('hero.terminalTitle')}</span>
                  </div>
                  <Terminal size={14} className="text-zinc-500" />
                </div>

                {/* Developer Spec Snippet */}
                <div className="font-mono text-xs space-y-2 text-zinc-300 leading-relaxed overflow-x-auto">
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
                  <p className="pl-4 text-zinc-400 mt-2">// Academic Achievement</p>
                  <p className="pl-4">
                    <span className="text-indigo-400">final</span> <span className="text-amber-300">gradScore</span> = <span className="text-sky-400">96.0</span>; <span className="text-emerald-300">// Outstanding</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-indigo-400">final</span> <span className="text-amber-300">diplomaGrade</span> = <span className="text-sky-400">83.84</span>;
                  </p>
                  <p className="text-purple-400">&#125;</p>
                </div>

                {/* Highlights Summary Pills */}
                <div className="pt-4 border-t border-zinc-800/80 grid grid-cols-2 gap-3">
                  <div className={`p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800 ${isRtl ? 'text-right' : 'text-left'}`}>
                    <span className="text-[10px] text-zinc-500 font-mono block">{t('hero.gradPillLabel')}</span>
                    <span className="text-lg font-bold text-emerald-400 font-display">{t('hero.gradPillVal')}</span>
                  </div>
                  <div className={`p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800 ${isRtl ? 'text-right' : 'text-left'}`}>
                    <span className="text-[10px] text-zinc-500 font-mono block">{t('hero.specPillLabel')}</span>
                    <span className="text-lg font-bold text-sky-400 font-display">{t('hero.specPillVal')}</span>
                  </div>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
};
