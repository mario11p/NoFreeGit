import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data/content';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    onNavigate(targetId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-xs'
          : 'bg-white border-b border-neutral-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Minimal Brand */}
          <a
            id="brand-logo-link"
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <span className="w-2.5 h-2.5 bg-black rounded-[2px]" />
            <span className="text-base font-bold tracking-tight text-black font-display">
              TRISTOR
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" aria-label="Primary Navigation" className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeSection === targetId;
              return (
                <a
                  key={item.id}
                  id={item.id}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`text-sm transition-colors ${
                    isActive
                      ? 'text-black font-semibold'
                      : 'text-neutral-500 hover:text-black font-normal'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Minimal Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              id="nav-cta-btn"
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="text-xs font-semibold px-4 py-2 bg-black text-white rounded-full hover:bg-neutral-800 transition-colors"
            >
              Consultation
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-black hover:bg-neutral-100 rounded-md focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Minimal Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden border-b border-neutral-200 bg-white px-6 py-4 space-y-3 shadow-sm"
        >
          {NAV_ITEMS.map((item) => {
            const targetId = item.href.replace('#', '');
            const isActive = activeSection === targetId;
            return (
              <a
                key={`mobile-${item.id}`}
                id={`mobile-${item.id}`}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`block text-sm py-1.5 ${
                  isActive ? 'text-black font-semibold' : 'text-neutral-600'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-2 border-t border-neutral-100">
            <a
              id="mobile-nav-cta-btn"
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="block text-center text-xs font-semibold px-4 py-2.5 bg-black text-white rounded-full"
            >
              Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
