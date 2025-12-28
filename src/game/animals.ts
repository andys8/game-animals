import { 
  Cat, Dog, Bird, Rabbit, 
  Squirrel, Fish, Turtle, 
  Bug, Sun, Cloud, 
  Trees as Tree, Flower, Waves,
  Shell, Snail, Leaf,
  Rat as Mouse,
  Worm
} from 'lucide-react';
import { Cow, Sheep, Elephant, Lion, Duck } from '../assets/AnimalIcons';

export type Language = 'en' | 'de';

export interface Animal {
  id: string;
  names: Record<Language, string>;
  icon: any;
  color: string;
  soundEmojis: Record<Language, string>;
  soundFile?: string;
}

export interface Decoration {
  icon: any;
  className: string;
  animation: any;
}

export interface Scenery {
  id: string;
  names: Record<Language, string>;
  background: string;
  animals: Animal[];
  decorations: Decoration[];
}

export const ANIMALS: Record<string, Animal> = {
  cat: {
    id: 'cat',
    names: { en: 'Cat', de: 'Katze' },
    icon: Cat,
    color: 'text-orange-500',
    soundEmojis: { en: 'Meow!', de: 'Miau!' },
    soundFile: 'cat.mp3'
  },
  dog: {
    id: 'dog',
    names: { en: 'Dog', de: 'Hund' },
    icon: Dog,
    color: 'text-amber-700',
    soundEmojis: { en: 'Woof!', de: 'Wau!' },
    soundFile: 'dog.mp3'
  },
  bird: {
    id: 'bird',
    names: { en: 'Bird', de: 'Vogel' },
    icon: Bird,
    color: 'text-blue-400',
    soundEmojis: { en: 'Tweet!', de: 'Piep!' },
    soundFile: 'bird.mp3'
  },
  rabbit: {
    id: 'rabbit',
    names: { en: 'Rabbit', de: 'Hase' },
    icon: Rabbit,
    color: 'text-rose-300',
    soundEmojis: { en: 'Hop!', de: 'Hüpf!' },
    soundFile: 'rabbit.mp3'
  },
  fish: {
    id: 'fish',
    names: { en: 'Fish', de: 'Fisch' },
    icon: Fish,
    color: 'text-cyan-400',
    soundEmojis: { en: 'Blub!', de: 'Blub!' }
  },
  turtle: {
    id: 'turtle',
    names: { en: 'Turtle', de: 'Schildkröte' },
    icon: Turtle,
    color: 'text-emerald-600',
    soundEmojis: { en: 'Slow...', de: 'Langsam...' }
  },
  bug: {
    id: 'bug',
    names: { en: 'Bug', de: 'Käfer' },
    icon: Bug,
    color: 'text-red-500',
    soundEmojis: { en: 'Buzz!', de: 'Summ!' },
    soundFile: 'cricket.mp3'
  },
  squirrel: {
    id: 'squirrel',
    names: { en: 'Squirrel', de: 'Eichhörnchen' },
    icon: Squirrel,
    color: 'text-orange-800',
    soundEmojis: { en: 'Chirp!', de: 'Fiep!' }
  },
  snail: {
    id: 'snail',
    names: { en: 'Snail', de: 'Schnecke' },
    icon: Snail,
    color: 'text-lime-500',
    soundEmojis: { en: 'Slide...', de: 'Schleich...' }
  },
  mouse: {
    id: 'mouse',
    names: { en: 'Mouse', de: 'Maus' },
    icon: Mouse,
    color: 'text-gray-400',
    soundEmojis: { en: 'Squeak!', de: 'Piep!' },
    soundFile: 'mouse.mp3'
  },
  worm: {
    id: 'worm',
    names: { en: 'Worm', de: 'Wurm' },
    icon: Worm,
    color: 'text-rose-400',
    soundEmojis: { en: 'Wiggle!', de: 'Wackel!' }
  },
  cow: {
    id: 'cow',
    names: { en: 'Cow', de: 'Kuh' },
    icon: Cow,
    color: 'text-slate-800',
    soundEmojis: { en: 'Moo!', de: 'Muh!' },
    soundFile: 'cow.mp3'
  },
  elephant: {
    id: 'elephant',
    names: { en: 'Elephant', de: 'Elefant' },
    icon: Elephant,
    color: 'text-slate-500',
    soundEmojis: { en: 'Toot!', de: 'Töröö!' },
    soundFile: 'elephant.mp3'
  },
  lion: {
    id: 'lion',
    names: { en: 'Lion', de: 'Löwe' },
    icon: Lion,
    color: 'text-orange-600',
    soundEmojis: { en: 'Roar!', de: 'Roooar!' },
    soundFile: 'lion.mp3'
  },
  sheep: {
    id: 'sheep',
    names: { en: 'Sheep', de: 'Schaf' },
    icon: Sheep,
    color: 'text-slate-400',
    soundEmojis: { en: 'Baa!', de: 'Mäh!' },
    soundFile: 'sheep.mp3'
  },
  duck: {
    id: 'duck',
    names: { en: 'Duck', de: 'Ente' },
    icon: Duck,
    color: 'text-yellow-500',
    soundEmojis: { en: 'Quack!', de: 'Quak!' },
    soundFile: 'duck.mp3'
  }
};

export const SCENERIES: Scenery[] = [
  {
    id: 'garden',
    names: { en: 'Garden', de: 'Garten' },
    background: 'bg-linear-to-b from-green-300 via-emerald-200 to-yellow-100',
    animals: [ANIMALS.cat, ANIMALS.dog, ANIMALS.ladybug],
    decorations: [
      { icon: Sun, className: 'top-10 right-10 text-yellow-400/60', animation: { rotate: 360 } },
      { icon: Flower, className: 'bottom-10 left-10 text-pink-400/40', animation: { scale: [1, 1.2, 1] } },
      { icon: Flower, className: 'bottom-10 right-10 text-purple-400/40', animation: { scale: [1, 1.3, 1] } }
    ]
  },
  {
    id: 'pond',
    names: { en: 'Pond', de: 'Teich' },
    background: 'bg-linear-to-b from-blue-400 via-cyan-200 to-indigo-100',
    animals: [ANIMALS.fish, ANIMALS.turtle, ANIMALS.duck],
    decorations: [
      { icon: Waves, className: 'bottom-0 w-full text-white/40 h-16', animation: { x: [-10, 10, -10] } },
      { icon: Cloud, className: 'top-10 left-10 text-white/80', animation: { x: [0, 50, 0] } },
      { icon: Shell, className: 'bottom-10 right-10 text-orange-200/60', animation: { rotate: [0, 15, 0] } }
    ]
  },
  {
    id: 'forest',
    names: { en: 'Forest', de: 'Wald' },
    background: 'bg-linear-to-b from-emerald-500 via-green-200 to-orange-50',
    animals: [ANIMALS.rabbit, ANIMALS.squirrel, ANIMALS.bird],
    decorations: [
      { icon: Tree, className: 'bottom-0 left-0 text-emerald-900/20 size-40', animation: { skewX: [-2, 2, -2] } },
      { icon: Tree, className: 'bottom-0 right-0 text-green-900/20 size-48', animation: { skewX: [2, -2, 2] } },
      { icon: Leaf, className: 'top-10 right-10 text-green-400/30', animation: { y: [0, 20, 0], rotate: 360 } }
    ]
  },
  {
    id: 'farm',
    names: { en: 'Farm', de: 'Bauernhof' },
    background: 'bg-linear-to-b from-amber-200 via-yellow-100 to-orange-50',
    animals: [ANIMALS.cow, ANIMALS.sheep, ANIMALS.pig],
    decorations: [
      { icon: Sun, className: 'top-5 left-5 text-orange-400/40 size-32', animation: { scale: [1, 1.1, 1] } },
      { icon: Tree, className: 'bottom-0 right-5 text-yellow-900/20 size-48', animation: { skewY: [0, 2, 0] } },
      { icon: Cloud, className: 'top-20 right-10 text-white/50', animation: { x: [0, -30, 0] } }
    ]
  },
  {
    id: 'safari',
    names: { en: 'Safari', de: 'Safari' },
    background: 'bg-linear-to-br from-orange-400 to-red-500',
    animals: [ANIMALS.elephant, ANIMALS.lion, ANIMALS.bird],
    decorations: [
      { icon: Sun, className: 'top-10 left-10 text-white/20 size-48', animation: { scale: [1, 1.2, 1] } },
      { icon: Tree, className: 'bottom-0 left-0 text-orange-900/30 size-64', animation: { rotate: [-1, 1, -1] } },
      { icon: Cloud, className: 'top-32 right-10 text-white/30', animation: { x: [0, -40, 0] } }
    ]
  }
];
