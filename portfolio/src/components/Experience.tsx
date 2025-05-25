import React, { useState, useEffect, useRef } from 'react';

// Removed unused ExperienceProps interface

interface ExperienceItem {
  company: string;
  position: string;
  date: string;
  details: string[];
}

const experienceData: ExperienceItem[] = [
  {
    company: "Informatics Institute of Technology",
    position: "Student",
    date: "2024 - Present",
    details: [
      "Pursuing B.Sc. (Hons) Computer Science with focus on software development and system design",
      "Developing practical skills through hands-on projects in full-stack development, database management, and API development",
      "Working on collaborative projects",
      "Building technical expertise across multiple programming languages and frameworks",
    ]
  },
  {
    company: "A/Walisinghe Harischandra College",
    position: "Student",
    date: "2014 - 2023",
    details: [
      "Completed secondary education with focus on technology and business studies",
      "Participated in extracurricular activities including debate club and tech workshops",
      "Led student initiatives for digital awareness and online safety",
      "Achieved academic excellence in business and technology subjects"
    ]
  }
];

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
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
    <section id="experience" ref={sectionRef} className="py-20 md:py-24">
      <h2 className={`section-heading transition-all duration-500 fadein ${isVisible ? 'show' : ''}`}>
        <span className="number">02.</span>Where I've Been
      </h2>
      
      <div className={`mt-12 flex flex-col md:flex-row transition-all duration-500 fadein delay-200 ${isVisible ? 'show' : ''}`}>
        <div className="md:w-max mb-6 md:mb-0 border-b md:border-b-0 md:border-l border-lightest-navy overflow-x-auto">
          <div className="flex md:flex-col whitespace-nowrap">
            {experienceData.map((exp, index) => (
              <button
                key={index}
                className={`px-5 py-3 text-sm font-mono text-left transition-all duration-200 border-b-2 md:border-b-0 md:border-l-2 ${
                  activeTab === index
                    ? 'border-green text-green md:bg-light-navy/50'
                    : 'border-transparent text-slate hover:text-green hover:bg-light-navy/30'
                }`}
                onClick={() => setActiveTab(index)}
              >
                {exp.company}
              </button>
            ))}
          </div>
        </div>
        
        <div className="py-2 md:p-6 flex-1">
          <h3 className="text-xl text-lightest-slate font-medium">
            {experienceData[activeTab].position}
            <span className="text-green"> @ {experienceData[activeTab].company}</span>
          </h3>
          <p className="text-sm font-mono text-slate mt-1 mb-4">
            {experienceData[activeTab].date}
          </p>
          <ul className="space-y-4">
            {experienceData[activeTab].details.map((detail, index) => (
              <li key={index} className="flex">
                <span className="text-green mr-2 mt-1 flex-shrink-0">▹</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;