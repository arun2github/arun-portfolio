'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Rocket, Award, Heart, Coffee, BookOpen, Disc, MountainSnow, Star, ArrowLeft, Sparkles, GitBranch } from 'lucide-react';
import { profileData, ProfileData } from '@/data/portfolioData';
import Image from 'next/image';
import Link from 'next/link';

const Section: React.FC<{ title: string; icon?: React.ReactNode; children: React.ReactNode; className?: string; delay?: number }> = ({ title, icon, children, className, delay = 0.2 }) => (
  <motion.div 
    className={`mb-10 p-6 md:p-8 bg-neutral-800/60 rounded-2xl shadow-2xl backdrop-blur-lg border border-neutral-700/70 overflow-hidden ${className}`}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay, ease: [0.25, 1, 0.5, 1] }} // Smoother ease
  >
    <div className="flex items-center mb-6">
      {icon && <span className="text-[#A0AEC0] mr-4 p-2 bg-neutral-700/50 rounded-lg">{icon}</span>}
      <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8A9BCA] to-[#A8BBEC]">
        {title}
      </h3>
    </div>
    <div className="text-neutral-200/90 leading-relaxed text-lg md:text-xl space-y-5 prose prose-invert prose-lg max-w-none prose-p:text-neutral-200/90 prose-headings:text-[#A0AEC0]">
      {children}
    </div>
  </motion.div>
);

const passionIcons: Record<string, React.ReactNode> = {
  music: <Disc size={22} className="text-purple-300" />,
  reading: <BookOpen size={22} className="text-blue-300" />,
  culinary: <Coffee size={22} className="text-orange-300" />,
  hiking: <MountainSnow size={22} className="text-teal-300" />,
  default: <Sparkles size={22} className="text-yellow-300" />
};

const AboutDetailsPage = () => {
  const profile: ProfileData = profileData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-tl from-[#10131A] via-[#1A1D24] to-[#10131A] text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 antialiased relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <GitBranch size={500} className="absolute -top-40 -left-40 text-neutral-700/30 transform rotate-[20deg]" />
        <Sparkles size={400} className="absolute -bottom-60 -right-40 text-neutral-700/30 transform rotate-[-30deg]"/>
      </div>

      <motion.div 
        className="max-w-5xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        <motion.div variants={itemVariants} className="mb-10 md:mb-16">
          <Link href="/#about" scroll={false} className="inline-flex items-center text-lg text-[#A0AEC0] hover:text-[#7E8CE0] transition-colors duration-300 group mb-8 group">
            <ArrowLeft size={24} className="mr-2.5 transition-transform duration-300 group-hover:-translate-x-1.5" />
            Return to Main Page
          </Link>

          <motion.div 
            className="flex flex-col md:flex-row items-center text-center md:text-left bg-neutral-800/50 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-2xl border border-[#535C91]/50 overflow-hidden relative"
            initial={{ opacity:0, scale:0.95}}
            animate={{opacity:1, scale:1}}
            transition={{duration:0.5, delay:0.1, ease: "circOut"}}
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#535C91]/20 rounded-full filter blur-2xl opacity-70"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#7E8CE0]/20 rounded-full filter blur-2xl opacity-70"></div>
            
            {profile.profileIconUrl && (
              <motion.div 
                className="relative mb-6 md:mb-0 md:mr-8 flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{type: "spring", stiffness:300}}
              >
                <Image 
                  src={profile.profileIconUrl}
                  alt={profile.name || 'Profile'}
                  width={160} // Increased size
                  height={160}
                  className="rounded-full shadow-2xl border-4 border-[#6874B7] object-cover"
                  priority
                />
                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-[#A0AEC0]/50 transition-all duration-300"></div>
              </motion.div>
            )}
            <div className="flex-grow z-10">
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#A8BBEC] via-[#CAD5F0] to-[#A8BBEC] mb-3 leading-tight tracking-tight"
                initial={{ opacity: 0, y:15}}
                animate={{ opacity:1, y:0}}
                transition={{delay:0.3, duration:0.5}}
              >
                {profile.name}
              </motion.h1>
              <motion.p 
                className="text-2xl md:text-3xl text-neutral-300/80 font-light tracking-wide"
                initial={{ opacity: 0, y:10}}
                animate={{ opacity:1, y:0}}
                transition={{delay:0.4, duration:0.5}}
              >
                {profile.title1} <span className="text-[#7E8CE0]">&</span> {profile.title2}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Grouping A Little More About Me and My Coding Odyssey into a 2-column layout */}
        <motion.div 
          className="md:grid md:grid-cols-2 md:gap-10"
        >
          {profile.detailedIntro && (
            <Section title="A Little More About Me" icon={<Zap size={30} />} delay={0.1 * 1}>
              <p className="whitespace-pre-line first-letter:text-4xl first-letter:font-bold first-letter:text-[#A0AEC0] first-letter:mr-2 first-letter:float-left">{profile.detailedIntro}</p>
            </Section>
          )}

          {profile.codingJourney && (
            <Section title="My Coding Odyssey" icon={<Rocket size={30} />} delay={0.1 * 1.5}> {/* Adjusted delay */}
              <p className="whitespace-pre-line">{profile.codingJourney}</p>
            </Section>
          )}
        </motion.div>

        {profile.starAwardDetails && profile.starAwardDetails.imageUrl && (
          <Section title="Special Recognition" icon={<Star size={30} className="text-yellow-300"/>} delay={0.1 * 3}>
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-neutral-700/50 rounded-xl shadow-inner">
              {profile.starAwardDetails.title && 
                <h4 className="text-2xl md:text-3xl font-semibold text-yellow-200 mb-4 md:mb-6">
                  {profile.starAwardDetails.title}
                </h4>
              }
              <motion.div 
                className="relative w-full max-w-xl lg:max-w-2xl h-auto mb-5 rounded-lg overflow-hidden shadow-2xl border-2 border-yellow-500/60 hover:shadow-yellow-400/20 transition-all duration-300"
                whileHover={{ scale:1.03, borderColor: 'rgba(250,204,21,0.8)'}}
                transition={{type:"spring", stiffness:200}}
              >
                <Image 
                  src={profile.starAwardDetails.imageUrl}
                  alt={profile.starAwardDetails.title || 'Star Award Image'}
                  width={700} 
                  height={450} 
                  layout="responsive"
                  objectFit="contain"
                  className="bg-neutral-900/30"
                />
              </motion.div>
              {profile.starAwardDetails.description && 
                <p className="text-neutral-300/80 text-md md:text-lg leading-relaxed whitespace-pre-line">
                  {profile.starAwardDetails.description}
                </p>
              }
            </div>
          </Section>
        )}

        {profile.achievements && profile.achievements.length > 0 && (
          <Section title="Other Milestones" icon={<Award size={30} />} delay={0.1 * 4}>
            <ul className="list-none space-y-4">
              {profile.achievements.map((ach, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start p-3.5 bg-neutral-700/40 rounded-lg hover:bg-neutral-700/60 transition-colors duration-200 shadow-md hover:shadow-lg"
                  initial={{ opacity:0, x:-25, scale: 0.95}}
                  whileInView={{ opacity:1, x:0, scale: 1}}
                  viewport={{once:true, amount:0.3}}
                  transition={{delay: i * 0.12, duration:0.5, ease: [0.25, 1, 0.5, 1] }} // Adjusted transition
                >
                  <GitBranch size={22} className="text-[#7E8CE0] mr-4 mt-1 flex-shrink-0 transform rotate-[-45deg]" /> {/* Changed icon */}
                  <span className="text-neutral-100 text-lg">{ach}</span>
                </motion.li>
              ))}
            </ul>
          </Section>
        )}

        {/* Grouping What Drives Me and My Philosophy into a 2-column layout on medium screens and up */}
        <motion.div 
          className="md:grid md:grid-cols-2 md:gap-10"
          // This parent div doesn't need its own animation variant if children handle theirs
        >
          {profile.motivation && (
            <Section title="What Drives Me" icon={<Heart size={30} className="text-red-300" />} delay={0.1 * 5}>
              <p className="whitespace-pre-line italic text-neutral-300/70">{profile.motivation}</p>
            </Section>
          )}
          
          {profile.philosophy && (
            <Section title="My Philosophy" icon={<BookOpen size={30} className="text-green-300" />} delay={0.1 * 5.5}> {/* Adjusted delay slightly */}
              <blockquote className="border-l-4 border-[#7E8CE0] pl-6 py-2 my-4 bg-neutral-700/30 rounded-r-md">
                <p className="whitespace-pre-line text-xl font-medium text-neutral-100">{profile.philosophy}</p>
              </blockquote>
            </Section>
          )}
        </motion.div>

        {profile.passionsOutsideCode && profile.passionsOutsideCode.length > 0 && (
          <Section title="Beyond the Keyboard" icon={<Coffee size={30} className="text-orange-300" />} delay={0.1 * 7}>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {profile.passionsOutsideCode.map((passion, i) => {
                const iconKey = passion.toLowerCase().split(' ')[0];
                return (
                  <motion.div 
                    key={i} 
                    className="flex items-center bg-neutral-700/50 p-4 rounded-xl shadow-lg hover:bg-neutral-700/70 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-default"
                    initial={{ opacity:0, scale:0.9}}
                    whileInView={{ opacity:1, scale:1}}
                    viewport={{once:true, amount:0.5}}
                    transition={{delay: i * 0.1, duration:0.4}}
                  >
                    <div className="p-2 bg-neutral-600/50 rounded-full mr-3">
                      {passionIcons[iconKey] || passionIcons.default} 
                    </div>
                    <span className="ml-2 text-neutral-100 text-md font-medium">{passion}</span>
                  </motion.div>
                );
              })}
            </div>
          </Section>
        )}

        <motion.div variants={itemVariants} className="text-center mt-20 md:mt-24 mb-8">
          <Link 
            href="/#contact" 
            className="px-12 py-4 bg-gradient-to-r from-[#6A77C2] to-[#8A9BCA] hover:from-[#8A9BCA] hover:to-[#6A77C2] text-white font-bold rounded-xl text-xl md:text-2xl transition-all duration-300 ease-in-out shadow-2xl hover:shadow-[#8A9BCA]/30 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#8A9BCA]/50"
          >
            Let&apos;s Innovate Together
          </Link>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default AboutDetailsPage; 