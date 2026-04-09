'use client';

import React from 'react';
import { experiences } from '@/data/portfolioData';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScrollDownInView } from '@/lib/useScrollDownInView';

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
  const [cardRef, cardInView] = useScrollDownInView<HTMLDivElement>();

  const cardVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: index * 0.2 }
    }
  };

  return (
    <motion.div 
      ref={cardRef}
      className="mb-12 flex group" 
      variants={cardVariants}
      initial="hidden"
      animate={cardInView ? 'visible' : 'hidden'}
    >
      {/* Timeline Line & Dot - adjusted for alternating effect */}
      <div className={`hidden md:flex flex-col items-center mr-6 ${index % 2 === 0 ? 'order-1' : 'order-3 ml-6'}`}>
        <span 
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2D3748] group-hover:bg-[#535C91] transition-all duration-300 border-4 border-[#1A1D24] shadow-lg"
          style={{backgroundColor: experience.iconBg || '#2D3748'}}
        >
          {experience.iconUrl ? (
            <Image src={experience.iconUrl} alt={`${experience.companyName} logo`} width={32} height={32} className="rounded-full object-contain p-1" />
          ) : (
            <Briefcase size={24} className="text-neutral-300 group-hover:text-white" />
          )}
        </span>
          <div className="w-1 flex-grow mt-2" style={{background:'linear-gradient(to bottom, rgba(203,183,251,0.40), transparent)'}}></div>
      </div>

      {/* Card Content */}
      <div className={`p-6 rounded-2xl shadow-xl transition-all duration-300 w-full md:w-auto flex-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
        style={{background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.06)'}}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
          <h3 className="text-2xl font-bold text-white transition-colors duration-300">
            {experience.title}
          </h3>
          <span className="text-sm text-white/40 mt-1 sm:mt-0 px-3 py-1 rounded-[8px]" style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.06)'}}>
            {experience.date}
          </span>
        </div>
        <div className="flex items-center text-neutral-300 mb-3">
          <MapPin size={16} className="mr-2" style={{color:'#cbb7fb'}} />
          <span className="text-white/60">{experience.companyName}</span>
        </div>
        {experience.impactHeadline && (
          <p className="font-semibold text-sm mb-4 pl-1 border-l-2 leading-snug" style={{color:'#cbb7fb', borderColor:'rgba(203,183,251,0.40)'}}>
            {experience.impactHeadline}
          </p>
        )}
        
        <ul className="list-disc list-inside text-neutral-200 space-y-2 pl-1">
          {experience.points.map((point, i) => (
            <li key={i} className="text-sm leading-relaxed">{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const MobileExperienceCard = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [cardRef, cardInView] = useScrollDownInView<HTMLDivElement>();
  
  const mobileCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.2 }
    }
  };

  // Show only first 2 points by default, or all if expanded
  const displayedPoints = isExpanded ? experience.points : experience.points.slice(0, 2);
  const hasMorePoints = experience.points.length > 2;

  return (
    <motion.div 
      ref={cardRef}
      className="mb-8 flex group relative" 
      variants={mobileCardVariants}
      initial="hidden"
      animate={cardInView ? 'visible' : 'hidden'}
    >
      {/* Mobile Timeline Dot */}
      <div className="flex flex-col items-center mr-4 flex-shrink-0">
        <span 
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2D3748] group-hover:bg-[#535C91] transition-all duration-300 border-2 border-[#1A1D24] shadow-lg"
          style={{backgroundColor: experience.iconBg || '#2D3748'}}
        >
          {experience.iconUrl ? (
            <Image src={experience.iconUrl} alt={`${experience.companyName} logo`} width={24} height={24} className="rounded-full object-contain" />
          ) : (
            <Briefcase size={18} className="text-neutral-300 group-hover:text-white" />
          )}
        </span>
        <div className="w-0.5 flex-grow mt-2 min-h-[60px]" style={{background:'linear-gradient(to bottom, rgba(203,183,251,0.40), transparent)'}}></div>
      </div>

      {/* Mobile Card Content */}
      <div className="rounded-2xl p-4 transition-all duration-300 flex-1" style={{background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.06)'}}>
        {/* Mobile Header */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-white transition-colors duration-300 leading-tight mb-2">
            {experience.title}
          </h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center text-neutral-300 text-sm">
              <MapPin size={14} className="mr-1.5 flex-shrink-0" style={{color:'#cbb7fb'}} />
              <span className="truncate">{experience.companyName}</span>
            </div>
            <div className="flex items-center text-neutral-400 text-sm">
              <Calendar size={14} className="mr-1.5 flex-shrink-0" style={{color:'#cbb7fb'}} />
              <span className="px-2 py-0.5 rounded-[8px] text-xs text-white/40" style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.06)'}}>
                {experience.date}
              </span>
            </div>
          </div>
        </div>
        {experience.impactHeadline && (
          <p className="font-semibold text-xs mb-3 pl-2 border-l-2 leading-snug" style={{color:'#cbb7fb', borderColor:'rgba(203,183,251,0.40)'}}>
            {experience.impactHeadline}
          </p>
        )}
        
        {/* Mobile Experience Points */}
        <ul className="list-disc list-inside text-neutral-200 space-y-1.5 pl-1">
          {displayedPoints.map((point, i) => (
            <li key={i} className="text-sm leading-relaxed text-neutral-300">
              {point}
            </li>
          ))}
        </ul>

        {/* View More/Less Button */}
        {hasMorePoints && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-sm hover:opacity-80 transition-opacity duration-300 font-bold flex items-center gap-1" style={{color:'#cbb7fb'}}>
            {isExpanded ? (
              <>
                <span>View Less</span>
                <svg className="w-3 h-3 transform rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </>
            ) : (
              <>
                <span>View More</span>
                <svg className="w-3 h-3 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  if (!experiences || experiences.length === 0) {
    return (
      <section id="experience" className="py-16 md:py-24 bg-[#0D0F14] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-100">My Journey</h2>
        <p className="text-neutral-300">Experience details are not available at the moment.</p>
      </section>
    );
  }

  return (
    <section id="experience" className="py-20 md:py-32 bg-[#0D0F14]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }} // Corrected: should be 'animate' not 'whileInView' for initial title animation
          transition={{ duration: 0.7, ease: "circOut" }}
          className="text-5xl md:text-6xl font-bold mb-16 md:mb-20 text-center text-white"
          style={{lineHeight:0.96, letterSpacing:'-0.02em'}}
        >
          My Professional Journey
        </motion.h2>
        
        {/* Desktop Layout - Unchanged */}
        <div className="relative hidden md:block">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>

        {/* Mobile Layout - New optimized design */}
        <div className="relative md:hidden max-w-2xl mx-auto">
          {/* Mobile Timeline Line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5" style={{background:'linear-gradient(to bottom, rgba(203,183,251,0.30), transparent)'}}></div>
          
          {experiences.map((exp, index) => (
            <MobileExperienceCard key={`mobile-${index}`} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 