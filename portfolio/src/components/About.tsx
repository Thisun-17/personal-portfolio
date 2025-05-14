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
                Hello! I'm Thisun, a passionate student at the University of Westminster, with my roots at A/Walisinghe 
                Harischandra College. I'm deeply fascinated by the dynamic world of social media marketing.
              </p>
              <p>
                I love exploring ways to help small and medium-sized businesses build their online presence 
                and connect with their audiences authentically. My unique perspective as a student gives me 
                fresh insights into digital trends and emerging social platforms.
              </p>
              <p>
                I'm excited to combine my academic knowledge with practical social media strategies to help 
                businesses thrive in the digital space. Let's grow together and create meaningful online connections!
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
                  <span className="text-green mr-2">▹</span> Java
                </li>
                <li className="flex items-center">
                  <span className="text-green mr-2">▹</span> Content Creation
                </li>
              </ul>
            </div>
          </div>
          
          <div className={`transition-all duration-500 fadein delay-300 ${isVisible ? 'show' : ''}`}>
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-green/20 rounded-md blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative max-w-xs mx-auto overflow-hidden bg-light-navy rounded-md">
                <div className="absolute inset-0 bg-green/20 mix-blend-multiply group-hover:bg-transparent transition duration-500"></div>
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Profile Photo" 
                    className="w-full rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;