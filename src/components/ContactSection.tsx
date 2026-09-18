import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Github, Copy, Check, Send, MessageSquare, FileText, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { t, isRtl } = useLanguage();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Open default mail client with prefilled details
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formState.subject || 'Portfolio Contact Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-semibold">
          <MessageSquare size={14} />
          <span>{t('contact.badge')}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
          {t('contact.titlePrefix')} <span className="gradient-text-accent">{t('contact.titleAccent')}</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto font-sans">
          {t('contact.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
        
        {/* Direct Contact Cards */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-4 flex flex-col justify-between"
        >
          
          {/* Email Card */}
          <div className="glass-card rounded-3xl p-6 border border-zinc-800/80 space-y-3 relative group glass-card-hover">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-400">
                <Mail size={20} />
              </div>
              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copiedEmail ? t('contact.copied') : t('contact.copy')}</span>
              </button>
            </div>
            <div>
              <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">{t('contact.emailLabel')}</span>
              <a href={`mailto:${personalInfo.email}`} className="block text-base font-bold text-white font-mono hover:text-sky-400 transition-colors mt-0.5">
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Phone & WhatsApp Card */}
          <div className="glass-card rounded-3xl p-6 border border-zinc-800/80 space-y-3 relative group glass-card-hover">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400">
                <Phone size={20} />
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/963959031594?text=${encodeURIComponent(isRtl ? 'مرحباً مجدولين، أود التواصل معك.' : 'Hi Majdouleen, I would like to connect.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-xs font-mono text-emerald-300 transition-colors flex items-center gap-1"
                >
                  <MessageSquare size={13} />
                  <span>{t('contact.whatsapp')}</span>
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  {copiedPhone ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copiedPhone ? t('contact.copied') : t('contact.copy')}</span>
                </button>
              </div>
            </div>
            <div>
              <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">{t('contact.phoneLabel')}</span>
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="block text-base font-bold text-white font-mono hover:text-emerald-400 transition-colors mt-0.5">
                {personalInfo.phone}
              </a>
            </div>
          </div>

          {/* Location & GitHub Card */}
          <div className="glass-card rounded-3xl p-6 border border-zinc-800/80 space-y-4 glass-card-hover">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400">
                <MapPin size={20} />
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">{t('contact.locationLabel')}</span>
                <p className="text-sm font-bold text-white font-sans">{t('hero.location')}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs text-zinc-400 font-mono">{t('contact.githubLabel')}</span>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1.5"
              >
                <Github size={14} />
                <span>{personalInfo.github}</span>
              </a>
            </div>
          </div>

          {/* Resume / CV Card */}
          {personalInfo.resumeUrl && (
            <div className="glass-card rounded-3xl p-6 border border-sky-500/30 bg-sky-950/20 space-y-3 glass-card-hover flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-sky-500/20 text-sky-400">
                  <FileText size={20} />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-wider">{t('contact.cvCardTitle')}</span>
                  <p className="text-sm font-bold text-white font-sans">{t('contact.cvFileName')}</p>
                </div>
              </div>
              <a
                href={personalInfo.resumeUrl}
                download="Majdouleen_Mahmoud_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-xs shadow-md transition-all flex items-center gap-1.5 shrink-0"
              >
                <span>{t('contact.downloadPdf')}</span>
                <Download size={14} />
              </a>
            </div>
          )}
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-zinc-800/80 shadow-2xl relative"
        >
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-2 font-display">{t('contact.formTitle')}</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-400">{t('contact.nameLabel')}</label>
                <input
                  type="text"
                  required
                  placeholder={isRtl ? 'مثال: محمد أحمد' : 'e.g. Alex Johnson'}
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-white text-sm focus:outline-none focus:border-sky-500 transition-colors font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-400">{t('contact.emailInputLabel')}</label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-white text-sm focus:outline-none focus:border-sky-500 transition-colors font-sans"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-zinc-400">{t('contact.subjectLabel')}</label>
              <input
                type="text"
                required
                placeholder={isRtl ? 'فرصة عمل / استفسار عن مشروع' : 'Job Role / Project Inquiry'}
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-white text-sm focus:outline-none focus:border-sky-500 transition-colors font-sans"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-zinc-400">{t('contact.messageLabel')}</label>
              <textarea
                rows={4}
                required
                placeholder={isRtl ? 'اكتب تفاصيل رسالتك هنا...' : 'Write your message details...'}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-white text-sm focus:outline-none focus:border-sky-500 transition-colors resize-none font-sans"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white font-semibold text-sm shadow-xl shadow-sky-500/20 hover:shadow-sky-500/35 transition-all flex items-center justify-center gap-2"
            >
              <Send size={16} />
              <span>{t('contact.sendBtn')}</span>
            </button>

            {submitted && (
              <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs text-center font-mono animate-in fade-in">
                {t('contact.successMsg')}
              </div>
            )}

          </form>

        </motion.div>

      </div>

    </section>
  );
};
