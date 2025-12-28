import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SCENERIES } from './game/animals';
import type { Animal } from './game/animals';
import { Star, RefreshCw, Maximize, Minimize } from 'lucide-react';
import confetti from 'canvas-confetti';

const App: React.FC = () => {
  const [currentSceneryIndex, setCurrentSceneryIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedAnimalId, setClickedAnimalId] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentScenery = SCENERIES[currentSceneryIndex];

  const playSound = (animal: Animal) => {
    // Cancel any ongoing speech to avoid overlap
    window.speechSynthesis.cancel();

    // Speech Synthesis for educational aspect
    const utterance = new SpeechSynthesisUtterance(animal.speechName);
    utterance.rate = 0.9;
    utterance.pitch = 1.1; 
    window.speechSynthesis.speak(utterance);

    // Visual feedback
    setClickedAnimalId(animal.id);
    setTimeout(() => setClickedAnimalId(null), 1000);

    // Increase score
    setScore(s => s + 1);

    // Confetti effect for every 10 points
    if ((score + 1) % 10 === 0) {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#ff6b6b', '#4ecdc4', '#ffe66d']
      });
    }
  };

  const nextScenery = () => {
    setCurrentSceneryIndex((prev) => (prev + 1) % SCENERIES.length);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className={`relative w-full h-screen overflow-hidden ${currentScenery.background} transition-colors duration-1000 flex flex-col font-sans`}>
      {/* Background Decorations (Simple SVGs) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 animate-bounce" style={{ animationDuration: '3s' }}>
          <Star size={48} className="text-yellow-400 fill-yellow-400" />
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce" style={{ animationDuration: '4s' }}>
          <Star size={64} className="text-blue-400 fill-blue-400" />
        </div>
      </div>

      {/* Header UI */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-50">
        <motion.div 
          key={score}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl flex items-center gap-3"
        >
          <Star className="text-yellow-500 fill-yellow-500" size={32} />
          <span className="text-3xl font-black text-gray-800 tracking-tighter">{score}</span>
        </motion.div>
        
        <div className="flex gap-3">
          <button 
            onClick={toggleFullscreen}
            className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-xl text-gray-700 hover:scale-110 active:scale-95 transition-transform"
          >
            {isFullscreen ? <Minimize size={32} /> : <Maximize size={32} />}
          </button>
          <button 
            onClick={nextScenery}
            className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-xl text-gray-700 hover:scale-110 active:scale-95 transition-transform"
          >
            <RefreshCw size={32} />
          </button>
        </div>
      </div>

      {/* Main Game Area */}
      <div className="flex-1 relative flex items-center justify-center z-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentScenery.id}
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 1.1, rotateY: 10 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="w-full h-full flex flex-wrap items-center justify-center p-12 gap-8 md:gap-16"
          >
            {currentScenery.animals.map((animal, idx) => (
              <AnimalCard 
                key={`${currentScenery.id}-${animal.id}-${idx}`}
                animal={animal} 
                onClick={() => playSound(animal)}
                isClicked={clickedAnimalId === animal.id}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scenery Name */}
      <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none z-20">
        <motion.h2 
          key={currentScenery.id}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-black text-gray-800/20 uppercase tracking-widest"
        >
          {currentScenery.name}
        </motion.h2>
      </div>
    </div>
  );
};

interface AnimalCardProps {
  animal: Animal;
  onClick: () => void;
  isClicked: boolean;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal, onClick, isClicked }) => {
  const Icon = animal.icon;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.85 }}
      onClick={onClick}
      className={`
        relative bg-white rounded-[3rem] p-10 md:p-14 
        shadow-[0_20px_50px_rgba(0,0,0,0.1)] 
        hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] 
        transition-shadow duration-500 
        flex flex-col items-center justify-center 
        w-48 h-48 md:w-64 md:h-64
        border-b-8 border-gray-100
        ${isClicked ? 'ring-8 ring-brand-primary/30' : ''}
      `}
    >
      <motion.div
        animate={isClicked ? {
          rotate: [0, -15, 15, -15, 15, 0],
          scale: [1, 1.3, 1],
        } : {}}
        transition={{ duration: 0.5 }}
        className={animal.color}
      >
        <Icon size={100} strokeWidth={2.5} />
      </motion.div>
      
      <AnimatePresence>
        {isClicked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 0 }}
            animate={{ opacity: 1, scale: 1.5, y: -80 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute text-4xl font-black text-brand-primary drop-shadow-md whitespace-nowrap"
          >
            {animal.soundEmoji}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-6 text-2xl font-bold text-gray-400 tracking-tight">
        {animal.name}
      </div>
    </motion.button>
  );
};

export default App;