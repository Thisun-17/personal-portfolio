import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface NavbarProps {
  showContent: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ showContent }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full px-6 lg:px-12 transition-all duration-300 ${
        isScrolled ? 'bg-navy/90 shadow-lg backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <nav className={`flex justify-between items-center max-w-7xl mx-auto transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="z-50">
          <Logo />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('about')} className="nav-link">
            <span className="nav-number">01.</span>About
          </button>
          <button onClick={() => scrollToSection('experience')} className="nav-link">
            <span className="nav-number">02.</span>Experience
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">
            <span className="nav-number">03.</span>Projects
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            <span className="nav-number">04.</span>Contact
          </button>
          <a 
            href="/Thisun_CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border border-green text-green rounded px-4 py-2 text-sm font-mono hover:bg-green/10 transition-colors"
          >
            Resume
          </a>
        </div>
        
        <button 
          className="md:hidden z-50 w-10 h-10 relative focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="block w-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              className={`block absolute h-0.5 w-8 bg-green transform transition duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45' : '-translate-y-2'
              }`}
            />
            <span
              className={`block absolute h-0.5 bg-green transform transition duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0 w-0' : 'opacity-100 w-8'
              }`}
            />
            <span
              className={`block absolute h-0.5 w-8 bg-green transform transition duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45' : 'translate-y-2'
              }`}
            />
          </div>
        </button>
        
        <div 
          className={`fixed inset-0 bg-light-navy/90 flex flex-col justify-center items-center transition-all duration-300 backdrop-blur-sm ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          } md:hidden`}
        >
          <nav className="flex flex-col items-center space-y-8">
            <button onClick={() => scrollToSection('about')} className="text-lightest-slate text-xl">
              <div className="text-green font-mono text-sm mb-1 text-center">01.</div>
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-lightest-slate text-xl">
              <div className="text-green font-mono text-sm mb-1 text-center">02.</div>
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-lightest-slate text-xl">
              <div className="text-green font-mono text-sm mb-1 text-center">03.</div>
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-lightest-slate text-xl">
              <div className="text-green font-mono text-sm mb-1 text-center">04.</div>
              Contact
            </button>
            <a 
              href="/Thisun_CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border border-green text-green rounded px-6 py-3 text-base font-mono hover:bg-green/10 mt-4 transition-colors"
            >
              Resume
            </a>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;