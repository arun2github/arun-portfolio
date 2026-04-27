'use client';

import React from 'react';
import { technologies } from '@/data/portfolioData';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Layers, Sparkles } from 'lucide-react';
import { useScrollDownInView } from '@/lib/useScrollDownInView';

const MarqueeCard = ({ tech }: { tech: typeof technologies[0] }) => (
  <div
    className="flex-shrink-0 w-32 h-24 flex flex-col items-center justify-center gap-2.5 rounded-2xl group transition-all duration-300 hover:shadow-[0_0_20px_rgba(203,183,251,0.08)]"
    style={{
      background: 'rgba(203,183,251,0.03)',
      border: '1px solid rgba(203,183,251,0.08)',
    }}
  >
    <div className="relative w-9 h-9">
      {tech.iconUrl ? (
        <Image
          src={tech.iconUrl}
          alt={`${tech.name} icon`}
          fill
          style={{ objectFit: 'contain' }}
          className="drop-shadow-md group-hover:scale-110 transition-transform duration-300"
        />
      ) : (
        <Layers size={28} className="text-white/40" />
      )}
    </div>
    <p className="text-[11px] font-medium text-white/40 group-hover:text-[#cbb7fb] transition-colors duration-300 text-center leading-tight px-1">
      {tech.name}
    </p>
  </div>
);

const Technologies = () => {
  const [headerRef, headerInView] = useScrollDownInView<HTMLDivElement>();
  const [exploreRef, exploreInView] = useScrollDownInView<HTMLDivElement>();

  if (!technologies || technologies.length === 0) {
    return (
      <section id="technologies" className="py-24 md:py-32 bg-[#0D0F14] text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Tech Stack</h2>
        <p className="text-white/40">Technology details are not available at the moment.</p>
      </section>
    );
  }

  const half = Math.ceil(technologies.length / 2);
  const row1 = technologies.slice(0, half);
  const row2 = technologies.slice(half);

  return (
    <section id="technologies" className="relative py-24 md:py-32 bg-[#0D0F14] overflow-hidden">
      {/* Ambient orb */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full" style={{ background: 'rgba(203,183,251,0.03)', filter: 'blur(80px)' }} />

      <div ref={headerRef} className="relative z-10 container mx-auto px-6">
        {/* Section label */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="h-px w-10" style={{ background: '#cbb7fb' }} />
          <span className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: '#cbb7fb' }}>Tech Stack</span>
          <span className="h-px w-10" style={{ background: '#cbb7fb' }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-3 text-center text-white"
          style={{ lineHeight: 0.96, letterSpacing: '-0.02em' }}
        >
          Core <span className="text-gradient-brand">Stack</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-white/40 text-center text-sm mb-14 max-w-md mx-auto"
        >
          Technologies I work with daily — battle-tested in production environments.
        </motion.p>
      </div>

      {/* Row 1 — scrolls left */}
      <div
        className="marquee-wrapper mx-auto overflow-hidden mb-4 relative z-10"
        style={{ width: '80%', maskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)' }}
      >
        <div className="marquee-track-left flex gap-4">
          {[...row1, ...row1].map((tech, i) => (
            <MarqueeCard key={`r1-${i}`} tech={tech} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div
        className="marquee-wrapper mx-auto overflow-hidden relative z-10"
        style={{ width: '80%', maskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)' }}
      >
        <div className="marquee-track-right flex gap-4">
          {[...row2, ...row2].map((tech, i) => (
            <MarqueeCard key={`r2-${i}`} tech={tech} />
          ))}
        </div>
      </div>

      {/* Currently exploring */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          ref={exploreRef}
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 12 }}
          animate={exploreInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="text-white/30 text-xs font-bold tracking-[0.15em] uppercase mb-4 flex items-center justify-center gap-2">
            <Sparkles size={12} style={{ color: '#cbb7fb' }} />
            Currently Exploring
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {['LangGraph', 'LangChain', 'n8n', 'LlamaIndex', 'Ollama', 'AI Agents', 'Machine Learning'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 hover:shadow-[0_0_12px_rgba(203,183,251,0.1)]"
                style={{
                  background: 'rgba(203,183,251,0.04)',
                  border: '1px solid rgba(203,183,251,0.1)',
                  color: 'rgba(203,183,251,0.7)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;