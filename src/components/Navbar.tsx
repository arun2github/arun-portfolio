'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleMobileLink = () => setMobileOpen(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={scrolled ? {
          background: 'rgba(13, 15, 20, 0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid #1E2330',
          boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
        } : {
          background: 'transparent',
        }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">

            {/* Logo / Name */}
            <a href="#hero" className="flex items-center gap-2 group">
              <span className="text-white font-extrabold text-lg tracking-tight group-hover:text-[#cbb7fb] transition-colors duration-300">
                Arun<span style={{color:'#cbb7fb'}}>.</span>
              </span>
            </a>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium rounded-[8px] transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-[rgba(203,183,251,0.08)]'
                        : 'text-white/50 hover:text-white hover:bg-[rgba(203,183,251,0.05)]'
                    }`}
                    style={isActive ? { color: '#cbb7fb' } : {}}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="/ARUN_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-[#e9e5dd] text-[#1b1938] font-bold rounded-[8px] text-sm hover:bg-white transition-colors duration-200"
              >
                Resume
              </a>
              {/* <a
                href="#contact"
                className="px-5 py-2 bg-[#e9e5dd] text-[#1b1938] font-bold rounded-[8px] text-sm hover:bg-white transition-colors duration-200"
              >
                Hire Me
              </a> */}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 text-[#8892B0] hover:text-white transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[#0D0F14]/70 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="absolute top-0 right-0 h-full w-72 bg-[#0D0F14] border-l border-[#1E2330] flex flex-col pt-20 pb-10 px-8 gap-2 shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleMobileLink}
                  className="py-3 text-base text-white/50 hover:text-white font-medium border-b border-white/8 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="/ARUN_RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleMobileLink}
                  className="text-center py-3 border border-white/10 text-white/50 hover:text-white rounded-[8px] text-sm font-medium transition-colors duration-200"
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  onClick={handleMobileLink}
                  className="text-center py-3 bg-[#e9e5dd] text-[#1b1938] font-bold rounded-[8px] text-sm"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
