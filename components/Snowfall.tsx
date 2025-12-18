
import React, { useEffect, useState } from 'react';

const Snowfall: React.FC = () => {
  const [snowflakes, setSnowflakes] = useState<{ id: number; left: string; delay: string; duration: string; size: string }[]>([]);

  useEffect(() => {
    const flakes = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 5 + 5}s`,
      size: `${Math.random() * 10 + 5}px`
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="snow overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute bg-white rounded-full opacity-60"
          style={{
            left: flake.left,
            top: '-20px',
            width: flake.size,
            height: flake.size,
            animation: `fall ${flake.duration} linear infinite`,
            animationDelay: flake.delay,
          }}
        />
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-20px); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
};

export default Snowfall;
