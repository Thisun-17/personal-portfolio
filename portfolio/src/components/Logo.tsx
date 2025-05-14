import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="w-10 h-10 relative group">
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        xmlns="http://www.w3.org/2000/svg"
        className="fill-green group-hover:fill-white transition-colors duration-300"
      >
        <polygon 
          points="20,0 38.5,10 38.5,30 20,40 1.5,30 1.5,10"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-navy font-extrabold text-xl">T</span>
    </div>
  );
};

export default Logo;