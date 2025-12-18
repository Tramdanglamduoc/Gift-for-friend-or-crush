
import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface ChristmasTreeProps {
  lang: Language;
}

interface Ornament {
  id: string;
  type: 'star' | 'gift' | 'bell' | 'snowflake';
  text: string;
  x: number;
  y: number;
  rotation: number;
}

const ORNAMENT_TYPES = [
  { id: 'star', icon: '⭐', label: { vi: 'Biết ơn (Ngôi sao)', en: 'Gratitude (Star)' } },
  { id: 'gift', icon: '🎁', label: { vi: 'Niềm vui nhỏ (Hộp quà)', en: 'Small Joy (Gift)' } },
  { id: 'bell', icon: '🔔', label: { vi: 'Khoảnh khắc mỉm cười (Chuông)', en: 'Smile Moment (Bell)' } },
  { id: 'snowflake', icon: '❄️', label: { vi: 'Điều đã vượt qua (Bông tuyết)', en: 'Survived (Snowflake)' } },
];

const ChristmasTree: React.FC<ChristmasTreeProps> = ({ lang }) => {
  const [ornaments, setOrnaments] = useState<Ornament[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<any>(null);
  const [noteText, setNoteText] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('christmasOrnaments');
    if (saved) setOrnaments(JSON.parse(saved));
  }, []);

  const saveOrnaments = (updated: Ornament[]) => {
    setOrnaments(updated);
    localStorage.setItem('christmasOrnaments', JSON.stringify(updated));
  };

  const handleHang = () => {
    if (!noteText.trim() || !selectedType) return;

    const newOrnament: Ornament = {
      id: Date.now().toString(),
      type: selectedType.id,
      text: noteText,
      // Random position within the tree canopy triangle
      x: 30 + Math.random() * 40,
      y: 20 + Math.random() * 60,
      rotation: (Math.random() - 0.5) * 15,
    };

    const updated = [...ornaments, newOrnament];
    saveOrnaments(updated);
    setIsModalOpen(false);
    setNoteText('');
    setSelectedType(null);
  };

  const removeOrnament = (id: string) => {
    saveOrnaments(ornaments.filter(o => o.id !== id));
  };

  return (
    <section className="relative w-full min-h-screen pt-28 pb-20 px-6 flex flex-col items-center bg-[#fdfaf1]">
      <div className="max-w-2xl w-full text-center mb-10 select-none">
        <h1 className="text-4xl font-bold text-[#E57373] mb-4">🎄 {lang === 'vi' ? 'Cây Thông Noel Của Bạn' : 'Your Christmas Tree'}</h1>
        <p className="text-[#8B5E3C]/60 italic">
          {lang === 'vi' 
            ? 'Treo một chút bình yên lên cây nhé...' 
            : 'Hang some peace on the tree...'}
        </p>
      </div>

      <div className="relative w-full max-w-lg h-[600px] flex items-end justify-center">
        {/* Tree Trunk */}
        <div className="absolute bottom-0 w-16 h-20 bg-[#5D4037] rounded-t-lg shadow-inner"></div>
        
        {/* Tree Canopy (SVG) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 200 300" className="w-full h-full drop-shadow-xl">
             {/* Layers */}
             <path d="M100 20 L160 120 L40 120 Z" fill="#2D5A27" />
             <path d="M100 80 L175 200 L25 200 Z" fill="#2D5A27" />
             <path d="M100 140 L190 280 L10 280 Z" fill="#2D5A27" />
             
             {/* Twinkling Lights */}
             <circle cx="100" cy="50" r="2" fill="#FFF9C4" className="animate-pulse" />
             <circle cx="70" cy="110" r="2" fill="#FFF9C4" className="animate-pulse delay-75" />
             <circle cx="130" cy="160" r="2" fill="#FFF9C4" className="animate-pulse delay-150" />
             <circle cx="80" cy="220" r="2" fill="#FFF9C4" className="animate-pulse delay-300" />
             <circle cx="150" cy="250" r="2" fill="#FFF9C4" className="animate-pulse delay-500" />
          </svg>
        </div>

        {/* Ornaments hanging on tree */}
        {ornaments.map((o) => (
          <div
            key={o.id}
            className="absolute group animate-sway cursor-help hover:z-50"
            style={{ 
                left: `${o.x}%`, 
                top: `${o.y}%`, 
                transform: `rotate(${o.rotation}deg)` 
            }}
          >
            <div className="text-3xl filter drop-shadow-md select-none">
              {ORNAMENT_TYPES.find(t => t.id === o.type)?.icon}
            </div>
            {/* Tooltip on hover */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-40 bg-white p-3 rounded-xl shadow-xl border border-gray-100 animate-fade-in text-xs text-[#5D4037] italic text-center z-50">
              "{o.text}"
              <button 
                onClick={() => removeOrnament(o.id)}
                className="block mt-2 mx-auto text-[10px] text-red-300 hover:text-red-500"
              >
                {lang === 'vi' ? 'Gỡ xuống' : 'Remove'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Completion Message */}
      {ornaments.length >= 4 && (
        <div className="mt-12 text-center animate-fade-in max-w-sm px-6 py-4 bg-white/40 rounded-3xl border border-[#2D5A27]/10 backdrop-blur-sm">
           <p className="text-[#2D5A27] font-medium leading-relaxed italic">
             {lang === 'vi' 
               ? 'Vậy là cây thông của bạn đã có vài điều nhỏ xíu rồi đó. Năm nay không rực rỡ cũng được. Không trống rỗng là được rồi.' 
               : 'Your tree has a few small things now. It doesn’t have to be amazing. Not empty is enough.'}
           </p>
        </div>
      )}

      {/* Action Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-10 px-10 py-4 bg-[#E57373] text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
      >
        <span>🎁</span> {lang === 'vi' ? 'Trang trí cây' : 'Decorate the tree'}
      </button>

      {/* ORNAMENT BOX MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div 
            className="bg-[#FFF9F0] w-full max-w-md p-8 rounded-[2.5rem] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            
            <h3 className="text-xl font-bold text-[#8B5E3C] mb-6 text-center">
              {lang === 'vi' ? 'Chọn món đồ trang trí' : 'Pick an ornament'}
            </h3>

            {!selectedType ? (
              <div className="grid grid-cols-2 gap-4">
                {ORNAMENT_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type)}
                    className="flex flex-col items-center p-6 bg-white rounded-3xl border-2 border-transparent hover:border-[#E57373]/30 transition-all shadow-sm group"
                  >
                    <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">{type.icon}</span>
                    <span className="text-[10px] font-bold text-[#8B5E3C]/60 text-center uppercase tracking-wide">
                        {lang === 'vi' ? type.label.vi : type.label.en}
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="animate-fade-in text-center">
                 <div className="text-5xl mb-6">{selectedType.icon}</div>
                 <p className="text-sm text-[#8B5E3C] mb-4 font-medium">
                   {lang === 'vi' 
                     ? `Viết một câu cho "${selectedType.label.vi}" của bạn...` 
                     : `Write a line for your "${selectedType.label.en}"...`}
                 </p>
                 <input 
                   type="text"
                   autoFocus
                   value={noteText}
                   maxLength={60}
                   onChange={(e) => setNoteText(e.target.value)}
                   className="w-full p-4 rounded-2xl bg-white border-2 border-[#E57373]/20 focus:border-[#E57373] focus:outline-none text-center mb-6 text-[#5D4037]"
                   placeholder="..."
                 />
                 <div className="flex gap-2">
                   <button 
                     onClick={handleHang}
                     disabled={!noteText.trim()}
                     className="flex-1 bg-[#E57373] text-white py-4 rounded-2xl font-bold shadow-md disabled:opacity-50"
                   >
                     {lang === 'vi' ? 'Treo lên cây 🎄' : 'Hang it up 🎄'}
                   </button>
                   <button 
                     onClick={() => { setSelectedType(null); setNoteText(''); }}
                     className="px-6 bg-gray-200 text-gray-500 py-4 rounded-2xl font-bold"
                   >
                     {lang === 'vi' ? 'Lùi lại' : 'Back'}
                   </button>
                 </div>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes sway {
          0%, 100% { transform: translate(0, 0) rotate(calc(var(--tw-rotate, 0deg))); }
          50% { transform: translate(1px, -2px) rotate(calc(var(--tw-rotate, 0deg) + 3deg)); }
        }
        .animate-sway {
          animation: sway 4s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ChristmasTree;
