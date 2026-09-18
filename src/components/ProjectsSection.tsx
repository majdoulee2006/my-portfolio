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
  const { language, t } = useLanguage();

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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-semibold">
            <Sparkles size={14} />
            <span>{t('projects.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            {t('projects.titlePrefix')} <span className="gradient-text-accent">{t('projects.titleAccent')}</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl font-sans">
            {t('projects.description')}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl glass-card border border-zinc-800/80 w-fit shadow-lg">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setActiveFilterKey(opt.key)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-display transition-all ${
                activeFilterKey === opt.key 
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md scale-[1.02]' 
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
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

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              onClick={() => setSelectedProject(project)}
              className={`group cursor-pointer relative glass-card rounded-[32px] p-6 sm:p-8 border border-zinc-800/80 glass-card-hover overflow-hidden flex flex-col justify-between ${
                isEduBridge ? 'md:col-span-2 md:row-span-2' : 'col-span-1'
              }`}
            >
              
              {/* Background gradient accent */}
              <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${project.accentColor || 'from-sky-500/10 to-transparent'} rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none`} />

              {/* Card Top */}
              <div className="relative z-10 space-y-4">
                
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
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold flex items-center gap-1.5 hover:bg-emerald-500 hover:text-white transition-all shadow-sm group/btn"
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

                  <div className="p-2.5 rounded-2xl bg-zinc-900/80 text-zinc-400 group-hover:text-white group-hover:bg-sky-500 group-hover:scale-110 transition-all duration-300 shadow-md">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className={`font-extrabold text-white group-hover:text-sky-300 transition-colors font-display ${isEduBridge ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className={`text-zinc-300 font-sans leading-relaxed ${isEduBridge ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>
                  {project.description}
                </p>

                {/* Feature preview bullet list if EduBridge */}
                {isEduBridge && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {project.features.slice(0, 4).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-200 bg-zinc-900/70 p-3 rounded-2xl border border-zinc-800/70 font-sans">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>

              {/* Card Bottom - Metrics & Tech Stack */}
              <div className="relative z-10 pt-6 mt-6 border-t border-zinc-800/70 flex flex-col gap-4">
                
                {/* Metrics preview */}
                {project.metrics && (
                  <div className="flex items-center gap-5">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="flex flex-col">
                        <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-wider">{m.label}</span>
                        <span className="text-sm font-bold text-white font-mono">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Chips */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-[11px] font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

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
