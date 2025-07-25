'use client';
import React from 'react';
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { profileData } from '@/data/portfolioData';
import { Layers, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <section id="about" className="min-h-screen relative text-white overflow-hidden flex items-center justify-center py-16 md:py-20 bg-gradient-to-br from-[#1A1D24] via-[#212530] to-[#1A1D24]">
        
        {/* Parallax Background Image - Lowest Layer */}
        <ParallaxBanner 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            zIndex: 0, 
            height: '120%', 
            top: '0%',
            willChange: 'transform'
          }} 
          className="opacity-20 md:opacity-25"
        >
          <ParallaxBannerLayer 
            image="/images/prImg.jpg" 
            speed={-8} 
            expanded={true}
            style={{
              objectFit: 'cover',
              objectPosition: 'center center',
              willChange: 'transform'
            }}
          />
        </ParallaxBanner>

        {/* Decorative Background Icon - Middle Layer */}
        <motion.div
          className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none opacity-[0.03] md:opacity-[0.04]"
          initial={{ scale: 0.9, rotate: -5 }}
          animate={{ scale: [1, 1.02, 1], rotate: [0, 2, 0] }}
          transition={{
            duration: 50,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
        >
          <Layers size="clamp(400px, 70vw, 900px)" className="text-neutral-800" />
        </motion.div>
        
        {/* Main Content Container - Top Layer */}
        <div className="relative z-10 container mx-auto px-4 w-full">
          <div className="flex flex-col lg:flex-row lg:space-x-12 items-center lg:items-stretch">
            
                          {/* Left Column: User Image */}
              <div className="lg:w-5/12 flex flex-col justify-center items-center p-4 md:p-6 w-full mb-10 lg:mb-0">
                <Parallax translateY={[-10, 10]} className="w-full max-w-sm lg:max-w-md" style={{ willChange: 'transform' }}>
                <motion.div 
                  className="bg-[#2D3748]/60 backdrop-blur-lg p-3 rounded-xl shadow-2xl border border-neutral-700/60 overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <Image 
                    src="/images/prImg.jpg" 
                    alt={profileData.name || "Profile Picture"} 
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </motion.div>
              </Parallax>
            </div>

            {/* Right Column: Text Content Card */}
            <div 
              className="lg:w-7/12 flex flex-col justify-center p-6 md:p-8 rounded-2xl w-full bg-[#535C91]/90 backdrop-blur-sm shadow-xl"
                              // Removed inline style for background color, using Tailwind classes with opacity
              >
                <Parallax translateY={[5, -5]} className="w-full flex flex-col items-center md:items-start" style={{ willChange: 'transform' }}>
                <h2 className="text-4xl lg:text-5xl font-bold mb-2 text-neutral-100 text-shadow-lg text-center md:text-left">
                  About Me
                </h2>
                <p className="text-xl lg:text-2xl text-neutral-200 mb-6 text-center md:text-left">
                  Crafting Digital Solutions That Drive Results
                </p>
                <Link href="/about-details" data-nav-link className="w-full mb-8 group relative" passHref>
                  <div className="p-6 md:p-8 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 rounded-lg shadow-lg cursor-pointer border border-white/10 hover:border-white/20 hover:shadow-xl">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#7E8CE0] to-[#535C91] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-lg leading-relaxed text-neutral-100 font-medium">
                          <span className="text-[#7E8CE0] font-semibold">Transforming Ideas into Reality:</span> I specialize in crafting high-performance mobile applications, web solutions, and AI agents that drive business growth and enhance user experiences. With 3.5+ years of expertise in Flutter, React, and cutting-edge AI technologies, I&apos;ve delivered solutions that have impacted thousands of users across multiple industries.
                        </p>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#7E8CE0] to-[#535C91] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-lg leading-relaxed text-neutral-100">
                          <span className="text-[#7E8CE0] font-semibold">Proven Track Record:</span> Successfully led the development of 50+ micro-apps for banking and healthcare industries, optimized supply chain workflows, and received the prestigious &apos;Star Award&apos; for exceptional contributions. My solutions consistently deliver measurable ROI and user satisfaction across diverse business domains.
                        </p>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#7E8CE0] to-[#535C91] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-lg leading-relaxed text-neutral-100">
                          <span className="text-[#7E8CE0] font-semibold">Client-Focused Approach:</span> I don&apos;t just write code—I solve problems. Every project starts with understanding your business goals, user needs, and technical requirements. The result? Scalable, maintainable applications that grow with your business.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-[#7E8CE0]/10 to-[#535C91]/10 rounded-lg border border-[#7E8CE0]/20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-[#7E8CE0] to-[#535C91] rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#7E8CE0]">Ready to Transform Your Vision?</p>
                            <p className="text-xs text-neutral-300">Discover how I can help bring your ideas to life</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-sm text-sky-400 italic">Explore My Journey</p>
                          <ArrowRight size={18} className="text-sky-400 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <motion.a
                  href="/ARUN_RESUME.pdf" 
                  download="Arun_Resume.pdf" 
                  data-button
                  className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#7E8CE0] to-[#535C91] text-white font-semibold rounded-xl text-lg 
                             shadow-lg transform transition-all duration-500 overflow-hidden
                             hover:shadow-2xl hover:shadow-[#7E8CE0]/30 focus:outline-none focus:ring-2 focus:ring-[#7E8CE0] focus:ring-opacity-50
                             mt-4 md:mt-0 self-center md:self-start"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(126, 140, 224, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#535C91] to-[#7E8CE0]"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  
                  {/* Sparkle Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {[
                      { left: '15%', top: '20%' },
                      { left: '85%', top: '15%' },
                      { left: '25%', top: '80%' },
                      { left: '75%', top: '75%' },
                      { left: '50%', top: '30%' },
                      { left: '60%', top: '60%' }
                    ].map((position, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: position.left,
                          top: position.top,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-2">
                    Download Resume
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ y: [0, 2, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </motion.svg>
                  </span>

                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#7E8CE0] to-[#535C91] rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 -z-10"></div>
                </motion.a>
              </Parallax>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About; 