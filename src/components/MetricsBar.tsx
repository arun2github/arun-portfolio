'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Metric {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const metrics: Metric[] = [
  { value: 20, suffix: '+', label: 'Projects Shipped' },
  { value: 50, suffix: 'K+', label: 'Daily Active Users' },
  { prefix: '₹', value: 1, suffix: 'Cr+', label: 'Transactions Processed' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 5, suffix: '+', label: 'Happy Clients' },
];

function useCountUp(target: number, duration: number, triggered: boolean) {
  const [count, setCount] = useState(0);
  const isDecimal = target % 1 !== 0;

  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const steps = 50;
    const increment = target / steps;
    const interval = duration / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? Math.round(start * 10) / 10 : Math.floor(start));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [triggered, target, duration, isDecimal]);

  return count;
}

const MetricItem = ({ metric, index, triggered }: { metric: Metric; index: number; triggered: boolean }) => {
  const count = useCountUp(metric.value, 1200, triggered);
  const display = metric.value % 1 !== 0 ? count.toFixed(1) : count;
  const finished = triggered && count === metric.value;

  return (
    <motion.div
      className="flex flex-col items-center justify-center px-6 py-5 relative"
      initial={{ opacity: 0, y: 16 }}
      animate={triggered ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    >
      {/* Divider (skip for first) */}
      {index > 0 && (
        <div className="absolute left-0 top-1/4 h-1/2 w-px bg-[#1E2330] hidden sm:block" />
      )}
      <p className="text-2xl sm:text-3xl font-bold text-white leading-none mb-1">
        {metric.prefix && <span style={{color:'#cbb7fb'}}>{metric.prefix}</span>}
        <span style={{
          color:'#cbb7fb',
          textShadow: finished ? '0 0 18px rgba(203,183,251,0.65)' : 'none',
          transition: 'text-shadow 0.6s ease',
        }}>
          {display}
        </span>
        <span style={{
          color:'#cbb7fb',
          textShadow: finished ? '0 0 18px rgba(203,183,251,0.65)' : 'none',
          transition: 'text-shadow 0.6s ease',
        }}>{metric.suffix}</span>
      </p>
      <p className="text-xs sm:text-sm text-white/40 font-medium tracking-wide text-center whitespace-nowrap">
        {metric.label}
      </p>
    </motion.div>
  );
};

const MetricsBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="bg-[#0D0F14] border-t border-b border-[#1E2330] py-2"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0">
          {metrics.map((metric, index) => (
            <MetricItem
              key={metric.label}
              metric={metric}
              index={index}
              triggered={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsBar;
