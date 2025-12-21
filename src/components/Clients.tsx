'use client';

import React from 'react';
import { clients } from '@/data/portfolioData';
import { ExternalLink, Sparkles, Zap } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Clients = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, rotateY: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const handleClientClick = (client: typeof clients[0]) => {
    if (client.websiteUrl && client.websiteUrl !== '#') {
      window.open(client.websiteUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="clients" className="py-20 md:py-32 relative overflow-hidden">
      {/* Advanced Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#7E8CE0]/20 to-[#535C91]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-[#535C91]/20 to-[#A0AEC0]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 left-10 w-20 h-20 border border-[#7E8CE0]/20 rounded-lg"
        ></motion.div>
        
        <motion.div
          animate={{ 
            rotate: -360,
            y: [-10, 10, -10],
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-20 right-16 w-16 h-16 bg-gradient-to-br from-[#535C91]/10 to-[#A0AEC0]/10 rounded-full"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          {/* Floating icons around title */}
          <div className="relative inline-block">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-6 -left-12"
            >
              <Sparkles className="text-[#7E8CE0] w-6 h-6" />
            </motion.div>
            
            <motion.div
              animate={{ 
                rotate: -360,
                scale: [1.2, 1, 1.2]
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-4 -right-16"
            >
              <Zap className="text-[#535C91] w-5 h-5" />
            </motion.div>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A0AEC0] via-[#7E8CE0] to-[#535C91] drop-shadow-2xl">
                Trusted By
              </span>
              {/* Glow effect behind text */}
              <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-[#A0AEC0] via-[#7E8CE0] to-[#535C91] blur-2xl opacity-30">
                Trusted By
              </span>
            </h2>
          </div>
          
          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="w-32 h-1.5 bg-gradient-to-r from-[#A0AEC0] via-[#7E8CE0] to-[#535C91] mx-auto rounded-full mb-8 shadow-lg shadow-[#7E8CE0]/30"
          ></motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-slate-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
          >
            Partnering with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E8CE0] to-[#535C91] font-semibold">innovative leaders</span> who shape the future
          </motion.p>
        </motion.div>

        {/* Enhanced Clients Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.3,
                rotateY: 15,
                z: 50,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleClientClick(client)}
              className="group cursor-pointer relative perspective-1000"
              style={{ perspective: '1000px' }}
            >
              {/* Glow effect behind logo */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `conic-gradient(from 180deg, transparent, ${
                    index === 0 ? '#7E8CE0' : index === 1 ? '#535C91' : '#A0AEC0'
                  }, transparent)`,
                  filter: 'blur(20px)',
                  transform: 'scale(1.5)'
                }}
              ></motion.div>
              
              {/* Main logo container */}
              <motion.div 
                className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-3xl backdrop-blur-xl border-2 border-white/10 group-hover:border-white/30 transition-all duration-500 overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)'
                }}
                whileHover={{
                  boxShadow: `0 20px 60px rgba(${
                    index === 0 ? '6, 182, 212' : index === 1 ? '139, 92, 246' : '16, 185, 129'
                  }, 0.4), inset 0 1px 1px rgba(255,255,255,0.2)`
                }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20"
                  animate={{
                    background: [
                      `conic-gradient(from 0deg, transparent, ${
                        index === 0 ? '#7E8CE0' : index === 1 ? '#535C91' : '#A0AEC0'
                      }, transparent)`,
                      `conic-gradient(from 360deg, transparent, ${
                        index === 0 ? '#7E8CE0' : index === 1 ? '#535C91' : '#A0AEC0'
                      }, transparent)`
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                ></motion.div>

                {/* Logo */}
                <div className="relative w-full h-full p-4 flex items-center justify-center">
                  <div className={`relative w-full h-full ${
                    client.id === 'vahaan-bazar' 
                      ? 'bg-white rounded-xl p-2' 
                      : client.id === 'tura-municipal-board' 
                        ? 'bg-white/90 rounded-xl p-3'
                        : 'bg-white/10 rounded-xl p-3 backdrop-blur-sm'
                  }`}>
                    <Image
                      src={client.logoUrl}
                      alt={`${client.name} logo`}
                      fill
                      style={{ objectFit: 'contain' }}
                      className={`transition-all duration-500 drop-shadow-lg ${
                        client.id === 'vahaan-bazar' || client.id === 'tura-municipal-board'
                          ? 'filter brightness-100'
                          : 'filter brightness-110 group-hover:brightness-125'
                      } p-2`}
                    />
                  </div>
                </div>

                {/* Hover overlay with ripple effect */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 2, opacity: [0, 0.3, 0] }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: `radial-gradient(circle, ${
                      index === 0 ? '#7E8CE0' : index === 1 ? '#535C91' : '#A0AEC0'
                    }40 0%, transparent 70%)`
                  }}
                ></motion.div>

                {/* Corner accent */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink size={12} className="text-white drop-shadow-lg" />
                </div>
              </motion.div>

              {/* Enhanced tooltip */}
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                whileHover={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 pointer-events-none"
              >
                <div className="relative">
                  <div className="bg-slate-900/95 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/20 shadow-2xl">
                    <p className="text-white text-sm font-semibold whitespace-nowrap">
                      {client.name}
                    </p>
                    {/* Tooltip arrow */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-3 h-3 bg-slate-900/95 border-l border-t border-white/20 rotate-45 backdrop-blur-xl"></div>
                  </div>
                </div>
              </motion.div>

              {/* App store badges with enhanced animation */}
              {client.appLinks && (
                <motion.div 
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileHover={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 pointer-events-none"
                >
                  <div className="flex gap-3">
                    {client.appLinks.android && (
                      <motion.a
                        href={client.appLinks.android}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="pointer-events-auto group/badge relative overflow-hidden"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="px-3 py-1.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg text-white text-xs font-bold shadow-lg shadow-green-600/30 border border-green-400/30">
                          <span className="relative z-10">Android</span>
                          {/* Shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/badge:translate-x-[100%]"
                            transition={{ duration: 0.6 }}
                          ></motion.div>
                        </div>
                      </motion.a>
                    )}
                    {client.appLinks.ios && (
                      <motion.a
                        href={client.appLinks.ios}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="pointer-events-auto group/badge relative overflow-hidden"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white text-xs font-bold shadow-lg shadow-blue-600/30 border border-blue-400/30">
                          <span className="relative z-10">iOS</span>
                          {/* Shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/badge:translate-x-[100%]"
                            transition={{ duration: 0.6 }}
                          ></motion.div>
                        </div>
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-24"
        >
          <div className="relative inline-block">
            <p className="text-slate-400 text-lg font-light">
              Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E8CE0] to-[#535C91] font-semibold">future</span> together
            </p>
            {/* Animated dots */}
            <motion.div 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gradient-to-r from-[#7E8CE0] to-[#535C91] rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;