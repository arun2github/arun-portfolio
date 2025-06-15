'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Card3D from '@/components/ui/3d-card';
import { projects as projectsData, Project } from '@/data/portfolioData';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react'; // Icon for back button

const AllProjectsPage: React.FC = () => {
  if (!projectsData || projectsData.length === 0) {
    return (
      <section className="py-16 md:py-24 bg-[#1A1D24] text-center min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "circOut" }}
            className="text-4xl md:text-5xl font-bold mb-4 text-neutral-100"
          >
            Creative Portfolio
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-300 mb-8"
          >
            No projects to display at the moment. Please check back later!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/" passHref>
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-[#7E8CE0] to-[#535C91] text-white font-semibold rounded-lg shadow-lg hover:shadow-[#7E8CE0]/50 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7E8CE0] focus:ring-opacity-75 flex items-center mx-auto"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(126, 140, 224, 0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Home
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic bezier for smoother animation
      },
    },
  };

  return (
    <section className="min-h-screen py-20 md:py-28 bg-gradient-to-bl from-[#101218] via-[#1A1D24] to-[#101218]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex items-center justify-between mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link href="/" passHref>
            <motion.button
              className="flex items-center text-sm text-[#A0AEC0] hover:text-[#7E8CE0] transition-colors duration-300 group"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft size={18} className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Home
            </motion.button>
          </Link>
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7E8CE0] via-[#535C91] to-[#A0AEC0]"
          >
            All Projects
          </motion.h2>
          <div style={{ width: '80px'}}></div> {/* Spacer to balance the title */}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectsData.map((project, index) => (
            <motion.div key={project.id || index} variants={itemVariants}>
              <Link href={`/projects/${project.id}`} passHref className="block group h-full">
                <Card3D
                  className="h-full bg-[#1E232B]/60 hover:bg-[#252B36]/80 transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:shadow-[#535C91]/25 border border-transparent hover:border-[#535C91]/30"
                  glareColor="rgba(126, 140, 224, 0.1)"
                >
                  <div className="p-5 flex flex-col h-full">
                    <div className="relative w-full h-44 md:h-52 mb-4 rounded-md overflow-hidden shadow-md">
                      <Image
                        src={project.imageUrl || '/images/placeholder.png'}
                        alt={project.title || 'Project image'}
                        layout="fill"
                        objectFit="cover"
                        className="transform group-hover:scale-105 transition-transform duration-400 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/10 transition-all duration-300"></div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-neutral-100 group-hover:text-[#7E8CE0] transition-colors duration-200">
                      {project.title}
                    </h3>
                    {project.category && (
                      <p className="text-xs text-neutral-400 mb-2 group-hover:text-[#A0AEC0] transition-colors duration-200">
                        {project.category}
                      </p>
                    )}
                    <p className="text-neutral-300 text-xs leading-relaxed mb-3 flex-grow">
                      {project.shortDescription ? project.shortDescription.substring(0, 80) + (project.shortDescription.length > 80 ? '...':'') : 'No description.'}
                    </p>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {(project.tags || []).slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-[#4A5568]/60 text-neutral-300 px-2.5 py-1 rounded-full text-[10px] group-hover:bg-[#535C91]/70 transition-colors duration-200"
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                      <span className="inline-block text-xs text-[#7E8CE0] font-medium group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200 ease-out">
                        Explore Project &rarr;
                      </span>
                    </div>
                  </div>
                </Card3D>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AllProjectsPage; 