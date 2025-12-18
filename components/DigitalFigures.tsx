
import React, { useState } from 'react';
import { Language } from '../types';
import { KEYWORDS } from '../constants';
import HaoFigure, { Expression } from './HaoFigure';

interface DigitalFiguresProps {
  lang: Language;
}

const DigitalFigures: React.FC<DigitalFiguresProps> = ({ lang }) => {
  const [expression, setExpression] = useState<Expression>('neutral');
  const [hasGlasses, setHasGlasses] = useState(true);

  const expressions: { key: Expression; icon: string; label: { vi: string, en: string } }[] = [
    { key: 'neutral', icon: '😐', label: { vi: 'Bình thường', en: 'Idle' } },
    { key: 'smile', icon: '🙂', label: { vi: 'Hớn hở', en: 'Happy' } },
    { key: 'thoughtful', icon: '🤔', label: { vi: 'Suy tư', en: 'Thinking' } },
    { key: 'sad', icon: '🌙', label: { vi: 'Trầm tư', en: 'Sad' } },
    { key: 'blush', icon: '😊', label: { vi: 'Thẹn thùng', en: 'Blush' } },
  ];

  return (
    <section className="min-h-screen pt-24 pb-12 px-6 flex flex-col items-center relative bg-gradient-to-b from-[#FDF8F3] to-[#FFF9F0]">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 z-10">
        
        {/* MAIN CHARACTER AREA */}
        <div className="relative w-full max-w-xl flex flex-col items-center">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#8B5E3C] mb-2">🐾 {lang === 'vi' ? 'Digital Figure của Hào' : "Hao's Digital Figure"}</h1>
            <p className="text-[#8B5E3C]/60 italic">{lang === 'vi' ? 'Phiên bản chú chó Shiba siêu quậy 🐕' : 'Naughty Shiba Inu version 🐕'}</p>
          </div>

          <div className="relative w-full h-[550px] flex items-center justify-center">
            {/* STATIC KEYWORDS POSITIONED AROUND */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Layout for 9 keywords */}
              <div className="absolute top-0 left-[-20px] bg-white/70 px-4 py-2 rounded-2xl shadow-sm border border-[#8B5E3C]/10 backdrop-blur-sm pointer-events-auto hover:scale-110 transition-transform">
                <span className="text-[#5D4037] font-semibold">{lang === 'vi' ? KEYWORDS[0].vi : KEYWORDS[0].en}</span>
              </div>
              <div className="absolute top-0 right-[-20px] bg-white/70 px-4 py-2 rounded-2xl shadow-sm border border-[#8B5E3C]/10 backdrop-blur-sm pointer-events-auto hover:scale-110 transition-transform">
                <span className="text-[#5D4037] font-semibold">{lang === 'vi' ? KEYWORDS[1].vi : KEYWORDS[1].en}</span>
              </div>
              <div className="absolute top-[40%] left-[-60px] bg-white/70 px-4 py-2 rounded-2xl shadow-sm border border-[#8B5E3C]/10 backdrop-blur-sm pointer-events-auto hover:scale-110 transition-transform">
                <span className="text-[#5D4037] font-semibold">{lang === 'vi' ? KEYWORDS[8].vi : KEYWORDS[8].en}</span>
              </div>
              <div className="absolute top-[40%] right-[-60px] bg-white/70 px-4 py-2 rounded-2xl shadow-sm border border-[#8B5E3C]/10 backdrop-blur-sm pointer-events-auto hover:scale-110 transition-transform">
                <span className="text-[#5D4037] font-semibold">{lang === 'vi' ? KEYWORDS[5].vi : KEYWORDS[5].en}</span>
              </div>
              <div className="absolute bottom-[20%] left-[-20px] bg-white/70 px-4 py-2 rounded-2xl shadow-sm border border-[#8B5E3C]/10 backdrop-blur-sm pointer-events-auto hover:scale-110 transition-transform">
                <span className="text-[#5D4037] font-semibold">{lang === 'vi' ? KEYWORDS[6].vi : KEYWORDS[6].en}</span>
              </div>
              <div className="absolute bottom-[20%] right-[-20px] bg-white/70 px-4 py-2 rounded-2xl shadow-sm border border-[#8B5E3C]/10 backdrop-blur-sm pointer-events-auto hover:scale-110 transition-transform">
                <span className="text-[#5D4037] font-semibold">{lang === 'vi' ? KEYWORDS[7].vi : KEYWORDS[7].en}</span>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white/70 px-4 py-2 rounded-2xl shadow-sm border border-[#8B5E3C]/10 backdrop-blur-sm pointer-events-auto hover:scale-110 transition-transform">
                <span className="text-[#5D4037] font-semibold">{lang === 'vi' ? KEYWORDS[3].vi : KEYWORDS[3].en}</span>
              </div>
            </div>

            {/* CHARACTER FIGURE */}
            <HaoFigure 
              className="w-80 h-80 md:w-[450px] md:h-[450px] z-10" 
              expression={expression}
              hasGlasses={hasGlasses}
            />
          </div>
        </div>

        {/* CUSTOMIZATION PANEL */}
        <div className="w-full max-w-sm bg-white/80 p-8 rounded-[3rem] shadow-2xl border border-[#8B5E3C]/5 backdrop-blur-md">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-8 flex items-center gap-2">
            <span>🎨</span> {lang === 'vi' ? 'Trạng thái' : 'States'}
          </h2>

          <div className="space-y-8">
            {/* Expressions List */}
            <div className="space-y-4">
              <label className="text-sm font-bold text-[#8B5E3C]/60 uppercase tracking-widest">
                {lang === 'vi' ? 'Biểu cảm' : 'Expressions'}
              </label>
              <div className="grid grid-cols-2 gap-3">
                {expressions.map((exp) => (
                  <button
                    key={exp.key}
                    onClick={() => setExpression(exp.key)}
                    className={`flex items-center gap-3 p-3 rounded-2xl transition-all border-2 ${
                      expression === exp.key 
                        ? 'border-[#8B5E3C] bg-[#8B5E3C]/5 text-[#8B5E3C]' 
                        : 'border-transparent bg-gray-50 text-gray-400 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-xl">{exp.icon}</span>
                    <span className="text-sm font-semibold">{lang === 'vi' ? exp.label.vi : exp.label.en}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Accessories Toggle */}
            <div className="space-y-4">
              <label className="text-sm font-bold text-[#8B5E3C]/60 uppercase tracking-widest">
                {lang === 'vi' ? 'Phụ kiện' : 'Accessories'}
              </label>
              <div className="space-y-3">
                <button
                  onClick={() => setHasGlasses(!hasGlasses)}
                  className={`w-full p-4 rounded-2xl flex items-center justify-between transition-all ${
                    hasGlasses ? 'bg-[#8B5E3C] text-white shadow-lg' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">👓</span>
                    <span className="font-bold">{lang === 'vi' ? 'Đeo kính' : 'Glasses'}</span>
                  </div>
                  <div className={`w-10 h-6 rounded-full relative transition-colors ${hasGlasses ? 'bg-white/30' : 'bg-gray-300'}`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${hasGlasses ? 'right-1' : 'left-1'}`} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalFigures;
