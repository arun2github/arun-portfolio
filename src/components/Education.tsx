'use client';

import React from 'react';
import { education } from '@/data/portfolioData';
import { GraduationCap, CalendarDays, BookOpen, MapPin, Star } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScrollDownInView } from '@/lib/useScrollDownInView';

const Education = () => {
  if (!education || education.length === 0) {
    return (
      <section id="education" className="py-16 md:py-24 bg-[#1A1D24] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-100">My Education</h2>
        <p className="text-neutral-300">Education details are not available at the moment.</p>
      </section>
    );
  }

  const [titleRef, titleInView] = useScrollDownInView<HTMLHeadingElement>();
  const [gridRef, gridInView] = useScrollDownInView<HTMLDivElement>();
  const [ctaRef, ctaInView] = useScrollDownInView<HTMLDivElement>();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="education" className="py-20 md:py-32 bg-[#0D0F14] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          ref={titleRef}
          initial={{ opacity: 0, y: -30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7, ease: "circOut" }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center text-white"
          style={{lineHeight:0.96, letterSpacing:'-0.02em'}}
        >
          Academic Journey
        </motion.h2>

                 {/* Single Row Education Timeline */}
         <motion.div
           ref={gridRef}
           variants={containerVariants}
           initial="hidden"
           animate={gridInView ? 'visible' : 'hidden'}
           className="relative"
         >
           {/* Timeline Line */}
           <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7E8CE0] via-[#535C91] to-[#A0AEC0] hidden lg:block"></div>
           
           {/* Education Items */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8">
             {education.map((edu, index) => (
               <motion.div
                 key={index}
                 variants={itemVariants}
                 className="relative group"
               >
                 {/* Timeline Dot - positioned at top of card */}
                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-[#7E8CE0] to-[#535C91] rounded-full border-4 border-[#1A1D24] z-10 hidden lg:block group-hover:scale-125 transition-transform duration-300"></div>
                 
                 {/* Education Card */}
                 <div className="bg-[#0f1020]/80 rounded-2xl p-6 transition-all duration-500" style={{border:'1px solid rgba(255,255,255,0.06)'}}>
                  {/* Institution Logo */}
                  <div className="flex justify-center mb-4">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg border-2 border-white/10 group-hover:border-white/20 transition-all duration-300"
                      style={{ 
                        backgroundColor: edu.title === 'M.Tech' ? 'white' : (edu.iconBg || '#535C91')
                      }}
                    >
                      {edu.iconUrl ? (
                        <Image 
                          src={edu.iconUrl} 
                          alt={`${edu.collegeName} logo`} 
                          width={48} 
                          height={48} 
                          className={`object-contain ${edu.title === 'M.Tech' ? 'rounded-lg' : 'rounded-lg'}`}
                        />
                      ) : (
                        <GraduationCap size={28} className="text-white" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-3">
                    {/* Degree */}
                    <h3 className="text-xl font-bold text-white transition-colors duration-300" style={{lineHeight:1.14}}>
                      {edu.title}
                    </h3>
                    
                    {/* Institution */}
                    <p className="text-neutral-300 font-medium leading-relaxed">
                      {edu.collegeName}
                    </p>
                    
                    {/* Branch */}
                    {edu.branch && (
                      <div className="flex items-center justify-center text-sm text-neutral-400">
                      <BookOpen size={14} className="mr-2" style={{color:'#cbb7fb'}} />
                        {edu.branch}
                      </div>
                    )}
                    
                    {/* Date */}
                    <div className="flex items-center justify-center text-sm text-neutral-400">
                      <CalendarDays size={14} className="mr-2" style={{color:'#cbb7fb'}} />
                      {edu.date}
                    </div>

                    {/* Achievement Badge */}
                    <div className="pt-2">
                      <div className="inline-flex items-center px-3 py-1.5 rounded-[8px] text-xs font-bold" style={edu.percentage === 'Pursuing' ? {background:'rgba(203,183,251,0.08)', border:'1px solid rgba(203,183,251,0.20)', color:'#cbb7fb'} : {background:'rgba(203,183,251,0.06)', border:'1px solid rgba(203,183,251,0.15)', color:'#cbb7fb'}}>
                        <Star size={12} className="mr-1.5" />
                        {edu.percentage === 'Pursuing' ? 'Currently Pursuing' : 'Completed'}
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <GraduationCap size={16} style={{color:'rgba(203,183,251,0.40)'}} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-[8px]" style={{background:'rgba(203,183,251,0.06)', border:'1px solid rgba(203,183,251,0.15)', color:'rgba(255,255,255,0.60)'}}>
            <MapPin size={16} className="mr-2" style={{color:'#cbb7fb'}} />
            <span className="text-sm font-medium">Educational Foundation Built</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 