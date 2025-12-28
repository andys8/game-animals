import { 
  Cat, Dog, Bird, Rabbit, 
  Squirrel, Fish, Turtle, 
  Bug, Sun, Cloud, 
  Trees as Tree, Flower, Waves,
  Shell, Snail, Leaf
} from 'lucide-react';

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
    color: 'text-orange-900',
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
    color: 'text-pink-300',
    soundEmojis: { en: 'Hop!', de: 'Hüpf!' }
  },
  fish: {
    id: 'fish',
    names: { en: 'Fish', de: 'Fisch' },
    icon: Fish,
    color: 'text-cyan-500',
    soundEmojis: { en: 'Blub!', de: 'Blub!' }
  },
  turtle: {
    id: 'turtle',
    names: { en: 'Turtle', de: 'Schildkröte' },
    icon: Turtle,
    color: 'text-green-600',
    soundEmojis: { en: 'Slow...', de: 'Langsam...' }
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
    color: 'text-orange-700',
    soundEmojis: { en: 'Chirp!', de: 'Fiep!' }
  },
  snail: {
    id: 'snail',
    names: { en: 'Snail', de: 'Schnecke' },
    icon: Snail,
    color: 'text-emerald-400',
    soundEmojis: { en: 'Slide...', de: 'Schleich...' }
  }
};

export const SCENERIES: Scenery[] = [
  {
    id: 'garden',
    names: { en: 'Garden', de: 'Garten' },
    background: 'bg-linear-to-b from-green-300 to-emerald-500',
    animals: [ANIMALS.cat, ANIMALS.dog, ANIMALS.ladybug, ANIMALS.snail],
    decorations: [
      { icon: Sun, className: 'top-10 right-10 text-yellow-200', animation: { rotate: 360 } },
      { icon: Flower, className: 'bottom-10 left-20 text-pink-200', animation: { scale: [1, 1.2, 1] } },
      { icon: Flower, className: 'bottom-20 right-40 text-purple-200', animation: { scale: [1, 1.3, 1] } }
    ]
  },
  {
    id: 'pond',
    names: { en: 'Pond', de: 'Teich' },
    background: 'bg-linear-to-b from-blue-300 to-cyan-500',
    animals: [ANIMALS.fish, ANIMALS.turtle, ANIMALS.bird],
    decorations: [
      { icon: Waves, className: 'bottom-0 w-full text-white/30 h-24', animation: { x: [-20, 20, -20] } },
      { icon: Cloud, className: 'top-20 left-20 text-white/60', animation: { x: [0, 100, 0] } },
      { icon: Shell, className: 'bottom-10 right-20 text-orange-100', animation: { rotate: [0, 15, 0] } }
    ]
  },
  {
    id: 'forest',
    names: { en: 'Forest', de: 'Wald' },
    background: 'bg-linear-to-b from-emerald-400 to-green-700',
    animals: [ANIMALS.rabbit, ANIMALS.squirrel, ANIMALS.bird, ANIMALS.snail],
    decorations: [
      { icon: Tree, className: 'bottom-0 left-5 text-emerald-900/40 size-48', animation: { skewX: [-3, 3, -3] } },
      { icon: Tree, className: 'bottom-0 right-5 text-green-900/40 size-64', animation: { skewX: [3, -3, 3] } },
      { icon: Leaf, className: 'top-10 left-1/2 text-green-200/50', animation: { y: [0, 20, 0], rotate: 360 } }
    ]
  }
];