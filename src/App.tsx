import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SCENERIES } from './game/animals';
import type { Animal, Language } from './game/animals';
import { Star, RefreshCw, Play, Trophy, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<'intro' | 'playing'>('intro');
  const [language, setLanguage] = useState<Language>('en');
  const [currentSceneryIndex, setCurrentSceneryIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedAnimalId, setClickedAnimalId] = useState<string | null>(null);
  const [showMilestone, setShowMilestone] = useState(false);
  const [positionSeed, setPositionSeed] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [availableVoices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  const currentScenery = SCENERIES[currentSceneryIndex];
  const progress = score % 10;

  // Voice setup
  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      setVoices(voices);
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const getBestVoice = useCallback((lang: Language) => {
    const langVoices = availableVoices.filter(v => v.lang.startsWith(lang === 'de' ? 'de' : 'en'));
    
    // Prefer Google or Premium voices which sound much better
    return langVoices.find(v => v.name.includes('Google') || v.name.includes('Premium') || v.name.includes('Natural')) 
           || langVoices[0] 
           || null;
  }, [availableVoices]);

  const animalOffsets = useMemo(() => {
    return currentScenery.animals.map(() => ({
      x: (Math.random() * 40 - 20),
      y: (Math.random() * 30 - 15),
      duration: (Math.random() * 2 + 4) 
    }));
  }, [currentSceneryIndex, positionSeed]);

  const startGame = () => {
    setGameState('playing');
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  };

  const triggerMilestone = () => {
    setShowMilestone(true);
    
    // Multi-stage confetti
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    const msg = language === 'en' ? 'Incredible! You did it!' : 'Unglaublich! Gut gemacht!';
    const utterance = new SpeechSynthesisUtterance(msg);
    utterance.voice = getBestVoice(language);
    utterance.lang = language === 'de' ? 'de-DE' : 'en-US';
    utterance.pitch = 1.2;
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);

    setTimeout(() => {
      setShowMilestone(false);
      setCurrentSceneryIndex((prev) => (prev + 1) % SCENERIES.length);
      setPositionSeed(s => s + 1);
    }, 3500);
  };

  const playSound = (animal: Animal) => {
    if (isSpeaking || showMilestone) return;

    setIsSpeaking(true);
    const utterance = new SpeechSynthesisUtterance(animal.names[language]);
    const bestVoice = getBestVoice(language);
    if (bestVoice) utterance.voice = bestVoice;
    
    utterance.lang = language === 'de' ? 'de-DE' : 'en-US';
    utterance.rate = 0.8;
    utterance.pitch = 1.1;
    
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setTimeout(() => setIsSpeaking(false), 1500);

    window.speechSynthesis.speak(utterance);

    setClickedAnimalId(null);
    setTimeout(() => setClickedAnimalId(animal.id), 10);
    
    const newScore = score + 1;
    setScore(newScore);

    if (newScore > 0 && newScore % 10 === 0) {
      triggerMilestone();
    }
  };

  const nextScenery = () => {
    setCurrentSceneryIndex((prev) => (prev + 1) % SCENERIES.length);
    setPositionSeed(s => s + 1);
  };

  if (gameState === 'intro') {
    return (
      <div className="w-full h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 flex flex-col items-center justify-center p-6 text-white overflow-hidden font-sans">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center w-full max-w-md"
        >
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <Star size={140} className="text-yellow-300 fill-yellow-300 drop-shadow-[0_0_40px_rgba(253,224,71,0.8)]" />
              <motion.div 
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-4 -right-4 text-white"
              >
                <Sparkles size={48} />
              </motion.div>
            </div>
          </motion.div>
          
          <h1 className="text-6xl md:text-7xl font-black mb-12 tracking-tighter drop-shadow-2xl">
            ANIMAL<br/>FRIENDS
          </h1>

          <div className="bg-white/10 backdrop-blur-2xl p-3 rounded-[3.5rem] flex gap-2 mb-10 border border-white/20 shadow-2xl">
            <button 
              onClick={() => setLanguage('en')}
              className={`flex-1 py-5 px-6 rounded-[3rem] text-2xl font-black transition-all flex items-center justify-center gap-2 ${language === 'en' ? 'bg-white text-indigo-600 shadow-2xl scale-105' : 'text-white/70 hover:bg-white/5'}`}
            >
              ENGLISH
            </button>
            <button 
              onClick={() => setLanguage('de')}
              className={`flex-1 py-5 px-6 rounded-[3rem] text-2xl font-black transition-all flex items-center justify-center gap-2 ${language === 'de' ? 'bg-white text-indigo-600 shadow-2xl scale-105' : 'text-white/70 hover:bg-white/5'}`}
            >
              DEUTSCH
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startGame}
            className="bg-brand-accent text-orange-600 w-full py-8 rounded-[3.5rem] text-5xl font-black shadow-[0_30px_60px_rgba(0,0,0,0.4)] flex items-center justify-center gap-6 border-b-[14px] border-orange-700/40 active:border-b-0 active:translate-y-2 transition-all"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[100] flex flex-col items-center justify-center bg-indigo-600/90 backdrop-blur-lg text-white"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.8 }}
            >
              <Trophy size={240} className="text-yellow-300 fill-yellow-400 drop-shadow-[0_0_50px_rgba(253,224,71,0.5)]" />
            </motion.div>
            <motion.h2 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-8xl font-black mt-12 drop-shadow-2xl uppercase tracking-tighter"
            >
              {language === 'en' ? 'Super!' : 'Klasse!'}
            </motion.h2>
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mt-6 flex gap-4"
            >
              {[...Array(5)].map((_, i) => <Star key={i} size={40} className="fill-yellow-300 text-yellow-300" />)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dynamic Scenery Decorations */}
      {currentScenery.decorations.map((dec, i) => {
        const Icon = dec.icon;
        return (
          <motion.div
            key={`${currentScenery.id}-dec-${i}`}
            className={`absolute pointer-events-none opacity-25 ${dec.className}`}
            animate={dec.animation}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          >
            <Icon size={200} />
          </motion.div>
        );
      })}

      {/* UI Overlay */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-50 pointer-events-none">
        <div className="flex flex-col gap-2">
          <motion.div 
            key={score}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-white/95 px-8 py-4 rounded-[2.5rem] shadow-2xl flex items-center gap-4 border-4 border-brand-accent pointer-events-auto"
          >
            <Star className="text-yellow-500 fill-yellow-500" size={44} />
            <span className="text-5xl font-black text-gray-800 tracking-tighter">{score}</span>
          </motion.div>
          
          {/* Progress Bar (Stars) */}
          <div className="flex gap-1 ml-2 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{ 
                  scale: i < progress ? 1 : 0.7,
                  opacity: i < progress ? 1 : 0.3
                }}
                className={`${i < progress ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}
              >
                <Star size={24} fill={i < progress ? "currentColor" : "none"} />
              </motion.div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={nextScenery}
          className="bg-white/95 p-6 rounded-[2.5rem] shadow-2xl text-brand-primary hover:scale-110 active:scale-90 transition-all border-4 border-brand-primary/20 pointer-events-auto self-start"
        >
          <RefreshCw size={44} strokeWidth={4} />
        </button>
      </div>

      {/* Animals Area */}
      <div className="flex-1 relative flex items-center justify-center z-20 overflow-visible mt-12">
        <AnimatePresence mode="wait">
          <motion.div 
            key={`${currentScenery.id}-${positionSeed}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="w-full max-w-7xl flex flex-wrap items-center justify-center px-6 gap-8 md:gap-16 lg:gap-24"
          >
            {currentScenery.animals.map((animal, idx) => (
              <AnimalCard 
                key={`${currentScenery.id}-${animal.id}-${idx}-${positionSeed}`}
                animal={animal} 
                onClick={() => playSound(animal)}
                isClicked={clickedAnimalId === animal.id}
                offset={animalOffsets[idx]}
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
          animate={{ opacity: 0.2, y: 0 }}
          className="text-white text-6xl font-black uppercase tracking-[0.5em]"
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
  offset: { x: number, y: number, duration: number };
  language: Language;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal, onClick, isClicked, offset, language }) => {
  const Icon = animal.icon;

  return (
    <motion.button
      initial={{ x: `${offset.x}%`, y: `${offset.y}%` }}
      animate={{ 
        x: [`${offset.x}%`, `${offset.x + 4}%`, `${offset.x - 4}%`, `${offset.x}%`],
        y: [`${offset.y}%`, `${offset.y + 6}%`, `${offset.y - 6}%`, `${offset.y}%`],
      }}
      transition={{ 
        duration: offset.duration, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`
        relative bg-white rounded-[5rem] p-10 md:p-14
        shadow-[0_50px_100px_rgba(0,0,0,0.15)] 
        flex flex-col items-center justify-between
        w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96
        border-b-[20px] border-gray-200/60
        ${isClicked ? 'ring-[24px] ring-brand-primary/40 !scale-110 !z-50' : 'z-10'}
        transition-all duration-300
      `}
    >
      <div className="flex-1 flex items-center justify-center w-full">
        <motion.div
          key={isClicked ? 'clicked' : 'idle'}
          initial={false}
          animate={isClicked ? {
            rotate: [0, -25, 25, -25, 25, 0],
            scale: [1, 1.25, 1],
          } : {}}
          transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
          className={`${animal.color} flex items-center justify-center`}
        >
          <Icon size="100%" className="w-32 h-32 md:w-48 md:h-48 lg:w-60 lg:h-60" strokeWidth={2.2} />
        </motion.div>
      </div>
      
      <AnimatePresence>
        {isClicked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 0 }}
            animate={{ opacity: 1, scale: 2, y: -180 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute text-7xl font-black text-brand-primary drop-shadow-[0_15px_40px_rgba(0,0,0,0.3)] z-50 pointer-events-none whitespace-nowrap"
          >
            {animal.soundEmojis[language]}
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`mt-2 md:mt-4 text-xl md:text-3xl font-black tracking-tight transition-colors duration-300 ${isClicked ? 'text-brand-primary' : 'text-gray-300'}`}>
        {animal.names[language]}
      </div>
    </motion.button>
  );
};

export default App;
