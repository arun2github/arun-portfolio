'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

/* ── Magnetic Nav Link ────────────────────────── */
const MagneticNavLink = ({
  label,
  href,
  isActive,
  onClick,
}: {
  label: string;
  href: string;
  isActive: boolean;
  onClick?: () => void;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative px-4 py-2 text-sm font-medium rounded-[10px] transition-all duration-300 ${
        isActive
          ? 'text-white'
          : 'text-white/45 hover:text-white/80'
      }`}
    >
      {isActive && (
        <motion.div
          layoutId="nav-active-pill"
          className="absolute inset-0 rounded-[10px]"
          style={{
            background: 'rgba(203, 183, 251, 0.08)',
            border: '1px solid rgba(203, 183, 251, 0.12)',
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      )}
      <span className="relative z-10">{label}</span>
      {isActive && (
        <motion.span
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
          style={{ background: '#cbb7fb' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 }}
        />
      )}
    </motion.a>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
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
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
        <motion.div
          className="h-full origin-left"
          style={{
            background: 'linear-gradient(90deg, #cbb7fb, #a78bfa, #818cf8)',
            width: `${scrollProgress}%`,
          }}
        />
      </div>

      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={
          scrolled
            ? {
                background: 'rgba(13, 15, 20, 0.75)',
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                borderBottom: '1px solid rgba(203, 183, 251, 0.06)',
                boxShadow:
                  '0 4px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.03)',
              }
            : {
                background: 'transparent',
              }
        }
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo / Name */}
            <a
              href="#hero"
              className="flex items-center gap-2.5 group"
              aria-label="Arun Dev Studio - Home"
            >
              <div className="relative">
                <img
                  src="/images/arun_dev_stuido_logo.png"
                  alt="Arun Dev Studio"
                  className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(203,183,251,0.15), transparent 70%)',
                  }}
                />
              </div>
              <span className="text-white font-extrabold text-lg tracking-tight transition-colors duration-300 group-hover:text-[#cbb7fb]">
                Arun Dev Studio
                <span className="text-[#cbb7fb]">.</span>
              </span>
            </a>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <MagneticNavLink
                  key={link.label}
                  label={link.label}
                  href={link.href}
                  isActive={activeSection === link.href.replace('#', '')}
                />
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="/ARUN_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn relative px-5 py-2.5 font-bold rounded-[10px] text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(203,183,251,0.15)] hover:scale-[1.02]"
                style={{
                  background: '#e9e5dd',
                  color: '#1b1938',
                }}
              >
                Resume
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 text-white/50 hover:text-white transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
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
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop with blur */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'rgba(13, 15, 20, 0.85)',
                backdropFilter: 'blur(20px)',
              }}
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Drawer */}
            <motion.div
              className="absolute top-0 right-0 h-full w-80 flex flex-col pt-24 pb-10 px-8"
              style={{
                background:
                  'linear-gradient(135deg, rgba(13,15,20,0.98), rgba(20,22,30,0.98))',
                borderLeft: '1px solid rgba(203, 183, 251, 0.08)',
                boxShadow: '-20px 0 60px rgba(0,0,0,0.5)',
              }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Decorative orb */}
              <div
                className="absolute top-20 right-10 w-32 h-32 rounded-full pointer-events-none opacity-30"
                style={{
                  background:
                    'radial-gradient(circle, rgba(203,183,251,0.15), transparent 70%)',
                  filter: 'blur(30px)',
                }}
              />

              <div className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={handleMobileLink}
                    className="block py-3.5 text-lg font-medium transition-colors duration-200 border-b"
                    style={{
                      color:
                        activeSection === link.href.replace('#', '')
                          ? '#cbb7fb'
                          : 'rgba(255,255,255,0.45)',
                      borderColor: 'rgba(255,255,255,0.04)',
                    }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.15, duration: 0.3 }}
                  >
                    <span
                      className="text-xs font-mono mr-3"
                      style={{ color: 'rgba(203,183,251,0.3)' }}
                    >
                      0{i + 1}
                    </span>
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <motion.a
                  href="/ARUN_RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleMobileLink}
                  className="text-center py-3.5 rounded-[10px] text-sm font-bold transition-colors duration-200"
                  style={{
                    border: '1px solid rgba(203,183,251,0.15)',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Download Resume
                </motion.a>
                <motion.a
                  href="#contact"
                  onClick={handleMobileLink}
                  className="text-center py-3.5 rounded-[10px] text-sm font-bold"
                  style={{ background: '#e9e5dd', color: '#1b1938' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Hire Me
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;