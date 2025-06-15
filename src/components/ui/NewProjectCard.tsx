import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/portfolioData';

interface NewProjectCardProps {
  project: Project;
}

const NewProjectCard: React.FC<NewProjectCardProps> = ({ project }) => {
  const isMobileApp = project.category?.toLowerCase().includes('mobile');

  if (isMobileApp) {
    return (
      <div className="group relative w-full max-w-sm mx-auto bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#7E8CE0]/30">
        <div className="p-6">
          <div className="relative w-full h-[360px] mx-auto mb-6 perspective-1000 flex justify-center items-center gap-4">
            {/* Android Phone */}
            <div className="relative w-32 h-full transform-gpu group-hover:rotate-y-12 group-hover:-translate-x-8 transition-all duration-700 ease-out">
              <div className="absolute inset-0 bg-[#1A1D24] rounded-[2rem] border-[6px] border-[#2A2D35] shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-[#2A2D35] rounded-b-xl flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3DDC84]"></div>
                </div>
                <Image
                  src={project.imageUrl}
                  alt="Android Version"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-2 border-[#3DDC84]/30"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3DDC84]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>

            {/* iOS Phone */}
            <div className="relative w-32 h-full transform-gpu group-hover:rotate-y-[-12deg] group-hover:translate-x-8 transition-all duration-700 ease-out">
              <div className="absolute inset-0 bg-[#1A1D24] rounded-[2rem] border-[6px] border-[#2A2D35] shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-[#2A2D35] rounded-b-xl flex items-center justify-center">
                  <div className="w-10 h-2 bg-[#007AFF] rounded-lg opacity-30"></div>
                </div>
                <Image
                  src={project.imageUrl}
                  alt="iOS Version"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 rounded-full bg-[#007AFF]/30"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#007AFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="flex justify-center gap-3 mb-2">
              <Image
                src="/images/android.png"
                alt="Get it on Google Play"
                width={24}
                height={24}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/app-store.png"
                alt="Download on App Store"
                width={24}
                height={24}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">{project.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {project.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium text-white rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300"
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

  return (
    <div className="group relative w-full max-w-sm mx-auto bg-[#1A1D24] rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#7E8CE0]/30">
      <div className="relative h-56">
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
        <div className="mt-4 flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 text-xs font-medium rounded-full"
              style={{ backgroundColor: tag.color || '#7E8CE0', color: 'white' }}
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