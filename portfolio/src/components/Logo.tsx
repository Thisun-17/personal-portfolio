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
        <path 
          d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 5a4 4 0 110 8 4 4 0 010-8zm8 22a4 4 0 110-8 4 4 0 010 8zm0-16a4 4 0 110-8 4 4 0 010 8zm-16 16a4 4 0 110-8 4 4 0 010 8zm0-16a4 4 0 110-8 4 4 0 010 8z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-navy font-bold text-lg">T</span>
    </div>
  );
};

export default Logo;