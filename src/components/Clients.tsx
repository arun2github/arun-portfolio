'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useScrollDownInView } from '@/lib/useScrollDownInView';

type Entity = {
  id: string;
  name: string;
  logo: string;
  category: string;
  year: string;
  initials?: string;
  website?: string;
  needsWhiteBg?: boolean;
};

const CLIENTS: Entity[] = [
  {
    id: 'strenva',
    name: 'Strenva Technologies',
    logo: '/images/strenva.png',
    category: 'Web Platform',
    year: '2024',
    website: '#',
  },
  {
    id: 'vahaan-bazar',
    name: 'Vahaan Bazar',
    logo: '/images/vb_logo.png',
    category: 'Mobile + Web',
    year: '2025',
    website: 'https://www.vahaanbazar.in/',
    needsWhiteBg: true,
  },
  {
    id: 'tura',
    name: 'Tura Municipal Board',
    logo: '/images/tmb_logo.jpeg',
    category: 'Gov Portal',
    year: '2024',
    website: 'http://turamunicipalboard.com/',
    needsWhiteBg: true,
  },
  {
    id: 'tpg',
    name: 'The Pets Garden',
    logo: '/images/company/tpg_logo.png',
    category: 'Pet E-Commerce',
    year: '2025',
    website: 'https://thepetsgardens.netlify.app/',
    needsWhiteBg: true,
  },
  {
    id: 'lwn',
    name: 'Learn with Nibesh',
    logo: '',
    category: 'EdTech · LMS',
    year: '2025',
    initials: 'LN',
    website: 'https://learnwithnibesh.netlify.app/',
  },
];

const EMPLOYERS: Entity[] = [
  {
    id: 'au',
    name: 'AU Small Finance Bank',
    logo: '/images/ausmall.jpg',
    category: 'FinTech · Banking',
    year: '2023 – 2025',
    needsWhiteBg: true,
  },
  {
    id: 'schrocken',
    name: 'Schrocken Inc.',
    logo: '/images/company/schrocken.png',
    category: 'Supply Chain SaaS',
    year: '2022 – 2023',
    needsWhiteBg: true,
  },
  {
    id: 'celebal',
    name: 'Celebal Technology',
    logo: '/images/company/ct.jpg',
    category: 'AI & Tech Services',
    year: '2021 – 2022',
    needsWhiteBg: true,
  },
];

function LogoItem({ entity, delay, inView }: { entity: Entity; delay: number; inView: boolean }) {
  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.45, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group flex flex-col items-center text-center gap-3 cursor-pointer"
      onClick={() => entity.website && entity.website !== '#' && window.open(entity.website, '_blank', 'noopener,noreferrer')}
    >
      {/* Logo area — no card, just the image */}
      <div className="relative w-full h-16 flex items-center justify-center">
        {entity.logo ? (
          <div
            className={`relative flex items-center justify-center transition-all duration-400 group-hover:scale-110 ${
              entity.needsWhiteBg
                ? 'rounded-xl px-3 py-2'
                : ''
            }`}
            style={entity.needsWhiteBg ? { background: 'rgba(255,255,255,0.92)' } : {}}
          >
            <Image
              src={entity.logo}
              alt={entity.name}
              width={120}
              height={48}
              style={{ objectFit: 'contain', maxHeight: 44, width: 'auto' }}
              className="transition-all duration-400 opacity-70 group-hover:opacity-100"
            />
          </div>
        ) : (
          <div
            className="flex items-center justify-center w-16 h-16 rounded-2xl text-xl font-black transition-all duration-400 group-hover:scale-110"
            style={{
              background: 'rgba(103,232,249,0.12)',
              color: '#67e8f9',
              letterSpacing: '-0.03em',
            }}
          >
            {entity.initials}
          </div>
        )}
      </div>

      {/* Name */}
      <p
        className="text-sm font-semibold transition-colors duration-300 group-hover:text-white/90"
        style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.3 }}
      >
        {entity.name}
      </p>

      {/* Category + year */}
      <p
        style={{
          fontSize: 11,
          color: 'rgba(255,255,255,0.25)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          lineHeight: 1.4,
        }}
      >
        {entity.category} · {entity.year}
      </p>
    </motion.div>
  );

  return inner;
}

const Clients = () => {
  const [heroRef, heroInView] = useScrollDownInView<HTMLDivElement>();
  const [clientsRef, clientsInView] = useScrollDownInView<HTMLDivElement>();
  const [empRef, empInView] = useScrollDownInView<HTMLDivElement>();

  return (
    <section id="clients" className="relative bg-[#0D0F14] overflow-hidden">

      {/* Hero band */}
      <div
        className="relative px-4 pt-24 pb-20"
        style={{
          background: 'linear-gradient(175deg, #1b1938 0%, #130f2a 55%, #0D0F14 100%)',
        }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(203,183,251,0.10) 0%, transparent 70%)',
          }}
        />

        <div ref={heroRef} className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.45 }}
            className="text-[11px] font-bold tracking-[0.18em] uppercase mb-5"
            style={{ color: '#cbb7fb' }}
          >
            Clients & Companies
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 540,
              lineHeight: 0.96,
              letterSpacing: '-0.02em',
              color: 'rgba(255,255,255,0.95)',
            }}
          >
            Trusted by businesses,<br />
            <span style={{ color: '#cbb7fb' }}>backed by results.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-6 max-w-lg mx-auto"
            style={{
              fontSize: 15,
              lineHeight: 1.55,
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            From government portals to consumer apps — every brand here is a real engagement with real delivery.
          </motion.p>
        </div>
      </div>

      {/* Body */}
      <div className="container mx-auto max-w-5xl px-6 pb-28">

        {/* ── Direct Clients ── */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
            <span
              style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#cbb7fb',
              }}
            >
              Direct Clients
            </span>
            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
          </div>

          <div ref={clientsRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-10">
            {CLIENTS.map((entity, i) => (
              <LogoItem key={entity.id} entity={entity} delay={i * 0.06} inView={clientsInView} />
            ))}
          </div>
        </div>

        {/* ── Employers ── */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
            <span
              style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.30)',
              }}
            >
              Companies I&apos;ve Worked At
            </span>
            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
          </div>

          <div ref={empRef} className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-10 max-w-xl mx-auto">
            {EMPLOYERS.map((entity, i) => (
              <LogoItem key={entity.id} entity={entity} delay={i * 0.08} inView={empInView} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Clients;
