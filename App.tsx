/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { ServicesSection } from './ServicesSection';
import { AboutSection } from './AboutSection';
import { ContactSection } from './ContactSection';
import { Footer } from './Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('');

  // Smooth scroll to a section by element ID
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    handleNavigate('contact');
  };

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['hero', 'services', 'about', 'contact'];
    const observers: IntersectionObserver[] = [];

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, options);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Navbar with all essential sections */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Sections corresponding to Nav Items */}
      <main className="flex-grow">
        <Hero onNavigate={handleNavigate} />
        <ServicesSection onSelectService={handleSelectService} />
        <AboutSection />
        <ContactSection initialService={selectedServiceForContact} />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
