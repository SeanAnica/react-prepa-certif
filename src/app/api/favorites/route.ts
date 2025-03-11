export async function addFavorite(movieId: string): Promise<void> {
  // Simule l'appel réseau
  await new Promise((resolve) => setTimeout(resolve, 300));

  const storedFavorites = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  ) as string[];

  if (!storedFavorites.includes(movieId)) {
    storedFavorites.push(movieId);
    localStorage.setItem('favorites', JSON.stringify(storedFavorites));
  }
}

export async function removeFavorite(movieId: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const storedFavorites = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  ) as string[];

  const updatedFavorites = storedFavorites.filter((id) => id !== movieId);
  localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
}

export function isFavorite(movieId: string): boolean {
  const storedFavorites = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  ) as string[];
  return storedFavorites.includes(movieId);
}

export async function getFavoritesIds(): Promise<string[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const storedFavorites = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  ) as string[];

  return storedFavorites;
}
