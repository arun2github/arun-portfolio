'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface LiquidTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  delay?: number;
}

const LiquidText: React.FC<LiquidTextProps> = ({ 
  children, 
  className = '', 
  as: Tag = 'h2',
  delay = 0 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const turbulence = useTransform(scrollYProgress, [0, 0.5, 1], [0.001, 0.015, 0.001]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.3, 1, 1, 0.4]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Tag 
        className={className} 
        style={{ filter: 'url(#liquid-distortion)' }}
      >
        {children}
      </Tag>
    </motion.div>
  );
};

export default LiquidText;