import React from 'react';
import { projects as projectsData } from '@/data/portfolioData';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Target, KeyRound, Lightbulb, Workflow, HelpCircle, CheckCircle, Brain, Route, Smartphone } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Function to generate static paths if you want to pre-render these pages at build time (optional but good for SEO)
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  // Await the params before using them
  const resolvedParams = await params;
  
  if (!resolvedParams?.id) {
    notFound();
  }

  const project = projectsData.find((p) => p.id === resolvedParams.id);
  const isMobileApp = project?.category?.toLowerCase().includes('mobile');

  if (!project) {
    notFound();
  }

  // Helper to render sections safely
  const renderSection = (title: string, content?: string | string[]) => {
    if (!content || (Array.isArray(content) && content.length === 0)) return null;

    const detailedSectionConfig: Record<string, { icon?: React.ElementType, containerClass?: string, titleClass?: string, contentClass?: string }> = {
      'Introduction': { icon: HelpCircle, containerClass: "bg-opacity-30", titleClass: "text-blue-300", contentClass: "text-neutral-200" },
      'The Challenge (Problem Statement)': { icon: Target, containerClass: "bg-rose-900/20 backdrop-blur-sm", titleClass: "text-rose-300", contentClass: "text-neutral-100" },
      'My Development Journey': { icon: Route, containerClass: "bg-opacity-30", titleClass: "text-purple-300", contentClass: "text-neutral-200" },
      'Struggles & Solutions': { icon: KeyRound, containerClass: "bg-amber-900/20 backdrop-blur-sm", titleClass: "text-amber-300", contentClass: "text-neutral-100" },
      'Design Thinking & Process': { icon: Brain, containerClass: "bg-teal-900/20 backdrop-blur-sm", titleClass: "text-teal-300", contentClass: "text-neutral-100" },
      'My Approach': { icon: Workflow, containerClass: "bg-indigo-900/20 backdrop-blur-sm", titleClass: "text-indigo-300", contentClass: "text-neutral-100" },
      'Conclusion': { icon: CheckCircle, containerClass: "bg-opacity-30", titleClass: "text-green-300", contentClass: "text-neutral-200" },
      'Impact': { icon: Lightbulb, containerClass: "bg-opacity-30", titleClass: "text-yellow-300", contentClass: "text-neutral-200" },
      'About This Project': { containerClass: "bg-opacity-20", titleClass: "text-[#7E8CE0]", contentClass: "text-neutral-100" }
    };

    const config = detailedSectionConfig[title] || {};
    const IconComponent = config.icon;

    const baseContainerClass = "mb-10 p-6 md:p-8 rounded-xl shadow-xl transition-all duration-300 ease-out";
    const specificContainerClass = config.containerClass || "bg-[#2D3748]/30";
    const containerClasses = `${baseContainerClass} ${specificContainerClass} ${IconComponent ? 'hover:shadow-2xl hover:shadow-current' : 'transform hover:scale-[1.01]'}`;
    
    const baseTitleClass = "text-3xl font-semibold mb-5 flex items-center";
    const specificTitleClass = config.titleClass || "text-[#A0AEC0]";
    const titleClasses = `${baseTitleClass} ${specificTitleClass} ${IconComponent ? '' : 'border-b-2 border-[#535C91] pb-3'}`;

    const contentPClass = `leading-relaxed whitespace-pre-line text-lg ${config.contentClass || 'text-neutral-100'}`;
    const contentUlClass = `list-disc list-inside leading-relaxed space-y-2 pl-1 ${config.contentClass || 'text-neutral-100'}`;
    const contentLiClass = config.contentClass || 'text-neutral-100';

    return (
      <div className={containerClasses}>
        <h2 className={titleClasses}>
          {IconComponent && <IconComponent size={30} className="mr-4 opacity-80" />}
          {title}
        </h2>
        {Array.isArray(content) ? (
          <ul className={contentUlClass}>
            {content.map((item, index) => <li key={index} className={contentLiClass}>{item}</li>)}
          </ul>
        ) : (
          <p className={contentPClass}>
            {content}
          </p>
        )}
      </div>
    );
  };

  if (isMobileApp) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white py-12 md:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Back to Projects Link */}
            <div className="mb-10">
              <Link href="/#projects" className="inline-flex items-center text-[#7E8CE0] hover:text-[#535C91] transition-colors group">
                <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
                Back to All Projects
              </Link>
            </div>

            {/* Project Header with Phone Frame */}
            <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
              {/* Phone Frame Section */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-[280px] h-[560px] perspective-1000">
                  <div className="absolute inset-0 bg-[#1A1D24] rounded-[3rem] border-[8px] border-[#2A2D35] shadow-2xl overflow-hidden transform-gpu hover:rotate-y-12 transition-all duration-700">
                    {/* Phone Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[#1A1D24] rounded-b-2xl z-10"></div>
                    
                    {/* Main Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        layout="fill"
                        objectFit="contain"
                        className="transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Floating App Icons */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
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
              </div>

              {/* Project Info Section */}
              <div className="w-full lg:w-1/2">
                <div className="bg-[#1A1D24]/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    {project.title}
                  </h1>
                  <p className="text-xl text-neutral-400 mb-6 flex items-center">
                    <Smartphone className="mr-2" size={20} />
                    {project.category}
                  </p>
                  <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 text-sm font-medium text-white rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                  {(project.liveLink || project.sourceCodeLink) && (
                    <div className="flex gap-4">
                      {project.liveLink && project.liveLink !== '#' && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-6 py-3 bg-gradient-to-r from-[#7E8CE0] to-[#535C91] text-white rounded-xl hover:shadow-lg hover:shadow-[#7E8CE0]/30 transition-all duration-300"
                        >
                          <ExternalLink size={18} className="mr-2" />
                          View Live
                        </a>
                      )}
                      {project.sourceCodeLink && project.sourceCodeLink !== '#' && (
                        <a
                          href={project.sourceCodeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300"
                        >
                          <Github size={18} className="mr-2" />
                          View Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                {renderSection('About This Project', project.description)}
                {renderSection('Introduction', project.introduction)}
                {renderSection('The Challenge (Problem Statement)', project.problemStatement)}
                {renderSection('My Development Journey', project.developmentJourney)}
              </div>
              <div className="space-y-8">
                {renderSection('Struggles & Solutions', project.strugglesAndSolutions)}
                {renderSection('Design Thinking & Process', project.designThinking)}
                {renderSection('My Approach', project.approach)}
                {renderSection('Conclusion', project.conclusion)}
                {renderSection('Impact', project.impact)}
              </div>
            </div>

            {/* Gallery Section */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div className="mt-16">
                <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  App Screenshots
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {project.galleryImages.map((img, index) => (
                    <div
                      key={index}
                      className="relative w-[280px] h-[560px] mx-auto transform-gpu hover:scale-105 transition-all duration-500"
                    >
                      <div className="absolute inset-0 bg-[#1A1D24] rounded-[3rem] border-[8px] border-[#2A2D35] shadow-2xl overflow-hidden">
                        <Image
                          src={img.url}
                          alt={img.alt}
                          layout="fill"
                          objectFit="contain"
                          className="transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Suspense>
    );
  }

  // Web Project Layout (unchanged)
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-[#1A1D24] text-white py-12 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Back to Projects Link */}
          <div className="mb-10">
            <Link href="/#projects" className="inline-flex items-center text-[#7E8CE0] hover:text-[#535C91] transition-colors group">
              <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
              Back to All Projects
            </Link>
          </div>

          {/* Project Header */}
          <header className="mb-12 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-3 text-neutral-100 text-shadow-lg">{project.title}</h1>
            {project.category && <p className="text-xl text-neutral-400 mb-6">{project.category}</p>}
            {project.imageUrl && (
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl mb-8">
                <Image src={project.imageUrl} alt={`${project.title} main image`} layout="fill" objectFit="cover" />
              </div>
            )}
          </header>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left/Main Column for Details */}
            <div className="lg:col-span-2">
              {renderSection('About This Project', project.description)}
              {renderSection('Introduction', project.introduction)}
              {renderSection('The Challenge (Problem Statement)', project.problemStatement)}
              {renderSection('My Development Journey', project.developmentJourney)}
              {renderSection('Struggles & Solutions', project.strugglesAndSolutions)}
              {renderSection('Design Thinking & Process', project.designThinking)}
              {renderSection('My Approach', project.approach)}
              {renderSection('Conclusion', project.conclusion)}
              {renderSection('Impact', project.impact)}
            </div>

            {/* Right Sidebar for Tech, Links, Gallery */}
            <aside className="lg:col-span-1 space-y-10 lg:sticky lg:top-24 h-max">
              {project.technologiesUsed && project.technologiesUsed.length > 0 && (
                <div className="bg-[#2D3748]/50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold mb-4 text-[#7E8CE0]">Technologies Used</h3>
                  <ul className="flex flex-wrap gap-2">
                    {project.technologiesUsed.map(tech => (
                      <li key={tech} className="bg-[#535C91] text-neutral-100 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {!project.technologiesUsed && project.tags && project.tags.length > 0 && (
                <div className="bg-[#2D3748]/50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold mb-4 text-[#7E8CE0]">Key Technologies/Tags</h3>
                  <ul className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <li key={tag.name} className="bg-[#535C91] text-neutral-100 px-3 py-1 rounded-full text-sm">
                        {tag.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(project.liveLink || project.sourceCodeLink) && (
                <div className="bg-[#2D3748]/50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold mb-4 text-[#7E8CE0]">Project Links</h3>
                  <div className="space-y-3">
                    {project.liveLink && project.liveLink !== '#' && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-neutral-200 hover:text-[#7E8CE0] transition-colors">
                        <ExternalLink size={18} className="mr-2" /> View Live Project
                      </a>
                    )}
                    {project.sourceCodeLink && project.sourceCodeLink !== '#' && (
                      <a href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-neutral-200 hover:text-[#7E8CE0] transition-colors">
                        <Github size={18} className="mr-2" /> View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              )}

              {project.galleryImages && project.galleryImages.length > 0 && (
                <div className="bg-[#2D3748]/50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold mb-4 text-[#7E8CE0]">Project Gallery</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {project.galleryImages.map((img, index) => (
                      <div key={index} className="relative aspect-square rounded overflow-hidden shadow-md hover:opacity-80 transition-opacity">
                        <Image src={img.url} alt={img.alt} layout="fill" objectFit="cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default ProjectDetailPage; 