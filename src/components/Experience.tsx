'use client';

import React from 'react';
import { experiences } from '@/data/portfolioData';
import { Briefcase, MapPin } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
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
      className="mb-12 flex group" 
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
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
        <div className="w-1 flex-grow bg-gradient-to-b from-[#535C91] via-[#7E8CE0] to-transparent mt-2"></div>
      </div>

      {/* Card Content */}
      <div className={`bg-[#2D3748]/50 p-6 rounded-lg shadow-xl hover:shadow-[#535C91]/40 transition-all duration-300 w-full md:w-auto flex-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
          <h3 className="text-2xl font-semibold text-[#A0AEC0] group-hover:text-[#7E8CE0] transition-colors duration-300">
            {experience.title}
          </h3>
          <span className="text-sm text-neutral-400 mt-1 sm:mt-0 bg-[#1A1D24]/70 px-3 py-1 rounded-full">
            {experience.date}
          </span>
        </div>
        <div className="flex items-center text-neutral-300 mb-4">
          <MapPin size={16} className="mr-2 text-[#7E8CE0]" />
          <span>{experience.companyName}</span>
        </div>
        
        <ul className="list-disc list-inside text-neutral-200 space-y-2 pl-1">
          {experience.points.map((point, i) => (
            <li key={i} className="text-sm leading-relaxed">{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  if (!experiences || experiences.length === 0) {
    return (
      <section id="experience" className="py-16 md:py-24 bg-gradient-to-br from-[#1A1D24] via-[#212530] to-[#1A1D24] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-100">My Journey</h2>
        <p className="text-neutral-300">Experience details are not available at the moment.</p>
      </section>
    );
  }

  return (
    <section id="experience" className="py-20 md:py-32 bg-gradient-to-br from-[#1A1D24] via-[#212530] to-[#1A1D24]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }} // Corrected: should be 'animate' not 'whileInView' for initial title animation
          transition={{ duration: 0.7, ease: "circOut" }}
          className="text-5xl md:text-6xl font-extrabold mb-16 md:mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7E8CE0] via-[#535C91] to-[#A0AEC0]"
        >
          My Professional Journey
        </motion.h2>
        <div className="relative">
          {/* Central timeline line for mobile (visible only on md and below, but cards are full width) */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#535C91]/50 via-[#7E8CE0]/50 to-transparent md:hidden"></div>
          
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 