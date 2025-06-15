'use client';

import React from 'react';
import { education } from '@/data/portfolioData';
import { GraduationCap, CalendarDays, Award, BookOpen } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const EducationCard = ({ entry, index }: { entry: typeof education[0], index: number }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2 }
    }
  };

  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-[#2D3748]/40 p-6 rounded-xl shadow-lg hover:shadow-[#535C91]/30 transition-all duration-300 group flex flex-col sm:flex-row items-start space-x-0 sm:space-x-6"
    >
      <div 
        className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center mb-4 sm:mb-0 border-4 border-[#1A1D24] shadow-md group-hover:scale-105 transition-transform duration-300"
        style={{ backgroundColor: entry.iconBg || '#535C91' }}
      >
        {entry.iconUrl ? (
          <Image src={entry.iconUrl} alt={`${entry.collegeName} logo`} width={48} height={48} className="rounded-full object-contain p-1" />
        ) : (
          <GraduationCap size={36} className="text-neutral-100" />
        )}
      </div>
      <div className="flex-grow">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
          <h3 className="text-xl font-semibold text-[#A0AEC0] group-hover:text-[#7E8CE0] transition-colors duration-300">
            {entry.title}
          </h3>
          <span className="text-xs text-neutral-400 mt-1 sm:mt-0 bg-[#1A1D24]/70 px-2 py-1 rounded-full flex items-center">
            <CalendarDays size={14} className="mr-1.5" /> {entry.date}
          </span>
        </div>
        <p className="text-lg font-medium text-neutral-100 mb-1">{entry.collegeName}</p>
        {entry.branch && (
          <p className="text-sm text-neutral-300 mb-1 flex items-center">
            <BookOpen size={14} className="mr-2 text-[#7E8CE0]" /> {entry.branch}
          </p>
        )}
        {entry.percentage && (
          <p className="text-sm text-neutral-300 flex items-center">
            <Award size={14} className="mr-2 text-[#7E8CE0]" /> Score: {entry.percentage}
          </p>
        )}
      </div>
    </motion.div>
  );
};

const Education = () => {
  if (!education || education.length === 0) {
    return (
      <section id="education" className="py-16 md:py-24 bg-[#1A1D24] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-100">My Education</h2>
        <p className="text-neutral-300">Education details are not available at the moment.</p>
      </section>
    );
  }

  return (
    <section id="education" className="py-20 md:py-32 bg-[#1A1D24]"> {/* Slightly different background for visual separation */}
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "circOut" }}
          className="text-5xl md:text-6xl font-extrabold mb-16 md:mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#A0AEC0] via-[#7E8CE0] to-[#535C91]"
        >
          My Academic Background
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {education.map((edu, index) => (
            <EducationCard key={index} entry={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 