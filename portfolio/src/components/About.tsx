import React, { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-24">
      <div>
        <h2 className={`section-heading transition-all duration-500 fadein ${isVisible ? 'show' : ''}`}>
          <span className="number">01.</span>About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 mt-12">
          <div className={`md:col-span-2 transition-all duration-500 fadein delay-200 ${isVisible ? 'show' : ''}`}>
            <div className="space-y-4 text-slate">
              <p>
                Hello! I'm Thisun, a Computer Science student at Informatics Institute of Technology, Colombo. 
                I enjoy building software solutions and exploring new technologies through hands-on development projects.

              </p>
              <p>
                I enjoy working across the full development stack, 
                from designing databases and building REST APIs to creating responsive user interfaces. 
                My experience spans multiple programming languages and frameworks, 
                and I'm always eager to tackle new technical challenges.

              </p>
              <p>
                Currently seeking internship opportunities to apply my technical skills in real-world projects and learn 
                from experienced software engineers.
              </p>
              
              <p className="mt-8">Here are a few technologies I've been working with recently:</p>
              
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mt-5">
                <li className="flex items-center">
                  <span className="text-green mr-2">▹</span> JavaScript (ES6+)
                </li>
                <li className="flex items-center">
                  <span className="text-green mr-2">▹</span> HTML & CSS
                </li>
                <li className="flex items-center">
                  <span className="text-green mr-2">▹</span> React 
                </li>
                <li className="flex items-center">
                  <span className="text-green mr-2">▹</span> Python 
                </li>
                <li className="flex items-center">
                  <span className="text-green mr-2">▹</span> Node.js 
                </li>
                <li className="flex items-center">
                  <span className="text-green mr-2">▹</span> MySQL 
                </li>
                <li className="flex items-center">
                  <span className="text-green mr-2">▹</span> Java 
                </li>
                <li className="flex items-center">
                  <span className="text-green mr-2">▹</span> Git/GitHub 
                </li>
              </ul>
            </div>
          </div>
          
          <div className={`transition-all duration-500 fadein delay-300 ${isVisible ? 'show' : ''}`}>
            <div className="flex justify-center">
              <div className="max-w-xs mx-auto">
                <img
                  src="/profile.jpg"
                  alt="Thisun — portrait"
                  className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;