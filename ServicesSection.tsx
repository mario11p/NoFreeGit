import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/content';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-white border-b border-neutral-100">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-200">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black font-display">
              Services
            </h2>
          </div>
          <p className="text-sm text-neutral-500 mt-2 md:mt-0 max-w-sm">
            Hardened architectural foundations engineered for stability and throughput.
          </p>
        </div>

        <div className="divide-y divide-neutral-200">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="py-10 first:pt-0 group flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-neutral-50/50 transition-colors -mx-4 px-4 rounded-lg"
            >
              <div className="flex items-start gap-6 max-w-2xl">
                <span className="text-xs font-mono text-neutral-400 mt-1">
                  {service.tag}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-black font-display mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                    {service.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {onSelectService && (
                <button
                  type="button"
                  id={`select-${service.id}-btn`}
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-black hover:text-neutral-600 self-start md:self-center transition-colors cursor-pointer py-1"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
