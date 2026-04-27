'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, FileText, Code2, Rocket, ArrowRight } from 'lucide-react';

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
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' });
  const stepsRef = useRef<HTMLDivElement>(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: '-50px' });
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-50px' });

  return (
    <section id="process" className="relative py-20 md:py-32 overflow-hidden" style={{ background: '#08080c' }}>
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full" style={{ background: 'rgba(203,183,251,0.03)', filter: 'blur(100px)' }} />
      <div className="pointer-events-none absolute top-1/4 -left-40 w-[400px] h-[400px] rounded-full" style={{ background: 'rgba(129,140,248,0.02)', filter: 'blur(60px)' }} />

      <div className="relative z-10 container mx-auto px-6 lg:px-14 max-w-7xl">

        {/* ── Section Header ───────────────────────── */}
        <div ref={headingRef} className="mb-16 md:mb-24">
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={headingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="h-px w-12" style={{ background: 'rgba(203,183,251,0.3)' }} />
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: 'rgba(203,183,251,0.5)' }}>Process</span>
          </motion.div>

          <motion.h2
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-black leading-[0.9] tracking-[-0.03em]"
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <motion.div className="overflow-hidden" initial={{ y: '100%' }} animate={headingInView ? { y: 0 } : {}} transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <span className="block text-white">From idea to</span>
            </motion.div>
            <motion.div className="overflow-hidden" initial={{ y: '100%' }} animate={headingInView ? { y: 0 } : {}} transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <span className="block text-gradient-brand">shipped product.</span>
            </motion.div>
          </motion.h2>

          <motion.p
            className="text-base md:text-lg max-w-lg mt-6"
            style={{ color: 'rgba(255,255,255,0.3)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            No ambiguity. No retainer traps. Just a clear process that keeps you in control at every step.
          </motion.p>
        </div>

        {/* ── Steps Grid ───────────────────────────── */}
        <div ref={stepsRef} className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-10 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-px pointer-events-none"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(203,183,251,0.1), transparent)' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  className="group relative p-6 rounded-[1.2rem] flex flex-col items-center text-center transition-all duration-400"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.04)',
                  }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{
                    background: 'rgba(203,183,251,0.04)',
                    borderColor: 'rgba(203,183,251,0.1)',
                  }}
                >
                  {/* Step icon */}
                  <div className="relative mb-5">
                    <div
                      className="w-14 h-14 rounded-[14px] flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_16px_rgba(203,183,251,0.12)]"
                      style={{ background: 'rgba(203,183,251,0.06)', border: '1px solid rgba(203,183,251,0.12)' }}
                    >
                      <Icon size={22} style={{ color: '#cbb7fb' }} />
                    </div>
                    {/* Number badge */}
                    <span
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shadow-lg"
                      style={{ background: '#cbb7fb', color: '#08080c' }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-sm mb-1 transition-colors duration-300 group-hover:text-[#cbb7fb]">{step.title}</h3>
                  <p className="text-[11px] font-bold tracking-wide mb-3" style={{ color: 'rgba(203,183,251,0.6)' }}>{step.subtitle}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.3)' }}>{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Bottom CTA ───────────────────────────── */}
        <motion.div
          ref={ctaRef}
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="mb-5 text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
            The discovery call is free. The clarity is priceless.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 font-bold rounded-full text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(203,183,251,0.2)]"
            style={{ background: '#cbb7fb', color: '#08080c' }}
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