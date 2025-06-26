import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/portfolioData';

interface NewProjectCardProps {
  project: Project;
}

const NewProjectCard: React.FC<NewProjectCardProps> = ({ project }) => {
  const isMobileApp = project.category?.toLowerCase().includes('mobile');

  // Common neumorphism styles for both card types
  const neumorphismStyles = {
    background: '#1A1D24',
    boxShadow: 'inset 2px 2px 8px rgba(255,255,255,0.05), inset -2px -2px 8px rgba(0,0,0,0.3), 8px 8px 24px rgba(0,0,0,0.4)',
    border: '1px solid rgba(255,255,255,0.05)',
  };

  if (isMobileApp) {
    return (
      <div 
        data-project-card
        className="group relative w-full h-[600px] max-w-sm mx-auto rounded-3xl overflow-hidden transform transition-all duration-500"
        style={neumorphismStyles}
      >
        <div className="p-4 h-full flex flex-col">
          {/* Mobile Phone Frame - Smaller to make room for content */}
          <div className="relative w-[160px] h-[320px] mx-auto mb-3 perspective-1000 flex-shrink-0">
            <div className="absolute inset-0 bg-[#1A1D24] rounded-[1.5rem] border-[4px] border-[#2A2D35] shadow-2xl overflow-hidden">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-[#1A1D24] rounded-b-lg z-10"></div>
              
              {/* Main Image */}
              <div className="relative w-full h-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>

              {/* Floating App Icons */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                  <Image
                    src="/images/android.png"
                    alt="Get it on Google Play"
                    width={16}
                    height={16}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                  <Image
                    src="/images/app-store.png"
                    alt="Download on App Store"
                    width={16}
                    height={16}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-2 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2">{project.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed line-clamp-4 mb-2 px-2">
                {project.shortDescription}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-1.5 justify-center mb-3">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-semibold rounded-full"
                  style={{
                    background: '#23272f',
                    color: '#e5e7eb',
                    boxShadow: 'inset 1px 1px 3px rgba(255,255,255,0.04), 2px 2px 6px rgba(0,0,0,0.2)',
                    border: '1px solid #23272f',
                    minWidth: '50px',
                    display: 'inline-block',
                    textAlign: 'center',
                    letterSpacing: '0.02em',
                  }}
                >
                  {tag.name}
                </span>
              ))}
            </div>
            
            <div className="flex justify-end">
              <Link 
                href={`/projects/${project.id}`} 
                data-nav-link 
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-[#7E8CE0] to-[#535C91] rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#7E8CE0]/30 hover:-translate-y-1 group/btn"
              >
                <span>View Details</span>
                <svg className="w-3 h-3 ml-1 transform transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Web Project Card - Same size as mobile
  return (
    <div 
      data-project-card
      className="group relative w-full h-[600px] max-w-sm mx-auto rounded-3xl overflow-hidden transform transition-all duration-500"
      style={neumorphismStyles}
    >
      <div className="relative h-[280px] flex-shrink-0">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="p-6 h-[320px] flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 mb-3">
            {project.shortDescription}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-semibold rounded-full"
              style={{
                background: '#23272f',
                color: '#e5e7eb',
                boxShadow: 'inset 1px 1px 3px rgba(255,255,255,0.04), 2px 2px 6px rgba(0,0,0,0.2)',
                border: '1px solid #23272f',
                minWidth: '60px',
                display: 'inline-block',
                textAlign: 'center',
                letterSpacing: '0.02em',
              }}
            >
              {tag.name}
            </span>
          ))}
        </div>
        
        <div className="flex justify-end">
          <Link 
            href={`/projects/${project.id}`} 
            data-nav-link 
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-[#7E8CE0] to-[#535C91] rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#7E8CE0]/30 hover:-translate-y-1 group/btn"
          >
            <span>View Details</span>
            <svg className="w-3 h-3 ml-1 transform transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewProjectCard;