import { 
  Cat, Dog, Bird, Rabbit, 
  Squirrel, Fish, Turtle, 
  Bug, Sun, Cloud, 
  Trees as Tree, Flower, Waves,
  Shell, Snail, Leaf,
  Rat as Mouse,
  Worm,
  Rainbow
} from 'lucide-react';
import { Frog, Bee, Bear, Fox, Owl } from '../assets/AnimalIcons';

export type Language = 'en' | 'de';

export interface Animal {
  id: string;
  names: Record<Language, string>;
  icon: any;
  color: string;
  soundEmojis: Record<Language, string>;
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
    soundEmojis: { en: 'Meow!', de: 'Miau!' }
  },
  dog: {
    id: 'dog',
    names: { en: 'Dog', de: 'Hund' },
    icon: Dog,
    color: 'text-amber-700',
    soundEmojis: { en: 'Woof!', de: 'Wau!' }
  },
  bird: {
    id: 'bird',
    names: { en: 'Bird', de: 'Vogel' },
    icon: Bird,
    color: 'text-blue-400',
    soundEmojis: { en: 'Tweet!', de: 'Piep!' }
  },
  rabbit: {
    id: 'rabbit',
    names: { en: 'Rabbit', de: 'Hase' },
    icon: Rabbit,
    color: 'text-rose-300',
    soundEmojis: { en: 'Hop!', de: 'Hüpf!' }
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
  frog: {
    id: 'frog',
    names: { en: 'Frog', de: 'Frosch' },
    icon: Frog,
    color: 'text-green-500',
    soundEmojis: { en: 'Ribbit!', de: 'Quaak!' }
  },
  bee: {
    id: 'bee',
    names: { en: 'Bee', de: 'Biene' },
    icon: Bee,
    color: 'text-yellow-500',
    soundEmojis: { en: 'Bzzz!', de: 'Summ!' }
  },
  bear: {
    id: 'bear',
    names: { en: 'Bear', de: 'Bär' },
    icon: Bear,
    color: 'text-amber-900',
    soundEmojis: { en: 'Grrr!', de: 'Brumm!' }
  },
  fox: {
    id: 'fox',
    names: { en: 'Fox', de: 'Fuchs' },
    icon: Fox,
    color: 'text-orange-600',
    soundEmojis: { en: 'Yap!', de: 'Kläff!' }
  },
  owl: {
    id: 'owl',
    names: { en: 'Owl', de: 'Eule' },
    icon: Owl,
    color: 'text-indigo-400',
    soundEmojis: { en: 'Hoot!', de: 'Huhu!' }
  },
  ladybug: {
    id: 'ladybug',
    names: { en: 'Ladybug', de: 'Marienkäfer' },
    icon: Bug,
    color: 'text-red-500',
    soundEmojis: { en: 'Buzz!', de: 'Summ!' }
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
    soundEmojis: { en: 'Squeak!', de: 'Piep!' }
  },
  worm: {
    id: 'worm',
    names: { en: 'Worm', de: 'Wurm' },
    icon: Worm,
    color: 'text-rose-400',
    soundEmojis: { en: 'Wiggle!', de: 'Wackel!' }
  }
};

export const SCENERIES: Scenery[] = [
  {
    id: 'garden',
    names: { en: 'Garden', de: 'Garten' },
    background: 'bg-linear-to-b from-green-300 via-emerald-200 to-yellow-100',
    animals: [ANIMALS.cat, ANIMALS.dog, ANIMALS.bee],
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
    animals: [ANIMALS.fish, ANIMALS.turtle, ANIMALS.frog],
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
    animals: [ANIMALS.bear, ANIMALS.fox, ANIMALS.owl],
    decorations: [
      { icon: Tree, className: 'bottom-0 left-0 text-emerald-900/20 size-40', animation: { skewX: [-2, 2, -2] } },
      { icon: Tree, className: 'bottom-0 right-0 text-green-900/20 size-48', animation: { skewX: [2, -2, 2] } },
      { icon: Leaf, className: 'top-10 right-10 text-green-400/30', animation: { y: [0, 20, 0], rotate: 360 } }
    ]
  },
  {
    id: 'meadow',
    names: { en: 'Meadow', de: 'Wiese' },
    background: 'bg-linear-to-b from-yellow-300 via-green-200 to-emerald-100',
    animals: [ANIMALS.rabbit, ANIMALS.squirrel, ANIMALS.bird],
    decorations: [
      { icon: Rainbow, className: 'top-10 left-1/4 text-white/20 size-64', animation: { opacity: [0.2, 0.5, 0.2] } },
      { icon: Flower, className: 'bottom-10 left-10 text-red-400/30 size-24', animation: { scale: [1, 1.2, 1] } },
      { icon: Leaf, className: 'top-20 right-10 text-green-500/20', animation: { rotate: 45 } }
    ]
  },
  {
    id: 'park',
    names: { en: 'Park', de: 'Park' },
    background: 'bg-linear-to-b from-blue-200 via-emerald-100 to-white',
    animals: [ANIMALS.mouse, ANIMALS.worm, ANIMALS.snail],
    decorations: [
      { icon: Cloud, className: 'top-10 right-10 text-blue-400/20 size-32', animation: { x: [0, -40, 0] } },
      { icon: Tree, className: 'bottom-0 left-5 text-green-800/10 size-48', animation: { skewX: [1, -1, 1] } },
      { icon: Flower, className: 'bottom-5 right-1/4 text-yellow-400/30', animation: { scale: 1.1 } }
    ]
  }
];
