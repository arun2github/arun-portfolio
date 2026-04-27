'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about', icon: '◆' },
  { label: 'Work', href: '#projects', icon: '◇' },
  { label: 'Experience', href: '#experience', icon: '○' },
  { label: 'Process', href: '#process', icon: '□' },
  { label: 'Contact', href: '#contact', icon: '△' },
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
      className={
        'relative px-4 py-2 text-sm font-medium rounded-[10px] transition-all duration-300 ' +
        (isActive ? 'text-white' : 'text-white/45 hover:text-white/80')
      }
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

/* ── Radial Mobile Menu ───────────────────────── */
const RadialMobileMenu = ({
  isOpen,
  onClose,
  activeSection,
}: {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}) => {
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const dx = e.changedTouches[0].clientX - touchStart.x;
    if (dx > 100) onClose();
    setTouchStart(null);
  };

  const radius = 140;
  const startAngle = -Math.PI;
  const endAngle = 0;
  const angleStep = (endAngle - startAngle) / (navLinks.length - 1);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={containerRef}
          className="fixed inset-0 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'rgba(13, 15, 20, 0.92)',
              backdropFilter: 'blur(30px)',
            }}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            {/* Center hub */}
            <motion.div
              className="absolute w-20 h-20 rounded-full flex items-center justify-center z-10"
              style={{
                background: 'rgba(203, 183, 251, 0.08)',
                border: '1px solid rgba(203, 183, 251, 0.15)',
                boxShadow: '0 0 60px rgba(203, 183, 251, 0.1)',
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <span className="text-[#cbb7fb] text-xl font-bold">A</span>
            </motion.div>

            {/* Orbital ring */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: radius * 2 + 80,
                height: radius * 2 + 80,
                border: '1px solid rgba(203, 183, 251, 0.06)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            />

            {/* Nav items in circular layout */}
            {navLinks.map((link, i) => {
              const angle = startAngle + angleStep * i;
              const posX = Math.cos(angle) * radius;
              const posY = Math.sin(angle) * radius;
              const isActive = activeSection === link.href.replace('#', '');
              const borderColor = isActive
                ? 'rgba(203, 183, 251, 0.3)'
                : 'rgba(255, 255, 255, 0.08)';

              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className="absolute flex flex-col items-center gap-2 z-10"
                  style={{ x: posX, y: posY }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{
                    delay: i * 0.06 + 0.15,
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div
                    className="w-14 h-14 rounded-full flex items-center justify-center relative"
                    style={{
                      background: isActive
                        ? 'rgba(203, 183, 251, 0.15)'
                        : 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid ' + borderColor,
                      boxShadow: isActive
                        ? '0 0 30px rgba(203, 183, 251, 0.15)'
                        : 'none',
                    }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span
                      className="text-lg"
                      style={{
                        color: isActive ? '#cbb7fb' : 'rgba(255,255,255,0.5)',
                      }}
                    >
                      {link.icon}
                    </span>

                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          border: '1px solid rgba(203, 183, 251, 0.3)',
                        }}
                        animate={{
                          scale: [1, 1.4],
                          opacity: [0.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeOut',
                        }}
                      />
                    )}
                  </motion.div>

                  <motion.span
                    className="text-xs font-medium tracking-wider uppercase"
                    style={{
                      color: isActive ? '#cbb7fb' : 'rgba(255,255,255,0.4)',
                    }}
                    animate={{
                      opacity: hoveredIndex === i ? 1 : isActive ? 0.9 : 0.5,
                    }}
                  >
                    {link.label}
                  </motion.span>
                </motion.a>
              );
            })}

            {/* Connecting lines */}
            <svg
              className="absolute pointer-events-none"
              width={radius * 2 + 100}
              height={radius * 2 + 100}
              style={{ overflow: 'visible' }}
            >
              {navLinks.map((link, i) => {
                const angle = startAngle + angleStep * i;
                const lx = Math.cos(angle) * radius + (radius + 50);
                const ly = Math.sin(angle) * radius + (radius + 50);
                const isActive = activeSection === link.href.replace('#', '');

                return (
                  <motion.line
                    key={i}
                    x1={radius + 50}
                    y1={radius + 50}
                    x2={lx}
                    y2={ly}
                    stroke={isActive ? 'rgba(203,183,251,0.2)' : 'rgba(255,255,255,0.04)'}
                    strokeWidth={1}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: i * 0.05 + 0.2, duration: 0.4 }}
                  />
                );
              })}
            </svg>

            {/* Bottom actions */}
            <div className="absolute bottom-12 flex gap-4">
              <motion.a
                href="/ARUN_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="px-6 py-3 rounded-full text-sm font-bold"
                style={{
                  border: '1px solid rgba(203,183,251,0.15)',
                  color: 'rgba(255,255,255,0.6)',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
              <motion.a
                href="#contact"
                onClick={onClose}
                className="px-6 py-3 rounded-full text-sm font-bold"
                style={{ background: '#e9e5dd', color: '#1b1938' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
            </div>

            <motion.p
              className="absolute bottom-6 text-xs"
              style={{ color: 'rgba(255,255,255,0.2)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Swipe right to close
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleMobileLink = () => setMobileOpen(false);

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

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
        <motion.div
          className="h-full origin-left"
          style={{
            background: 'linear-gradient(90deg, #cbb7fb, #a78bfa, #818cf8)',
            width: scrollProgress + '%',
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
            {/* Logo */}
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

      {/* Radial Mobile Menu */}
      <RadialMobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
};

export default Navbar;