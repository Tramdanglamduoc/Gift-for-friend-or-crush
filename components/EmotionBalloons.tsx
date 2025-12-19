
import React, { useState, useEffect, useCallback } from 'react';
import { Language } from '../types';
import { BALLOON_PHRASES } from '../constants';

interface EmotionBalloonsProps {
  lang: Language;
}

interface BalloonInstance {
  id: number;
  phrase: { vi: string; en: string };
  x: number;
  y: number;
  size: number;
  color: string;
  isFloatingUp: boolean;
  opacity: number;
  floatOffset: number;
}

const PASTEL_COLORS = [
  'rgba(255, 182, 193, 0.6)', // Light Pink
  'rgba(173, 216, 230, 0.6)', // Light Blue
  'rgba(255, 255, 224, 0.6)', // Light Yellow
  'rgba(221, 160, 221, 0.6)', // Plum
  'rgba(144, 238, 144, 0.6)', // Light Green
  'rgba(255, 218, 185, 0.6)', // Peach
];

const BALLOON_SIZES = [100, 120, 140];

const EmotionBalloons: React.FC<EmotionBalloonsProps> = ({ lang }) => {
  const [balloons, setBalloons] = useState<BalloonInstance[]>([]);
  
  const createBalloon = useCallback((id: number): BalloonInstance => {
    const randomPhrase = BALLOON_PHRASES[Math.floor(Math.random() * BALLOON_PHRASES.length)];
    const size = BALLOON_SIZES[Math.floor(Math.random() * BALLOON_SIZES.length)];
    const color = PASTEL_COLORS[Math.floor(Math.random() * PASTEL_COLORS.length)];
    
    return {
      id,
      phrase: randomPhrase,
      x: 10 + Math.random() * 80, // 10% to 90%
      y: 30 + Math.random() * 50, // 30% to 80%
      size,
      color,
      isFloatingUp: false,
      opacity: 1,
      floatOffset: Math.random() * Math.PI * 2,
    };
  }, []);

  useEffect(() => {
    // Initial spawn
    const initialBalloons = Array.from({ length: 12 }, (_, i) => createBalloon(i));
    setBalloons(initialBalloons);

    // Floating animation logic
    const interval = setInterval(() => {
      setBalloons(prev => prev.map(b => {
        if (b.isFloatingUp) {
          return {
            ...b,
            y: b.y - 1.5,
            opacity: b.opacity - 0.015,
            size: b.size * 0.995,
          };
        }
        // Suble floating movement
        return {
          ...b,
          floatOffset: b.floatOffset + 0.02,
        };
      }).filter(b => b.opacity > 0));
    }, 16);

    return () => clearInterval(interval);
  }, [createBalloon]);

  // Respawn logic
  useEffect(() => {
    const respawnInterval = setInterval(() => {
      if (balloons.filter(b => !b.isFloatingUp).length < 10) {
        setBalloons(prev => [...prev, createBalloon(Date.now())]);
      }
    }, 4000);
    return () => clearInterval(respawnInterval);
  }, [balloons, createBalloon]);

  const handleBalloonClick = (balloon: BalloonInstance) => {
    if (balloon.isFloatingUp) return;

    // Trigger floating up state only, no extra text appears
    setBalloons(prev => prev.map(b => 
      b.id === balloon.id ? { ...b, isFloatingUp: true } : b
    ));
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#fdf2f8] via-[#f0f9ff] to-[#fefce8]">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>

      <div className="absolute top-28 left-1/2 -translate-x-1/2 text-center z-10 select-none max-w-sm">
        <p className="text-[#8B5E3C]/40 text-sm italic">
          {lang === 'vi' 
            ? 'Gọi tên cảm xúc của bạn và thả chúng bay đi...' 
            : 'Name your feelings and let them float away...'}
        </p>
      </div>

      {/* Balloon Rendering */}
      {balloons.map((b) => (
        <div
          key={b.id}
          onClick={() => handleBalloonClick(b)}
          className={`absolute flex flex-col items-center justify-center cursor-pointer transition-transform duration-500 ease-out select-none active:scale-95`}
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            width: `${b.size}px`,
            height: `${b.size * 1.2}px`,
            opacity: b.opacity,
            transform: !b.isFloatingUp 
              ? `translate(-50%, -50%) translateY(${Math.sin(b.floatOffset) * 15}px) translateX(${Math.cos(b.floatOffset * 0.5) * 10}px)`
              : `translate(-50%, -100%) scale(1.1)`,
            zIndex: b.isFloatingUp ? 50 : 20,
          }}
        >
          {/* Balloon Body */}
          <div 
            className="w-full h-[85%] rounded-[50%_50%_50%_50%/40%_40%_60%_60%] relative shadow-inner overflow-hidden"
            style={{ 
              backgroundColor: b.color,
              backdropFilter: 'blur(2px)',
              border: '1px solid rgba(255,255,255,0.3)'
            }}
          >
             {/* Highlight */}
             <div className="absolute top-[15%] left-[20%] w-[20%] h-[15%] bg-white/40 rounded-full blur-[2px]"></div>
             
             {/* Text Content */}
             <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
               <span className="text-[#5D4037]/70 text-[13px] leading-tight lowercase font-medium font-['Quicksand']">
                 {lang === 'vi' ? b.phrase.vi : b.phrase.en}
               </span>
             </div>
          </div>
          
          {/* Balloon String */}
          <div className="w-[1px] h-12 bg-[#8B5E3C]/20 mt-[-2px] origin-top animate-pulse"></div>
        </div>
      ))}
    </section>
  );
};

export default EmotionBalloons;
