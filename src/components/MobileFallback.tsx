'use client';

import React, { useState, useEffect } from 'react';
import { profileData, socialMediaLinks } from '@/data/portfolioData';
import { Mail, Linkedin, Github, Instagram, Facebook, Twitter, Sparkles, Compass, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const socialIconMap: { [key: string]: React.ElementType } = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  // Add more if needed, ensuring keys are lowercase
};

// Fixed positions for sparkle effects to avoid hydration mismatch
const sparklePositions = [
  { left: '25%', top: '30%' },
  { left: '60%', top: '45%' },
  { left: '40%', top: '65%' }
];

const resumeSparklePositions = [
  { left: '30%', top: '25%' },
  { left: '70%', top: '40%' },
  { left: '50%', top: '70%' },
  { left: '20%', top: '55%' }
];

const MobileFallback = () => {
  const [showMobileView, setShowMobileView] = useState(false);
  const simpleName = profileData.name.replace("I'm ", "").replace(",", "");
  const title1 = profileData.title1 || 'Mobile Application Developer';
  const title2 = profileData.title2 || 'Web Developer';

  useEffect(() => {
    // Check if user has previously chosen to view on mobile
    const mobileViewPreference = localStorage.getItem('mobileViewEnabled');
    if (mobileViewPreference === 'true') {
      setShowMobileView(true);
    }
  }, []);

  const handleViewOnMobile = () => {
    setShowMobileView(true);
    localStorage.setItem('mobileViewEnabled', 'true');
    // Emit custom event to notify parent component
    window.dispatchEvent(new CustomEvent('mobileViewEnabled'));
  };

  // If user chooses to view on mobile, hide the fallback
  if (showMobileView) {
    return null;
  }

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

        {/* Mobile View Button */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-6"
        >
          <motion.button
            onClick={handleViewOnMobile}
            data-button
            className="group relative overflow-hidden px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm hover:from-emerald-500/40 hover:to-teal-500/40 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated Background Wave */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20"
              animate={{
                x: ['-100%', '100%'],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Sparkle Effects */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {sparklePositions.map((position, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: position.left,
                    top: position.top,
                  }}
                  animate={{
                    scale: [0, 1.5, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.div>

            <div className="relative flex items-center gap-2">
              <Smartphone size={18} className="text-emerald-200 group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-emerald-200 group-hover:text-white transition-colors">
                View on Mobile
              </span>
            </div>
            
            {/* Outer Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 -z-10"></div>
          </motion.button>
        </motion.div>

        {/* Add Resume Download Button after the mobile view button */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-4 mb-10"
        >
          <motion.a
            href="/ARUN_RESUME.pdf"  // Updated path to match the actual file
            download
            data-button
            className="group relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 backdrop-blur-sm hover:from-violet-500/40 hover:to-fuchsia-500/40 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-2xl hover:shadow-violet-500/20"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated Background Wave */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20"
              animate={{
                x: ['-100%', '100%'],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Sparkle Effects */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {resumeSparklePositions.map((position, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: position.left,
                    top: position.top,
                  }}
                  animate={{
                    scale: [0, 1.5, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.div>

            <div className="relative flex items-center gap-2">
              <span className="text-sm font-medium text-white group-hover:text-white/95 transition-colors">
                Download Resume
              </span>
              <motion.svg 
                className="w-4 h-4 text-white/80 group-hover:text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" />
              </motion.svg>
            </div>
            
            {/* Outer Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 -z-10"></div>
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