import { 
  Cat, Dog, Bird, Rabbit, 
  Squirrel, Fish, Turtle, 
  Bug
} from 'lucide-react';

export interface Animal {
  id: string;
  name: string;
  icon: any;
  color: string;
  soundEmoji: string;
  speechName: string;
}

export interface Scenery {
  id: string;
  name: string;
  background: string;
  animals: Animal[];
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
    color: 'text-orange-800',
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
    animals: [ANIMALS.cat, ANIMALS.dog, ANIMALS.bird, ANIMALS.ladybug]
  },
  {
    id: 'pond',
    name: 'Pond',
    background: 'bg-blue-50',
    animals: [ANIMALS.fish, ANIMALS.turtle, ANIMALS.bird]
  },
  {
    id: 'forest',
    name: 'Forest',
    background: 'bg-emerald-50',
    animals: [ANIMALS.rabbit, ANIMALS.squirrel, ANIMALS.bird, ANIMALS.cat]
  }
];
