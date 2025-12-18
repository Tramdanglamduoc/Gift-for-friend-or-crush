
import React from 'react';

interface DogProps {
  className?: string;
  type?: 'happy' | 'sleepy';
}

const DogIllustration: React.FC<DogProps> = ({ className = "w-32 h-32", type = 'happy' }) => {
  if (type === 'sleepy') {
    return (
      <div className={`${className} relative flex items-center justify-center`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Shiba Body */}
          <circle cx="50" cy="65" r="30" fill="#E89B5F" />
          <circle cx="50" cy="55" r="25" fill="#E89B5F" />
          {/* Ears */}
          <path d="M35 35 L25 50 L45 50 Z" fill="#E89B5F" />
          <path d="M65 35 L75 50 L55 50 Z" fill="#E89B5F" />
          {/* Sleepy Eyes */}
          <path d="M40 55 Q45 58 50 55" fill="none" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
          <path d="M50 55 Q55 58 60 55" fill="none" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
          {/* Nose */}
          <circle cx="50" cy="62" r="2" fill="#3E2723" />
          {/* Snoring bubbles */}
          <circle cx="70" cy="40" r="3" fill="#BBDEFB" className="animate-pulse" />
          <circle cx="80" cy="30" r="5" fill="#BBDEFB" className="animate-pulse delay-75" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`${className} relative flex items-center justify-center`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Shiba Body */}
        <circle cx="50" cy="65" r="30" fill="#E89B5F" />
        <circle cx="50" cy="50" r="28" fill="#E89B5F" />
        {/* White chest/face */}
        <circle cx="50" cy="58" r="20" fill="white" />
        {/* Ears */}
        <path d="M35 30 L25 45 L45 45 Z" fill="#E89B5F" />
        <path d="M65 30 L75 45 L55 45 Z" fill="#E89B5F" />
        {/* Eyes */}
        <circle cx="40" cy="50" r="3" fill="#3E2723" />
        <circle cx="60" cy="50" r="3" fill="#3E2723" />
        {/* Nose */}
        <path d="M47 58 L53 58 L50 62 Z" fill="#3E2723" />
        {/* Tongue */}
        <path d="M48 65 Q50 72 52 65 Z" fill="#FF8A80" className="animate-bounce" />
        {/* Scarf (Christmas) */}
        <path d="M30 65 L70 65 L65 75 L35 75 Z" fill="#E57373" />
        <path d="M30 65 L40 85" stroke="#E57373" strokeWidth="8" />
      </svg>
    </div>
  );
};

export default DogIllustration;
