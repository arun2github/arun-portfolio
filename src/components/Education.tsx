'use client';

import React from 'react';
import { education } from '@/data/portfolioData';
import { GraduationCap, CalendarDays, BookOpen, MapPin, Star } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Education = () => {
  if (!education || education.length === 0) {
    return (
      <section id="education" className="py-16 md:py-24 bg-[#1A1D24] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-100">My Education</h2>
        <p className="text-neutral-300">Education details are not available at the moment.</p>
      </section>
    );
  }

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
    <section id="education" className="py-20 md:py-32 bg-gradient-to-br from-[#1A1D24] via-[#212530] to-[#1A1D24] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "circOut" }}
          className="text-5xl md:text-6xl font-extrabold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7E8CE0] via-[#535C91] to-[#A0AEC0]"
        >
          Academic Journey
        </motion.h2>

                 {/* Single Row Education Timeline */}
         <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.1 }}
           className="relative"
         >
           {/* Timeline Line */}
           <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7E8CE0] via-[#535C91] to-[#A0AEC0] hidden lg:block"></div>
           
           {/* Education Items */}
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4">
             {education.map((edu, index) => (
               <motion.div
                 key={index}
                 variants={itemVariants}
                 className="relative group"
               >
                 {/* Timeline Dot - positioned at top of card */}
                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-[#7E8CE0] to-[#535C91] rounded-full border-4 border-[#1A1D24] z-10 hidden lg:block group-hover:scale-125 transition-transform duration-300"></div>
                 
                 {/* Education Card */}
                 <div className="bg-gradient-to-br from-[#2D3748]/50 to-[#1A1D24]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transform transition-all duration-500 hover:scale-105 hover:border-white/20 hover:shadow-2xl hover:shadow-[#7E8CE0]/20">
                  {/* Institution Logo */}
                  <div className="flex justify-center mb-4">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg border-2 border-white/10 group-hover:border-white/20 transition-all duration-300"
                      style={{ backgroundColor: edu.iconBg || '#535C91' }}
                    >
                      {edu.iconUrl ? (
                        <Image 
                          src={edu.iconUrl} 
                          alt={`${edu.collegeName} logo`} 
                          width={40} 
                          height={40} 
                          className="rounded-lg object-contain" 
                        />
                      ) : (
                        <GraduationCap size={28} className="text-white" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-3">
                    {/* Degree */}
                    <h3 className="text-xl font-bold text-white group-hover:text-[#7E8CE0] transition-colors duration-300">
                      {edu.title}
                    </h3>
                    
                    {/* Institution */}
                    <p className="text-neutral-300 font-medium leading-relaxed">
                      {edu.collegeName}
                    </p>
                    
                    {/* Branch */}
                    {edu.branch && (
                      <div className="flex items-center justify-center text-sm text-neutral-400">
                        <BookOpen size={14} className="mr-2 text-[#7E8CE0]" />
                        {edu.branch}
                      </div>
                    )}
                    
                    {/* Date */}
                    <div className="flex items-center justify-center text-sm text-neutral-400">
                      <CalendarDays size={14} className="mr-2 text-[#7E8CE0]" />
                      {edu.date}
                    </div>

                    {/* Achievement Badge */}
                    <div className="pt-2">
                      <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-[#7E8CE0]/20 to-[#535C91]/20 border border-[#7E8CE0]/30 text-xs font-semibold text-[#7E8CE0]">
                        <Star size={12} className="mr-1.5" />
                        Completed
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <GraduationCap size={16} className="text-[#7E8CE0]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#7E8CE0]/10 to-[#535C91]/10 border border-[#7E8CE0]/20 text-neutral-300">
            <MapPin size={16} className="mr-2 text-[#7E8CE0]" />
            <span className="text-sm font-medium">Educational Foundation Built</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 