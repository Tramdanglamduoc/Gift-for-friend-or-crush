
import React, { useState, useEffect } from 'react';
import { Language, Page } from './types';
import { QUESTIONS, COLORS } from './constants';
import Snowfall from './components/Snowfall';
import DogIllustration from './components/DogIllustration';
import LetterModal from './components/LetterModal';
import WishTree from './components/WishTree';
import DigitalFigures from './components/DigitalFigures';
import Fireworks from './components/Fireworks';
import EmotionBalloons from './components/EmotionBalloons';
import MessyCorkboard from './components/MessyCorkboard';
import ChristmasTree from './components/ChristmasTree';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('vi');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [activeLetterId, setActiveLetterId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(prev => (prev === 'vi' ? 'en' : 'vi'));

  const handleQuestionClick = (id: number) => {
    setActiveLetterId(id);
    setIsLetterOpen(true);
  };

  const getActiveLetterContent = () => {
    const q = QUESTIONS.find(item => item.id === activeLetterId);
    if (!q) return { title: '', content: '', warning: false };
    return {
      title: lang === 'vi' ? q.title.vi : q.title.en,
      content: lang === 'vi' ? q.content.vi : q.content.en,
      warning: q.warning
    };
  };

  const { title: modalTitle, content: modalContent, warning: modalWarning } = getActiveLetterContent();

  const getPageTitle = () => {
    switch (currentPage) {
      case 'home': return lang === 'vi' ? 'Trang chủ' : 'Home';
      case 'wish-tree': return lang === 'vi' ? 'Cây Ước Nguyện' : 'Wish Tree';
      case 'digital-figures': return lang === 'vi' ? 'Digital Figure' : 'Digital Figure';
      case 'fireworks': return lang === 'vi' ? 'Pháo hoa' : 'Fireworks';
      case 'emotion-balloons': return lang === 'vi' ? 'Bóng cảm xúc' : 'Emotion Balloons';
      case 'messy-corkboard': return lang === 'vi' ? 'Bảng dán lung tung' : 'Messy Corkboard';
      case 'christmas-tree': return lang === 'vi' ? 'Cây thông Noel' : 'Christmas Tree';
      default: return '';
    }
  };

  const renderHome = () => (
    <>
      {/* HERO SECTION */}
      <section className="pt-32 pb-16 px-6 flex flex-col items-center text-center">
        <div className="mb-8 relative">
          <DogIllustration className="w-48 h-48 md:w-64 md:h-64" />
          <div className="absolute -top-4 -right-4 bg-[#E57373] text-white text-xs px-2 py-1 rounded-full animate-pulse">
            Woof! 🎄
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#8B5E3C]">
          {lang === 'vi' ? 'Chào bạn Hào 🐶' : 'Hello Hao 🐶'}
        </h1>
        <p className="text-lg md:text-xl text-[#8B5E3C]/80 max-w-lg leading-relaxed">
          {lang === 'vi' 
            ? 'Một món quà nhỏ từ Trâm 🐢 – cho một người bạn đặc biệt' 
            : 'A small digital gift from Tram 🐢 — for a special friend'}
        </p>
      </section>

      {/* INTRO TEXT */}
      <section className="max-w-2xl mx-auto px-6 py-12">
        <div className="bg-white/60 p-8 md:p-12 rounded-[2.5rem] border-2 border-[#8B5E3C]/10 backdrop-blur-sm shadow-sm">
          <div className="text-lg leading-relaxed space-y-4 text-[#5D4037]">
            {lang === 'vi' ? (
              <>
                <p>Noel tới, năm mới cũng tới.</p>
                <p>Tui biết bạn là người hơi sến, mà tui thì cũng đâu có kém gì.</p>
                <p>Tụi mình chỉ là những người quen nhau qua mạng thôi, chưa từng gặp ngoài đời, nên chẳng biết tặng gì cả.</p>
                <p>Nhưng tui lại học IT, nên trong đầu tui cứ hay nghĩ tới mấy thứ hơi khác một chút.</p>
                <p>Ban đầu tui cũng muốn làm một món quà ấn tượng hơn, như một chatbot nhỏ chẳng hạn, nhưng huhu… tui chưa đủ trình, mà cũng chưa đủ thời gian nữa.</p>
                <p>Có lẽ sau này, nếu vẫn còn may mắn giữ được một mối duyên lành như vầy, tui sẽ thử làm những ý tưởng độc đáo hơn cho bạn.</p>
                <p>Còn hiện tại, tui làm một website nho nhỏ này, coi như là một món quà tui dành tặng bạn cho hai dịp lễ lớn sắp tới.</p>
                <p>Vì thiệt ra, tui không giỏi thể hiện tình cảm của mình bằng lời nói.</p>
                <p>Nên tui mong bạn sẽ thích món quà này.</p>
                <p>Hiện tại thì nó chỉ mang giá trị tinh thần thôi, mà tui cũng thấy giá trị tinh thần này… chắc không cao lắm đâu, haha.</p>
                <p className="font-bold pt-4">Không phải ai tui cũng làm cái này đâu 🐶</p>
              </>
            ) : (
              <>
                <p>Christmas is coming, and so is the New Year.</p>
                <p>I know you’re a bit sentimental — and honestly, so am I.</p>
                <p>We’re just two people who met online. We haven’t met in real life, and I don’t really know where this connection might go in the future.</p>
                <p>But I study IT, so my mind often wanders to slightly different ideas.</p>
                <p>At first, I wanted to make something more impressive, like a small chatbot for you. But honestly… I’m not skilled enough yet, and I don’t have enough time either.</p>
                <p>Maybe in the future, if we’re lucky enough to keep this gentle connection, I’ll try to create something more unique for you.</p>
                <p>For now, I made this small website instead, as a little gift for you for these two special holidays.</p>
                <p>I’m not very good at expressing my feelings directly.</p>
                <p>So I hope you’ll like this gift.</p>
                <p>For now, it only holds emotional value, though I guess that emotional value isn’t very high either — haha.</p>
                <p className="font-bold pt-4">Not everyone gets this, you know 🐶</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* QUESTIONS SECTION */}
      <section className="max-w-2xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8 text-[#2D5A27] flex items-center">
          <span className="mr-2">❓</span>
          {lang === 'vi' ? 'Những câu hỏi bạn có thể tò mò' : 'Questions you might wonder about'}
        </h2>
        
        <div className="space-y-4">
          {QUESTIONS.map((q) => (
            <div 
              key={q.id}
              className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                activeLetterId === q.id && isLetterOpen
                  ? 'border-[#8B5E3C] bg-white shadow-lg' 
                  : 'border-[#8B5E3C]/10 bg-white/40 hover:bg-white/60'
              }`}
            >
              <button
                onClick={() => handleQuestionClick(q.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <div className="flex flex-col flex-1">
                  <span className="flex items-center font-semibold text-lg">
                    <span className="mr-3 text-xl">{q.icon}</span>
                    {lang === 'vi' ? q.title.vi : q.title.en}
                  </span>
                  
                  {q.id === 4 && (
                    <p className="ml-9 mt-1 text-sm text-[#8B5E3C]/70 italic leading-relaxed">
                      {lang === 'vi' 
                        ? 'Đoạn này tui viết cho tui nhiều hơn cho bạn, nếu không muốn đọc thì bỏ qua nha.'
                        : 'I wrote this more for myself than for you. If you don’t want to read it, that’s completely okay.'}
                    </p>
                  )}

                  {q.warning && (
                    <span className="ml-9 mt-1 text-red-500 text-xs font-bold uppercase tracking-wide">
                      ⚠️ {lang === 'vi' ? 'Nhạy cảm xíu nha...' : 'A bit sensitive...'}
                    </span>
                  )}
                </div>
                <span className="text-xl ml-4 opacity-40 group-hover:opacity-100 transition-opacity">✨</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* WISHES SECTION */}
      <section className="max-w-2xl mx-auto px-6 py-12 text-center">
        <div className="bg-[#2D5A27]/5 rounded-3xl p-10 border border-[#2D5A27]/20 relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border border-[#2D5A27]/20">
            🌟
          </div>
          <h2 className="text-2xl font-bold mb-6 text-[#2D5A27]">
            {lang === 'vi' ? 'Điều tui mong ở bạn' : 'What I wish for you'}
          </h2>
          <p className="text-xl leading-relaxed italic text-[#2D5A27]">
            {lang === 'vi' ? (
              <>
                Tui mong bạn luôn vui vẻ,<br />
                dù cuộc sống có thử thách thế nào,<br />
                tâm bạn vẫn vững vàng,<br />
                và bạn sẽ sớm có được<br />
                những điều mình mong muốn.
              </>
            ) : (
              <>
                I hope you’re always happy,<br />
                no matter how challenging life becomes.<br />
                May your heart stay steady and strong,<br />
                and may you soon find<br />
                everything you’ve been hoping for.
              </>
            )}
          </p>
        </div>
      </section>

      {/* NEW YEAR SECTION */}
      <section className="max-w-2xl mx-auto px-6 py-12">
        <div className="bg-[#E57373]/10 rounded-3xl p-10 border-2 border-dashed border-[#E57373]/30 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
             <span className="text-6xl">🧧</span>
          </div>
          <div className="mb-6 flex justify-center">
            <DogIllustration type="sleepy" className="w-32 h-32" />
          </div>
          <h3 className="text-xl font-bold mb-4 text-[#E57373]">
            {lang === 'vi' ? '🎆 Điều ước năm mới' : '🎆 New Year Wishes'}
          </h3>
          <div className="p-4 rounded-xl bg-white/40 inline-block border border-[#E57373]/20">
             <p className="text-sm opacity-60 italic mb-2">
               {lang === 'vi' ? 'Section này sẽ mở lại khi Tết tới 🧧' : 'This section will unlock on Lunar New Year 🧧'}
             </p>
             <p className="text-lg font-medium text-[#E57373]">
                🎯 {lang === 'vi' ? 'Mong bạn có một năm bình yên' : 'Wish you a peaceful year'}
             </p>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div 
      className="min-h-screen pb-20 relative text-[#5D4037] overflow-x-hidden transition-colors duration-700" 
      style={{ 
        backgroundColor: 
          currentPage === 'wish-tree' ? '#f7f3e9' : 
          currentPage === 'digital-figures' ? '#FDF8F3' : 
          currentPage === 'fireworks' ? '#0a0a1e' : 
          currentPage === 'emotion-balloons' ? '#fdf2f8' : 
          currentPage === 'messy-corkboard' ? '#fcf6f0' : 
          currentPage === 'christmas-tree' ? '#fdfaf1' :
          '#FFF9F0' 
      }}
    >
      {currentPage !== 'fireworks' && currentPage !== 'emotion-balloons' && currentPage !== 'messy-corkboard' && currentPage !== 'christmas-tree' && <Snowfall />}
      
      <LetterModal 
        isOpen={isLetterOpen}
        onClose={() => setIsLetterOpen(false)}
        title={modalTitle}
        content={modalContent}
        warning={modalWarning}
      />

      {/* STICKY HEADER */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'py-4'}`}>
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center relative">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className={`p-2 rounded-full transition-colors ${currentPage === 'fireworks' ? 'text-white hover:bg-white/10' : 'text-[#8B5E3C] hover:bg-[#8B5E3C]/10'}`}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className={`absolute left-1/2 -translate-x-1/2 font-bold text-lg pointer-events-none transition-colors ${currentPage === 'fireworks' ? 'text-white/80' : 'text-[#8B5E3C]'}`}>
            {getPageTitle()}
          </div>

          <button
            onClick={toggleLang}
            className={`flex items-center space-x-2 bg-white/50 border px-4 py-2 rounded-full hover:bg-[#8B5E3C]/10 transition-colors shadow-sm ${currentPage === 'fireworks' ? 'border-white/20 text-white' : 'border-[#8B5E3C]/20 text-[#5D4037]'}`}
          >
            <span className={lang === 'vi' ? 'font-bold' : 'opacity-50'}>VN</span>
            <span className="text-gray-300">|</span>
            <span className={lang === 'en' ? 'font-bold' : 'opacity-50'}>EN</span>
          </button>
        </div>
      </header>

      {/* NAVIGATION DRAWER */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#FFF9F0] flex flex-col items-center justify-center animate-fade-in overflow-hidden">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-4 text-[#8B5E3C] hover:scale-110 transition-transform"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <nav className="flex flex-col gap-6 text-center max-h-[80vh] overflow-y-auto px-10">
            <button 
              onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); window.scrollTo(0,0); }}
              className={`text-2xl md:text-3xl font-bold transition-all ${currentPage === 'home' ? 'text-[#8B5E3C] scale-110' : 'text-[#8B5E3C]/40 hover:text-[#8B5E3C]'}`}
            >
              🏠 {lang === 'vi' ? 'Trang chủ' : 'Home'}
            </button>
            <button 
              onClick={() => { setCurrentPage('christmas-tree'); setIsMenuOpen(false); window.scrollTo(0,0); }}
              className={`text-2xl md:text-3xl font-bold transition-all ${currentPage === 'christmas-tree' ? 'text-[#E57373] scale-110' : 'text-[#E57373]/40 hover:text-[#E57373]'}`}
            >
              🎄 {lang === 'vi' ? 'Cây Thông Noel' : 'The Christmas Tree'}
            </button>
            <button 
              onClick={() => { setCurrentPage('wish-tree'); setIsMenuOpen(false); window.scrollTo(0,0); }}
              className={`text-2xl md:text-3xl font-bold transition-all ${currentPage === 'wish-tree' ? 'text-[#2D5A27] scale-110' : 'text-[#2D5A27]/40 hover:text-[#2D5A27]'}`}
            >
              🌳 {lang === 'vi' ? 'Cây Ước Nguyện' : 'The Wish Tree'}
            </button>
            <button 
              onClick={() => { setCurrentPage('digital-figures'); setIsMenuOpen(false); window.scrollTo(0,0); }}
              className={`text-2xl md:text-3xl font-bold transition-all ${currentPage === 'digital-figures' ? 'text-[#827717] scale-110' : 'text-[#827717]/40 hover:text-[#827717]'}`}
            >
              🎨 {lang === 'vi' ? 'Digital Figure' : 'Digital Figure'}
            </button>
            <button 
              onClick={() => { setCurrentPage('fireworks'); setIsMenuOpen(false); window.scrollTo(0,0); }}
              className={`text-2xl md:text-3xl font-bold transition-all ${currentPage === 'fireworks' ? 'text-indigo-600 scale-110' : 'text-indigo-600/40 hover:text-indigo-600'}`}
            >
              🎆 {lang === 'vi' ? 'Pháo hoa' : 'Fireworks'}
            </button>
            <button 
              onClick={() => { setCurrentPage('emotion-balloons'); setIsMenuOpen(false); window.scrollTo(0,0); }}
              className={`text-2xl md:text-3xl font-bold transition-all ${currentPage === 'emotion-balloons' ? 'text-pink-500 scale-110' : 'text-pink-500/40 hover:text-pink-500'}`}
            >
              🎈 {lang === 'vi' ? 'Bóng cảm xúc' : 'Emotion Balloons'}
            </button>
            <button 
              onClick={() => { setCurrentPage('messy-corkboard'); setIsMenuOpen(false); window.scrollTo(0,0); }}
              className={`text-2xl md:text-3xl font-bold transition-all ${currentPage === 'messy-corkboard' ? 'text-amber-700 scale-110' : 'text-amber-700/40 hover:text-amber-700'}`}
            >
              📌 {lang === 'vi' ? 'Bảng dán lung tung' : 'Messy Corkboard'}
            </button>
          </nav>
        </div>
      )}

      {/* MAIN CONTENT AREA */}
      <main className="animate-fade-in min-h-screen">
        {currentPage === 'home' 
          ? renderHome() 
          : currentPage === 'wish-tree' 
            ? <WishTree lang={lang} /> 
            : currentPage === 'digital-figures'
              ? <DigitalFigures lang={lang} />
              : currentPage === 'fireworks'
                ? <Fireworks lang={lang} />
                : currentPage === 'emotion-balloons'
                  ? <EmotionBalloons lang={lang} />
                  : currentPage === 'messy-corkboard'
                    ? <MessyCorkboard lang={lang} />
                    : <ChristmasTree lang={lang} />
        }
      </main>

      <footer className={`text-center pt-10 pb-20 px-6 opacity-40 text-sm ${currentPage === 'fireworks' ? 'text-white' : 'text-[#5D4037]'}`}>
        <p>Made with 🤍 by Trâm for Hào</p>
        <p className="mt-1">© 2025 - 2026 Christmas & New Year special</p>
      </footer>
    </div>
  );
};

export default App;
