'use client';
import Image from 'next/image';
import { Movie } from '../interfaces/movie.interface';
import Link from 'next/link';

export type MovieCardProps = {
  movie: Movie;
};

/**
 * @param movie film à détailler dans la card.
 * @returns card illustrant un film
 */
export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image src="/file.svg" width={100} height={100} alt="Affiche du film" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <Link href={`/movies/${movie.id}`} className="hover:text-blue-600">
            {movie.title}
          </Link>
        </div>
        <p className="text-gray-700 text-base">{movie.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          emplacement du bouton des favoris
        </span>
      </div>
    </div>
  );
}
