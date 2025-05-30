import React from 'react';

interface EmailProps {
  showContent: boolean;
}

const Email: React.FC<EmailProps> = ({ showContent }) => {
  return (
    <div className={`fixed bottom-0 right-5 xl:right-10 z-10 transition-all duration-1000 delay-700 ${showContent ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
      <div className="flex flex-col items-center space-y-5 after:content-[''] after:block after:w-px after:h-24 after:mt-5 after:bg-light-slate">
        <a 
          href="mailto:thisun.20233173@iit.ac.lk"
          className="font-mono text-light-slate hover:text-green hover:-translate-y-1 transition-all duration-200 [writing-mode:vertical-rl]"
          aria-label="Email me"
        >
          thisun.20233173@iit.ac.lk 
        </a>
      </div>
    </div>
  );
};

export default Email;