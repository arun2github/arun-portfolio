'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, FileText, Code2, Rocket, ArrowRight } from 'lucide-react';
import { useScrollDownInView } from '@/lib/useScrollDownInView';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Discovery Call',
    subtitle: 'Free · 30 minutes',
    description:
      'We get on a call — no pitch, no pressure. I listen to your idea, your constraints, and what success looks like for you. You leave with clarity on whether we\'re the right fit.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Proposal & Architecture',
    subtitle: 'Delivered within 48 hours',
    description:
      'I send a detailed scope — tech stack, timeline, milestones, and a fixed-price estimate. No vague hour estimates. No surprise invoices. You approve, we move.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Build & Weekly Demos',
    subtitle: 'Transparent, iterative delivery',
    description:
      'You see working software every week. Not status updates — actual demos. You give feedback early, not after the final invoice.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Handoff',
    subtitle: 'Full ownership transfer',
    description:
      'I handle deployment, write the documentation, and walk your team through everything. You own 100% of the code, the infrastructure, and the knowledge to run it.',
  },
];

const Process = () => {
  const [headerRef, headerInView] = useScrollDownInView<HTMLDivElement>();
  const [stepsRef, stepsInView] = useScrollDownInView<HTMLDivElement>();
  const [ctaRef, ctaInView] = useScrollDownInView<HTMLDivElement>();

  return (
    <section id="process" className="relative py-24 md:py-32 bg-[#0D0F14] overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full pointer-events-none" style={{ background: 'rgba(203,183,251,0.03)', filter: 'blur(100px)' }} />
      <div className="absolute top-1/4 -left-40 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'rgba(129,140,248,0.02)', filter: 'blur(60px)' }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div ref={headerRef} className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="h-px w-10" style={{ background: '#cbb7fb' }} />
            <span className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: '#cbb7fb' }}>Process</span>
            <span className="h-px w-10" style={{ background: '#cbb7fb' }} />
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ lineHeight: 0.96, letterSpacing: '-0.02em' }}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            From idea to{' '}
            <span className="text-gradient-brand">shipped product</span>
          </motion.h2>
          <motion.p
            className="text-white/40 text-sm max-w-lg mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            No ambiguity. No retainer traps. Just a clear process that keeps you in control at every step.
          </motion.p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-px pointer-events-none"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(203,183,251,0.12), transparent)' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  className="glass-card glass-card-hover rounded-2xl p-6 relative flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 24 }}
                  animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                >
                  {/* Step icon */}
                  <div className="relative mb-5">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300"
                      style={{ background: 'rgba(203,183,251,0.06)', border: '1px solid rgba(203,183,251,0.12)' }}
                    >
                      <Icon size={24} style={{ color: '#cbb7fb' }} />
                    </div>
                    {/* Number badge */}
                    <span
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shadow-lg"
                      style={{ background: '#cbb7fb', color: '#1b1938' }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-base mb-1" style={{ letterSpacing: '-0.01em' }}>{step.title}</h3>
                  <p className="text-[11px] font-bold tracking-wide mb-3" style={{ color: 'rgba(203,183,251,0.7)' }}>{step.subtitle}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          ref={ctaRef}
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="mb-5 text-white/40 text-sm">
            The discovery call is free. The clarity is priceless.
          </p>
          <a
            href="#contact"
            className="magnetic-btn group inline-flex items-center gap-2 px-8 py-3.5 font-bold rounded-[12px] text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(203,183,251,0.2)]"
            style={{ background: '#e9e5dd', color: '#1b1938' }}
          >
            Start with a free call
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;