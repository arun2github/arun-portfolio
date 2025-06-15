'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Rocket, Award, Heart, Coffee, BookOpen, Disc, MountainSnow, Star } from 'lucide-react';
import { ProfileData } from '@/data/portfolioData';
import Image from 'next/image';

interface DetailedAboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
}

const Section: React.FC<{ title: string; icon?: React.ReactNode; children: React.ReactNode; className?: string }> = ({ title, icon, children, className }) => (
  <motion.div 
    className={`mb-8 p-6 bg-neutral-800/50 rounded-lg shadow-lg backdrop-blur-sm ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <h3 className="text-2xl font-semibold text-[#7E8CE0] mb-4 flex items-center">
      {icon && <span className="mr-3 text-[#A0AEC0]">{icon}</span>}
      {title}
    </h3>
    <div className="text-neutral-200 leading-relaxed space-y-3">
      {children}
    </div>
  </motion.div>
);

const DetailedAboutModal: React.FC<DetailedAboutModalProps> = ({ isOpen, onClose, profile }) => {
  if (!isOpen) return null;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
  };

  const passionIcons: Record<string, React.ReactNode> = {
    music: <Disc size={18} />,
    reading: <BookOpen size={18} />,
    culinary: <Coffee size={18} />,
    hiking: <MountainSnow size={18} />,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // Close on backdrop click
        >
          <motion.div
            className="bg-gradient-to-br from-[#1F2937] to-[#111827] text-white rounded-xl shadow-2xl max-w-3xl w-full p-6 md:p-10 relative max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-600 scrollbar-track-neutral-800"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()} // Prevent close on modal content click
          >
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors z-10 p-2 rounded-full bg-neutral-700/50 hover:bg-neutral-600/70"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col md:flex-row items-center mb-8">
              {profile.profileIconUrl && (
                <Image 
                  src={profile.profileIconUrl}
                  alt={profile.name || 'Profile'}
                  width={120}
                  height={120}
                  className="rounded-full shadow-lg border-4 border-[#535C91] mr-0 md:mr-6 mb-4 md:mb-0 object-cover"
                />
              )}
              <div>
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7E8CE0] to-[#A0AEC0] mb-1">{profile.name}</h2>
                <p className="text-xl text-neutral-300">{profile.title1} & {profile.title2}</p>
              </div>
            </div>

            {profile.detailedIntro && (
              <Section title="A Little More About Me" icon={<Zap size={24} />}>
                <p>{profile.detailedIntro}</p>
              </Section>
            )}

            {profile.codingJourney && (
              <Section title="My Coding Odyssey" icon={<Rocket size={24} />}>
                <p>{profile.codingJourney}</p>
              </Section>
            )}

            {profile.starAwardDetails && profile.starAwardDetails.imageUrl && (
              <Section title="Special Recognition" icon={<Star size={24} className="text-yellow-400"/>}>
                <div className="flex flex-col items-center text-center">
                  {profile.starAwardDetails.title && 
                    <h4 className="text-xl font-semibold text-yellow-300 mb-3">
                      {profile.starAwardDetails.title}
                    </h4>
                  }
                  <div className="relative w-full max-w-md h-auto mb-4 rounded-lg overflow-hidden shadow-xl border-2 border-yellow-500/50">
                    <Image 
                      src={profile.starAwardDetails.imageUrl}
                      alt={profile.starAwardDetails.title || 'Star Award Image'}
                      width={600} // Adjust as needed, but maintain aspect ratio
                      height={400} // Adjust as needed
                      layout="responsive"
                      objectFit="contain"
                      className="bg-neutral-700/30"
                    />
                  </div>
                  {profile.starAwardDetails.description && 
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      {profile.starAwardDetails.description}
                    </p>
                  }
                </div>
              </Section>
            )}

            {profile.achievements && profile.achievements.length > 0 && (
              <Section title="Other Milestones" icon={<Award size={24} />}>
                <ul className="list-disc list-inside space-y-2">
                  {profile.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                </ul>
              </Section>
            )}

            {profile.motivation && (
              <Section title="What Drives Me" icon={<Heart size={24} />}>
                <p>{profile.motivation}</p>
              </Section>
            )}
            
            {profile.philosophy && (
              <Section title="My Philosophy" icon={<BookOpen size={24} />}>
                <p>{profile.philosophy}</p>
              </Section>
            )}

            {profile.passionsOutsideCode && profile.passionsOutsideCode.length > 0 && (
              <Section title="Beyond the Keyboard" icon={<Coffee size={24} />}>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {profile.passionsOutsideCode.map((passion, i) => {
                    const iconKey = passion.toLowerCase().split(' ')[0]; // Simple key for icon lookup
                    return (
                      <div key={i} className="flex items-center bg-neutral-700/60 p-3 rounded-md">
                        {passionIcons[iconKey] || <Zap size={18} />} 
                        <span className="ml-2.5 text-neutral-100">{passion}</span>
                      </div>
                    );
                  })}
                </div>
              </Section>
            )}

            <div className="text-center mt-10">
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-[#535C91] hover:bg-[#7E8CE0] text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Close
              </button>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DetailedAboutModal; 