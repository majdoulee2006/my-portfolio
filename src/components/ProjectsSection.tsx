import React, { useState } from 'react';
import { getProjects } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { 
  Award, 
  Sparkles, 
  ArrowUpRight,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilterKey, setActiveFilterKey] = useState<string>('All');
  const { language, t, isRtl } = useLanguage();

  const projects = getProjects(language);

  const filterOptions = [
    { key: 'All', label: t('projects.filterAll') },
    { key: 'Full-Stack Mobile', label: t('projects.filterMobile') },
    { key: 'Desktop System', label: t('projects.filterDesktop') },
    { key: 'AI & Web', label: t('projects.filterAI') },
    { key: 'Backend API', label: t('projects.filterBackend') },
  ];

  const filteredProjects = activeFilterKey === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilterKey);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-mono font-semibold">
            <Sparkles size={14} />
            <span>{t('projects.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            {t('projects.titlePrefix')} <span className="gradient-text-accent">{t('projects.titleAccent')}</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl font-sans">
            {t('projects.description')}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl glass-card border border-slate-200/80 w-fit shadow-sm">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setActiveFilterKey(opt.key)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-display transition-all ${
                activeFilterKey === opt.key 
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md scale-[1.02]' 
                  : 'text-slate-500 hover:text-sky-700 hover:bg-sky-50/80'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => {
          const isEduBridge = project.id === 'edubridge';
          const bentoSpan = isEduBridge
            ? (activeFilterKey === 'All' ? 'md:col-span-2 md:row-span-2' : 'md:col-span-2')
            : 'col-span-1';

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              onClick={() => setSelectedProject(project)}
              className={`group cursor-pointer relative glass-card rounded-[32px] p-6 sm:p-8 border border-slate-200/80 glass-card-hover overflow-hidden flex flex-col justify-between ${bentoSpan}`}
            >
              
              {/* Background gradient accent */}
              <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${project.accentColor || 'from-sky-500/10 to-transparent'} rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none`} />

              {isEduBridge ? (
                /* ========================================================
                   PROFESSIONAL FLAGSHIP SHOWCASE: EDUBRIDGE ECOSYSTEM
                   ======================================================== */
                <div className="flex flex-col justify-between h-full space-y-6 relative z-10">
                  
                  {/* 1. Header Area: Badges, Title, Subtitle, Description */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono font-semibold">
                          {project.category}
                        </span>
                        {project.grade && (
                          <span className="px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/35 text-amber-300 text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm">
                            <Award size={14} className="text-amber-400" />
                            <span>{project.grade}</span>
                          </span>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold flex items-center gap-1.5 hover:bg-emerald-500 hover:text-white transition-all shadow-sm group/btn"
                            title={t('projects.liveDemo')}
                          >
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                            </span>
                            <span>{t('projects.liveDemo')}</span>
                            <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                          </a>
                        )}
                      </div>

                      <div className="p-2.5 rounded-2xl bg-white/80 text-slate-400 group-hover:text-white group-hover:bg-sky-500 group-hover:scale-110 transition-all duration-300 shadow-md border border-slate-200">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors font-display text-2xl sm:text-3xl lg:text-4xl tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-slate-600 font-sans leading-relaxed text-sm sm:text-base max-w-3xl">
                      {project.description}
                    </p>
                  </div>

                  {/* 2. Middle Area: 2-Column Split (Square Mockup + Features List) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-auto py-2">
                    
                    {/* Left: Beautiful Square Poster Showcase */}
                    <div className="lg:col-span-5 relative flex items-center justify-center">
                      <div className="relative aspect-square w-full max-w-[340px] sm:max-w-[380px] rounded-3xl overflow-hidden border border-zinc-700/60 shadow-2xl group/img bg-zinc-950">
                        {/* Ambient Neon Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-tr from-amber-500/20 via-sky-500/25 to-emerald-500/20 rounded-3xl blur-xl opacity-60 group-hover/img:opacity-100 transition-opacity pointer-events-none" />
                        
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover object-center relative z-10 group-hover/img:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />

                        {/* Floating Distinction Badge on Image */}
                        <div className="absolute bottom-3 inset-x-3 z-20 backdrop-blur-md bg-zinc-950/85 border border-white/10 rounded-2xl py-2 px-3 text-center shadow-xl">
                          <span className="text-[11px] font-mono font-bold text-amber-300 flex items-center justify-center gap-1.5">
                            <Award size={13} className="text-amber-400" />
                            <span>{isRtl ? 'مشروع التخرج الأكاديمي • امتياز 96%' : '⭐ Academic Graduation Project • 96% Honors'}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Core Features List */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-3">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                        <Sparkles size={14} className="text-emerald-500" />
                        <span>{isRtl ? 'المميزات والمعمارية الأساسية للحل البرمجي' : 'Core Architecture & Platform Capabilities'}</span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                        {project.features.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/70 border border-slate-200/80 hover:border-emerald-400/40 hover:bg-emerald-50/40 transition-all text-xs text-slate-700 shadow-sm"
                          >
                            <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span className="leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* 3. Bottom Area: Metrics Grid & Tech Chips */}
                  <div className="pt-6 border-t border-slate-200/70 flex flex-col gap-4">
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-3">
                        {project.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="flex flex-col p-3.5 rounded-2xl bg-white/80 border border-slate-200/80 shadow-sm">
                            <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider truncate">{m.label}</span>
                            <span className="text-sm sm:text-base font-bold text-slate-800 font-mono mt-0.5">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3.5 py-1.5 rounded-xl bg-slate-100/90 border border-slate-200 text-slate-600 text-xs font-mono font-medium hover:border-sky-400/60 hover:text-sky-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              ) : (
                /* ========================================================
                   STANDARD CARD LAYOUT (MALL MANAGEMENT, BIOMETRICS, ETC.)
                   ======================================================== */
                <div className="flex flex-col justify-between h-full relative z-10">
                  <div className="space-y-4">
                    {/* Badges & Grade Highlights */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sky-400 text-xs font-mono font-semibold">
                          {project.category}
                        </span>
                        {project.grade && (
                          <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/35 text-amber-300 text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm">
                            <Award size={14} className="text-amber-400" />
                            <span>{project.grade}</span>
                          </span>
                        )}
                      </div>

                      <div className="p-2.5 rounded-2xl bg-white/80 text-slate-400 group-hover:text-white group-hover:bg-sky-500 group-hover:scale-110 transition-all duration-300 shadow-md border border-slate-200">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors font-display text-xl sm:text-2xl">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 font-sans leading-relaxed text-xs sm:text-sm">
                      {project.description}
                    </p>

                    {/* Project Mockup Preview Banner */}
                    {project.imageUrl && (
                      <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-lg group-hover:border-sky-400/40 transition-all h-36 mt-2 mb-1 bg-white">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-50/20 via-transparent to-transparent pointer-events-none" />
                      </div>
                    )}
                  </div>

                  {/* Card Bottom - Metrics & Tech Stack */}
                  <div className="pt-6 mt-6 border-t border-slate-200/70 flex flex-col gap-4">
                    {project.metrics && (
                      <div className="grid grid-cols-2 gap-2.5">
                        {project.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="flex flex-col p-3 rounded-2xl bg-white/80 border border-slate-200/60 shadow-sm">
                            <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider truncate">{m.label}</span>
                            <span className="text-sm font-bold text-slate-800 font-mono mt-0.5">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-xl bg-slate-100/90 border border-slate-200 text-slate-600 text-[11px] font-mono font-medium hover:border-sky-400/40 hover:text-sky-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          );
        })}
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
};
