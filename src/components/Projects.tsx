'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NewProjectCard from './ui/NewProjectCard';
import { projects as projectsData, Project } from '@/data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState<'mobile' | 'web'>('mobile');

  const filteredProjects = React.useMemo(() => {
    const filtered = projectsData.filter(
      (project) => project.category && project.category.toLowerCase() === activeFilter
    );
    return filtered.slice(0, 3);
  }, [activeFilter]);

  if (!projectsData || projectsData.length === 0) {
    return (
      <section id="projects" className="py-16 md:py-24 bg-[#1A1D24] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-100">My Creative Portfolio</h2>
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
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-br from-[#1A1D24] via-[#212530] to-[#1A1D24]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "circOut" }}
          className="text-5xl md:text-6xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7E8CE0] via-[#535C91] to-[#A0AEC0]"
        >
          My Creative Portfolio
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-4 mb-16 md:mb-20"
        >
          {['mobile', 'web'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter as typeof activeFilter)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeFilter === filter
                ? 'bg-gradient-to-r from-[#7E8CE0] to-[#535C91] text-white shadow-lg shadow-[#7E8CE0]/30'
                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'}`}
            >
              <motion.span
                initial={false}
                animate={{ scale: activeFilter === filter ? 1.1 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="inline-block capitalize"
              >
                {`${filter} Projects`}
              </motion.span>
            </button>
          ))}
        </motion.div>
        
        <motion.div 
          // *** THE FIX: Add a key that changes when the filter changes ***
          key={activeFilter} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible" // Use 'animate' instead of 'whileInView' for more direct control
          exit="hidden" // Optional: for the whole container to fade out
        >
            {filteredProjects.map((project, index) => (
              <motion.div key={project.id || index} variants={itemVariants}>
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
            <Link href="/projects" passHref>
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-[#7E8CE0] to-[#535C91] text-white font-semibold rounded-lg shadow-lg hover:shadow-[#7E8CE0]/50 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7E8CE0] focus:ring-opacity-75"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(126, 140, 224, 0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;