'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Brain } from 'lucide-react';
import { useScrollDownInView } from '@/lib/useScrollDownInView';

const services = [
  {
    icon: Smartphone,
    number: '01',
    title: 'Mobile Apps',
    punch: 'Flutter apps that scale to 50K+ daily users.',
    proof: 'AU HUB · Sampark · Vahaan Bazar',
    tags: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
    accent: '#cbb7fb',
  },
  {
    icon: Globe,
    number: '02',
    title: 'Web & Dashboards',
    punch: 'Production portals running at enterprise scale.',
    proof: 'Drishti · Niyantaran · Schrocken',
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    accent: '#cbb7fb',
  },
  {
    icon: Brain,
    number: '03',
    title: 'AI & Automation',
    punch: 'Pipelines that eliminate hours of manual work.',
    proof: 'LangChain Agents · n8n Workflows',
    tags: ['LangChain', 'n8n', 'OpenAI', 'Python'],
    accent: '#cbb7fb',
  },
];

const WhatIBuild = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCards, setActiveCards] = useState<boolean[]>(services.map(() => false));
  const [animatedCards, setAnimatedCards] = useState<boolean[]>(services.map(() => false));
  const [headerRef, headerInView] = useScrollDownInView<HTMLDivElement>();

  useEffect(() => {
    let lastY = typeof window !== 'undefined' ? window.scrollY : 0;
    let scrollDir = 'down';
    const onScroll = () => {
      scrollDir = window.scrollY > lastY ? 'down' : 'up';
      lastY = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const observers = cardRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveCards((prev) => {
              const next = [...prev]; next[i] = true; return next;
            });
            if (scrollDir === 'down') {
              setAnimatedCards((prev) => {
                const next = [...prev]; next[i] = true; return next;
              });
            }
          }
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      return obs;
    });
    return () => {
      observers.forEach((o) => o?.disconnect());
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section className="py-20 md:py-32 bg-[#0D0F14]">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-bold tracking-[0.18em] uppercase mb-4" style={{color:'#cbb7fb'}}>
            Services
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-white" style={{lineHeight:0.96, letterSpacing:'-0.02em'}}>
            What I Build
          </h2>
        </motion.div>

        {/* Cards — connected grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1E2330] rounded-2xl overflow-hidden">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isActive = activeCards[i];
            return (
              <motion.div
                key={i}
                ref={(el) => { cardRefs.current[i] = el; }}
                initial={{ opacity: 0, y: 40 }}
                animate={animatedCards[i] ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative bg-[#0D0F14] p-10 hover:bg-[#13161D] transition-all duration-500 overflow-hidden"
                style={isActive ? { borderBottom: '1.5px solid rgba(203,183,251,0.30)' } : {}}
              >
                {/* Watermark number */}
                <span className="absolute -top-2 -right-1 text-[120px] font-black leading-none select-none pointer-events-none transition-colors duration-500" style={{color:'rgba(203,183,251,0.04)', lineHeight:1}}>
                  {service.number}
                </span>

                {/* Icon */}
                <div
                  className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500"
                  style={{
                    background: isActive ? 'rgba(203,183,251,0.14)' : 'rgba(203,183,251,0.08)',
                    border: isActive ? '1px solid rgba(203,183,251,0.40)' : '1px solid rgba(203,183,251,0.20)',
                    boxShadow: isActive ? '0 0 18px rgba(203,183,251,0.12)' : 'none',
                    transform: isActive ? 'scale(1.06)' : 'scale(1)',
                  }}
                >
                  <Icon size={40} style={{ color: '#cbb7fb' }} />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-3xl font-bold text-white mb-3" style={{lineHeight:1.14, letterSpacing:'-0.01em'}}>
                  {service.title}
                </h3>

                {/* Punch line */}
                <p className="relative z-10 text-white/45 text-base leading-relaxed mb-5">
                  {service.punch}
                </p>

                {/* Proof */}
                <p className="relative z-10 text-sm font-semibold mb-7" style={{ color: service.accent }}>
                  {service.proof}
                </p>

                {/* Tags */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-bold text-white/40 rounded-[8px]"
                      style={{border:'1px solid rgba(255,255,255,0.08)', background:'transparent'}}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(203,183,251,0.30)' }}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhatIBuild;
