'use client';
import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import { Movie } from './interfaces/movie.interface';
import MovieList from './components/MovieList';

/**
 * @returns Accueil avec la liste des films et barre de recherche.
 */
export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  // useEffect permet de se connecter à un système externe.
  useEffect(() => {
    // Récupérer la liste des films de l'api.
    fetch('/api/movies')
      .then((res) => res.json())
      .then((movies: Movie[]) => {
        setMovies(movies);
        setFilteredMovies(movies);
      });
  }, []);

  const handleSearch = (query: string) => {
    let filtered = movies.filter((movie) =>
      movie.title.toLocaleLowerCase().includes(query.toLowerCase())
    );
    if (query === '') filtered = movies; // Pas de query => tous les films.
    setFilteredMovies(filtered);
  };

  return (
    <>
      <h1>My Movie App</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={filteredMovies} />
    </>
  );
}
