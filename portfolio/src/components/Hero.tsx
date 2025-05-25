import React, { useEffect, useRef } from 'react';

interface HeroProps {
  showContent: boolean;
}

const Hero: React.FC<HeroProps> = ({ showContent }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleExploreClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (showContent && scrollRef.current) {
      const elements = scrollRef.current.querySelectorAll('.fadein');
      elements.forEach(el => {
        el.classList.add('show');
      });
    }
  }, [showContent]);

  return (
    <section 
      ref={scrollRef}
      className="min-h-screen flex flex-col justify-center pt-16 md:pt-0"
    >
      <div className="max-w-3xl">
        <p className={`font-mono text-green mb-5 transition-all duration-500 fadein delay-100 ${showContent ? 'show' : ''}`}>
          Hi, my name is
        </p>
        <h1 className={`text-5xl sm:text-6xl md:text-7xl font-bold text-lightest-slate mb-4 transition-all duration-500 fadein delay-200 ${showContent ? 'show' : ''}`}>
          Thisun Senevirathne.
        </h1>
        <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-slate mb-6 transition-all duration-500 fadein delay-300 ${showContent ? 'show' : ''}`}>
          Computer Science Student & Aspiring Software Engineer.
        </h2>
        <p className={`max-w-xl text-slate mb-12 leading-relaxed text-lg transition-all duration-500 fadein delay-400 ${showContent ? 'show' : ''}`}>
          I enjoy building web applications and learning new technologies through hands-on projects. 
          Computer Science student at Informatics Institute of Technology, Colombo, with experience in full-stack development, 
          from creating REST APIs to building user interfaces.
        </p>
        <div className={`transition-all duration-500 fadein delay-500 ${showContent ? 'show' : ''}`}>
          <button 
            onClick={handleExploreClick}
            className="border border-green text-green rounded px-7 py-4 text-base font-mono hover:bg-green/10 transition-colors"
          >
            Check out my work!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;