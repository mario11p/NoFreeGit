import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { ContactFormState } from '../types';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    company: '',
    serviceType: initialService || 'Distributed Systems',
    timeline: 'Within 1 month',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceType: initialService }));
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Security check: reject if honeypot is populated (bot attack prevention)
    if (honeypot) {
      return;
    }

    // Input sanitization & validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || trimmedName.length < 2 || trimmedName.length > 80) {
      setErrorMessage('Please provide a valid name between 2 and 80 characters.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail) || trimmedEmail.length > 120) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (!trimmedMessage || trimmedMessage.length < 5 || trimmedMessage.length > 1500) {
      setErrorMessage('Please provide a system context message (up to 1,500 characters).');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-neutral-100">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info */}
          <div className="md:col-span-5">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
              Consultation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black font-display mb-6">
              Start a conversation.
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed mb-8">
              Confidential architectural review under mutual NDA. We respond within 24 hours.
            </p>

            <div className="space-y-4 pt-6 border-t border-neutral-200 text-xs font-mono">
              <div>
                <span className="text-neutral-400 block mb-1">DIRECT INQUIRY</span>
                <a
                  href="mailto:architecture@tristorsolutions.com"
                  className="text-sm font-sans font-medium text-black hover:underline"
                >
                  architecture@tristorsolutions.com
                </a>
              </div>

              <div>
                <span className="text-neutral-400 block mb-1">LOCATION</span>
                <span className="text-sm font-sans text-neutral-700">
                  Canada
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="md:col-span-7">
            {submitted ? (
              <div
                id="contact-success-state"
                className="p-8 border border-neutral-200 rounded-lg text-left"
              >
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center mb-4">
                  <Check className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-black font-display mb-2">
                  Inquiry Received
                </h3>
                <p className="text-sm text-neutral-600 mb-6">
                  Thank you, {formData.name}. A Principal Architect will reach out within 24 hours.
                </p>
                <button
                  type="button"
                  id="reset-form-btn"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-black underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form
                id="architecture-contact-form"
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
              >
                {/* Honeypot field for anti-bot protection (hidden from real users) */}
                <input
                  type="text"
                  name="_form_catch"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {errorMessage && (
                  <div
                    id="contact-form-error"
                    role="alert"
                    className="p-3 text-xs bg-neutral-100 border border-black text-black font-mono"
                  >
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      maxLength={80}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:border-black text-black transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                      Work Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      maxLength={120}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:border-black text-black transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                    Focus Area
                  </label>
                  <select
                    id="contact-service"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:border-black text-black transition-colors"
                  >
                    <option value="Distributed Systems">Distributed Systems & Streaming</option>
                    <option value="Cloud Infrastructure">Cloud Infrastructure & Kubernetes</option>
                    <option value="Architecture Audits">Architecture Health & Bottleneck Audit</option>
                    <option value="Modernization">System Modernization</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                    System Context
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={3}
                    maxLength={1500}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Brief overview of constraints, stack, or scaling goals..."
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:bg-white focus:outline-none focus:border-black text-black transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-contact-form-btn"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-black hover:bg-neutral-800 transition-colors disabled:opacity-50 cursor-pointer"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Submit Request'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
