'use client';

import React from 'react';
import { technologies } from '@/data/portfolioData';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import { useScrollDownInView } from '@/lib/useScrollDownInView';

const MarqueeCard = ({ tech }: { tech: typeof technologies[0] }) => (
  <div
    className="flex-shrink-0 w-32 h-24 flex flex-col items-center justify-center gap-2 rounded-[16px] group"
    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
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
    <p className="text-[11px] font-medium text-white/50 group-hover:text-[#cbb7fb] transition-colors duration-300 text-center leading-tight px-1">
      {tech.name}
    </p>
  </div>
);

const Technologies = () => {
  const [headerRef, headerInView] = useScrollDownInView<HTMLDivElement>();
  const [exploreRef, exploreInView] = useScrollDownInView<HTMLDivElement>();
  if (!technologies || technologies.length === 0) {
    return (
      <section id="technologies" className="py-16 md:py-24 bg-[#0D0F14] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Tech Stack</h2>
        <p className="text-white/50">Technology details are not available at the moment.</p>
      </section>
    );
  }

  const half = Math.ceil(technologies.length / 2);
  const row1 = technologies.slice(0, half);
  const row2 = technologies.slice(half);

  return (
    <section id="technologies" className="py-20 md:py-32 bg-[#0D0F14] overflow-hidden">
      <div ref={headerRef} className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7, ease: 'circOut' }}
          className="text-5xl md:text-6xl font-bold mb-4 text-center text-white"
          style={{ lineHeight: 0.96, letterSpacing: '-0.02em' }}
        >
          Core Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-white/45 text-center text-base mb-14"
        >
          Technologies I work with daily and in production.
        </motion.p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="marquee-wrapper overflow-hidden mb-4" style={{ maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)', paddingLeft: '20%', paddingRight: '20%' }}>
        <div className="marquee-track-left flex gap-4">
          {[...row1, ...row1].map((tech, i) => (
            <MarqueeCard key={`r1-${i}`} tech={tech} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="marquee-wrapper overflow-hidden" style={{ maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)', paddingLeft: '20%', paddingRight: '20%' }}>
        <div className="marquee-track-right flex gap-4">
          {[...row2, ...row2].map((tech, i) => (
            <MarqueeCard key={`r2-${i}`} tech={tech} />
          ))}
        </div>
      </div>

      {/* Currently exploring */}
      <div className="container mx-auto px-4">
        <motion.div
          ref={exploreRef}
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 12 }}
          animate={exploreInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="text-white/40 text-sm mb-3 tracking-wide">Currently exploring</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['LangGraph', 'LangChain', 'n8n', 'LlamaIndex', 'Ollama', 'AI Agents', 'Machine Learning'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-[8px] text-sm font-bold"
                style={{ background: 'rgba(203,183,251,0.06)', border: '1px solid rgba(203,183,251,0.15)', color: '#cbb7fb' }}
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