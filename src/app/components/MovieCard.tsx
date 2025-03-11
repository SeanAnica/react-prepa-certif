'use client';
import Image from 'next/image';
import { Movie } from '../interfaces/movie.interface';
import Link from 'next/link';
import FavoriteButton from './FavoriteButton';

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
      <Image
        className="mx-auto"
        src="/file.svg"
        width={80}
        height={80}
        alt="Affiche du film"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <Link href={`/movies/${movie.id}`} className="hover:text-blue-600">
            {movie.title}
          </Link>
        </div>
        <p className="text-gray-700 text-base">{movie.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <FavoriteButton movieId={movie.id} />
      </div>
    </div>
  );
}
