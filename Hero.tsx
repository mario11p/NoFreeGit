import React from 'react';
import { ArrowRight, Cloud, Boxes, Blocks, Workflow, Container, Database } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="pt-36 pb-24 md:pt-44 md:pb-32 bg-white text-black border-b border-neutral-100">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6">
            Software Architecture
          </p>

          <h1
            id="hero-title"
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-black font-display leading-[1.08] mb-8"
          >
            Built to scale.
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg sm:text-xl text-neutral-600 leading-relaxed mb-10 max-w-xl font-normal"
          >
            We design, audit, and refactor distributed systems, event backbones, and cloud infrastructures.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-20">
            <button
              id="hero-cta-primary"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-black hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <span>Start Engagement</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-cta-secondary"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-black bg-white hover:bg-neutral-100 border border-neutral-300 transition-colors cursor-pointer"
            >
              <span>Services</span>
            </button>
          </div>
        </div>

        {/* Architect Trust Tools & Platforms */}
        <div
          id="hero-architect-tools"
          className="pt-10 border-t border-neutral-200"
        >
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6">
            Architectural Tooling & Ecosystem
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            <div id="tool-aws" className="flex flex-col items-start">
              <div className="w-9 h-9 rounded-md border border-neutral-200 bg-neutral-50 flex items-center justify-center text-black mb-3">
                <Cloud className="w-4 h-4 stroke-[1.75]" />
              </div>
              <div className="text-base sm:text-lg font-bold tracking-tight text-black font-display">AWS</div>
              <div className="text-xs text-neutral-500 mt-0.5 font-mono">Cloud Architecture</div>
            </div>

            <div id="tool-kubernetes" className="flex flex-col items-start">
              <div className="w-9 h-9 rounded-md border border-neutral-200 bg-neutral-50 flex items-center justify-center text-black mb-3">
                <Boxes className="w-4 h-4 stroke-[1.75]" />
              </div>
              <div className="text-base sm:text-lg font-bold tracking-tight text-black font-display">Kubernetes</div>
              <div className="text-xs text-neutral-500 mt-0.5 font-mono">Orchestration</div>
            </div>

            <div id="tool-terraform" className="flex flex-col items-start">
              <div className="w-9 h-9 rounded-md border border-neutral-200 bg-neutral-50 flex items-center justify-center text-black mb-3">
                <Blocks className="w-4 h-4 stroke-[1.75]" />
              </div>
              <div className="text-base sm:text-lg font-bold tracking-tight text-black font-display">Terraform</div>
              <div className="text-xs text-neutral-500 mt-0.5 font-mono">Declarative IaC</div>
            </div>

            <div id="tool-kafka" className="flex flex-col items-start">
              <div className="w-9 h-9 rounded-md border border-neutral-200 bg-neutral-50 flex items-center justify-center text-black mb-3">
                <Workflow className="w-4 h-4 stroke-[1.75]" />
              </div>
              <div className="text-base sm:text-lg font-bold tracking-tight text-black font-display">Kafka</div>
              <div className="text-xs text-neutral-500 mt-0.5 font-mono">Event Streaming</div>
            </div>

            <div id="tool-docker" className="flex flex-col items-start">
              <div className="w-9 h-9 rounded-md border border-neutral-200 bg-neutral-50 flex items-center justify-center text-black mb-3">
                <Container className="w-4 h-4 stroke-[1.75]" />
              </div>
              <div className="text-base sm:text-lg font-bold tracking-tight text-black font-display">Docker</div>
              <div className="text-xs text-neutral-500 mt-0.5 font-mono">Containers</div>
            </div>

            <div id="tool-postgresql" className="flex flex-col items-start">
              <div className="w-9 h-9 rounded-md border border-neutral-200 bg-neutral-50 flex items-center justify-center text-black mb-3">
                <Database className="w-4 h-4 stroke-[1.75]" />
              </div>
              <div className="text-base sm:text-lg font-bold tracking-tight text-black font-display">PostgreSQL</div>
              <div className="text-xs text-neutral-500 mt-0.5 font-mono">Data Systems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
