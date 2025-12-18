
import React, { useState, useEffect } from 'react';

export type Expression = 'neutral' | 'smile' | 'confused' | 'thoughtful' | 'sad' | 'blush';

interface HaoFigureProps {
  className?: string;
  expression?: Expression;
  hasGlasses?: boolean;
}

const HaoFigure: React.FC<HaoFigureProps> = ({ 
  className = "w-64 h-64", 
  expression = 'neutral',
  hasGlasses = true
}) => {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const blinkTimer = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 4000);
    return () => clearInterval(blinkTimer);
  }, []);

  return (
    <div className={`${className} relative transition-all duration-700 flex items-center justify-center`}>
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
        {/* Soft Shadow */}
        <ellipse cx="100" cy="180" rx="60" ry="10" fill="#000" fillOpacity="0.05" />
        
        {/* Shiba Body */}
        <path 
          d="M60 140 Q100 130 140 140 L150 180 Q100 195 50 180 Z" 
          fill="#E89B5F" 
          stroke="#5D4037" 
          strokeWidth="3" 
        />
        {/* White Chest */}
        <path 
          d="M80 140 Q100 135 120 140 Q115 175 100 185 Q85 175 80 140" 
          fill="white" 
        />

        {/* Paws */}
        <circle cx="70" cy="180" r="12" fill="#E89B5F" stroke="#5D4037" strokeWidth="3" />
        <circle cx="130" cy="180" r="12" fill="#E89B5F" stroke="#5D4037" strokeWidth="3" />
        <path d="M65 175 Q70 172 75 175" fill="none" stroke="#5D4037" strokeWidth="1.5" />
        <path d="M125 175 Q130 172 135 175" fill="none" stroke="#5D4037" strokeWidth="1.5" />

        {/* Head Shape */}
        <g transform="translate(0, -10)">
          {/* Ears - Made wider and shorter as requested */}
          <path d="M30 60 L10 25 L95 40 Z" fill="#E89B5F" stroke="#5D4037" strokeWidth="3" strokeLinejoin="round" />
          <path d="M170 60 L190 25 L105 40 Z" fill="#E89B5F" stroke="#5D4037" strokeWidth="3" strokeLinejoin="round" />
          {/* Inner Ears - Adjusted for new shape */}
          <path d="M40 55 L25 35 L80 42 Z" fill="#FFCCBC" />
          <path d="M160 55 L175 35 L120 42 Z" fill="#FFCCBC" />

          {/* Main Head */}
          <circle cx="100" cy="85" r="65" fill="#E89B5F" stroke="#5D4037" strokeWidth="3" />
          {/* Face White Patch */}
          <path 
            d="M55 90 Q45 130 100 140 Q155 130 145 90 Q140 60 100 65 Q60 60 55 90" 
            fill="white" 
          />

          {/* Eyes */}
          {!isBlinking ? (
            <g>
              <circle cx="70" cy="90" r="6" fill="#3E2723" />
              <circle cx="130" cy="90" r="6" fill="#3E2723" />
              <circle cx="68" cy="87" r="2" fill="white" />
              <circle cx="128" cy="87" r="2" fill="white" />
              {/* Eye Brows / Dots */}
              <circle cx="70" cy="75" r="4" fill="white" opacity="0.8" />
              <circle cx="130" cy="75" r="4" fill="white" opacity="0.8" />
            </g>
          ) : (
            <g stroke="#3E2723" strokeWidth="3" strokeLinecap="round">
              <line x1="62" y1="90" x2="78" y2="90" />
              <line x1="122" y1="90" x2="138" y2="90" />
            </g>
          )}

          {/* Nose & Snout */}
          <g transform="translate(100, 110)">
             <path d="M-8 -5 Q0 5 8 -5" fill="none" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
             <ellipse cx="0" cy="-8" rx="7" ry="5" fill="#3E2723" />
             {/* Mouth expressions */}
             {expression === 'smile' && (
               <path d="M-12 5 Q0 18 12 5" fill="none" stroke="#5D4037" strokeWidth="3" strokeLinecap="round" />
             )}
             {expression === 'sad' && (
               <path d="M-8 12 Q0 5 8 12" fill="none" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
             )}
             {expression === 'thoughtful' && (
               <line x1="-5" y1="10" x2="5" y2="10" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
             )}
             {(expression === 'neutral' || expression === 'confused' || expression === 'blush') && (
               <path d="M-10 8 Q0 12 10 8" fill="none" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
             )}
          </g>

          {/* Blush */}
          {(expression === 'blush' || expression === 'smile') && (
            <g opacity="0.4">
              <circle cx="55" cy="105" r="10" fill="#FF8A80" />
              <circle cx="145" cy="105" r="10" fill="#FF8A80" />
            </g>
          )}

          {/* Glasses */}
          {hasGlasses && (
            <g stroke="#3E2723" strokeWidth="3" fill="none" opacity="0.9">
              <circle cx="70" cy="90" r="22" />
              <circle cx="130" cy="90" r="22" />
              <line x1="92" y1="90" x2="108" y2="90" />
            </g>
          )}
        </g>
      </svg>
    </div>
  );
};

export default HaoFigure;
