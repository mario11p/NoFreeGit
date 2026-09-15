import React from 'react';
import { ArrowUp } from 'lucide-react';
import { NAV_ITEMS } from '../data/content';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-white text-black py-12">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-neutral-200">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-black rounded-[2px]" />
            <span className="text-sm font-bold tracking-tight text-black font-display">
              TRISTOR SOLUTIONS
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-500">
            {NAV_ITEMS.map((item) => {
              const targetId = item.href.replace('#', '');
              return (
                <button
                  key={`footer-${item.id}`}
                  type="button"
                  id={`footer-${item.id}`}
                  onClick={() => onNavigate(targetId)}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              );
            })}
            <a
              href="mailto:architecture@tristorsolutions.com"
              className="hover:text-black transition-colors"
            >
              architecture@tristorsolutions.com
            </a>
          </div>

          <button
            type="button"
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-black transition-colors cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} Tristor Solutions. All rights reserved.
          </div>
          <div className="font-mono text-[11px]">
            CANADA
          </div>
        </div>
      </div>
    </footer>
  );
};
