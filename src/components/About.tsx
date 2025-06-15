'use client';
import React from 'react';
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Card3D from './ui/3d-card';
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
          style={{ position: 'absolute', inset: 0, zIndex: 0 }} 
          className="opacity-20 md:opacity-25"
        >
          <ParallaxBannerLayer image="/images/prImg.jpg" speed={-5} expanded={false} />
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
              <Parallax speed={10} className="w-full max-w-sm lg:max-w-md">
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
              <Parallax speed={-2} className="w-full flex flex-col items-center md:items-start">
                <h2 className="text-4xl lg:text-5xl font-bold mb-2 text-neutral-100 text-shadow-lg text-center md:text-left">
                  About Me
                </h2>
                {profileData.helloTag && (
                  <p className="text-xl lg:text-2xl text-neutral-200 mb-6 text-center md:text-left">
                    {profileData.helloTag} {profileData.name}
                  </p>
                )}
                <Link href="/about-details" className="w-full mb-8 group relative" passHref>
                  <Card3D className="p-6 md:p-8 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors duration-300 rounded-lg shadow-lg cursor-pointer">
                    <p className="text-lg leading-relaxed text-neutral-100">
                      {profileData.about}
                    </p>
                    {profileData.about2 && (
                      <p className="text-lg leading-relaxed text-neutral-100 mt-4">
                        {profileData.about2}
                      </p>
                    )}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                      <p className="text-sm text-sky-400 italic mr-2">Learn more</p>
                      <ArrowRight size={18} className="text-sky-400" />
                    </div>
                     <p className="text-sm text-sky-400 mt-4 italic group-hover:text-white transition-colors">Click to learn more about my journey...</p>
                  </Card3D>
                </Link>
                <a
                  href="/ARUN_RESUME.pdf" 
                  download="Arun_Resume.pdf" 
                  className="group relative inline-block px-8 py-3 bg-neutral-100 text-[#535C91] font-semibold rounded-lg text-lg 
                             shadow-md transform transition-all duration-300 
                             hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-opacity-50
                             mt-4 md:mt-0 self-center md:self-start"
                >
                  Download Resume
                </a>
              </Parallax>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About; 