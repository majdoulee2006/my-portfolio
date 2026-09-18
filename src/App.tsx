import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatCounters } from './components/StatCounters';
import { ProjectsSection } from './components/ProjectsSection';
import { TechStackSection } from './components/TechStackSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';

export function App() {
  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans relative selection:bg-sky-500 selection:text-white">
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Navigation Header */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Content Sections */}
      <main>
        <HeroSection onContactClick={scrollToContact} />
        <StatCounters />
        <ProjectsSection />
        <TechStackSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;

