
import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { CORKBOARD_NOTES } from '../constants';

interface MessyCorkboardProps {
  lang: Language;
}

interface NoteInstance {
  id: number;
  text: { vi: string; en: string };
  x: number;
  y: number;
  rotate: number;
  color: string;
  sizeMultiplier: number;
}

const PASTEL_COLORS = [
  '#FFF9C4', // Yellow
  '#F8BBD0', // Pink
  '#C8E6C9', // Green
  '#E1F5FE', // Blue
  '#F3E5F5', // Purple
  '#FFE0B2', // Orange
  '#E0F2F1', // Teal Light
  '#FCE4EC', // Pinker Light
];

const MessyCorkboard: React.FC<MessyCorkboardProps> = ({ lang }) => {
  const [notes, setNotes] = useState<NoteInstance[]>([]);
  const [selectedNote, setSelectedNote] = useState<NoteInstance | null>(null);

  useEffect(() => {
    // Generate scattered notes with more randomness in placement and rotation
    const newNotes = CORKBOARD_NOTES.map((n, i) => ({
      id: i,
      text: n,
      // More distributed randomness to avoid all clustering in the middle
      x: 2 + Math.random() * 85, 
      y: 2 + Math.random() * 85,
      rotate: (Math.random() - 0.5) * 14, // -7 to 7 degrees
      color: PASTEL_COLORS[Math.floor(Math.random() * PASTEL_COLORS.length)],
      sizeMultiplier: 0.95 + Math.random() * 0.1, // Slight size variation
    }));
    setNotes(newNotes);
  }, []);

  return (
    <section className="relative w-full min-h-screen pt-28 pb-20 px-4 md:px-10 overflow-hidden bg-[#e0c9a6]">
      {/* Wooden Frame & Cork Texture */}
      <div className="absolute inset-4 md:inset-8 border-[12px] border-[#5d4037] rounded shadow-2xl bg-[#c19a6b] overflow-hidden">
        {/* Subtle Cork Pattern */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/pinstripe.png')]"></div>
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,_#8B5E3C_0%,_transparent_75%)]"></div>

        {/* Scattered Notes */}
        <div className="relative w-full h-full min-h-[1000px]">
          {notes.map((note) => (
            <div
              key={note.id}
              onClick={() => setSelectedNote(note)}
              className="absolute group cursor-pointer transition-all duration-300 hover:z-[60] hover:scale-110 active:scale-95"
              style={{
                left: `${note.x}%`,
                top: `${note.y}%`,
                transform: `rotate(${note.rotate}deg) scale(${note.sizeMultiplier})`,
              }}
            >
              {/* Sticky Note Body */}
              <div 
                className="w-40 md:w-52 p-4 shadow-md relative transition-shadow group-hover:shadow-2xl"
                style={{ backgroundColor: note.color }}
              >
                {/* Pin/Tape Detail - Randomize between Pin and Tape */}
                {note.id % 3 === 0 ? (
                  /* Scotch Tape Effect */
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-white/40 border border-white/20 backdrop-blur-sm -rotate-2"></div>
                ) : (
                  /* Push Pin Effect */
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-600 rounded-full shadow-inner border border-red-800 z-10">
                    <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white/40 rounded-full"></div>
                  </div>
                )}

                {/* Text Content */}
                <p className="text-[#5D4037]/90 text-[13px] md:text-sm font-['Quicksand'] font-medium leading-relaxed select-none line-clamp-4">
                  {lang === 'vi' ? note.text.vi : note.text.en}
                </p>
                
                {/* Subtle Paper Curl Effect */}
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-black/5 rounded-tl-full pointer-events-none"></div>
              </div>
            </div>
          ))}

          {/* Special "If you are tired" Note - Fixed Position */}
          <div 
            className="absolute bottom-10 right-10 bg-white p-5 rotate-[-2deg] shadow-xl border-2 border-dashed border-amber-200 cursor-pointer hover:scale-105 transition-all z-[70] group"
            onClick={() => setSelectedNote({
              id: 999,
              text: { 
                vi: "Bấm vô đây nếu bạn mệt. Cứ nghỉ ngơi đi nhé, tui không đi đâu đâu. Mọi chuyện rồi sẽ ổn thôi.", 
                en: "Click here if you're tired. Just rest, I'm not going anywhere. Everything will be fine." 
              },
              x: 0, y: 0, rotate: 0, color: '#fff', sizeMultiplier: 1.1
            })}
          >
             <div className="absolute top-0 right-4 w-10 h-8 bg-amber-100/50 rotate-45 -translate-y-1/2 -mr-2"></div>
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 group-hover:text-amber-500 transition-colors">
               {lang === 'vi' ? 'Một góc nhỏ cho bạn' : 'A small corner for you'}
             </p>
             <p className="text-sm md:text-base font-['Quicksand'] font-bold text-amber-900">
               {lang === 'vi' ? 'Bấm vô đây nếu bạn mệt.' : 'Click here if you are tired.'}
             </p>
          </div>
        </div>
      </div>

      {/* Expanded Note View (Modal) */}
      {selectedNote && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/50 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedNote(null)}
        >
          <div 
            className="bg-white max-w-sm w-full p-10 md:p-14 rounded-sm shadow-2xl relative animate-pop transform"
            style={{ backgroundColor: selectedNote.color === '#fff' ? '#fff' : selectedNote.color }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedNote(null)}
              className="absolute top-4 right-4 text-[#5D4037]/30 hover:text-[#5D4037] transition-colors p-2"
            >
              ✕
            </button>
            <div className="w-5 h-5 bg-red-600 rounded-full absolute -top-2 left-1/2 -translate-x-1/2 shadow-lg"></div>
            
            <p className="text-xl md:text-2xl font-['Quicksand'] font-bold text-[#5D4037] leading-relaxed italic text-center">
              {lang === 'vi' ? selectedNote.text.vi : selectedNote.text.en}
            </p>
            
            <div className="mt-10 pt-6 border-t border-black/5 text-center">
               <p className="text-[10px] uppercase tracking-[0.3em] text-[#5D4037]/40 font-bold">
                 {lang === 'vi' ? 'Ghi chú cho bạn Hào' : 'A note for Hao'}
               </p>
            </div>
          </div>
        </div>
      )}

      {/* Intro Hint */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none opacity-40">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#5d4037]">
          {lang === 'vi' ? 'Nhấn để xem lời nhắn' : 'Tap to read the notes'}
        </p>
      </div>

      <style>{`
        @keyframes pop {
          from { transform: scale(0.8) rotate(-4deg); opacity: 0; }
          to { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        .animate-pop {
          animation: pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;  
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default MessyCorkboard;
