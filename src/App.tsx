import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SCENERIES } from './game/animals';
import type { Animal } from './game/animals';
import { Star, RefreshCw, Maximize, Minimize, Play } from 'lucide-react';
import confetti from 'canvas-confetti';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<'intro' | 'playing'>('intro');
  const [currentSceneryIndex, setCurrentSceneryIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedAnimalId, setClickedAnimalId] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentScenery = SCENERIES[currentSceneryIndex];

  // Randomize animal positions for each scenery change
  const animalPositions = useMemo(() => {
    return currentScenery.animals.map(() => ({
      x: Math.random() * 40 - 20, // -20% to 20% offset
      y: Math.random() * 20 - 10, // -10% to 10% offset
    }));
  }, [currentSceneryIndex]);

  const startGame = () => {
    setGameState('playing');
    toggleFullscreen(true);
  };

  const playSound = (animal: Animal) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(animal.speechName);
    utterance.rate = 0.85;
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

  const toggleFullscreen = (force?: boolean) => {
    const shouldEnable = force !== undefined ? force : !document.fullscreenElement;
    
    if (shouldEnable) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  if (gameState === 'intro') {
    return (
      <div className="w-full h-screen bg-brand-secondary flex flex-col items-center justify-center p-6 text-white overflow-hidden">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className="flex gap-4 justify-center mb-8">
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <Star size={80} className="text-brand-accent fill-brand-accent" />
            </motion.div>
          </div>
          <h1 className="text-6xl font-black mb-12 tracking-tight">ANIMAL FRIENDS</h1>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={startGame}
            className="bg-white text-brand-secondary px-12 py-6 rounded-full text-4xl font-black shadow-2xl flex items-center gap-4 mx-auto"
          >
            <Play size={48} fill="currentColor" />
            PLAY
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-screen overflow-hidden ${currentScenery.background} transition-colors duration-1000 flex flex-col`}>
      {/* Dynamic Scenery Decorations */}
      {currentScenery.decorations.map((dec, i) => {
        const Icon = dec.icon;
        return (
          <motion.div
            key={`${currentScenery.id}-dec-${i}`}
            className={`absolute pointer-events-none opacity-40 ${dec.className}`}
            animate={dec.animation}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Icon size={120} />
          </motion.div>
        );
      })}

      {/* UI Overlay */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-50">
        <motion.div 
          key={score}
          initial={{ scale: 0.8, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          className="bg-white px-8 py-4 rounded-3xl shadow-2xl flex items-center gap-4 border-4 border-brand-accent"
        >
          <Star className="text-yellow-500 fill-yellow-500" size={40} />
          <span className="text-4xl font-black text-gray-800">{score}</span>
        </motion.div>
        
        <div className="flex gap-4">
          <button 
            onClick={() => toggleFullscreen()}
            className="bg-white/90 p-5 rounded-3xl shadow-xl text-gray-700 hover:bg-white active:scale-90 transition-all"
          >
            {isFullscreen ? <Minimize size={36} /> : <Maximize size={36} />}
          </button>
          <button 
            onClick={nextScenery}
            className="bg-brand-primary p-5 rounded-3xl shadow-xl text-white hover:brightness-110 active:scale-90 transition-all"
          >
            <RefreshCw size={36} />
          </button>
        </div>
      </div>

      {/* Animals Area */}
      <div className="flex-1 relative flex items-center justify-center z-20">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentScenery.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            className="w-full h-full flex flex-wrap items-center justify-center p-8 gap-8 md:gap-16"
          >
            {currentScenery.animals.map((animal, idx) => (
              <AnimalCard 
                key={`${currentScenery.id}-${animal.id}-${idx}`}
                animal={animal} 
                onClick={() => playSound(animal)}
                isClicked={clickedAnimalId === animal.id}
                offset={animalPositions[idx]}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Instructions */}
      <div className="absolute bottom-10 left-0 right-0 text-center pointer-events-none z-30">
        <motion.p 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-gray-400 text-3xl font-black uppercase tracking-widest opacity-30"
        >
          {currentScenery.name}
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
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal, onClick, isClicked, offset }) => {
  const Icon = animal.icon;

  return (
    <motion.button
      style={{ x: `${offset.x}%`, y: `${offset.y}%` }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.85, rotate: -2 }}
      onClick={onClick}
      className={`
        relative bg-white rounded-[4rem] p-12 md:p-16
        shadow-[0_30px_60px_rgba(0,0,0,0.12)] 
        hover:shadow-[0_40px_80px_rgba(0,0,0,0.18)] 
        transition-shadow duration-500 
        flex flex-col items-center justify-center 
        w-56 h-56 md:w-72 md:h-72
        border-b-[12px] border-gray-100/50
        ${isClicked ? 'ring-[12px] ring-brand-primary/40 !scale-110' : ''}
      `}
    >
      <motion.div
        animate={isClicked ? {
          rotate: [0, -20, 20, -20, 20, 0],
          scale: [1, 1.4, 1],
        } : {}}
        transition={{ duration: 0.6, type: "spring" }}
        className={animal.color}
      >
        <Icon size={140} strokeWidth={2.5} />
      </motion.div>
      
      <AnimatePresence>
        {isClicked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 0 }}
            animate={{ opacity: 1, scale: 2, y: -120 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute text-5xl font-black text-brand-primary drop-shadow-2xl z-50 pointer-events-none"
          >
            {animal.soundEmoji}
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`absolute bottom-8 text-3xl font-black tracking-tight transition-colors duration-300 ${isClicked ? 'text-brand-primary' : 'text-gray-300'}`}>
        {animal.name}
      </div>
    </motion.button>
  );
};

export default App;
