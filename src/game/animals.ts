import { 
  Cat, Dog, Bird, Rabbit, 
  Squirrel, Fish, Turtle, 
  Bug, Sun, Cloud, 
  Trees as Tree, Flower, Waves,
  Shell
} from 'lucide-react';

export interface Animal {
  id: string;
  name: string;
  icon: any;
  color: string;
  soundEmoji: string;
  speechName: string;
}

export interface Decoration {
  icon: any;
  className: string;
  animation: any;
}

export interface Scenery {
  id: string;
  name: string;
  background: string;
  animals: Animal[];
  decorations: Decoration[];
}

export const ANIMALS: Record<string, Animal> = {
  cat: {
    id: 'cat',
    name: 'Cat',
    icon: Cat,
    color: 'text-orange-500',
    soundEmoji: 'Meow!',
    speechName: 'Cat'
  },
  dog: {
    id: 'dog',
    name: 'Dog',
    icon: Dog,
    color: 'text-orange-900',
    soundEmoji: 'Woof!',
    speechName: 'Dog'
  },
  bird: {
    id: 'bird',
    name: 'Bird',
    icon: Bird,
    color: 'text-blue-400',
    soundEmoji: 'Tweet!',
    speechName: 'Bird'
  },
  rabbit: {
    id: 'rabbit',
    name: 'Rabbit',
    icon: Rabbit,
    color: 'text-gray-400',
    soundEmoji: 'Hop!',
    speechName: 'Rabbit'
  },
  fish: {
    id: 'fish',
    name: 'Fish',
    icon: Fish,
    color: 'text-orange-400',
    soundEmoji: 'Blub!',
    speechName: 'Fish'
  },
  turtle: {
    id: 'turtle',
    name: 'Turtle',
    icon: Turtle,
    color: 'text-green-600',
    soundEmoji: 'Slow...',
    speechName: 'Turtle'
  },
  ladybug: {
    id: 'ladybug',
    name: 'Ladybug',
    icon: Bug,
    color: 'text-red-500',
    soundEmoji: 'Buzz!',
    speechName: 'Ladybug'
  },
  squirrel: {
    id: 'squirrel',
    name: 'Squirrel',
    icon: Squirrel,
    color: 'text-orange-700',
    soundEmoji: 'Chirp!',
    speechName: 'Squirrel'
  }
};

export const SCENERIES: Scenery[] = [
  {
    id: 'garden',
    name: 'Garden',
    background: 'bg-green-50',
    animals: [ANIMALS.cat, ANIMALS.dog, ANIMALS.ladybug],
    decorations: [
      { icon: Sun, className: 'top-10 right-10 text-yellow-400', animation: { rotate: 360 } },
      { icon: Flower, className: 'bottom-10 left-20 text-pink-400', animation: { scale: [1, 1.1, 1] } },
      { icon: Flower, className: 'bottom-20 right-40 text-purple-400', animation: { scale: [1, 1.2, 1] } }
    ]
  },
  {
    id: 'pond',
    name: 'Pond',
    background: 'bg-blue-50',
    animals: [ANIMALS.fish, ANIMALS.turtle, ANIMALS.bird],
    decorations: [
      { icon: Waves, className: 'bottom-0 w-full text-blue-200 h-20', animation: { x: [-10, 10, -10] } },
      { icon: Cloud, className: 'top-20 left-20 text-gray-200', animation: { x: [0, 50, 0] } },
      { icon: Shell, className: 'bottom-10 right-20 text-orange-200', animation: { rotate: [0, 10, 0] } }
    ]
  },
  {
    id: 'forest',
    name: 'Forest',
    background: 'bg-emerald-50',
    animals: [ANIMALS.rabbit, ANIMALS.squirrel, ANIMALS.bird],
    decorations: [
      { icon: Tree, className: 'bottom-0 left-10 text-emerald-700 size-32', animation: { skewX: [-2, 2, -2] } },
      { icon: Tree, className: 'bottom-0 right-10 text-emerald-800 size-40', animation: { skewX: [2, -2, 2] } },
      { icon: Cloud, className: 'top-10 left-40 text-white', animation: { x: [0, -30, 0] } }
    ]
  }
];
