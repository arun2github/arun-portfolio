'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import NewProjectCard from './ui/NewProjectCard';
import { projects as projectsData } from '@/data/portfolioData';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState<'mobile' | 'web' | 'ai'>('mobile');
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' });

  const filteredProjects = React.useMemo(() => {
    const filtered = projectsData.filter(
      (project) => project.category && project.category.toLowerCase() === activeFilter
    );
    return filtered.slice(0, 4);
  }, [activeFilter]);

  if (!projectsData || projectsData.length === 0) {
    return (
      <section id="projects" className="py-16 md:py-24 text-center" style={{ background: '#08080c' }}>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-100">Client Success Stories</h2>
        <p className="text-neutral-300">No projects to display at the moment. Please check back later!</p>
      </section>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden" style={{ background: '#08080c' }}>
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(203,183,251,0.03), transparent 60%)', filter: 'blur(100px)' }} />

      <div className="relative z-10 container mx-auto px-6 lg:px-14 max-w-7xl">

        {/* ── Section Header ───────────────────────── */}
        <div ref={headingRef} className="mb-16 md:mb-20">
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={headingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="h-px w-12" style={{ background: 'rgba(203,183,251,0.3)' }} />
            <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: 'rgba(203,183,251,0.5)' }}>Portfolio</span>
          </motion.div>

          <motion.h2
            className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-black leading-[0.9] tracking-[-0.03em]"
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <motion.div className="overflow-hidden" initial={{ y: '100%' }} animate={headingInView ? { y: 0 } : {}} transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <span className="block text-white">Work that</span>
            </motion.div>
            <motion.div className="overflow-hidden" initial={{ y: '100%' }} animate={headingInView ? { y: 0 } : {}} transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <span className="block text-gradient-brand">ships.</span>
            </motion.div>
          </motion.h2>

          <motion.p
            className="text-base md:text-lg max-w-lg mt-6"
            style={{ color: 'rgba(255,255,255,0.3)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Real projects. Real clients. Measurable outcomes.
          </motion.p>
        </div>

        {/* ── Filter Tabs ──────────────────────────── */}
        <motion.div
          className="flex gap-2 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {(['mobile', 'web', 'ai'] as const).map((filter) => (
            <button
              key={filter}
              data-button
              onClick={() => setActiveFilter(filter)}
              className="relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300"
              style={
                activeFilter === filter
                  ? { background: 'rgba(203,183,251,0.1)', color: '#cbb7fb', border: '1px solid rgba(203,183,251,0.2)' }
                  : { background: 'transparent', border: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.35)' }
              }
            >
              {filter === 'ai' ? 'AI Projects' : `${filter.charAt(0).toUpperCase() + filter.slice(1)} Projects`}
            </button>
          ))}
        </motion.div>

        {/* ── Project Grid ─────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project, index) => (
              <motion.div key={project.id || index} variants={itemVariants}>
                <NewProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── View All CTA ─────────────────────────── */}
        {projectsData.length > 3 && (
          <motion.div
            className="mt-12 md:mt-16 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href="/projects" data-nav-link passHref>
              <motion.span
                className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-bold rounded-full transition-all duration-300 cursor-pointer"
                style={{ border: '1px solid rgba(203,183,251,0.12)', color: 'rgba(255,255,255,0.5)' }}
                whileHover={{ scale: 1.03, borderColor: 'rgba(203,183,251,0.25)' }}
                whileTap={{ scale: 0.97 }}
              >
                View All Projects
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;