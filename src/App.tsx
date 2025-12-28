import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SCENERIES } from './game/animals';
import type { Animal, Language } from './game/animals';
import { Star, RefreshCw, Play, Check, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<'intro' | 'playing'>('intro');
  const [language, setLanguage] = useState<Language>('en');
  const [currentSceneryIndex, setCurrentSceneryIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedAnimalId, setClickedAnimalId] = useState<string | null>(null);
  const [showMilestone, setShowMilestone] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const currentScenery = SCENERIES[currentSceneryIndex];

  const animalPositions = useMemo(() => {
    return [
      { x: -8, y: -5 },
      { x: 8, y: 5 },
      { x: 0, y: -12 },
    ];
  }, [currentSceneryIndex]);

  const startGame = () => {
    setGameState('playing');
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  };

  const triggerMilestone = () => {
    setShowMilestone(true);
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.5 },
      colors: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF9F43', '#A29BFE']
    });

    // Play a happy sound or just speak "Yay!"
    const msg = language === 'en' ? 'Wonderful!' : 'Super gemacht!';
    const utterance = new SpeechSynthesisUtterance(msg);
    utterance.lang = language === 'de' ? 'de-DE' : 'en-US';
    utterance.pitch = 1.5;
    window.speechSynthesis.speak(utterance);

    setTimeout(() => {
      setShowMilestone(false);
      setCurrentSceneryIndex((prev) => (prev + 1) % SCENERIES.length);
    }, 2500);
  };

  const playSound = (animal: Animal) => {
    if (isSpeaking || showMilestone) return;

    setIsSpeaking(true);
    
    const utterance = new SpeechSynthesisUtterance(animal.names[language]);
    utterance.lang = language === 'de' ? 'de-DE' : 'en-US';
    utterance.rate = 0.75; // Slower for clarity
    utterance.pitch = 1.3; // Higher/Friendlier for toddlers
    
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    // Fallback: in some browsers onend might not fire reliably
    setTimeout(() => setIsSpeaking(false), 2000);

    window.speechSynthesis.speak(utterance);

    // Visual feedback logic
    setClickedAnimalId(null); // Reset first to re-trigger animation if same animal
    setTimeout(() => setClickedAnimalId(animal.id), 10);
    
    const newScore = score + 1;
    setScore(newScore);

    // Every 10 points is a level clear / milestone
    if (newScore > 0 && newScore % 10 === 0) {
      triggerMilestone();
    }
  };

  const nextScenery = () => {
    setCurrentSceneryIndex((prev) => (prev + 1) % SCENERIES.length);
  };

  if (gameState === 'intro') {
    return (
      <div className="w-full h-screen bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-6 text-white overflow-hidden">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center w-full max-w-md"
        >
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }} 
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="flex justify-center mb-8"
          >
            <Star size={120} className="text-yellow-300 fill-yellow-300 drop-shadow-[0_0_30px_rgba(253,224,71,0.6)]" />
          </motion.div>
          
          <h1 className="text-6xl md:text-7xl font-black mb-12 tracking-tighter drop-shadow-2xl italic">
            ANIMAL<br/>FRIENDS
          </h1>

          <div className="bg-white/20 backdrop-blur-xl p-4 rounded-[3rem] flex gap-2 mb-10 border-2 border-white/30">
            <button 
              onClick={() => setLanguage('en')}
              className={`flex-1 py-4 px-6 rounded-[2rem] text-2xl font-black transition-all flex items-center justify-center gap-2 ${language === 'en' ? 'bg-white text-indigo-600 shadow-xl scale-105' : 'text-white/80 hover:bg-white/10'}`}
            >
              {language === 'en' && <Check size={24} strokeWidth={4} />}
              ENGLISH
            </button>
            <button 
              onClick={() => setLanguage('de')}
              className={`flex-1 py-4 px-6 rounded-[2rem] text-2xl font-black transition-all flex items-center justify-center gap-2 ${language === 'de' ? 'bg-white text-indigo-600 shadow-xl scale-105' : 'text-white/80 hover:bg-white/10'}`}
            >
              {language === 'de' && <Check size={24} strokeWidth={4} />}
              DEUTSCH
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={startGame}
            className="bg-brand-accent text-orange-600 w-full py-8 rounded-[3.5rem] text-5xl font-black shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center gap-6 border-b-[12px] border-orange-700/30"
          >
            <Play size={60} fill="currentColor" />
            {language === 'en' ? 'PLAY' : 'START'}
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-screen overflow-hidden ${currentScenery.background} transition-all duration-1000 flex flex-col`}>
      <AnimatePresence>
        {showMilestone && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            className="absolute inset-0 z-[100] flex flex-col items-center justify-center bg-white/40 backdrop-blur-md"
          >
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Trophy size={200} className="text-yellow-500 fill-yellow-400 drop-shadow-2xl" />
            </motion.div>
            <h2 className="text-7xl font-black text-indigo-600 mt-10 drop-shadow-lg uppercase tracking-widest">
              {language === 'en' ? 'Level Up!' : 'Super!'}
            </h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dynamic Scenery Decorations */}
      {currentScenery.decorations.map((dec, i) => {
        const Icon = dec.icon;
        return (
          <motion.div
            key={`${currentScenery.id}-dec-${i}`}
            className={`absolute pointer-events-none opacity-30 ${dec.className}`}
            animate={dec.animation}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <Icon size={180} />
          </motion.div>
        );
      })}

      {/* UI Overlay */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-50 pointer-events-none">
        <motion.div 
          key={score}
          initial={{ scale: 0.8, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          className="bg-white/95 px-8 py-4 rounded-[2.5rem] shadow-2xl flex items-center gap-4 border-4 border-brand-accent pointer-events-auto"
        >
          <Star className="text-yellow-500 fill-yellow-500" size={44} />
          <span className="text-5xl font-black text-gray-800 tracking-tighter">{score}</span>
        </motion.div>
        
        <button 
          onClick={nextScenery}
          className="bg-white/95 p-6 rounded-[2.5rem] shadow-2xl text-brand-primary hover:scale-110 active:scale-90 transition-all border-4 border-brand-primary/20 pointer-events-auto"
        >
          <RefreshCw size={44} strokeWidth={4} />
        </button>
      </div>

      {/* Animals Area */}
      <div className="flex-1 relative flex items-center justify-center z-20 overflow-visible">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentScenery.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="w-full max-w-6xl flex flex-wrap items-center justify-center px-6 gap-8 md:gap-12 lg:gap-20"
          >
            {currentScenery.animals.map((animal, idx) => (
              <AnimalCard 
                key={`${currentScenery.id}-${animal.id}-${idx}`}
                animal={animal} 
                onClick={() => playSound(animal)}
                isClicked={clickedAnimalId === animal.id}
                offset={animalPositions[idx]}
                language={language}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scenery Name */}
      <div className="absolute bottom-10 left-0 right-0 text-center pointer-events-none z-30">
        <motion.p 
          key={currentScenery.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.3, y: 0 }}
          className="text-white text-5xl font-black uppercase tracking-[0.4em]"
        >
          {currentScenery.names[language]}
        </motion.p>
      </div>
    </div>
  );
};

interface AnimalCardProps {
  animal: Animal;
  onClick: () => void;
  isClicked: boolean;
  offset: { x: number, y: number };
  language: Language;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal, onClick, isClicked, offset, language }) => {
  const Icon = animal.icon;

  return (
    <motion.button
      style={{ x: `${offset.x}%`, y: `${offset.y}%` }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`
        relative bg-white rounded-[4.5rem] p-8 md:p-12
        shadow-[0_40px_80px_rgba(0,0,0,0.12)] 
        flex flex-col items-center justify-between
        w-52 h-52 md:w-72 md:h-72 lg:w-80 lg:h-80
        border-b-[16px] border-gray-200/60
        ${isClicked ? 'ring-[20px] ring-brand-primary/40 !scale-110 !z-50' : 'z-10'}
        transition-all duration-300
      `}
    >
      <div className="flex-1 flex items-center justify-center w-full">
        <motion.div
          key={isClicked ? 'clicked' : 'idle'}
          initial={false}
          animate={isClicked ? {
            rotate: [0, -20, 20, -20, 20, 0],
            scale: [1, 1.3, 1],
          } : {}}
          transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
          className={`${animal.color} flex items-center justify-center`}
        >
          <Icon size="100%" className="w-28 h-28 md:w-44 md:h-44 lg:w-52 lg:h-52" strokeWidth={2.5} />
        </motion.div>
      </div>
      
      <AnimatePresence>
        {isClicked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 0 }}
            animate={{ opacity: 1, scale: 2, y: -160 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute text-6xl font-black text-brand-primary drop-shadow-[0_10px_30px_rgba(0,0,0,0.2)] z-50 pointer-events-none whitespace-nowrap"
          >
            {animal.soundEmojis[language]}
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`mb-2 md:mb-4 text-xl md:text-2xl font-black tracking-tight transition-colors duration-300 ${isClicked ? 'text-brand-primary' : 'text-gray-300'}`}>
        {animal.names[language]}
      </div>
    </motion.button>
  );
};

export default App;
