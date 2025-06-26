'use client';
import React from 'react';
import { projects as projectsData } from '@/data/portfolioData';
import Link from 'next/link';
import { ArrowLeft, Smartphone, Globe, Brain } from 'lucide-react';
import NewProjectCard from '@/components/ui/NewProjectCard';

export default function AllProjectsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [isLoading, setIsLoading] = React.useState(true);

  const { mobileProjects, webProjects, aiProjects } = React.useMemo(() => {
    console.log('Filtering projects...');
    console.log('Raw projectsData:', projectsData);
    
    const mobile = projectsData.filter(project => {
      const isMobile = project.category?.toLowerCase().includes('mobile');
      console.log(`Project ${project.title}: category="${project.category}", isMobile=${isMobile}`);
      return isMobile;
    });
    
    const web = projectsData.filter(project => {
      const isWeb = project.category?.toLowerCase().includes('web');
      console.log(`Project ${project.title}: category="${project.category}", isWeb=${isWeb}`);
      return isWeb;
    });
    
    const ai = projectsData.filter(project => {
      const isAI = project.category?.toLowerCase().includes('ai');
      console.log(`Project ${project.title}: category="${project.category}", isAI=${isAI}`);
      return isAI;
    });
    
    console.log('Filtered results:', { mobile: mobile.length, web: web.length, ai: ai.length });
    return { mobileProjects: mobile, webProjects: web, aiProjects: ai };
  }, []);

  const filteredProjects = React.useMemo(() => {
    console.log('Calculating filtered projects for category:', selectedCategory);
    let result: typeof projectsData = [];
    
    if (selectedCategory === 'all') {
      result = [...aiProjects, ...mobileProjects, ...webProjects];
    } else if (selectedCategory === 'mobile') {
      result = mobileProjects;
    } else if (selectedCategory === 'web') {
      result = webProjects;
    } else if (selectedCategory === 'ai') {
      result = aiProjects;
    }
    
    console.log('Filtered projects result:', result.length, 'projects');
    return result;
  }, [selectedCategory, mobileProjects, webProjects, aiProjects]);

  // Debug logging
  React.useEffect(() => {
    console.log('=== DEBUG INFO ===');
    console.log('Projects Data Length:', projectsData?.length || 0);
    console.log('Projects Data:', projectsData);
    console.log('Mobile Projects:', mobileProjects);
    console.log('Web Projects:', webProjects);
    console.log('AI Projects:', aiProjects);
    console.log('Selected Category:', selectedCategory);
    console.log('Filtered Projects:', filteredProjects);
    console.log('Is Loading:', isLoading);
    console.log('==================');
    
    // Set loading to false after a short delay to ensure hydration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [mobileProjects, webProjects, aiProjects, selectedCategory, filteredProjects, isLoading]);

  // Ensure 'all' is selected by default on mount
  React.useEffect(() => {
    console.log('Setting default category to "all"');
    setSelectedCategory('all');
  }, []);

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#1A1D24] text-white p-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7E8CE0] mb-4"></div>
        <p className="text-neutral-300">Loading projects...</p>
      </div>
    );
  }

  if (!projectsData || projectsData.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#1A1D24] text-white p-4">
        <h1 className="text-4xl font-bold mb-4">No Projects Found</h1>
        <p className="mb-8 text-neutral-300">Sorry, there are no projects to display at the moment.</p>
        <p className="mb-4 text-sm text-neutral-500">Debug: projectsData length = {projectsData?.length || 0}</p>
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
          {/* Debug info */}
          <p className="text-sm text-neutral-500 mt-2">
            Debug: Total Projects: {projectsData.length} | 
            Mobile: {mobileProjects.length} | 
            Web: {webProjects.length} | 
            AI: {aiProjects.length} | 
            Selected: {selectedCategory}
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
            All Projects ({aiProjects.length + mobileProjects.length + webProjects.length})
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
            AI Agents ({aiProjects.length})
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
            Mobile Apps ({mobileProjects.length})
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
            Web Apps ({webProjects.length})
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
                  AI Agent Projects ({aiProjects.length})
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
                  Mobile Applications ({mobileProjects.length})
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
                  Web Applications ({webProjects.length})
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
            <p className="text-sm text-neutral-500 mt-2">Total projects available: {projectsData.length}</p>
            <p className="text-sm text-neutral-500">Selected category: {selectedCategory}</p>
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