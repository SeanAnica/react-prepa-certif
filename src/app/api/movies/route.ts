import { NextResponse } from 'next/server';

export type Movie = {
  id: string;
  title: string;
  description: string;
};

const movies: Movie[] = [
  {
    id: '1',
    title: 'Le Seigneur des Anneaux',
    description: 'Une aventure épique dans un monde fantastique.',
  },
  {
    id: '2',
    title: 'Interstellar',
    description: 'Exploration spatiale au-delà des limites humaines.',
  },
  {
    id: '3',
    title: 'Inception',
    description: 'Un voyage complexe dans le monde des rêves.',
  },
];

/**
 *
 * @returns Un mock d'une liste de films.
 */
export function GET() {
  return NextResponse.json(movies);
}
