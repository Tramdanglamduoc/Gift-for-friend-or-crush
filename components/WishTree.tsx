
import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { CARD_TYPES, CardType } from '../constants';

interface Wish {
  id: string;
  typeId: string;
  text: string;
  x: number;
  y: number;
  rotation: number;
}

interface WishTreeProps {
  lang: Language;
}

const WishTree: React.FC<WishTreeProps> = ({ lang }) => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [myWishIds, setMyWishIds] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<CardType | null>(null);
  const [selectedWish, setSelectedWish] = useState<Wish | null>(null);
  const [wishText, setWishText] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedWishes = localStorage.getItem('userWishes');
    if (savedWishes) setWishes(JSON.parse(savedWishes));

    const savedMyIds = localStorage.getItem('myWishIds');
    if (savedMyIds) setMyWishIds(JSON.parse(savedMyIds));
  }, []);

  const saveWishes = (updated: Wish[]) => {
    setWishes(updated);
    localStorage.setItem('userWishes', JSON.stringify(updated));
  };

  const saveMyIds = (updated: string[]) => {
    setMyWishIds(updated);
    localStorage.setItem('myWishIds', JSON.stringify(updated));
  };

  const handleHangWish = () => {
    if (!wishText.trim() || !selectedType) return;

    const newWish: Wish = {
      id: Date.now().toString(),
      typeId: selectedType.id,
      text: wishText,
      x: 30 + Math.random() * 40,
      y: 20 + Math.random() * 40,
      rotation: (Math.random() - 0.5) * 20
    };

    const updatedWishes = [...wishes, newWish];
    const updatedMyIds = [...myWishIds, newWish.id];
    
    saveWishes(updatedWishes);
    saveMyIds(updatedMyIds);
    
    setIsSuccess(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSuccess(false);
      setWishText('');
      setSelectedType(null);
    }, 3000);
  };

  const handleUpdateWish = () => {
    if (!selectedWish || !wishText.trim()) return;

    const updatedWishes = wishes.map(w => 
      w.id === selectedWish.id ? { ...w, text: wishText } : w
    );
    
    saveWishes(updatedWishes);
    setIsEditing(false);
    setIsViewModalOpen(false);
    setWishText('');
    setSelectedWish(null);
  };

  const handleDeleteWish = (id: string) => {
    const updatedWishes = wishes.filter(w => w.id !== id);
    const updatedMyIds = myWishIds.filter(myId => myId !== id);
    
    saveWishes(updatedWishes);
    saveMyIds(updatedMyIds);
    setIsViewModalOpen(false);
    setSelectedWish(null);
  };

  const openWishView = (wish: Wish) => {
    setSelectedWish(wish);
    setWishText(wish.text);
    setIsViewModalOpen(true);
    setIsEditing(false);
  };

  const isOwner = selectedWish && myWishIds.includes(selectedWish.id);

  return (
    <section className="min-h-screen pt-24 pb-12 px-6 bg-[#f7f3e9]">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2D5A27] mb-6">🌳 {lang === 'vi' ? 'Cây Ước Nguyện' : 'The Wish Tree'}</h1>
        <div className="bg-white/40 p-8 rounded-[2rem] border border-[#2D5A27]/10 backdrop-blur-sm text-[#5D4037] text-lg leading-relaxed shadow-sm">
          {lang === 'vi' ? (
            <div className="space-y-4">
              <p className="font-bold">Hay đúng hơn, đây là cây góp ý cho tui.</p>
              <p>Tui biết có những điều nói thẳng qua tin nhắn thì hơi khó, hơi ngại, hoặc sợ làm tui buồn.</p>
              <p>Nên nếu có điều gì bạn muốn góp ý cho tui, hay mong tui thay đổi điều gì đó, bạn có thể viết lên đây nha.</p>
              <p>Tui cũng sẽ treo những ước nguyện của tui lên cùng cái cây này.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="font-bold">Or more honestly, this is my feedback tree.</p>
              <p>I know some things are hard to say directly through messages — awkward, uncomfortable, or you might be afraid of hurting me.</p>
              <p>So if there's anything you want to tell me, or hope I could improve, you can write it here.</p>
              <p>I'll also hang my own wishes on this tree.</p>
            </div>
          )}
        </div>
      </div>

      <div className="relative w-full max-w-2xl mx-auto h-[500px] mb-12 flex justify-center items-end group">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#2D5A27] transition-transform duration-1000 group-hover:scale-[1.01]">
          <path d="M90 190 Q100 180 110 190 L105 150 Q100 145 95 150 Z" fill="#5D4037" />
          <path d="M100 20 Q160 50 160 100 Q160 150 100 150 Q40 150 40 100 Q40 50 100 20" fill="currentColor" fillOpacity="0.2" />
          <path d="M100 40 Q140 60 140 100 Q140 140 100 140 Q60 140 60 100 Q60 60 100 40" fill="currentColor" fillOpacity="0.4" />
          <path d="M100 150 L100 80" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
          <path d="M100 130 Q130 110 140 90" fill="none" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M100 110 Q70 100 60 80" fill="none" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round" />
        </svg>

        {wishes.map((wish) => {
          const type = CARD_TYPES.find(t => t.id === wish.typeId);
          return (
            <button
              key={wish.id}
              onClick={() => openWishView(wish)}
              className="absolute p-2 rounded shadow-lg flex flex-col items-center cursor-pointer animate-sway hover:scale-110 hover:z-30 transition-all"
              style={{
                left: `${wish.x}%`,
                top: `${wish.y}%`,
                backgroundColor: type?.color || '#fff',
                transform: `rotate(${wish.rotation}deg)`,
                zIndex: 10
              }}
            >
              <span className="text-sm">{type?.icon}</span>
              <div className="w-0.5 h-6 bg-black/10 absolute -top-5"></div>
            </button>
          );
        })}

        <button
          onClick={() => { setIsModalOpen(true); setIsEditing(false); }}
          className="absolute bottom-4 bg-[#2D5A27] text-white px-8 py-3 rounded-full font-bold shadow-xl hover:scale-105 transition-transform z-20 flex items-center gap-2"
        >
          <span>✍️</span> {lang === 'vi' ? 'Viết ước nguyện' : 'Write a wish'}
        </button>
      </div>

      {/* VIEW / READ MODAL */}
      {isViewModalOpen && selectedWish && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsViewModalOpen(false)} />
          <div className="relative z-10 w-full max-w-md bg-[#FFF9F0] rounded-[2.5rem] shadow-2xl p-8 transform animate-pop">
             <button onClick={() => setIsViewModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600">✕</button>
             
             <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{CARD_TYPES.find(t => t.id === selectedWish.typeId)?.icon}</span>
                <h3 className="text-xl font-bold text-[#8B5E3C]">
                  {lang === 'vi' ? 'Ước nguyện trên cây' : 'A wish on the tree'}
                </h3>
             </div>

             {isEditing ? (
               <div className="space-y-4">
                  <textarea
                    value={wishText}
                    onChange={(e) => setWishText(e.target.value)}
                    className="w-full h-40 p-4 rounded-2xl border-2 border-[#2D5A27]/20 bg-white focus:outline-none focus:border-[#2D5A27] transition-colors"
                  />
                  <div className="flex gap-2">
                    <button onClick={handleUpdateWish} className="flex-1 bg-[#2D5A27] text-white py-3 rounded-xl font-bold">Lưu</button>
                    <button onClick={() => setIsEditing(false)} className="flex-1 bg-gray-200 py-3 rounded-xl font-bold">Hủy</button>
                  </div>
               </div>
             ) : (
               <div className="space-y-6">
                  <p className="text-lg leading-relaxed italic text-[#5D4037] whitespace-pre-wrap">
                    "{selectedWish.text}"
                  </p>
                  
                  {isOwner && (
                    <div className="flex gap-2 pt-4 border-t border-gray-100">
                       <button onClick={() => setIsEditing(true)} className="flex-1 bg-[#8B5E3C]/10 text-[#8B5E3C] py-3 rounded-xl font-bold hover:bg-[#8B5E3C]/20 transition-colors">
                         ✏️ {lang === 'vi' ? 'Chỉnh sửa' : 'Edit'}
                       </button>
                       <button onClick={() => handleDeleteWish(selectedWish.id)} className="flex-1 bg-red-50 text-red-500 py-3 rounded-xl font-bold hover:bg-red-100 transition-colors">
                         🗑️ {lang === 'vi' ? 'Xóa' : 'Delete'}
                       </button>
                    </div>
                  )}
               </div>
             )}
          </div>
        </div>
      )}

      {/* CREATE MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => !isSuccess && setIsModalOpen(false)} />
          <div className="relative z-10 w-full max-w-md bg-[#FFF9F0] rounded-[2.5rem] shadow-2xl p-8 overflow-hidden transform animate-pop">
            {!isSuccess ? (
              <>
                <h3 className="text-xl font-bold text-[#8B5E3C] mb-6 flex items-center gap-2">
                  <span>🎴</span> {lang === 'vi' ? 'Chọn thẻ và viết...' : 'Choose a card and write...'}
                </h3>
                <div className="grid grid-cols-1 gap-2 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                  {CARD_TYPES.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type)}
                      className={`p-4 rounded-2xl flex items-center gap-4 text-left transition-all border-2 ${
                        selectedType?.id === type.id 
                          ? 'border-[#2D5A27] bg-[#2D5A27]/5' 
                          : 'border-transparent bg-white shadow-sm hover:shadow-md'
                      }`}
                    >
                      <span className="text-2xl">{type.icon}</span>
                      <span className="text-sm font-medium">{lang === 'vi' ? type.label.vi : type.label.en}</span>
                    </button>
                  ))}
                </div>

                {selectedType && (
                  <div className="animate-fade-in">
                    <textarea
                      value={wishText}
                      onChange={(e) => setWishText(e.target.value)}
                      placeholder={lang === 'vi' ? 'Bạn muốn nói gì với tui...' : 'What do you want to say...'}
                      className="w-full h-32 p-4 rounded-2xl border-2 border-[#8B5E3C]/10 bg-white focus:border-[#2D5A27] focus:outline-none transition-colors mb-4 text-[#5D4037]"
                    />
                    <button
                      onClick={handleHangWish}
                      disabled={!wishText.trim()}
                      className="w-full bg-[#2D5A27] text-white py-4 rounded-2xl font-bold shadow-lg disabled:opacity-50 hover:opacity-90 transition-opacity"
                    >
                      {lang === 'vi' ? 'Treo lên cây 🌳' : 'Hang on tree 🌳'}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-8 animate-fade-in">
                <div className="text-6xl mb-6">🌿</div>
                <h3 className="text-2xl font-bold text-[#2D5A27] mb-4">
                  {lang === 'vi' ? 'Cảm ơn bạn đã viết' : 'Thank you for writing'}
                </h3>
                <div className="text-[#5D4037] leading-relaxed italic">
                  {lang === 'vi' ? (
                    <>
                      <p>Tui đọc bằng sự tôn trọng và không phòng thủ đâu.</p>
                      <p className="mt-2 text-sm">Có thể tui chưa làm tốt liền được, nhưng tui thật sự trân trọng việc bạn đã nói ra.</p>
                    </>
                  ) : (
                    <>
                      <p>I’ll read it with respect, not defensiveness.</p>
                      <p className="mt-2 text-sm">I may not change immediately, but I truly appreciate your honesty.</p>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes sway {
          0%, 100% { transform: translateY(0) rotate(var(--tw-rotate, 0deg)); }
          50% { transform: translateY(-3px) rotate(calc(var(--tw-rotate, 0deg) + 2deg)); }
        }
        .animate-sway {
          animation: sway 3s ease-in-out infinite;
        }
        @keyframes pop {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pop {
          animation: pop 0.4s cubic-bezier(0.17, 0.67, 0.83, 0.67);
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default WishTree;
