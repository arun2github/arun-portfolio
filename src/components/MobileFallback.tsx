'use client';

import React, { useState, useEffect } from 'react';
import { profileData, socialMediaLinks } from '@/data/portfolioData';
import { Mail, Linkedin, Github, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const socialIconMap: { [key: string]: React.ElementType } = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
};

const MobileFallback = () => {
  const [showMobileView, setShowMobileView] = useState(false);
  const simpleName = profileData.name.replace("I'm ", '').replace(',', '');
  const title1 = profileData.title1 || 'Mobile Application Developer';
  const title2 = profileData.title2 || 'Web Developer';

  useEffect(() => {
    const pref = localStorage.getItem('mobileViewEnabled');
    if (pref === 'true') setShowMobileView(true);
  }, []);

  const handleViewOnMobile = () => {
    setShowMobileView(true);
    localStorage.setItem('mobileViewEnabled', 'true');
    window.dispatchEvent(new CustomEvent('mobileViewEnabled'));
  };

  if (showMobileView) return null;

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center p-6 md:hidden overflow-hidden relative"
      style={{ background: 'linear-gradient(175deg, #1b1938 0%, #130f2a 35%, #0D0F14 65%)' }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Ambient glows */}
      <div className="absolute -top-40 -left-20 w-80 h-80 rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(203,183,251,0.07)' }} />
      <div className="absolute -bottom-20 right-0 w-64 h-64 rounded-full blur-[100px] pointer-events-none" style={{ background: 'rgba(203,183,251,0.05)' }} />

      <div className="relative z-10 w-full max-w-sm mx-auto">

        {/* Available badge */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[8px] text-xs font-bold"
            style={{ background: 'rgba(203,183,251,0.08)', border: '1px solid rgba(203,183,251,0.20)', color: '#cbb7fb' }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#cbb7fb' }} />
            Available for new projects
          </div>
        </motion.div>

        {/* Name */}
        <motion.div variants={item} className="text-center mb-6">
          <h1 className="text-4xl font-bold text-white mb-2" style={{ lineHeight: 0.96, letterSpacing: '-0.02em' }}>
            {simpleName}
          </h1>
          <p className="text-base font-medium" style={{ color: '#cbb7fb' }}>{title1}</p>
          <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>& {title2}</p>
        </motion.div>

        {/* Card */}
        <motion.div
          variants={item}
          className="rounded-2xl p-6 mb-6"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-white font-semibold text-base mb-2">Best experienced on desktop</p>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.50)' }}>
            This portfolio features interactive 3D animations, custom cursor effects, and immersive transitions — best enjoyed on a larger screen.
          </p>
        </motion.div>

        {/* View on Mobile CTA */}
        <motion.div variants={item} className="flex flex-col gap-3 mb-8">
          <button
            onClick={handleViewOnMobile}
            data-button
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-[8px] font-bold text-sm transition-colors duration-200"
            style={{ background: '#e9e5dd', color: '#1b1938' }}
          >
            View Mobile Version
            <ArrowRight size={14} />
          </button>
          <a
            href="/ARUN_RESUME.pdf"
            download
            data-button
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-[8px] font-semibold text-sm transition-all duration-200"
            style={{ border: '1px solid rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.60)' }}
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="flex justify-center gap-3">
          {socialMediaLinks.map((social) => {
            const Icon = socialIconMap[social.name.toLowerCase()] as React.ComponentType<{ size?: number }>;
            if (!Icon) return null;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-[8px] transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.50)' }}
              >
                <Icon size={16} />
              </a>
            );
          })}
          {profileData.email && (
            <a
              href={`mailto:${profileData.email}`}
              className="w-10 h-10 flex items-center justify-center rounded-[8px] transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.50)' }}
            >
              <Mail size={16} />
            </a>
          )}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.p
        variants={item}
        className="absolute bottom-6 text-center text-xs"
        style={{ color: 'rgba(255,255,255,0.25)' }}
      >
        {new Date().getFullYear()} · {simpleName}
      </motion.p>
    </motion.div>
  );
};

export default MobileFallback;
