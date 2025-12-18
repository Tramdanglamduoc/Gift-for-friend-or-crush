
import React from 'react';

const StudyScene: React.FC = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto h-64 mt-8 mb-12 flex items-end justify-around border-b-2 border-[#8B5E3C]/20 pb-2 overflow-visible">
      {/* Christmas Tree (Left) */}
      <div className="absolute left-0 bottom-2 w-20 h-32 flex flex-col items-center">
        <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-bottom-[40px] border-b-[#2D5A27]"></div>
        <div className="w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-bottom-[50px] border-b-[#2D5A27] -mt-6"></div>
        <div className="w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-bottom-[60px] border-b-[#2D5A27] -mt-8"></div>
        <div className="w-4 h-6 bg-[#5D4037]"></div>
        {/* Lights */}
        <div className="absolute top-10 left-6 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute top-16 right-6 w-2 h-2 bg-red-400 rounded-full animate-pulse delay-75"></div>
        <div className="absolute top-24 left-8 w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-150"></div>
      </div>

      {/* Fireworks (Right) - REMOVED per user request */}

      {/* Dog at Desk (Hào) */}
      <div className="relative flex flex-col items-center">
        <div className="relative w-20 h-20 mb-[-10px] z-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Shiba Head - Updated from roly-poly to dog */}
            <path d="M25 40 L15 20 L40 30 Z" fill="#E89B5F" stroke="#5D4037" strokeWidth="1" />
            <path d="M75 40 L85 20 L60 30 Z" fill="#E89B5F" stroke="#5D4037" strokeWidth="1" />
            <circle cx="50" cy="55" r="35" fill="#E89B5F" stroke="#5D4037" strokeWidth="1" />
            <path d="M30 60 Q50 85 70 60 Q70 45 50 45 Q30 45 30 60" fill="white" />
            {/* Eyes */}
            <circle cx="40" cy="55" r="3" fill="#3E2723" />
            <circle cx="60" cy="55" r="3" fill="#3E2723" />
            {/* Nose */}
            <ellipse cx="50" cy="62" rx="3" ry="2" fill="#3E2723" />
            {/* Paws typing */}
            <circle cx="35" cy="85" r="7" fill="#E89B5F" className="animate-bounce" />
            <circle cx="65" cy="85" r="7" fill="#E89B5F" className="animate-bounce delay-100" />
          </svg>
        </div>
        {/* Brown Rectangle (Desk) REMOVED for Hao per user request */}
        <p className="text-[10px] font-bold mt-1 text-[#8B5E3C]">Hào 🐶</p>
      </div>

      {/* Blue Turtle at Desk (Trâm) */}
      <div className="relative flex flex-col items-center">
        <div className="relative w-20 h-20 mb-[-10px] z-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Shell */}
            <path d="M20 70 Q50 20 80 70 Z" fill="#4FC3F7" />
            {/* Head */}
            <circle cx="85" cy="60" r="12" fill="#81D4FA" className="animate-pulse" />
            <circle cx="90" cy="58" r="2" fill="#3E2723" />
            {/* Fins typing */}
            <ellipse cx="30" cy="80" rx="10" ry="5" fill="#81D4FA" className="animate-bounce delay-75" />
            <ellipse cx="60" cy="80" rx="10" ry="5" fill="#81D4FA" className="animate-bounce delay-150" />
          </svg>
        </div>
        {/* Desk changed to Blue (Xanh dương) */}
        <div className="w-24 h-10 bg-[#4FC3F7] rounded-t-lg flex items-center justify-center relative shadow-md">
           <div className="w-16 h-1 bg-gray-700 absolute top-2 rounded-full"></div>
           <div className="w-12 h-8 bg-gray-200 rounded-sm mt-4 border-2 border-gray-400 flex items-center justify-center">
             <div className="w-8 h-4 bg-blue-400/20 animate-pulse"></div>
           </div>
        </div>
        <p className="text-[10px] font-bold mt-1 text-[#2D5A27]">Trâm 🐢</p>
      </div>

      <style>{`
        @keyframes firework {
          0% { transform: scale(0.1) rotate(var(--tw-rotate)); opacity: 1; }
          100% { transform: scale(1.5) rotate(var(--tw-rotate)); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default StudyScene;
