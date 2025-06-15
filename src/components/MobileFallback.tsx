'use client';

import React from 'react';
import { profileData, socialMediaLinks } from '@/data/portfolioData';
import { Mail, Linkedin, Github, Instagram, Facebook, Twitter, Sparkles, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const socialIconMap: { [key: string]: React.ElementType } = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  // Add more if needed, ensuring keys are lowercase
};

const MobileFallback = () => {
  const simpleName = profileData.name.replace("I'm ", "").replace(",", "");
  const title1 = profileData.title1 || 'Mobile Application Developer';
  const title2 = profileData.title2 || 'Web Developer';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-neutral-200 p-6 md:hidden overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Ambient Background Elements */}
      <motion.div 
        className="absolute top-20 right-10 opacity-20"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles size={40} className="text-indigo-400" />
      </motion.div>

      <motion.div 
        className="absolute bottom-40 left-10 opacity-10"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Compass size={60} className="text-purple-400" />
      </motion.div>

      {/* Main Content */}
      <motion.div className="relative w-full max-w-md mx-auto z-10">
        {/* Name and Titles with Creative Typography */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-light mb-4 tracking-tight">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-200 via-fuchsia-300 to-indigo-300 drop-shadow-lg">
              {simpleName}
            </span>
          </h1>
          <div className="relative">
            <motion.p 
              className="text-xl text-indigo-200/90 font-light tracking-wider"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {title1}
            </motion.p>
            <motion.p 
              className="text-lg text-indigo-200/70 font-light tracking-wide mt-1"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              & {title2}
            </motion.p>
          </div>
        </motion.div>

        {/* Glassmorphic Card */}
        <motion.div 
          variants={itemVariants}
          className="p-6 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 shadow-xl mb-8"
        >
          <div className="relative overflow-hidden">
            <motion.div
              className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

            <motion.div 
              className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, rgba(0,0,0,0) 70%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.2, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <p className="text-lg font-light leading-relaxed mb-4 text-indigo-100 px-4 mt-4">
              Experience the Full Journey
            </p>
            <p className="text-sm text-indigo-200/70 leading-relaxed px-4 mb-4" >
              This portfolio comes alive on desktop, where interactive elements and immersive designs await your exploration.
            </p>
          </div>
        </motion.div>

        {/* Add Resume Download Button after the glassmorphic card */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-8 mb-10"
        >
                  <motion.a
            href="/ARUN_RESUME.pdf"  // Updated path to match the actual file
            download
            className="group relative overflow-hidden px-8 py-3 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 backdrop-blur-sm hover:from-violet-500/30 hover:to-fuchsia-500/30 border border-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10"
              animate={{
                x: ['-100%', '100%'],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <div className="relative flex items-center gap-2">
              <span className="text-sm font-light text-white group-hover:text-white/90">
                Download Resume
              </span>
              <motion.svg 
                className="w-4 h-4 text-white/70 group-hover:text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                animate={{ y: [0, 2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" />
              </motion.svg>
            </div>
          </motion.a>
        </motion.div>

        {/* Social Links with Modern Layout */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          {socialMediaLinks.map(social => {
            const Icon = socialIconMap[social.name.toLowerCase()];
            return (
              <motion.a 
                key={social.name}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative p-3.5 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-full text-indigo-200 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/20 overflow-hidden"
                whileHover={{ 
                  scale: 1.15,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <div className="relative">
                  {Icon && <Icon size={22} />}
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Contact Links with Minimal Design */}
        {(profileData.email || profileData.phone) && (
          <motion.div 
            variants={itemVariants}
            className="mt-8 space-y-3"
          >
            {profileData.email && (
              <motion.a 
                href={`mailto:${profileData.email}`}
                className="flex items-center justify-center p-3 bg-white/5 backdrop-blur-md rounded-lg text-indigo-200 hover:text-white transition-all duration-300 border border-white/5 hover:border-white/20"
                whileHover={{ y: -2 }}
              >
                <Mail size={18} className="mr-2 opacity-70" />
                <span className="text-sm">{profileData.email}</span>
              </motion.a>
            )}
          </motion.div>
        )}
      </motion.div>
      

      {/* Minimal Footer */}
      <motion.p 
        variants={itemVariants}
        className="absolute bottom-6 text-center text-xs text-indigo-200/40"
      >
        {new Date().getFullYear()} • {simpleName}
      </motion.p>
    </motion.div>
  );
};

export default MobileFallback; 