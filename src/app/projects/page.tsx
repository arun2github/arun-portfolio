'use client';
import React from 'react';
import { projects as projectsData } from '@/data/portfolioData';
import Link from 'next/link';
import { ArrowLeft, Smartphone, Globe, Brain } from 'lucide-react';
import NewProjectCard from '@/components/ui/NewProjectCard';

export default function AllProjectsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const { mobileProjects, webProjects, aiProjects } = React.useMemo(() => {
    const mobile = projectsData.filter(project => 
      project.category?.toLowerCase().includes('mobile')
    );
    const web = projectsData.filter(project => 
      project.category?.toLowerCase().includes('web')
    );
    const ai = projectsData.filter(project => 
      project.category?.toLowerCase().includes('ai')
    );
    return { mobileProjects: mobile, webProjects: web, aiProjects: ai };
  }, []);

  const filteredProjects = React.useMemo(() => {
    if (selectedCategory === 'all') {
      return [...aiProjects, ...mobileProjects, ...webProjects];
    }
    if (selectedCategory === 'mobile') return mobileProjects;
    if (selectedCategory === 'web') return webProjects;
    if (selectedCategory === 'ai') return aiProjects;
    return [];
  }, [selectedCategory, mobileProjects, webProjects, aiProjects]);

  if (projectsData.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#1A1D24] text-white p-4">
        <h1 className="text-4xl font-bold mb-4">No Projects Found</h1>
        <p className="mb-8 text-neutral-300">Sorry, there are no projects to display at the moment.</p>
        <Link href="/" className="px-6 py-2 bg-[#535C91] text-white rounded-lg hover:bg-[#7E8CE0] transition-colors">
          Go to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white py-12 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Back to Home Link */}
        <div className="mb-10">
          <Link href="/" data-nav-link className="inline-flex items-center text-[#7E8CE0] hover:text-[#535C91] transition-colors group">
            <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            A collection of my work in AI agents, mobile app development and web applications
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            data-button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-xl transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-[#7E8CE0] to-[#535C91] text-white shadow-lg shadow-[#7E8CE0]/30'
                : 'bg-white/10 text-neutral-300 hover:bg-white/20'
            }`}
          >
            All Projects
          </button>
          <button
            data-button
            onClick={() => setSelectedCategory('ai')}
            className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 ${
              selectedCategory === 'ai'
                ? 'bg-gradient-to-r from-[#7E8CE0] to-[#535C91] text-white shadow-lg shadow-[#7E8CE0]/30'
                : 'bg-white/10 text-neutral-300 hover:bg-white/20'
            }`}
          >
            <Brain size={20} />
            AI Agents
          </button>
          <button
            data-button
            onClick={() => setSelectedCategory('mobile')}
            className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 ${
              selectedCategory === 'mobile'
                ? 'bg-gradient-to-r from-[#7E8CE0] to-[#535C91] text-white shadow-lg shadow-[#7E8CE0]/30'
                : 'bg-white/10 text-neutral-300 hover:bg-white/20'
            }`}
          >
            <Smartphone size={20} />
            Mobile Apps
          </button>
          <button
            data-button
            onClick={() => setSelectedCategory('web')}
            className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 ${
              selectedCategory === 'web'
                ? 'bg-gradient-to-r from-[#7E8CE0] to-[#535C91] text-white shadow-lg shadow-[#7E8CE0]/30'
                : 'bg-white/10 text-neutral-300 hover:bg-white/20'
            }`}
          >
            <Globe size={20} />
            Web Apps
          </button>
        </div>

        {/* Projects Grid */}
        {selectedCategory === 'all' ? (
          <>
            {/* AI Projects Section */}
            {aiProjects.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-white">
                  <Brain size={28} className="text-[#7E8CE0]" />
                  AI Agent Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {aiProjects.map((project, index) => (
                    <div
                      key={project.id}
                      className="transform transition-all duration-500"
                      style={{
                        opacity: 0,
                        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`
                      }}
                    >
                      <NewProjectCard project={project} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mobile Projects Section */}
            {mobileProjects.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-white">
                  <Smartphone size={28} className="text-[#7E8CE0]" />
                  Mobile Applications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {mobileProjects.map((project, index) => (
                    <div
                      key={project.id}
                      className="transform transition-all duration-500"
                      style={{
                        opacity: 0,
                        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`
                      }}
                    >
                      <NewProjectCard project={project} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Web Projects Section */}
            {webProjects.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-white">
                  <Globe size={28} className="text-[#7E8CE0]" />
                  Web Applications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {webProjects.map((project, index) => (
                    <div
                      key={project.id}
                      className="transform transition-all duration-500"
                      style={{
                        opacity: 0,
                        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`
                      }}
                    >
                      <NewProjectCard project={project} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="transform transition-all duration-500"
                style={{
                  opacity: 0,
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`
                }}
              >
                <NewProjectCard project={project} />
              </div>
            ))}
          </div>
        )}

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-neutral-400">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Add keyframe animation */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
} 