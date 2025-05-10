import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface SocialProps {
  showContent: boolean;
}

const Social: React.FC<SocialProps> = ({ showContent }) => {
  return (
    <div className={`fixed bottom-0 left-5 xl:left-10 z-10 transition-all duration-1000 delay-700 ${showContent ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
      <ul className="flex flex-col items-center space-y-5 after:content-[''] after:block after:w-px after:h-24 after:mt-5 after:bg-light-slate">
        <li>
          <a 
            href="https://github.com/Thisun-17" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-light-slate hover:text-green hover:-translate-y-1 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </li>
        <li>
          <a 
            href="https://www.linkedin.com/in/thisun-senevirathne-740705336/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-light-slate hover:text-green hover:-translate-y-1 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </li>
        <li>
          <a 
            href="https://twitter.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-light-slate hover:text-green hover:-translate-y-1 transition-all duration-200"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;