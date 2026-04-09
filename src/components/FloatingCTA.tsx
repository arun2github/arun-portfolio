'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling past hero OR after 3s, whichever comes first
    const timer = setTimeout(() => setVisible(true), 3000);

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://wa.me/918882726711"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 rounded-[8px] font-bold text-sm shadow-2xl"
          style={{ background: '#e9e5dd', color: '#1b1938', cursor: 'pointer' }}
          initial={{ opacity: 0, y: 24, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.88 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          {/* Lavender pulse indicator */}
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-55"
              style={{ background: '#cbb7fb' }}
            />
            <span
              className="relative inline-flex rounded-full h-2.5 w-2.5"
              style={{ background: '#cbb7fb' }}
            />
          </span>
          Hire Me
        </motion.a>
      )}
    </AnimatePresence>
  );
}
