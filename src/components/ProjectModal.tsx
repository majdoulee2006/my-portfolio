import React from 'react';
import type { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { X, ExternalLink, Github, CheckCircle2, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t, isRtl } = useLanguage();
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className={`relative w-full max-w-3xl glass-card rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden z-10 my-8 ${isRtl ? 'text-right' : 'text-left'}`}
        >
          {/* Header Bar */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border-b border-zinc-800/80">
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className={`absolute top-6 p-2.5 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors ${isRtl ? 'left-6' : 'right-6'}`}
              aria-label={t('modal.close')}
            >
              <X size={18} />
            </button>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-semibold">
                {project.category}
              </span>
              {project.grade && (
                <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold flex items-center gap-1.5">
                  <Award size={14} className="text-amber-400" />
                  <span>{project.grade}</span>
                </span>
              )}
            </div>

            {/* Project Title */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 font-display">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-medium">
              {project.subtitle}
            </p>

          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
            
            {/* Project Mockup Banner */}
            {project.imageUrl && (
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-xl max-h-72">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}

            {/* Overview */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase text-zinc-400 tracking-wider">
                {t('modal.overview')}
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Key Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 flex flex-col">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">{m.label}</span>
                    <span className="text-lg font-bold text-sky-400 font-mono">{m.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Key Features */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono uppercase text-zinc-400 tracking-wider">
                {t('modal.features')}
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/60 text-sm text-zinc-300">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono uppercase text-zinc-400 tracking-wider">
                {t('modal.techStack')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer Links */}
          <div className="p-6 bg-zinc-950 border-t border-zinc-800/80 flex items-center justify-between gap-4">
            <div className="text-xs text-zinc-500 font-mono hidden sm:block">
              {t('modal.portfolioTag')}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
                >
                  <ExternalLink size={16} />
                  <span>{t('modal.visitSite')}</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 hover:text-white font-medium text-xs flex items-center gap-2 transition-colors"
                >
                  <Github size={16} />
                  <span>{t('modal.viewGithub')}</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white font-medium text-xs shadow-md transition-all"
              >
                {t('modal.close')}
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
