import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

// Removed unused ProjectsProps interface

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
    title: "Estate Agent Platform",
    description: "A responsive Single Page Application for an estate agent platform using React.js. Implemented dynamic property search functionality with JSON data handling, UI enhancements with React components, and interactive features like favorites management. Ensured responsiveness with CSS Grid/Flexbox and optimized security with client-side protections.",
    tags: ["React.js", "HTML5", "CSS3", "JavaScript", "JSON", "Responsive Design"],
    external: "https://responsive-web-application-spa.vercel.app/",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Personal Finance Tracker",
    description: "A comprehensive finance tracking application built with Python and Tkinter. Features include transaction management, input validation, and JSON-based data storage. The application allows users to track income, expenses, and provides financial insights.",
    tags: ["Python", "Tkinter", "JSON", "Financial Management"],
    github: "https://github.com/Thisun-17/Python",
    image: "https://images.pexels.com/photos/5483075/pexels-photo-5483075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "SDG 15 - Life on Land",
    description: "A responsive website focused on Sustainable Development Goal 15: Life on Land. Built with modern web technologies, featuring responsive design, CSS animations, and comprehensive information about environmental conservation.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/Thisun-17/Web-Design-and-Development",
    image: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Student Management System",
    description: "A Java-based student management system using file I/O for data storage. Features include student registration, module mark management, and academic performance analysis. The CLI interface provides a straightforward way to manage student records.",
    tags: ["Java", "File I/O", "CLI", "Education"],
    github: "https://github.com/Thisun-17/Java-",
    image: "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Content Saver - Chrome Extension",
    description: "A feature-rich Chrome extension developed using JavaScript, HTML, and CSS that enhances web browsing productivity by allowing users to capture, organize, and retrieve web content.",
    tags: ["JavaScript", "HTML", "CSS", "Chrome Extension", "Browser API"],
    github: "https://github.com/Thisun-17/Highlight-text-Chrome-extension-",
    image: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Projects: React.FC = () => {
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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-24">
      <h2 className={`section-heading transition-all duration-500 fadein ${isVisible ? 'show' : ''}`}>
        <span className="number">03.</span>Some Things I've Built
      </h2>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => {
          const linkUrl = project.github || project.external || "#";
          
          return (
            <a 
              key={index}
              href={linkUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className={`group block overflow-hidden bg-light-navy rounded-lg transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_80px_-15px_rgba(100,255,218,0.2)] fadein ${
                isVisible ? `show delay-${(index + 1) * 100}` : ''
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-light-navy to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lightest-slate text-xl font-semibold group-hover:text-green transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex gap-3 text-lightest-slate">
                    {project.github && (
                      <span 
                        className="group-hover:text-green transition-colors"
                        aria-label={`GitHub - ${project.title}`}
                      >
                        <Github size={18} />
                      </span>
                    )}
                    {project.external && (
                      <span 
                        className="group-hover:text-green transition-colors"
                        aria-label={`External Link - ${project.title}`}
                      >
                        <ExternalLink size={18} />
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-slate text-sm mb-6 line-clamp-3">{project.description}</p>
                
                <div className="mt-auto">
                  <ul className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <li 
                        key={tagIndex} 
                        className="text-xs font-mono px-2 py-1 bg-lightest-navy rounded-full text-green"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;