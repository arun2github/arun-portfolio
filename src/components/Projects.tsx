'use client';
import React from 'react';
import Link from 'next/link';
import NewProjectCard from './ui/NewProjectCard';
import { projects as projectsData } from '@/data/portfolioData';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState<'mobile' | 'web' | 'ai'>('mobile');

  const filteredProjects = React.useMemo(() => {
    const filtered = projectsData.filter(
      (project) => project.category && project.category.toLowerCase() === activeFilter
    );
    return filtered.slice(0, 4);
  }, [activeFilter]);

  if (!projectsData || projectsData.length === 0) {
    return (
      <section id="projects" className="py-16 md:py-24 bg-[#1A1D24] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-100">Client Success Stories</h2>
        <p className="text-neutral-300">No projects to display at the moment. Please check back later!</p>
      </section>
    );
  }

  // No changes to variants are needed for this fix, but let's keep them clean.
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    // Optional: Add an exit animation for a smoother transition
    exit: { 
      opacity: 0, 
      y: -30, 
      transition: { duration: 0.3 } 
    },
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-[#0D0F14]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "circOut" }}
          className="text-5xl md:text-6xl font-bold mb-4 text-center text-white"
          style={{lineHeight:0.96, letterSpacing:'-0.02em'}}
        >
          Work That Ships
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-white/45 text-lg text-center mb-10"
        >
          Real projects. Real clients. Measurable outcomes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-4 mb-16 md:mb-20"
        >
          {['ai', 'mobile', 'web'].map((filter) => (
            <button
              key={filter}
              data-button
              onClick={() => setActiveFilter(filter as typeof activeFilter)}
              className={`px-6 py-2.5 rounded-[8px] text-sm font-bold transition-all duration-200 ${activeFilter === filter
                ? ''
                : ''}`}
              style={activeFilter === filter
                ? {background:'#e9e5dd', color:'#1b1938'}
                : {background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', color:'rgba(255,255,255,0.50)'}}
            >
              <motion.span
                initial={false}
                animate={{ scale: activeFilter === filter ? 1.1 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="inline-block"
              >
                {filter === 'ai' ? 'AI Projects' : `${filter.charAt(0).toUpperCase() + filter.slice(1)} Projects`}
              </motion.span>
            </button>
          ))}
        </motion.div>
        
        <motion.div
          key={activeFilter}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id || index}
                variants={itemVariants}
              >
                <NewProjectCard project={project} />
              </motion.div>
            ))}
        </motion.div>

        {projectsData.length > 3 && (
          <motion.div 
            className="text-center mt-12 md:mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href="/projects" data-nav-link passHref>
              <motion.button
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold rounded-[8px] transition-all duration-200"
              style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', color:'rgba(255,255,255,0.60)'}}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Projects</span>
                <svg className="w-4 h-4 ml-2 transform transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;