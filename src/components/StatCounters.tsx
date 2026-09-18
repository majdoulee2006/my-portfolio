import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Code2, Cpu, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface StatProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  description: string;
  accentColor: string;
}

const StatCard: React.FC<StatProps> = ({ icon, value, suffix = '', label, description, accentColor }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // ms
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-3xl p-6 border border-zinc-800/80 shadow-xl glass-card-hover flex flex-col justify-between relative overflow-hidden group"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-2xl ${accentColor} border border-white/10 shadow-sm`}>
          {icon}
        </div>
        <span className="text-3xl font-extrabold text-white font-display tracking-tight flex items-baseline">
          <span>{count}</span>
          <span className="text-sky-400 ml-0.5">{suffix}</span>
        </span>
      </div>

      <div className="space-y-1">
        <h3 className="text-sm font-bold text-white font-display tracking-wide">{label}</h3>
        <p className="text-xs text-zinc-400 font-sans leading-relaxed">{description}</p>
      </div>

      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-sky-500/5 rounded-full blur-xl group-hover:bg-sky-500/15 transition-all" />
    </motion.div>
  );
};

export const StatCounters: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        <StatCard
          icon={<Award size={22} className="text-amber-400" />}
          value={96}
          suffix="%"
          label={t('stats.gradScore')}
          description={t('stats.gradDetail')}
          accentColor="bg-amber-500/15 text-amber-300"
        />

        <StatCard
          icon={<Code2 size={22} className="text-sky-400" />}
          value={83.84}
          suffix="%"
          label={t('stats.diplomaGrade')}
          description={t('stats.diplomaDetail')}
          accentColor="bg-sky-500/15 text-sky-300"
        />

        <StatCard
          icon={<Cpu size={22} className="text-indigo-400" />}
          value={12}
          suffix="+"
          label={t('stats.coreFrameworks')}
          description={t('stats.frameworkDetail')}
          accentColor="bg-indigo-500/15 text-indigo-300"
        />

        <StatCard
          icon={<Rocket size={22} className="text-emerald-400" />}
          value={100}
          suffix="%"
          label={t('stats.status')}
          description={t('stats.statusDetail')}
          accentColor="bg-emerald-500/15 text-emerald-300"
        />

      </div>
    </section>
  );
};
