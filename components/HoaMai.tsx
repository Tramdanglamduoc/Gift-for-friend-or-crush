
import React from 'react';

const HoaMai: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg h-[500px] flex items-end justify-center mx-auto overflow-hidden">
      {/* Trunk */}
      <svg viewBox="0 0 200 300" className="w-full h-full drop-shadow-2xl">
        <path d="M100 280 Q95 240 105 200 Q110 150 90 100 Q80 80 85 50" fill="none" stroke="#5D4037" strokeWidth="8" strokeLinecap="round" />
        <path d="M100 230 Q130 200 140 160" fill="none" stroke="#5D4037" strokeWidth="5" strokeLinecap="round" />
        <path d="M100 180 Q70 150 60 110" fill="none" stroke="#5D4037" strokeWidth="4" strokeLinecap="round" />
        <path d="M105 130 Q130 110 150 80" fill="none" stroke="#5D4037" strokeWidth="3" strokeLinecap="round" />
        
        {/* Flowers (Mai) */}
        <g className="animate-pulse">
          <circle cx="85" cy="50" r="5" fill="#FFD700" />
          <circle cx="140" cy="160" r="5" fill="#FFD700" />
          <circle cx="60" cy="110" r="5" fill="#FFD700" />
          <circle cx="150" cy="80" r="5" fill="#FFD700" />
          <circle cx="110" cy="140" r="4" fill="#FFD700" />
          <circle cx="100" cy="90" r="4" fill="#FFD700" />
          <circle cx="125" cy="110" r="4" fill="#FFD700" />
          <circle cx="80" cy="170" r="4" fill="#FFD700" />
        </g>
        
        {/* Petals detail */}
        {[...Array(20)].map((_, i) => (
          <circle 
            key={i}
            cx={50 + Math.random() * 100} 
            cy={50 + Math.random() * 200} 
            r={2 + Math.random() * 2} 
            fill="#FFD700" 
            className="animate-float"
            style={{ animationDelay: `${Math.random() * 5}s`, opacity: 0.6 }}
          />
        ))}
      </svg>
      
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translateY(100px) rotate(360deg); opacity: 0; }
        }
        .animate-float {
          animation: float 6s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HoaMai;
