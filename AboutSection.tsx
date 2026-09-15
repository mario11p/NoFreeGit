import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white border-b border-neutral-100">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
            Practice
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black mt-2 mb-6 font-display leading-tight">
            Architecture lives in production, not in slides.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl font-normal">
            Tristor Solutions is an independent software architecture practice. We partner with engineering leaders
            to design resilient distributed topologies, eliminate concurrency bottlenecks, and establish clear architectural governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-neutral-200">
          <div>
            <span className="text-xs font-mono text-neutral-400 block mb-2">01</span>
            <h3 className="text-base font-bold text-black font-display mb-1">
              Hands-On Engagement
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
              We prototype blueprints, review critical pull requests, and debug distributed telemetry alongside your team.
            </p>
          </div>

          <div>
            <span className="text-xs font-mono text-neutral-400 block mb-2">02</span>
            <h3 className="text-base font-bold text-black font-display mb-1">
              Deterministic Scale
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Architectures engineered with explicit latency budgets, bounded queues, and deterministic recovery protocols.
            </p>
          </div>

          <div>
            <span className="text-xs font-mono text-neutral-400 block mb-2">03</span>
            <h3 className="text-base font-bold text-black font-display mb-1">
              Zero Lock-In
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Open-standard protocols, cloud-agnostic container topologies, and portable event schemas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
