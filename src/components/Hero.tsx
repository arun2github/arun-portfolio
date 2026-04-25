'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useMotionValue, animate } from 'framer-motion';
import { Github, Instagram, Linkedin, ArrowRight, CalendarCheck, ChevronRight } from 'lucide-react';
import { Parallax } from 'react-scroll-parallax';
import dynamic from 'next/dynamic';

const HeroBackground = dynamic(() => import('./HeroBackground'), { ssr: false });

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/imarunjnv/",
  instagram: "https://www.instagram.com/thefreeguy.dev/",
  github: "https://github.com/arun2github",
};

const headlineVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const wordVariants = {
  hidden: { opacity: 0, y: 28, rotateX: -30 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  const magnetX = useMotionValue(0);
  const magnetY = useMotionValue(0);

  const handleMagnetMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    magnetX.set((e.clientX - (rect.left + rect.width / 2)) * 0.35);
    magnetY.set((e.clientY - (rect.top + rect.height / 2)) * 0.35);
  };
  const handleMagnetLeave = () => {
    animate(magnetX, 0, { type: 'spring', stiffness: 300, damping: 28 });
    animate(magnetY, 0, { type: 'spring', stiffness: 300, damping: 28 });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden text-white"
      style={{ background: 'linear-gradient(175deg, #1b1938 0%, #130f2a 35%, #0D0F14 65%)' }}
    >
      {/* 3D Background */}
      <HeroBackground />

      {/* Ambient glows (kept on top of 3D canvas) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-60 -left-40 w-[700px] h-[700px] rounded-full blur-[150px]" style={{background:'rgba(203,183,251,0.05)'}} />
        <div className="absolute -bottom-40 right-0 w-[600px] h-[600px] rounded-full blur-[150px]" style={{background:'rgba(203,183,251,0.03)'}} />
      </div>

      <div className="relative z-10 w-full container mx-auto px-6 lg:px-14 py-28 lg:py-0 min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* ── LEFT ─────────────────────────────── */}
          <motion.div
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Studio name badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[8px] text-xs font-bold tracking-wide mb-4"
              style={{background:'rgba(203,183,251,0.08)', border:'1px solid rgba(203,183,251,0.20)', color:'#cbb7fb'}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              Arun Dev Studio — Software Development Company
            </motion.div>

            {/* Available badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[8px] text-xs font-bold tracking-wide mb-8"
              style={{background:'rgba(203,183,251,0.05)', border:'1px solid rgba(203,183,251,0.12)', color:'rgba(203,183,251,0.7)'}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{background:'#cbb7fb'}} />
              Available for new projects
            </motion.div>

            {/* Headline — word-by-word stagger */}
            <motion.h1
              className="text-[2.75rem] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold mb-5"
              style={{ lineHeight: 0.96, letterSpacing: '-0.02em', perspective: '800px' }}
              variants={headlineVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="inline-block">
                {['I', 'ship', 'products'].map((word) => (
                  <motion.span
                    key={word}
                    variants={wordVariants}
                    className="inline-block text-white"
                    style={{ marginRight: '0.28em' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <br />
              <span className="inline-block">
                {['startups', 'scale', 'on.'].map((word) => (
                  <motion.span
                    key={word}
                    variants={wordVariants}
                    className="inline-block"
                    style={{ marginRight: '0.28em', color: '#cbb7fb' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Value prop */}
  <p className="text-white/50 text-base md:text-lg leading-relaxed mb-8 max-w-[480px]">
  Not for hire — for outcomes. A product partner with 5+ years building in high-stakes environments: banking, government, healthcare, supply chain, and e-commerce. I take products from spec to production without hand-holding.
</p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 mb-10 w-full sm:w-auto">
              <motion.a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-[#1b1938] font-bold rounded-[8px] text-sm w-full sm:w-auto justify-center"
                style={{ background: '#e9e5dd', x: magnetX, y: magnetY }}
                onMouseMove={handleMagnetMove}
                onMouseLeave={handleMagnetLeave}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#fff')}
              >
                <CalendarCheck size={15} />
                Start a Project
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white/60 hover:text-white font-semibold rounded-[8px] text-sm transition-all duration-200 hover:bg-[rgba(203,183,251,0.05)] w-full sm:w-auto justify-center"
                style={{border:'1px solid rgba(255,255,255,0.10)'}}
              >
                View Case Studies
                <ChevronRight size={14} />
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-5">
              <span className="text-[#1E2330] text-xs">─</span>
              {[
                { href: socialLinks.linkedin, label: 'LinkedIn', icon: <Linkedin size={18} /> },
                { href: socialLinks.github,   label: 'GitHub',   icon: <Github size={18} /> },
                { href: socialLinks.instagram,label: 'Instagram',icon: <Instagram size={18} /> },
              ].map(({ href, label, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="text-[#8892B0] hover:text-[#A5B0FF] transition-colors duration-300">
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT — Photo ────────────────────── */}
          <motion.div
            className="flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
          >
            <Parallax translateY={[-8, 8]}>
              <div className="relative">
                {/* Glow */}
                <div className="absolute -inset-8 rounded-3xl blur-2xl pointer-events-none" style={{background:'radial-gradient(ellipse at center, rgba(203,183,251,0.08), transparent 70%)'}} />

              {/* Portrait card */}
              <div className="relative w-[280px] sm:w-[320px] lg:w-[360px] rounded-3xl overflow-hidden border border-[#1E2330] shadow-2xl">
                <Image
                  src="/images/pic1.jpeg"
                  alt="Arun Kumar — Flutter & AI Engineer"
                  width={400}
                  height={520}
                  className="w-full h-auto object-cover object-center"
                  priority
                />
                {/* Name overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0D0F14] via-[#0D0F14]/50 to-transparent px-5 py-5">
                <p className="text-white font-bold text-base">Arun Kumar</p>
                {/* <p className="text-white/40 text-xs mt-0.5">Flutter & AI · IIT Patna · ★ Star Award</p> */}
                </div>
              </div>

              {/* Chip — top left */}
              <motion.div
                className="absolute -top-4 -left-6 bg-[#13161D] border border-[#1E2330] rounded-2xl px-4 py-2.5 shadow-2xl"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <p className="font-bold text-2xl leading-none" style={{color:'#cbb7fb'}}>20+</p>
                <p className="text-white/40 text-xs mt-1">Project Shipped</p>
              </motion.div>

              {/* Chip — bottom right */}
              <motion.div
                className="absolute -bottom-4 -right-6 bg-[#13161D] border border-[#1E2330] rounded-2xl px-4 py-2.5 shadow-2xl"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.85 }}
              >
                <p className="font-bold text-2xl leading-none" style={{color:'#cbb7fb'}}>50K+</p>
                <p className="text-white/40 text-xs mt-1">Daily Users</p>
              </motion.div>
              </div>
            </Parallax>
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/25 hover:text-white/50 transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-[9px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowRight size={13} className="rotate-90" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
