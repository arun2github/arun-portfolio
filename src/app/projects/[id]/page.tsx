import React from 'react';
import { projects as projectsData, Project } from '@/data/portfolioData';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Target, KeyRound, Lightbulb, Workflow, HelpCircle, CheckCircle, Brain, Route } from 'lucide-react'; // Added more icons

interface ProjectDetailPageProps {
  params: { id: string };
}

// Function to generate static paths if you want to pre-render these pages at build time (optional but good for SEO)
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ params: { id } }) => {
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#1A1D24] text-white p-4">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-8 text-neutral-300">Sorry, we couldn't find the project you were looking for.</p>
        <Link href="/" className="px-6 py-2 bg-[#535C91] text-white rounded-lg hover:bg-[#7E8CE0] transition-colors">
          Go to Homepage
        </Link>
      </div>
    );
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
    const specificContainerClass = config.containerClass || "bg-[#2D3748]/30"; // Default for other sections if any
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

  return (
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
  );
};

export default ProjectDetailPage; 