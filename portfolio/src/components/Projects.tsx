import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  showContent: boolean;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  external?: string;
  image?: string;
}

const featuredProjects: Project[] = [
  {
    title: "Personal Finance Tracker",
    description: "A comprehensive finance tracking application built with Python and Tkinter. Features include transaction management, input validation, and JSON-based data storage. The application allows users to track income, expenses, and provides financial insights.",
    tags: ["Python", "Tkinter", "JSON", "Financial Management"],
    github: "https://github.com/Thisun-17/finance-tracker",
    image: "https://images.pexels.com/photos/5483075/pexels-photo-5483075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "SDG 15 - Life on Land",
    description: "A responsive website focused on Sustainable Development Goal 15: Life on Land. Built with modern web technologies, featuring responsive design, CSS animations, and comprehensive information about environmental conservation.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    external: "https://sdg15-project.netlify.app",
    image: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Student Management System",
    description: "A Java-based student management system using file I/O for data storage. Features include student registration, module mark management, and academic performance analysis. The CLI interface provides a straightforward way to manage student records.",
    tags: ["Java", "File I/O", "CLI", "Education"],
    github: "https://github.com/Thisun-17/student-management-system",
    image: "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Projects: React.FC<ProjectsProps> = ({ showContent }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-24">
      <h2 className={`section-heading transition-all duration-500 fadein ${isVisible ? 'show' : ''}`}>
        <span className="number">03.</span>Some Things I've Built
      </h2>
      
      <div className="mt-12 space-y-24">
        {featuredProjects.map((project, index) => (
          <div 
            key={index}
            className={`relative grid md:grid-cols-12 items-center gap-6 md:gap-10 transition-all duration-500 fadein ${
              isVisible ? `show delay-${(index + 1) * 100}` : ''
            }`}
          >
            <div className={`md:col-span-7 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <div className="relative h-0 pb-[56.25%] overflow-hidden rounded-md shadow-xl bg-green/20">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity"
                  />
                )}
              </div>
            </div>
            
            <div className={`md:col-span-5 ${index % 2 === 0 ? 'md:order-2 md:text-right' : 'md:order-1'}`}>
              <p className="font-mono text-green text-sm mb-1">Featured Project</p>
              <h3 className="text-lightest-slate text-2xl font-semibold mb-4">
                {project.title}
              </h3>
              
              <div className="relative z-10 p-6 bg-light-navy rounded-md shadow-xl">
                <p className="text-slate">{project.description}</p>
              </div>
              
              <ul className={`flex flex-wrap gap-x-4 gap-y-2 my-6 text-xs font-mono text-slate ${
                index % 2 === 0 ? 'md:justify-end' : ''
              }`}>
                {project.tags.map((tag, tagIndex) => (
                  <li key={tagIndex}>{tag}</li>
                ))}
              </ul>
              
              <div className={`flex gap-4 text-lightest-slate ${
                index % 2 === 0 ? 'md:justify-end' : ''
              }`}>
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-green transition-colors"
                    aria-label={`GitHub - ${project.title}`}
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.external && (
                  <a 
                    href={project.external} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-green transition-colors"
                    aria-label={`External Link - ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;