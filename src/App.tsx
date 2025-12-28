import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SCENERIES } from './game/animals';
import type { Animal, Language } from './game/animals';
import { Star, RefreshCw, Play, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<'intro' | 'playing'>('intro');
  const [language, setLanguage] = useState<Language>('en');
  const [currentSceneryIndex, setCurrentSceneryIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedAnimalId, setClickedAnimalId] = useState<string | null>(null);

  const currentScenery = SCENERIES[currentSceneryIndex];

  const animalPositions = useMemo(() => {
    return currentScenery.animals.map(() => ({
      x: Math.random() * 20 - 10,
      y: Math.random() * 10 - 5,
    }));
  }, [currentSceneryIndex]);

  const startGame = (lang: Language) => {
    setLanguage(lang);
    setGameState('playing');
    // Automatic fullscreen
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  };

  const playSound = (animal: Animal) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(animal.names[language]);
    utterance.lang = language === 'de' ? 'de-DE' : 'en-US';
    utterance.rate = 0.8;
    utterance.pitch = 1.2; 
    window.speechSynthesis.speak(utterance);

    setClickedAnimalId(animal.id);
    setTimeout(() => setClickedAnimalId(null), 1200);

    setScore(s => s + 1);

    if ((score + 1) % 5 === 0) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF9F43']
      });
    }
  };

  const nextScenery = () => {
    setCurrentSceneryIndex((prev) => (prev + 1) % SCENERIES.length);
  };

  if (gameState === 'intro') {
    return (
      <div className="w-full h-screen bg-linear-to-br from-brand-secondary to-blue-600 flex flex-col items-center justify-center p-6 text-white overflow-hidden">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className="flex gap-4 justify-center mb-8">
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <Star size={100} className="text-brand-accent fill-brand-accent shadow-2xl" />
            </motion.div>
          </div>
          <h1 className="text-7xl font-black mb-12 tracking-tighter drop-shadow-lg text-white">ANIMAL FRIENDS</h1>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => startGame('en')}
              className="bg-white text-brand-secondary px-10 py-6 rounded-full text-3xl font-black shadow-2xl flex items-center gap-4 min-w-[280px]"
            >
              <Play size={40} fill="currentColor" />
              ENGLISH
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => startGame('de')}
              className="bg-brand-accent text-orange-600 px-10 py-6 rounded-full text-3xl font-black shadow-2xl flex items-center gap-4 min-w-[280px]"
            >
              <Globe size={40} />
              DEUTSCH
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-screen overflow-hidden ${currentScenery.background} transition-all duration-1000 flex flex-col`}>
      {/* Dynamic Scenery Decorations */}
      {currentScenery.decorations.map((dec, i) => {
        const Icon = dec.icon;
        return (
          <motion.div
            key={`${currentScenery.id}-dec-${i}`}
            className={`absolute pointer-events-none opacity-30 ${dec.className}`}
            animate={dec.animation}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <Icon size={150} />
          </motion.div>
        );
      })}

      {/* UI Overlay */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-50 pointer-events-none">
        <motion.div 
          key={score}
          initial={{ scale: 0.8, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-3xl shadow-2xl flex items-center gap-4 border-4 border-brand-accent pointer-events-auto"
        >
          <Star className="text-yellow-500 fill-yellow-500" size={40} />
          <span className="text-4xl font-black text-gray-800">{score}</span>
        </motion.div>
        
        <button 
          onClick={nextScenery}
          className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl text-brand-primary hover:scale-110 active:scale-90 transition-all border-4 border-brand-primary/20 pointer-events-auto"
        >
          <RefreshCw size={40} strokeWidth={3} />
        </button>
      </div>

      {/* Animals Area */}
      <div className="flex-1 relative flex items-center justify-center z-20">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentScenery.id}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.2, rotate: 5 }}
            className="w-full h-full flex flex-wrap items-center justify-center p-12 gap-10 md:gap-20"
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
      <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none z-30">
        <motion.p 
          key={currentScenery.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          className="text-white text-4xl font-black uppercase tracking-[0.5em]"
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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.85 }}
      onClick={onClick}
      className={`
        relative bg-white rounded-[4rem] p-10 md:p-14
        shadow-[0_30px_60px_rgba(0,0,0,0.15)] 
        flex flex-col items-center justify-center 
        w-52 h-52 md:w-72 md:h-72
        border-b-[16px] border-gray-200/50
        ${isClicked ? 'ring-[16px] ring-brand-primary/40 !scale-110 !rotate-0' : ''}
        transition-all duration-300
      `}
    >
      <motion.div
        animate={isClicked ? {
          rotate: [0, -25, 25, -25, 25, 0],
          scale: [1, 1.4, 1],
        } : {}}
        transition={{ duration: 0.6 }}
        className={`${animal.color} mb-6`}
      >
        <Icon size={120} md:size={160} strokeWidth={2.5} />
      </motion.div>
      
      <AnimatePresence>
        {isClicked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 0 }}
            animate={{ opacity: 1, scale: 2, y: -140 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute text-5xl font-black text-brand-primary drop-shadow-2xl z-50 pointer-events-none whitespace-nowrap"
          >
            {animal.soundEmojis[language]}
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`text-xl md:text-2xl font-black tracking-tight transition-colors duration-300 ${isClicked ? 'text-brand-primary' : 'text-gray-400'}`}>
        {animal.names[language]}
      </div>
    </motion.button>
  );
};

export default App;
