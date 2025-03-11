'use client';
import { useForm, SubmitHandler } from 'react-hook-form';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

type SearchFormValues = {
  query: string;
};

/**
 * @param onSearch requête pour la recherche.
 * @returns Barre de recherche.
 */
export default function SearchBar({ onSearch }: SearchBarProps) {
  const { register, handleSubmit, reset } = useForm<SearchFormValues>();

  const onSubmit: SubmitHandler<SearchFormValues> = (
    data: SearchFormValues
  ) => {
    onSearch(data.query);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Rechercher un film..."
        {...register('query', { required: true })}
        className="border p-2 rounded"
      />
      <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">
        Rechercher
      </button>
    </form>
  );
}
