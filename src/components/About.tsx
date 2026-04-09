'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Download, ArrowRight, Briefcase, GraduationCap, Cpu, Heart } from 'lucide-react';
import { useScrollDownInView } from '@/lib/useScrollDownInView';

const timeline = [
  {
    icon: GraduationCap,
    year: '2015 – 2019',
    label: 'B.Tech — Computer Science',
    sub: 'GNIOT, Greater Noida',
  },
  {
    icon: Cpu,
    year: '2019 – 2021',
    label: 'Freelancer',
    sub: 'Web & App Projects · Independent',
  },
  {
    icon: Briefcase,
    year: 'Sep 2021 – Apr 2023',
    label: 'Associate Dev → React Developer',
    sub: 'Celebal Technology · Schrocken Inc.',
  },
  {
    icon: Briefcase,
    year: 'Jun 2023 – Aug 2025',
    label: 'Flutter Developer — AU Small Finance Bank',
    sub: 'AU HUB · Sampark · Drishti · Niyantaran',
  },
  {
    icon: Cpu,
    year: 'Apr 2025 – Present',
    label: 'Independent Consultant',
    sub: 'Flutter & AI · 15+ clients · Global',
  },
  {
    icon: GraduationCap,
    year: 'Pursuing',
    label: 'M.Tech — AI & Data Science',
    sub: 'IIT Patna',
  },
];

const values = [
  {
    title: 'Client first, code second',
    body: 'Every project starts with a business problem, not a tech stack. I figure out what success looks like for you before writing a single line.',
  },
  {
    title: 'Async by default',
    body: 'Weekly Loom updates, shared task boards, Figma previews before builds. You always know where things stand.',
  },
  {
    title: 'Own it end-to-end',
    body: 'From architecture to App Store submission. No handoffs, no "that\'s not my part". I carry it to the finish line.',
  },
];

const About = () => {
  const [labelRef, labelInView] = useScrollDownInView<HTMLDivElement>();
  const [topRef, topInView] = useScrollDownInView<HTMLDivElement>();
  const [bottomRef, bottomInView] = useScrollDownInView<HTMLDivElement>();

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#0D0F14] overflow-hidden">

      <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] rounded-full blur-3xl" style={{background:'rgba(203,183,251,0.04)'}} />

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">

        {/* Section label */}
        <motion.div
          ref={labelRef}
          className="flex items-center gap-3 mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={labelInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="h-px w-10" style={{background:'#cbb7fb'}} />
          <span className="text-xs font-bold tracking-[0.18em] uppercase" style={{color:'#cbb7fb'}}>About</span>
        </motion.div>

        {/* ── TOP: Photo + Story ─────────────────────── */}
        <div ref={topRef} className="grid lg:grid-cols-5 gap-12 lg:gap-16 mb-20 items-start">

          {/* Photo */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={topInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#1E2330]">
              <Image
                src="/images/prImg.jpg"
                alt="Arun Kumar at work"
                width={500} height={700}
                className="w-full h-auto object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 px-5 py-5">
                <p className="text-white font-bold text-base">Arun Kumar</p>
                <p className="text-[#8892B0] text-xs mt-0.5">Full-Stack Dev & AI Engineer · Bengaluru</p>
              </div>
            </div>
          </motion.div>

          {/* Story */}
          <motion.div
            className="lg:col-span-3 flex flex-col gap-6"
            initial={{ opacity: 0, y: 24 }}
            animate={topInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-[0.96] mb-6" style={{letterSpacing:'-0.02em'}}>
              When you hire me, you get someone who&apos;s
              <span style={{color:'#cbb7fb'}}> done this before — at scale</span>
            </h2>

            <div className="space-y-4 text-white/50 text-base leading-relaxed">
              <p>
                I have <span className="text-white font-medium">5+ years</span> of professional experience — from building AI chatbots at Celebal to supply-chain apps at <span className="text-white font-medium">Collabrix Inc.</span>, to two years deep inside <span className="text-white font-medium">AU Small Finance Bank</span>. At AU I owned the full product cycle on four major internal platforms: <span className="text-white font-medium">AU HUB</span> (50K+ daily active users, 50+ micro-apps), <span className="text-white font-medium">Sampark</span> (task &amp; lead management for RMs with Exotel calling integration), <span className="text-white font-medium">Drishti</span> (3D compliance dashboard for HODs &amp; SPOCs), and <span className="text-white font-medium">Niyantaran</span>. All production, all regulated, all zero-downtime. That&apos;s where I earned the <span className="text-amber-400 font-medium">Star Award</span>.
              </p>
              <p>
                Beyond product work, I&apos;ve designed and built <span className="text-white font-medium">10+ business portfolios</span> for clients across industries — landing pages, multi-section sites with booking flows, contact forms, and brand storytelling — each crafted to convert visitors into leads.
              </p>
              <p>
                I don&apos;t need hand-holding. I ask the right questions upfront, flag risks early, and deliver something that works in production — not just in a demo. Whether it&apos;s a <span className="text-white font-medium">startup&apos;s first app</span>, a <span className="text-white font-medium">business portfolio</span>, or a <span className="text-white font-medium">complex enterprise integration</span>, I bring the same discipline. Currently deepening that with an <span className="text-white font-medium">M.Tech in AI & Data Science at IIT Patna</span>.
              </p>
              <p>
                Off the clock: music production, cooking experiments, and losing sleep over chess puzzles.{' '}
                <Heart size={13} className="inline text-rose-400 mb-0.5" />
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/about-details" data-nav-link
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[8px] font-bold text-sm transition-colors duration-200"
                style={{background:'#e9e5dd', color:'#1b1938'}}
              >
                Full Story <ArrowRight size={14} />
              </Link>
              <a href="/Arun_Resume.pdf" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[8px] font-semibold text-sm transition-colors duration-200 hover:text-white"
                style={{border:'1px solid rgba(255,255,255,0.10)', color:'rgba(203,183,251,0.8)', background:'transparent'}}
              >
                <Download size={14} /> Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── BOTTOM: Timeline + Values ──────────────── */}
        <div ref={bottomRef} className="grid lg:grid-cols-3 gap-10">

          {/* Timeline */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 24 }}
            animate={bottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-white/40 text-xs font-bold tracking-[0.18em] uppercase mb-6">Journey</p>
            <div className="relative flex flex-col gap-0">
              {/* Vertical line */}
              <div className="absolute left-[17px] top-4 bottom-4 w-px bg-[#1E2330]" />
              {timeline.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex gap-5 pb-5 last:pb-0"
                  initial={{ opacity: 0, x: -16 }}
                  animate={bottomInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0 w-9 h-9 rounded-[8px] flex items-center justify-center" style={{background:'rgba(203,183,251,0.06)', border:'1px solid rgba(203,183,251,0.15)'}}>
                    <item.icon size={15} style={{color:'#cbb7fb'}} />
                  </div>
                  <div className="pt-1">
                    <p className="text-white/35 text-[11px] font-bold tracking-wide mb-0.5">{item.year}</p>
                    <p className="text-white font-bold text-sm">{item.label}</p>
                    <p className="text-white/40 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Working values */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={bottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p className="text-white/40 text-xs font-bold tracking-[0.18em] uppercase mb-6">How I work</p>
            <div className="flex flex-col gap-4">
              {values.map((v, i) => (
                <motion.div key={v.title}
                  className="p-5 rounded-2xl transition-colors duration-300"
                  style={{background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.06)'}}
                  initial={{ opacity: 0, y: 12 }}
                  animate={bottomInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <p className="text-white font-bold text-sm mb-1.5">{v.title}</p>
                  <p className="text-white/45 text-sm leading-relaxed">{v.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
