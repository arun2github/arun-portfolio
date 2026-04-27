'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, useSpring, useScroll } from 'framer-motion';
import { Github, Instagram, Linkedin, ArrowUpRight, Play } from 'lucide-react';
import dynamic from 'next/dynamic';

const HeroBackground = dynamic(() => import('./HeroBackground'), { ssr: false });

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/imarunjnv/",
  instagram: "https://www.instagram.com/thefreeguy.dev/",
  github: "https://github.com/arun2github",
};

/* ── Rotating Badge ───────────────────────────── */
const RotatingBadge = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    className="absolute -top-6 -right-6 w-20 h-20 md:w-24 md:h-24"
    initial={{ opacity: 0, scale: 0, rotate: -180 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ delay: delay + 0.8, duration: 0.8, type: 'spring', stiffness: 150 }}
  >
    <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_12s_linear_infinite]">
      <defs>
        <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
      </defs>
      <text fill="rgba(203,183,251,0.6)" fontSize="8.5" fontWeight="600" letterSpacing="2.5">
        <textPath href="#circle">AVAILABLE FOR WORK • AVAILABLE FOR WORK • </textPath>
      </text>
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-3 h-3 rounded-full" style={{ background: '#cbb7fb', boxShadow: '0 0 12px rgba(203,183,251,0.5)' }} />
    </div>
  </motion.div>
);

/* ── Marquee Text ─────────────────────────────── */
const MarqueeRow = ({ text, direction = 'left', speed = 25 }: { text: string; direction?: 'left' | 'right'; speed?: number }) => {
  const items = Array(6).fill(text);
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className={direction === 'left' ? 'marquee-track-left' : 'marquee-track-right'}
        style={{ animationDuration: speed + 's' }}
      >
        <div className="flex items-center gap-6">
          {items.map((t, i) => (
            <span key={i} className="flex items-center gap-6">
              <span className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black tracking-tighter"
                style={{ WebkitTextStroke: '1px rgba(203,183,251,0.12)', color: 'transparent' }}>
                {t}
              </span>
              <span className="w-3 h-3 rounded-full" style={{ background: 'rgba(203,183,251,0.15)' }} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.92]);
  const textY = useTransform(scrollY, [0, 600], [0, -80]);
  const imageY = useTransform(scrollY, [0, 600], [0, 60]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const imageRotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const imageRotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    setMounted(true);
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
      style={{ background: '#08080c' }}
    >
      {/* Background */}
      {mounted && <HeroBackground />}

      {/* Ambient light blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full float-orb"
          style={{ background: 'radial-gradient(circle, rgba(203,183,251,0.06), transparent 60%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.04), transparent 60%)', filter: 'blur(60px)', animation: 'float-orb 10s ease-in-out infinite reverse' }} />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 min-h-screen flex flex-col"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        {/* Top Bar — Role + Location */}
        <div className="w-full px-6 lg:px-14 pt-28 md:pt-32">
          <motion.div
            className="flex items-center justify-between max-w-7xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px]" style={{ background: 'rgba(203,183,251,0.3)' }} />
              <span className="text-xs font-medium tracking-[0.2em] uppercase" style={{ color: 'rgba(203,183,251,0.5)' }}>
                Flutter & AI Engineer
              </span>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <span className="text-xs font-medium tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.25)' }}>
                Based in India
              </span>
              <div className="w-8 h-[1px]" style={{ background: 'rgba(255,255,255,0.1)' }} />
            </div>
          </motion.div>
        </div>

        {/* Center — Massive Headline + Photo */}
        <div className="flex-1 flex items-center w-full px-6 lg:px-14">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center">

              {/* Left — Headline */}
              <motion.div style={{ y: textY }}>
                {/* Small intro */}
                <motion.p
                  className="text-sm md:text-base font-medium mb-6 flex items-center gap-3"
                  style={{ color: 'rgba(203,183,251,0.6)' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <span className="w-10 h-[1px]" style={{ background: 'rgba(203,183,251,0.3)' }} />
                  Hey, I'm Arun 👋
                </motion.p>

                {/* Massive headline */}
                <motion.h1
                  className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-black leading-[0.88] tracking-[-0.04em] mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    className="overflow-hidden"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="block text-white">I build</span>
                  </motion.div>
                  <motion.div
                    className="overflow-hidden"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="block text-gradient-brand">products</span>
                  </motion.div>
                  <motion.div
                    className="overflow-hidden"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="block text-white">that ship.</span>
                  </motion.div>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                  className="text-base md:text-lg max-w-lg leading-relaxed mb-10"
                  style={{ color: 'rgba(255,255,255,0.35)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  5+ years crafting high-stakes apps in banking, healthcare & e-commerce.
                  From spec to production — no hand-holding required.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  className="flex flex-col sm:flex-row items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.95, duration: 0.5 }}
                >
                  <a
                    href="#contact"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 font-bold text-sm rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(203,183,251,0.2)]"
                    style={{ background: '#cbb7fb', color: '#08080c' }}
                  >
                    <span className="relative z-10">Let's Talk</span>
                    <ArrowUpRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                  <a
                    href="#projects"
                    className="group inline-flex items-center gap-3 px-8 py-4 font-semibold text-sm rounded-full transition-all duration-300"
                    style={{ border: '1px solid rgba(203,183,251,0.15)', color: 'rgba(255,255,255,0.5)' }}
                  >
                    <Play size={14} style={{ color: '#cbb7fb' }} />
                    <span className="group-hover:text-white transition-colors">See My Work</span>
                  </a>
                </motion.div>
              </motion.div>

              {/* Right — Photo with 3D tilt */}
              <motion.div
                className="relative flex items-center justify-center lg:justify-end"
                style={{ y: imageY, rotateX: imageRotateX, rotateY: imageRotateY, perspective: 1000 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                <div className="relative">
                  <RotatingBadge />

                  {/* Photo container */}
                  <div className="relative w-[260px] sm:w-[300px] lg:w-[340px] aspect-[3/4] rounded-[2rem] overflow-hidden"
                    style={{
                      boxShadow: '0 25px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(203,183,251,0.08)',
                    }}>
                    <Image
                      src="/images/pic1.jpeg"
                      alt="Arun Kumar"
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 768px) 260px, 340px"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0" style={{
                      background: 'linear-gradient(180deg, transparent 50%, rgba(8,8,12,0.8) 100%)',
                    }} />
                    {/* Bottom info */}
                    <div className="absolute bottom-0 inset-x-0 p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-bold text-sm">Arun Kumar</p>
                          <p className="text-white/30 text-xs mt-0.5">Full-Stack Developer</p>
                        </div>
                        <div className="flex gap-2">
                          {[
                            { href: socialLinks.linkedin, icon: <Linkedin size={14} /> },
                            { href: socialLinks.github, icon: <Github size={14} /> },
                            { href: socialLinks.instagram, icon: <Instagram size={14} /> },
                          ].map(({ href, icon }, i) => (
                            <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                              style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}>
                              {icon}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating stat card — top left */}
                  <motion.div
                    className="absolute -left-8 top-1/4 glass-card rounded-2xl px-4 py-3 shadow-2xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 }}
                  >
                    <p className="text-2xl font-black text-gradient-brand leading-none">20+</p>
                    <p className="text-[10px] mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>Projects Shipped</p>
                  </motion.div>

                  {/* Floating stat card — bottom right */}
                  <motion.div
                    className="absolute -right-8 bottom-1/3 glass-card rounded-2xl px-4 py-3 shadow-2xl"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.25 }}
                  >
                    <p className="text-2xl font-black text-gradient-brand leading-none">50K+</p>
                    <p className="text-[10px] mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>Daily Users</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom — Marquee + Scroll */}
        <div className="w-full pb-6">
          {/* Marquee */}
          <div className="marquee-wrapper mb-6 opacity-40">
            <MarqueeRow text="FLUTTER" direction="left" speed={30} />
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <a href="#about" className="flex flex-col items-center gap-2 group">
              <span className="text-[9px] tracking-[0.3em] uppercase font-medium"
                style={{ color: 'rgba(255,255,255,0.15)' }}>
                Scroll
              </span>
              <motion.div
                className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <motion.div
                  className="w-1 h-1.5 rounded-full"
                  style={{ background: '#cbb7fb' }}
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;