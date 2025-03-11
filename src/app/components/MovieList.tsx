'use client';

import { Movie } from '../interfaces/movie.interface';
import MovieCard from './MovieCard';

export type MovieListProps = {
  movies: Movie[];
};

/**
 * @param movies liste des films à afficher
 * @returns liste des cards représentant les films.
 */
export default function MovieList({ movies }: MovieListProps) {
  const movieListItems = movies.map((movie) => (
    <MovieCard key={movie.id} movie={movie} />
  ));

  return <div>{movieListItems}</div>;
}
