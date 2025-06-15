'use client';

import React from 'react';
import { technologies } from '@/data/portfolioData';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react'; // Fallback icon

const TechCard: React.FC<{ tech: typeof technologies[0], index: number }> = ({ tech, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, delay: index * 0.05, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group flex flex-col items-center justify-center p-6 bg-[#2D3748]/40 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-[#535C91]/30 
                 border border-transparent hover:border-[#535C91]/50 transition-all duration-300 transform hover:-translate-y-1 h-full"
    >
      <div className="relative w-16 h-16 md:w-20 md:h-20 mb-4 transition-transform duration-300 group-hover:scale-110">
        {tech.iconUrl ? (
          <Image 
            src={tech.iconUrl} 
            alt={`${tech.name} icon`} 
            layout="fill" 
            objectFit="contain"
            className="drop-shadow-lg"
          />
        ) : (
          <Layers size={48} className="text-neutral-400" /> // Fallback icon
        )}
      </div>
      <p className="text-sm md:text-md font-medium text-neutral-200 group-hover:text-[#7E8CE0] transition-colors duration-300 text-center">
        {tech.name}
      </p>
    </motion.div>
  );
};

const Technologies = () => {
  if (!technologies || technologies.length === 0) {
    return (
      <section id="technologies" className="py-16 md:py-24 bg-[#1A1D24] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-100">Tech Stack</h2>
        <p className="text-neutral-300">Technology details are not available at the moment.</p>
      </section>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };

  return (
    <section id="technologies" className="py-20 md:py-32 bg-gradient-to-b from-[#1A1D24] via-[#212530] to-[#1A1D24]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "circOut" }}
          className="text-5xl md:text-6xl font-extrabold mb-16 md:mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#A0AEC0] via-[#7E8CE0] to-[#535C91]"
        >
          My Tech Arsenal
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies; 