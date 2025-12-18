
import React, { useState, useEffect } from 'react';

interface LetterModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
  title: string;
  warning?: boolean;
}

const LetterModal: React.FC<LetterModalProps> = ({ isOpen, onClose, content, title, warning }) => {
  const [showPlane, setShowPlane] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowPlane(true);
      setShowLetter(false);
      const timer = setTimeout(() => {
        setShowPlane(false);
        setShowLetter(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500"
        onClick={onClose}
      />
      
      {showPlane && (
        <div className="absolute z-[110] animate-paper-plane">
          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </div>
      )}

      {showLetter && (
        <div className="relative z-[120] w-full max-w-[340px] bg-[#fdfaf1] rounded-lg shadow-2xl overflow-hidden transform transition-all duration-700 animate-letter-unfold">
          {/* Paper Texture Effect */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-2 right-2 text-[#8B5E3C] hover:text-[#E57373] transition-colors z-20 p-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="max-h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#8B5E3C]/20">
            <div className="p-5 md:p-8 relative">
              {/* Letter Header */}
              <div className="border-b border-[#8B5E3C]/10 pb-2 mb-4">
                <h3 className="text-lg font-bold text-[#8B5E3C] flex items-center">
                  <span className="mr-2">💌</span> {title}
                </h3>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-[10px] text-[#8B5E3C]/50 italic">Gửi người bạn đặc biệt của tui...</p>
                  {warning && (
                    <span className="text-[9px] text-red-500 font-bold uppercase tracking-wider">
                      ⚠️ Nhạy cảm xíu nha...
                    </span>
                  )}
                </div>
              </div>

              {/* Letter Content */}
              <div className="text-[13px] leading-relaxed text-[#5D4037] font-medium italic whitespace-pre-line font-['Be_Vietnam_Pro',_sans-serif]">
                {content}
              </div>

              {/* Letter Footer */}
              <div className="mt-5 text-right pt-2 border-t border-[#8B5E3C]/10">
                <p className="text-[#8B5E3C] font-bold text-[13px]">Trâm 🐢</p>
                <p className="text-[9px] text-[#8B5E3C]/60 italic">With all my sincerity</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes paper-plane {
          0% { transform: translate(-100vw, 50vh) rotate(15deg); opacity: 1; }
          100% { transform: translate(100vw, -50vh) rotate(15deg); opacity: 1; }
        }
        @keyframes letter-unfold {
          0% { transform: scale(0.8) translateY(20px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        .animate-paper-plane {
          animation: paper-plane 1s cubic-bezier(0.1, 0.5, 0.5, 1) forwards;
        }
        .animate-letter-unfold {
          animation: letter-unfold 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        /* Custom scrollbar for better look */
        .scrollbar-thin::-webkit-scrollbar {
          width: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(139, 94, 60, 0.1);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default LetterModal;
