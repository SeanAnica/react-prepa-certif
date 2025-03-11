'use client';

import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  addFavorite,
  isFavorite,
  removeFavorite,
} from '../api/favorites/route';

type FavoriteButtonProps = {
  movieId: string;
};

type FavoriteFormValues = {
  isFavorite: boolean;
};

/**
 * @param movieId id du film à mettre ou retirer des favoris
 * @returns le bouton pour ajouter ou retirer des favoris.
 */
export default function FavoriteButton({ movieId }: FavoriteButtonProps) {
  const { watch, setValue, handleSubmit } = useForm<FavoriteFormValues>({
    defaultValues: { isFavorite: false },
  });

  useEffect(() => {
    // On récupère la valeur existante dans le local storage si elle existe.
    setValue('isFavorite', isFavorite(movieId));
  }, [movieId, setValue]);

  const onSubmit: SubmitHandler<FavoriteFormValues> = async (
    data: FavoriteFormValues
  ) => {
    if (data.isFavorite) {
      await addFavorite(movieId);
    } else {
      await removeFavorite(movieId);
    }
  };

  const watchedFavorite = watch('isFavorite');

  const toggleFavorite = () => {
    setValue('isFavorite', !watchedFavorite);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <button
        type="submit"
        onClick={toggleFavorite}
        className={`px-1.5 py-1 rounded-full transition cursor-pointer ${
          watchedFavorite
            ? 'bg-red-500 text-white'
            : 'bg-gray-200 text-gray-800'
        }`}
      >
        {watchedFavorite ? '❤️' : '🤍'}
      </button>
    </form>
  );
}
