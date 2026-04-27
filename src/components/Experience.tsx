'use client';

import React, { useRef } from 'react';
import { experiences } from '@/data/portfolioData';
import { Briefcase, MapPin, Calendar, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useScrollDownInView } from '@/lib/useScrollDownInView';

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
  const [cardRef, cardInView] = useScrollDownInView<HTMLDivElement>();

  return (
    <motion.div
      ref={cardRef}
      className="mb-10 flex group last:mb-0"
      initial={{ opacity: 0, y: 24 }}
      animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Timeline node */}
      <div className="hidden md:flex flex-col items-center mr-8 flex-shrink-0">
        <span
          className="relative flex items-center justify-center w-12 h-12 rounded-[14px] transition-all duration-300 group-hover:shadow-[0_0_16px_rgba(203,183,251,0.15)]"
          style={{ background: experience.iconBg || 'rgba(203,183,251,0.06)', border: '1px solid rgba(203,183,251,0.15)' }}
        >
          {experience.iconUrl ? (
            <Image src={experience.iconUrl} alt={`${experience.companyName} logo`} width={28} height={28} className="rounded-lg object-contain p-0.5" />
          ) : (
            <Briefcase size={18} style={{ color: '#cbb7fb' }} />
          )}
        </span>
        <div className="w-px flex-grow mt-3" style={{ background: 'linear-gradient(to bottom, rgba(203,183,251,0.2), transparent)' }} />
      </div>

      {/* Card */}
      <div className="p-6 rounded-[1.2rem] w-full md:w-auto flex-1 transition-all duration-400"
        style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.04)',
        }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
          <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#cbb7fb]">
            {experience.title}
          </h3>
          <span
            className="text-xs mt-1.5 sm:mt-0 px-3 py-1 rounded-full font-medium"
            style={{ background: 'rgba(203,183,251,0.06)', border: '1px solid rgba(203,183,251,0.1)', color: 'rgba(203,183,251,0.7)' }}
          >
            {experience.date}
          </span>
        </div>
        <div className="flex items-center mb-3 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
          <MapPin size={14} className="mr-2 flex-shrink-0" style={{ color: '#cbb7fb' }} />
          <span>{experience.companyName}</span>
        </div>
        {experience.impactHeadline && (
          <p className="font-semibold text-sm mb-4 pl-3 border-l-2 leading-snug" style={{ color: '#cbb7fb', borderColor: 'rgba(203,183,251,0.3)' }}>
            {experience.impactHeadline}
          </p>
        )}
        <ul className="space-y-2 pl-1">
          {experience.points.map((point, i) => (
            <li key={i} className="text-sm leading-relaxed flex items-start gap-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
              <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgba(203,183,251,0.3)' }} />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const MobileExperienceCard = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [cardRef, cardInView] = useScrollDownInView<HTMLDivElement>();

  const displayedPoints = isExpanded ? experience.points : experience.points.slice(0, 2);
  const hasMorePoints = experience.points.length > 2;

  return (
    <motion.div
      ref={cardRef}
      className="mb-6 flex group relative last:mb-0"
      initial={{ opacity: 0, y: 20 }}
      animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Mobile Timeline */}
      <div className="flex flex-col items-center mr-4 flex-shrink-0">
        <span
          className="flex items-center justify-center w-10 h-10 rounded-[12px] transition-all duration-300"
          style={{ background: experience.iconBg || 'rgba(203,183,251,0.06)', border: '1px solid rgba(203,183,251,0.15)' }}
        >
          {experience.iconUrl ? (
            <Image src={experience.iconUrl} alt={`${experience.companyName} logo`} width={22} height={22} className="rounded-md object-contain" />
          ) : (
            <Briefcase size={16} style={{ color: '#cbb7fb' }} />
          )}
        </span>
        <div className="w-px flex-grow mt-2 min-h-[40px]" style={{ background: 'linear-gradient(to bottom, rgba(203,183,251,0.2), transparent)' }} />
      </div>

      {/* Mobile Card */}
      <div className="rounded-2xl p-4 flex-1" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
        <h3 className="text-base font-bold text-white leading-tight mb-2">
          {experience.title}
        </h3>
        <div className="flex flex-col gap-1.5 mb-3">
          <div className="flex items-center text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <MapPin size={12} className="mr-1.5 flex-shrink-0" style={{ color: '#cbb7fb' }} />
            <span className="truncate">{experience.companyName}</span>
          </div>
          <div className="flex items-center text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            <Calendar size={12} className="mr-1.5 flex-shrink-0" style={{ color: '#cbb7fb' }} />
            <span className="px-2 py-0.5 rounded-full text-[11px]" style={{ background: 'rgba(203,183,251,0.06)', border: '1px solid rgba(203,183,251,0.1)' }}>
              {experience.date}
            </span>
          </div>
        </div>
        {experience.impactHeadline && (
          <p className="font-semibold text-xs mb-3 pl-2 border-l-2 leading-snug" style={{ color: '#cbb7fb', borderColor: 'rgba(203,183,251,0.3)' }}>
            {experience.impactHeadline}
          </p>
        )}
        <ul className="space-y-1.5 pl-1">
          {displayedPoints.map((point, i) => (
            <li key={i} className="text-xs leading-relaxed flex items-start gap-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
              <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgba(203,183,251,0.3)' }} />
              {point}
            </li>
          ))}
        </ul>
        {hasMorePoints && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-xs font-bold flex items-center gap-1 transition-colors duration-300"
            style={{ color: '#cbb7fb' }}
          >
            {isExpanded ? 'View Less' : 'View More'}
            <ChevronDown size={12} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' });

  if (!experiences || experiences.length === 0) {
    return (
      <section id="experience" className="py-24 md:py-32 text-center" style={{ background: '#08080c' }}>
        <h2 className="text-4xl font-bold mb-4 text-white">My Journey</h2>
        <p style={{ color: 'rgba(255,255,255,0.3)' }}>Experience details are not available at the moment.</p>
      </section>
    );
  }

  return (
    <section id="experience" className="relative py-20 md:py-32 overflow-hidden" style={{ background: '#08080c' }}>
      {/* Ambient orb */}
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(203,183,251,0.04), transparent 60%)', filter: 'blur(80px)' }} />

      <div className="relative z-10 container mx-auto px-6 lg:px-14 max-w-4xl">
        {/* Section Header */}
        <div ref={headingRef} className="mb-14 md:mb-20">
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={headingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="h-px w-12" style={{ background: 'rgba(203,183,251,0.3)' }} />
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: 'rgba(203,183,251,0.5)' }}>Experience</span>
          </motion.div>

          <motion.h2
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-black leading-[0.9] tracking-[-0.03em]"
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <motion.div className="overflow-hidden" initial={{ y: '100%' }} animate={headingInView ? { y: 0 } : {}} transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <span className="block text-white">Where I've</span>
            </motion.div>
            <motion.div className="overflow-hidden" initial={{ y: '100%' }} animate={headingInView ? { y: 0 } : {}} transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <span className="block text-gradient-brand">shipped.</span>
            </motion.div>
          </motion.h2>
        </div>

        {/* Desktop */}
        <div className="relative hidden md:block">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>

        {/* Mobile */}
        <div className="relative md:hidden">
          {experiences.map((exp, index) => (
            <MobileExperienceCard key={`mobile-${index}`} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;