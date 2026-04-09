'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, FileText, Code2, Rocket } from 'lucide-react';
import { useScrollDownInView } from '@/lib/useScrollDownInView';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Discovery Call',
    subtitle: 'Free · 30 minutes',
    description:
      'We get on a call — no pitch, no pressure. I listen to your idea, your constraints, and what success looks like for you. You leave with clarity on whether we\'re the right fit.',
    cta: null,
  },
  {
    number: '02',
    icon: FileText,
    title: 'Proposal & Architecture',
    subtitle: 'Delivered within 48 hours',
    description:
      'I send a detailed scope — tech stack, timeline, milestones, and a fixed-price estimate. No vague hour estimates. No surprise invoices. You approve, we move.',
    cta: null,
  },
  {
    number: '03',
    icon: Code2,
    title: 'Build & Weekly Demos',
    subtitle: 'Transparent, iterative delivery',
    description:
      'You see working software every week. Not status updates — actual demos. You give feedback early, not after the final invoice.',
    cta: null,
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Handoff',
    subtitle: 'Full ownership transfer',
    description:
      'I handle deployment, write the documentation, and walk your team through everything. You own 100% of the code, the infrastructure, and the knowledge to run it.',
    cta: null,
  },
];

const Process = () => {
  const [headerRef, headerInView] = useScrollDownInView<HTMLDivElement>();
  const [stepsRef, stepsInView] = useScrollDownInView<HTMLDivElement>();
  const [ctaRef, ctaInView] = useScrollDownInView<HTMLDivElement>();

  return (
    <section id="process" className="py-24 md:py-32 bg-[#0D0F14] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-[100px] pointer-events-none" style={{background:'rgba(203,183,251,0.04)'}} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div ref={headerRef} className="max-w-2xl mx-auto text-center mb-16">
          <motion.p
            className="text-sm font-semibold tracking-[0.15em] uppercase mb-3"
            style={{color:'#cbb7fb'}}
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
          >
            How We Work Together
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{lineHeight:0.96, letterSpacing:'-0.02em'}}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            From idea to{' '}
            <span style={{color:'#cbb7fb'}}>shipped product</span>
          </motion.h2>
          <motion.p
            className="text-lg"
            style={{color:'rgba(255,255,255,0.50)'}}
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            No ambiguity. No retainer traps. Just a clear process that keeps you in control at every step.
          </motion.p>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div ref={stepsRef} className="relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-px pointer-events-none" style={{background:'rgba(203,183,251,0.12)'}} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  className="relative flex flex-col items-center lg:items-center text-left lg:text-center"
                  initial={{ opacity: 0, y: 24 }}
                  animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                >
                  {/* Step number + icon */}
                  <div className="relative mb-5">
                    {/* Outer ring */}
                    <div className="w-20 h-20 rounded-[16px] flex items-center justify-center shadow-lg" style={{background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.06)'}}>
                      <Icon size={28} style={{color:'#cbb7fb'}} />
                    </div>
                    {/* Number badge */}
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shadow-lg" style={{background:'#cbb7fb', color:'#1b1938'}}>
                      {step.number}
                    </span>
                  </div>

                  {/* Title + subtitle */}
                  <h3 className="text-white font-bold text-lg mb-1" style={{letterSpacing:'-0.01em'}}>{step.title}</h3>
                  <p className="text-xs font-semibold tracking-wide mb-3" style={{color:'#cbb7fb'}}>{step.subtitle}</p>

                  {/* Description */}
                  <p className="text-sm leading-relaxed" style={{color:'rgba(255,255,255,0.50)'}}>{step.description}</p>
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
          <p className="mb-5 text-base" style={{color:'rgba(255,255,255,0.50)'}}>
            The discovery call is free. The clarity is priceless.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-bold rounded-[8px] text-base transition-all duration-200 hover:bg-white"
            style={{background:'#e9e5dd', color:'#1b1938'}}
          >
            Start with a free call →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
