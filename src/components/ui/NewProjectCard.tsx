import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/portfolioData';

interface NewProjectCardProps {
  project: Project;
}

const NewProjectCard: React.FC<NewProjectCardProps> = ({ project }) => {
  const isMobileApp = project.category?.toLowerCase().includes('mobile');
  const secondImage = project.galleryImages?.[0]?.url || project.imageUrl;

  if (isMobileApp) {
    return (
      <div className="group relative w-full max-w-sm mx-auto bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#7E8CE0]/30">
        <div className="p-6">
          {/* Mobile Phone Frame */}
          <div className="relative w-[280px] h-[560px] mx-auto mb-6 perspective-1000">
            <div className="absolute inset-0 bg-[#1A1D24] rounded-[3rem] border-[8px] border-[#2A2D35] shadow-2xl overflow-hidden">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[#1A1D24] rounded-b-2xl z-10"></div>
              
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
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                  <Image
                    src="/images/android.png"
                    alt="Get it on Google Play"
                    width={24}
                    height={24}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                  <Image
                    src="/images/app-store.png"
                    alt="Download on App Store"
                    width={24}
                    height={24}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">{project.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 text-xs font-semibold rounded-full shadow-md"
                  style={{
                    background: tag.color,
                    color: "#fff",
                    border: "none",
                    minWidth: "80px",
                    display: "inline-block",
                    textAlign: "center",
                    letterSpacing: "0.02em",
                  }}
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <Link 
              href={`/projects/${project.id}`} 
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#7E8CE0] to-[#535C91] rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#7E8CE0]/30 hover:-translate-y-1 group/btn"
            >
              <span>View Details</span>
              <svg className="w-4 h-4 ml-2 transform transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Web Project Card
  return (
    <div className="group relative w-full max-w-sm mx-auto bg-[#1A1D24] rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#7E8CE0]/30">
      <div className="relative h-[280px]">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="p-6 bg-gradient-to-b from-slate-800 to-slate-900">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-1.5 text-xs font-semibold rounded-full shadow-md"
              style={{
                background: tag.color,
                color: "#fff",
                border: "none",
                minWidth: "80px",
                display: "inline-block",
                textAlign: "center",
                letterSpacing: "0.02em",
              }}
            >
              {tag.name}
            </span>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <Link href={`/projects/${project.id}`} className="text-sm font-semibold text-[#7E8CE0] hover:text-white transition-colors duration-300">
            View Details &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewProjectCard;