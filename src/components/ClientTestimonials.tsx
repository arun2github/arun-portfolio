'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Building2, Calendar, TrendingUp, Users, Sparkles, Award, CheckCircle, ExternalLink } from 'lucide-react';
import { clientTestimonials } from '@/data/portfolioData';

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredTestimonials = clientTestimonials.filter(testimonial => testimonial.featured);
  const currentTestimonial = featuredTestimonials[currentIndex];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || featuredTestimonials.length <= 1) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % featuredTestimonials.length);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredTestimonials.length]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % featuredTestimonials.length);
    
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length);
    
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={18}
        className={i < rating ? 'text-yellow-400 fill-yellow-400 drop-shadow-lg' : 'text-gray-600'}
      />
    ));
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 400 : -400,
      opacity: 0,
      scale: 0.9,
      filter: "blur(4px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 400 : -400,
      opacity: 0,
      scale: 0.9,
      filter: "blur(4px)",
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100
      }
    }
  };

  if (!featuredTestimonials || featuredTestimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#1A1D24] via-[#212530] to-[#1A1D24] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#7E8CE0] via-[#535C91] to-[#A0AEC0]"
          >
            Client Success Stories
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-neutral-400 max-w-2xl mx-auto"
          >
            Transforming businesses through innovative technology solutions
          </motion.p>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-7xl mx-auto"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
                opacity: { duration: 0.5, ease: "easeInOut" },
                scale: { duration: 0.5, ease: "easeInOut" },
                filter: { duration: 0.5, ease: "easeInOut" }
              }}
            >
              {/* Modern Glass Card Design */}
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-purple-500/5 opacity-50"></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote size={80} className="text-emerald-400" />
                </div>
                
                <div className="absolute bottom-6 left-6 opacity-10">
                  <Sparkles size={60} className="text-blue-400" />
                </div>

                {/* Content Container */}
                <div className="relative z-10 p-8 md:p-12">
                  
                  {/* Header Section */}
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full border border-emerald-500/30 mb-6">
                      <Award size={16} className="text-emerald-400" />
                      <span className="text-emerald-400 font-semibold text-sm">{currentTestimonial.projectCategory}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {currentTestimonial.projectName}
                    </h3>
                    
                    {/* Rating Stars */}
                    <div className="flex items-center justify-center gap-1 mb-6">
                      {renderStars(currentTestimonial.rating)}
                      <span className="text-neutral-400 ml-2 text-sm">({currentTestimonial.rating}/5 Stars)</span>
                    </div>
                  </div>

                  {/* Main Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                    
                    {/* Testimonial Text - Takes 2 columns */}
                    <div className="lg:col-span-2 space-y-8">
                      <blockquote className="text-lg md:text-xl text-neutral-100 leading-relaxed font-medium relative">
                        <span className="text-emerald-400 text-4xl absolute -top-4 -left-2">&ldquo;</span>
                        <span className="pl-6">{currentTestimonial.testimonialText}</span>
                        <span className="text-emerald-400 text-4xl">&rdquo;</span>
                      </blockquote>
                      
                      {/* Impact Metrics */}
                      {currentTestimonial.projectImpact && (
                        <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl p-6 border border-emerald-500/20">
                          <div className="flex items-center gap-2 mb-3">
                            <TrendingUp size={20} className="text-emerald-400" />
                            <span className="text-emerald-400 font-bold text-sm">PROJECT IMPACT</span>
                          </div>
                          <p className="text-white font-semibold text-lg">{currentTestimonial.projectImpact}</p>
                        </div>
                      )}
                    </div>

                    {/* Client Info Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                      
                      {/* Client Card */}
                      <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-2xl p-6 border border-white/10">
                        <div className="text-center space-y-4">
                          
                          {/* Client Avatar */}
                          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 p-0.5">
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1A1D24] to-[#212530] flex items-center justify-center">
                              <span className="text-2xl font-bold text-white">
                                {currentTestimonial.clientName.charAt(0)}
                              </span>
                            </div>
                          </div>
                          
                          {/* Client Info */}
                          <div>
                            <h4 className="text-xl font-bold text-white mb-1">
                              {currentTestimonial.clientName}
                            </h4>
                            <p className="text-emerald-400 font-medium text-sm mb-2">
                              {currentTestimonial.clientTitle}
                            </p>
                            <div className="flex items-center justify-center gap-1 text-neutral-400 text-sm">
                              <Building2 size={14} />
                              <span>{currentTestimonial.clientOrganization}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-neutral-400">
                          <Calendar size={16} />
                          <span className="text-sm">{currentTestimonial.date}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-emerald-400">
                          <CheckCircle size={16} />
                          <span className="text-sm font-medium">Project Completed</span>
                        </div>
                        
                        {/* Website Link */}
                        {currentTestimonial.id === 'vahaan-bazar-testimonial' ? (
                          <div className="space-y-3">
                            {/* App Store Links for Vahaan Bazar */}
                            <div className="flex flex-col gap-3">
                              <a 
                                href="https://play.google.com/store/apps/details?id=com.vahaanbazar.app"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-green-600/20 hover:from-green-500/30 hover:to-green-600/30 rounded-lg border border-green-500/30 hover:border-green-500/50 transition-all duration-300 group"
                              >
                                <ExternalLink size={16} className="text-green-400 group-hover:text-green-300" />
                                <span className="text-green-400 group-hover:text-green-300 font-medium text-sm">Download for Android</span>
                              </a>
                              <a 
                                href="https://apps.apple.com/in/app/vahaanbazar/id6753955870"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 hover:from-blue-500/30 hover:to-blue-600/30 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 group"
                              >
                                <ExternalLink size={16} className="text-blue-400 group-hover:text-blue-300" />
                                <span className="text-blue-400 group-hover:text-blue-300 font-medium text-sm">Download for iOS</span>
                              </a>
                              <a 
                                href="https://www.vahaanbazar.in/"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 hover:from-emerald-500/30 hover:to-blue-500/30 rounded-lg border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300 group"
                              >
                                <ExternalLink size={16} className="text-emerald-400 group-hover:text-emerald-300" />
                                <span className="text-emerald-400 group-hover:text-emerald-300 font-medium text-sm">Visit Website</span>
                              </a>
                            </div>
                          </div>
                        ) : (
                          <a 
                            href="https://turamunicipalboard.com/home" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 hover:from-emerald-500/30 hover:to-blue-500/30 rounded-lg border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300 group"
                          >
                            <ExternalLink size={16} className="text-emerald-400 group-hover:text-emerald-300" />
                            <span className="text-emerald-400 group-hover:text-emerald-300 font-medium text-sm">Visit Live Website</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {featuredTestimonials.length > 1 && (
            <div 
              className="flex items-center justify-center mt-8 gap-4"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Previous Button */}
              <motion.button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-[#1A1D24] shadow-[inset_2px_2px_8px_rgba(255,255,255,0.05),inset_-2px_-2px_8px_rgba(0,0,0,0.3),4px_4px_12px_rgba(0,0,0,0.4)] border border-neutral-700/50 hover:border-[#7E8CE0]/50 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={20} className="text-neutral-400 group-hover:text-[#7E8CE0] transition-colors" />
              </motion.button>

              {/* Dots Indicator with Progress */}
              <div className="flex gap-2">
                {featuredTestimonials.map((_, index) => (
                  <motion.div key={index} className="relative">
                    <motion.button
                      onClick={() => goToTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-gradient-to-r from-[#7E8CE0] to-[#535C91] shadow-lg'
                          : 'bg-neutral-600 hover:bg-neutral-500'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                    {/* Auto-play progress ring for current slide */}
                    {index === currentIndex && isAutoPlaying && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-[#7E8CE0]/30"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 7, ease: "linear", repeat: Infinity }}
                        style={{
                          background: `conic-gradient(from 0deg, transparent, rgba(126, 140, 224, 0.5), transparent)`
                        }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Next Button */}
              <motion.button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-[#1A1D24] shadow-[inset_2px_2px_8px_rgba(255,255,255,0.05),inset_-2px_-2px_8px_rgba(0,0,0,0.3),4px_4px_12px_rgba(0,0,0,0.4)] border border-neutral-700/50 hover:border-[#7E8CE0]/50 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={20} className="text-neutral-400 group-hover:text-[#7E8CE0] transition-colors" />
              </motion.button>

              {/* Auto-play indicator */}
              <div className="flex items-center gap-2 ml-4">
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-500'
                }`} />
                <span className="text-xs text-neutral-500">
                  {isAutoPlaying ? 'Auto' : 'Paused'}
                </span>
              </div>
            </div>
          )}
        </motion.div>

        {/* All Testimonials Count */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7E8CE0]/10 to-[#535C91]/10 rounded-full border border-[#7E8CE0]/20">
            <Users size={20} className="text-[#7E8CE0]" />
            <span className="text-neutral-300">
              {clientTestimonials.length} Happy Clients & Growing
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientTestimonials; 