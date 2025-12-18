
import React, { useEffect, useRef, useState } from 'react';
import { Language } from '../types';

interface FireworksProps {
  lang: Language;
}

class Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  alphaStep: number;
  driftX: number;
  driftY: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = Math.random() * 1.5;
    this.alpha = Math.random();
    this.alphaStep = 0.005 + Math.random() * 0.005;
    this.driftX = (Math.random() - 0.5) * 0.05;
    this.driftY = (Math.random() - 0.5) * 0.05;
  }

  update(width: number, height: number) {
    // Twinkling effect
    this.alpha += this.alphaStep;
    if (this.alpha > 1 || this.alpha < 0.2) {
      this.alphaStep = -this.alphaStep;
    }

    // Slow movement
    this.x += this.driftX;
    this.y += this.driftY;

    // Boundary wrapping
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  decay: number;
  size: number;
  gravity: number;
  friction: number;

  constructor(x: number, y: number, color: string, isHeart = false, angle = 0, speed = 0) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.alpha = 1;
    this.size = Math.random() * 2 + 1;
    this.gravity = 0.05;
    this.friction = 0.95;
    this.decay = Math.random() * 0.015 + 0.015;

    if (isHeart) {
      const t = angle;
      const r = speed;
      this.vx = r * 16 * Math.pow(Math.sin(t), 3) / 10;
      this.vy = -r * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) / 10;
    } else {
      const a = Math.random() * Math.PI * 2;
      const s = Math.random() * 6 + 2;
      this.vx = Math.cos(a) * s;
      this.vy = Math.sin(a) * s;
    }
  }

  update() {
    this.vx *= this.friction;
    this.vy *= this.friction;
    this.vy += this.gravity;
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= this.decay;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

const Fireworks: React.FC<FireworksProps> = ({ lang }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const starsRef = useRef<Star[]>([]);
  const [showText, setShowText] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const colors = ['#FFD700', '#FF69B4', '#00BFFF', '#ADFF2F', '#FF4500', '#FFB7C5', '#E0FFFF'];

  const createFirework = (x: number, y: number) => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const isHeart = Math.random() > 0.7;
    const newParticles: Particle[] = [];

    if (isHeart) {
      for (let i = 0; i < 80; i++) {
        const angle = (i / 80) * Math.PI * 2;
        newParticles.push(new Particle(x, y, color, true, angle, Math.random() * 2 + 3));
      }
    } else {
      const count = 40 + Math.floor(Math.random() * 40);
      for (let i = 0; i < count; i++) {
        newParticles.push(new Particle(x, y, color));
      }
    }

    particlesRef.current.push(...newParticles);
    setClickCount(prev => prev + 1);
  };

  useEffect(() => {
    if (clickCount > 5) {
      setShowText(true);
    }
  }, [clickCount]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Initialize stars on resize or first load
      const starCount = Math.floor((canvas.width * canvas.height) / 8000);
      starsRef.current = Array.from({ length: starCount }, () => new Star(canvas.width, canvas.height));
    };

    window.addEventListener('resize', resize);
    resize();

    let animationId: number;

    const render = () => {
      // Trail effect background
      ctx.fillStyle = 'rgba(10, 10, 30, 0.2)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update background stars
      starsRef.current.forEach(star => {
        star.update(canvas.width, canvas.height);
        star.draw(ctx);
      });

      // Draw and update firework particles
      particlesRef.current = particlesRef.current.filter(p => p.alpha > 0);
      particlesRef.current.forEach(p => {
        p.update();
        p.draw(ctx);
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    const timer = setInterval(() => {
      if (particlesRef.current.length < 50) {
        createFirework(Math.random() * canvas.width, Math.random() * (canvas.height * 0.6));
      }
    }, 2500);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      clearInterval(timer);
    };
  }, []);

  const handleCanvasClick = (e: React.MouseEvent | React.TouchEvent) => {
    let x, y;
    if ('touches' in e) {
      x = (e as React.TouchEvent).touches[0].clientX;
      y = (e as React.TouchEvent).touches[0].clientY;
    } else {
      x = (e as React.MouseEvent).clientX;
      y = (e as React.MouseEvent).clientY;
    }
    createFirework(x, y);
  };

  return (
    <section className="relative w-full h-screen bg-[#0a0a1e] overflow-hidden">
      <canvas 
        ref={canvasRef} 
        onClick={handleCanvasClick}
        onTouchStart={handleCanvasClick}
        className="absolute inset-0 cursor-crosshair"
      />
      
      <div className="absolute top-24 left-1/2 -translate-x-1/2 text-center pointer-events-none z-10 select-none">
        <h1 className="text-4xl md:text-5xl font-bold text-white/90 mb-4 drop-shadow-lg">
          🎆 {lang === 'vi' ? 'Pháo hoa' : 'Fireworks'}
        </h1>
      </div>

      <div className={`absolute bottom-20 left-1/2 -translate-x-1/2 text-center transition-all duration-1000 pointer-events-none z-10 ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-xl md:text-2xl text-white/80 font-medium italic drop-shadow-md">
          {lang === 'vi' 
            ? 'Chúc bạn có những khoảnh khắc sáng lên theo cách riêng của mình.'
            : 'Wishing you moments that light up in your own way.'}
        </p>
      </div>

      <div className="absolute bottom-6 right-6 text-white/30 text-xs italic pointer-events-none">
        {lang === 'vi' ? 'Chạm để bắn pháo hoa ✨' : 'Tap to launch fireworks ✨'}
      </div>
    </section>
  );
};

export default Fireworks;
