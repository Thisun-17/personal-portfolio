import React, { useEffect, useState } from 'react';
import Logo from './Logo';

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + 1;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, 15);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-navy z-50">
      <div className="scale-[2.5] mb-12 animate-pulse">
        <Logo />
      </div>
      
      <div className="w-64 h-1 bg-light-navy rounded-full overflow-hidden">
        <div 
          className="h-full bg-green transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;