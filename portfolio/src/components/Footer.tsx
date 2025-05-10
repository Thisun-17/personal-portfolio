import React from 'react';

interface FooterProps {
  showContent: boolean;
}

const Footer: React.FC<FooterProps> = ({ showContent }) => {
  return (
    <footer className={`py-6 text-center text-sm font-mono text-slate transition-opacity duration-500 delay-300 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      <a 
        href="https://github.com/Thisun-17" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-green transition-colors"
      >
        <p>Designed & Built by Thisun Senevirathne</p>
        <p className="mt-2">&copy; 2024 All Rights Reserved</p>
      </a>
    </footer>
  );
};

export default Footer;