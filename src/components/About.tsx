'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Download, ArrowUpRight, Briefcase, GraduationCap, Cpu, Heart, Award, Zap, Globe, Target } from 'lucide-react';

const timeline = [
  { icon: GraduationCap, year: '2015 – 2019', label: 'B.Tech — Computer Science', sub: 'GNIOT, Greater Noida' },
  { icon: Cpu, year: '2019 – 2021', label: 'Freelancer', sub: 'Web & App Projects · Independent' },
  { icon: Briefcase, year: 'Sep 2021 – Apr 2023', label: 'Associate Dev → React Developer', sub: 'Celebal Technology · Schrocken Inc.' },
  { icon: Briefcase, year: 'Jun 2023 – Aug 2025', label: 'Flutter Developer — AU Small Finance Bank', sub: 'AU HUB · Sampark · Drishti · Niyantaran' },
  { icon: Cpu, year: 'Apr 2025 – Present', label: 'Independent Consultant', sub: 'Flutter & AI · 15+ clients · Global' },
  { icon: GraduationCap, year: 'Pursuing', label: 'M.Tech — AI & Data Science', sub: 'IIT Patna' },
];

const values = [
  { icon: Target, title: 'Outcome-driven', body: 'Every project starts with a business problem, not a tech stack.' },
  { icon: Zap, title: 'Async by default', body: 'Weekly Loom updates, shared boards, Figma previews before builds.' },
  { icon: Globe, title: 'End-to-end ownership', body: 'From architecture to App Store. No handoffs, no excuses.' },
];

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Shipped' },
  { value: '50K+', label: 'Daily Users' },
  { value: '15+', label: 'Happy Clients' },
];

/* ── Animated Counter ─────────────────────────── */
const AnimatedStat = ({ value, label, delay }: { value: string; label: string; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative p-6 md:p-8 rounded-[1.5rem] overflow-hidden"
        style={{
          background: 'rgba(203,183,251,0.03)',
          border: '1px solid rgba(203,183,251,0.06)',
        }}>
        {/* Hover glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'radial-gradient(circle at center, rgba(203,183,251,0.06), transparent 70%)' }} />
        <p className="relative text-4xl md:text-5xl font-black text-gradient-brand leading-none mb-2">{value}</p>
        <p className="relative text-xs font-medium tracking-[0.15em] uppercase" style={{ color: 'rgba(255,255,255,0.25)' }}>{label}</p>
      </div>
    </motion.div>
  );
};

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden" style={{ background: '#08080c' }}>
      {/* Ambient */}
      <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(203,183,251,0.04), transparent 60%)', filter: 'blur(80px)' }} />

      <div className="relative z-10 container mx-auto px-6 lg:px-14 max-w-7xl">

        {/* ── Section Header — Large Typography ────── */}
        <div ref={headingRef} className="mb-16 md:mb-24">
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={headingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="h-px w-12" style={{ background: 'rgba(203,183,251,0.3)' }} />
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: 'rgba(203,183,251,0.5)' }}>About</span>
          </motion.div>

          <motion.h2
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-black leading-[0.9] tracking-[-0.03em]"
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <motion.div className="overflow-hidden" initial={{ y: '100%' }} animate={headingInView ? { y: 0 } : {}} transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <span className="block text-white">Built for</span>
            </motion.div>
            <motion.div className="overflow-hidden" initial={{ y: '100%' }} animate={headingInView ? { y: 0 } : {}} transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <span className="block text-gradient-brand">production,</span>
            </motion.div>
            <motion.div className="overflow-hidden" initial={{ y: '100%' }} animate={headingInView ? { y: 0 } : {}} transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <span className="block text-white">not just demos.</span>
            </motion.div>
          </motion.h2>
        </div>

        {/* ── Content Grid — Asymmetric ─────────────── */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-20 md:mb-28 items-start">

          {/* Left — Photo (spans 5 cols) */}
          <motion.div
            className="lg:col-span-5"
            style={{ y: parallaxY }}
          >
            <div className="relative group">
              <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/5]"
                style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(203,183,251,0.06)' }}>
                <Image
                  src="/images/prImg.jpg"
                  alt="Arun Kumar at work"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(8,8,12,0.85) 100%)' }} />
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Award size={12} style={{ color: '#cbb7fb' }} />
                    <span className="text-xs font-medium" style={{ color: 'rgba(203,183,251,0.7)' }}>Star Award Winner</span>
                  </div>
                  <p className="text-white font-bold text-lg">Arun Kumar</p>
                  <p className="text-white/30 text-xs mt-0.5">Full-Stack Dev & AI Engineer</p>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-3 shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-xl font-black text-gradient-brand leading-none">IIT</p>
                <p className="text-[9px] mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Patna</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Story + Values (spans 7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Story */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-5 text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <p>
                  I have <span className="text-white font-medium">5+ years</span> of professional experience — from building AI chatbots at Celebal to supply-chain apps at <span className="text-white font-medium">Collabrix Inc.</span>, to two years deep inside <span className="text-white font-medium">AU Small Finance Bank</span>. At AU I owned the full product cycle on four major internal platforms: <span className="text-white font-medium">AU HUB</span> (50K+ daily active users, 50+ micro-apps), <span className="text-white font-medium">Sampark</span>, <span className="text-white font-medium">Drishti</span>, and <span className="text-white font-medium">Niyantaran</span>. All production, all regulated, all zero-downtime.
                </p>
                <p>
                  Beyond product work, I've designed and built <span className="text-white font-medium">10+ business portfolios</span> for clients across industries — landing pages, multi-section sites with booking flows, contact forms, and brand storytelling — each crafted to convert visitors into leads.
                </p>
                <p>
                  I don't need hand-holding. I ask the right questions upfront, flag risks early, and deliver something that works in production. Currently deepening that with an <span className="text-white font-medium">M.Tech in AI & Data Science at IIT Patna</span>.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/about-details"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(203,183,251,0.2)]"
                  style={{ background: '#cbb7fb', color: '#08080c' }}
                >
                  Full Story
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <a
                  href="/Arun_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300"
                  style={{ border: '1px solid rgba(203,183,251,0.12)', color: 'rgba(255,255,255,0.5)' }}
                >
                  <Download size={14} /> Resume
                </a>
              </div>
            </motion.div>

            {/* Values — Horizontal cards */}
            <div className="grid sm:grid-cols-3 gap-3">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.title}
                    className="group p-5 rounded-[1.2rem] transition-all duration-400"
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.04)',
                    }}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{
                      background: 'rgba(203,183,251,0.04)',
                      borderColor: 'rgba(203,183,251,0.1)',
                    }}
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: 'rgba(203,183,251,0.06)', border: '1px solid rgba(203,183,251,0.1)' }}>
                      <Icon size={16} style={{ color: '#cbb7fb' }} />
                    </div>
                    <p className="text-white font-bold text-sm mb-1">{v.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.3)' }}>{v.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Stats — Large Grid ────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-20 md:mb-28">
          {stats.map((stat, i) => (
            <AnimatedStat key={stat.label} value={stat.value} label={stat.label} delay={i * 0.1} />
          ))}
        </div>

        {/* ── Timeline — Horizontal Scroll ──────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8" style={{ background: 'rgba(203,183,251,0.2)' }} />
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: 'rgba(203,183,251,0.4)' }}>Journey</span>
          </div>

          <div className="overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
            <div className="flex gap-4 min-w-max">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="group relative w-[260px] flex-shrink-0 p-6 rounded-[1.2rem] transition-all duration-400"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.04)',
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{
                    background: 'rgba(203,183,251,0.04)',
                    borderColor: 'rgba(203,183,251,0.1)',
                  }}
                >
                  {/* Year badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4"
                    style={{ background: 'rgba(203,183,251,0.06)', border: '1px solid rgba(203,183,251,0.1)' }}>
                    <item.icon size={11} style={{ color: '#cbb7fb' }} />
                    <span className="text-[10px] font-bold tracking-wide" style={{ color: 'rgba(203,183,251,0.7)' }}>{item.year}</span>
                  </div>

                  <p className="text-white font-bold text-sm mb-1 transition-colors duration-300 group-hover:text-[#cbb7fb]">{item.label}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>{item.sub}</p>

                  {/* Index number */}
                  <span className="absolute top-4 right-4 text-[10px] font-mono" style={{ color: 'rgba(255,255,255,0.08)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;